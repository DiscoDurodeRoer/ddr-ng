import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  input,
  output,
  contentChild,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  Signal,
  effect,
  computed,
  linkedSignal
} from '@angular/core';
import { DdrTableCol } from './bean/ddr-table-col';
import { DdrTableItem } from './bean/ddr-table-item';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgTemplateOutlet } from '@angular/common';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrAction, DdrSelectItem } from 'ddr-ng/models';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';

@Component({
  selector: 'ddr-table',
  templateUrl: './ddr-table.component.html',
  styleUrl: './ddr-table.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgxPaginationModule,
    DdrDropdownComponent,
    DdrCheckboxBinaryComponent,
    DdrButtonSplitComponent,
    DdrTranslatePipe,
    DdrTooltipDirective,
    DdrNestedPropertyPipe,
    NgTemplateOutlet
  ]
})
export class DdrTableComponent<T extends { [key: string]: any }> implements OnInit, OnChanges {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly cols: InputSignal<DdrTableCol[]> = input.required<DdrTableCol[]>();
  readonly items: InputSignal<DdrTableItem<T>[]> = input<DdrTableItem<T>[]>([]);
  readonly showPagination: InputSignal<boolean> = input<boolean>(true);
  readonly startPageZero: InputSignal<boolean> = input<boolean>(false);
  readonly page: InputSignal<number> = input<number>(1);
  readonly showTotal: InputSignal<boolean> = input<boolean>(true);
  readonly allowChangeRows: InputSignal<boolean> = input<boolean>(true);
  readonly multiple: InputSignal<boolean> = input<boolean>(false);
  readonly showActions: InputSignal<boolean> = input<boolean>(false);
  readonly canSelectItems: InputSignal<boolean> = input<boolean>(true);
  readonly canSort: InputSignal<boolean> = input<boolean>(false);
  readonly showBorder: InputSignal<boolean> = input<boolean>(true);
  readonly showFooter: InputSignal<boolean> = input<boolean>(true);
  readonly optionsRowsPagination: InputSignal<number[]> = input<number[]>([]);
  readonly totalItems: InputSignal<number> = input<number>(0);

  // Translations
  readonly labelNoResults: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelRegisters: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelRegister: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelToPagination: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelOfPagination: InputSignal<string | undefined> = input<string | undefined>();

  readonly selectItem: OutputEmitterRef<DdrTableItem<T>> = output<DdrTableItem<T>>();
  readonly selectMultipleItem: OutputEmitterRef<T[]> = output<T[]>();
  readonly selectAction: OutputEmitterRef<DdrAction<T>> = output<DdrAction<T>>();
  readonly changePage: OutputEmitterRef<number> = output<number>();;
  readonly changeRow: OutputEmitterRef<number> = output<number>();
  readonly sort: OutputEmitterRef<DdrTableCol> = output<DdrTableCol>();

  public optionsRows: WritableSignal<DdrSelectItem<number>[]> = signal<DdrSelectItem<number>[]>([]);
  public rows: WritableSignal<number> = signal<number>(10)

  public optionsCheck: WritableSignal<DdrSelectItem<T>[]> = signal<DdrSelectItem<T>[]>([]);
  public checkAll: WritableSignal<boolean> = signal<boolean>(false);

  private static nextId = 1;
  public id: string = ++DdrTableComponent.nextId + '';
  public colspan: WritableSignal<number> = signal<number>(1);
  public widthCells?: WritableSignal<number | undefined> = signal<number | undefined>(undefined);
  public totalItemsTable: Signal<number> = computed(() => !this.totalItems() ? this.items().length : 0)
  public pageTable: WritableSignal<number> = linkedSignal(() => this.page())

  readonly templateCell: Signal<TemplateRef<any> | undefined> = contentChild<TemplateRef<any>>('templateCell');


  ngOnInit() {

    const optionsRowsPagination = this.optionsRowsPagination();
    if (optionsRowsPagination && optionsRowsPagination.length > 0) {
      for (const row of optionsRowsPagination) {
        this.optionsRows.update((value: DdrSelectItem<number>[]) => [...value, {
          label: row.toString(),
          value: row
        }])
      }
      this.rows.set(this.optionsRows()[0].value);
    } else {
      this.optionsRows.set([
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
      ]);
      this.rows.set(10);
    }

    if (!this.showPagination()) {
      this.rows.set(Number.MAX_VALUE);
    }

    if (this.multiple() && this.items().length > 0) {
      this.initItemsSelected()
    }

    // if (!this.totalItems()) {
    //   this.totalItems = this.items().length;
    // }

    this.calculateCols();
    this.resetSort();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['multiple']) {
        this.initItemsSelected()
      }
      if (changes['page'] && this.startPageZero()) {
        this.pageTable.update((value: number) => value + 1);
      }
      if (changes['items'] || changes['multiple'] || changes['showActions']) {
        this.calculateCols();
        // if (changes['items']) {
        //   this.totalItems = this.items().length;
        // }
      }
      // if (changes['totalItems']) {
      //   if (this.totalItems() <= this.rows()) {
      //     this.page = 1;
      //   }
      // }
      if (changes['canSort']) {
        this.resetSort();
      }
    }
  }

  onSelectItem($event: MouseEvent, item: DdrTableItem<T>) {
    const target = $event?.target as HTMLElement;
    if (this.canSelectItems() && target && !target.closest('ddr-button-split')) {
      this.selectItem.emit(item);
    }
  }

  changeRows(event: DdrSelectItem<number>) {
    this.rows.set(event.value);
    this.changeRow.emit(this.rows());
  }

  selectAll() {
    if (this.checkAll()) {
      this.items().forEach((option) => option.selected = true);
      const itemsReturn: T[] = this.items().map((it) => it.item);
      this.selectMultipleItem.emit(itemsReturn);
    } else {
      this.items().forEach((option) => option.selected = false);
      this.selectMultipleItem.emit([]);
    }
  }

  sendMultipleItems() {
    const valuesSelected: T[] = this.items().filter(it => it.selected).map(it => it.item);
    this.checkAll.set(this.items().every(op => op.selected));
    this.selectMultipleItem.emit(valuesSelected);
  }

  onSelectAction($event: DdrAction<T>, element: T, index: number) {
    $event.item = element;
    $event.index = index;
    this.selectAction.emit($event);
  }

  onPageChange(page: number) {
    this.pageTable.set(page);
    if (this.startPageZero()) {
      this.changePage.emit(this.page() - 1);
    } else {
      this.changePage.emit(this.page());
    }
  }

  resetSort() {
    for (const col of this.cols()) {
      if (!col.modeSort) {
        col.modeSort = this.constants.MODE_SORT.NO_SORT;
      }
    }
  }

  onSort(col: DdrTableCol) {
    this.resetSort();

    switch (col.modeSort) {
      case this.constants.MODE_SORT.NO_SORT:
        col.modeSort = this.constants.MODE_SORT.ASCENDING
        break;
      case this.constants.MODE_SORT.ASCENDING:
        col.modeSort = this.constants.MODE_SORT.DESCENDING
        break;
      case this.constants.MODE_SORT.DESCENDING:
        col.modeSort = this.constants.MODE_SORT.NO_SORT
        break;
    }

    this.sort.emit(col);
  }

  calculateCols() {
    this.colspan.set(this.cols().length);
    let maxWidth = 80;

    if (this.multiple()) {
      this.colspan.update((value: number) => value + 1);
      maxWidth += 10;
    }

    if (this.showActions() && this.items().length > 0) {
      this.colspan.update((value: number) => value + 1);
      maxWidth += 10;
    }

    this.widthCells?.set(maxWidth / this.cols().length);
  }

  private initItemsSelected() {
    this.items().forEach((it) => {
      if (!it.selected) {
        it.selected = false;
      }
    });
    this.checkAll.set(this.items().length > 0 && this.items().every(op => op.selected));
  }

}
