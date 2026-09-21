import {
  Component,
  inject,
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
import { NgTemplateOutlet } from '@angular/common';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrAction, DdrSelectItem } from 'ddr-ng/models';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';
import { DdrPaginatorComponent, DdrPaginatorPipe } from 'ddr-ng/paginator';

@Component({
  selector: 'ddr-table',
  templateUrl: './ddr-table.component.html',
  styleUrl: './ddr-table.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrCheckboxBinaryComponent,
    DdrButtonSplitComponent,
    DdrTranslatePipe,
    DdrTooltipDirective,
    DdrNestedPropertyPipe,
    NgTemplateOutlet,
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class DdrTableComponent<T extends { [key: string]: any }> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly cols: InputSignal<DdrTableCol[]> = input.required<DdrTableCol[]>();
  readonly items: InputSignal<DdrTableItem<T>[]> = input<DdrTableItem<T>[]>([]);
  readonly showPagination: InputSignal<boolean> = input<boolean>(true);
  readonly startPageZero: InputSignal<boolean> = input<boolean>(false);
  readonly page: InputSignal<number> = input<number>(1);
  readonly showSummary: InputSignal<boolean> = input<boolean>(true);
  readonly allowChangePageSize: InputSignal<boolean> = input<boolean>(true);
  readonly multiple: InputSignal<boolean> = input<boolean>(false);
  readonly showActions: InputSignal<boolean> = input<boolean>(false);
  readonly canSelectItems: InputSignal<boolean> = input<boolean>(true);
  readonly allowSort: InputSignal<boolean> = input<boolean>(false);
  readonly multipleSort: InputSignal<boolean> = input<boolean>(false);
  readonly showBorder: InputSignal<boolean> = input<boolean>(true);
  readonly showFooter: InputSignal<boolean> = input<boolean>(true);
  readonly optionsPageSizePagination: InputSignal<number[]> = input<number[]>([10, 25, 50]);
  readonly totalItems: InputSignal<number> = input<number>(0);
  readonly pageSize: InputSignal<number> = input<number>(this.optionsPageSizePagination()[0] || Number.MAX_VALUE);

  // Translations
  readonly labelNoResults: InputSignal<string> = input<string>('table.no.results');
  readonly labelRegistersPagination: InputSignal<string> = input<string>('paginator.items');
  readonly labelOfPagination: InputSignal<string> = input<string>('paginator.of');
  readonly labelPageSizePagination: InputSignal<string> = input<string>('paginator.pagesize');

  readonly selectItem: OutputEmitterRef<DdrTableItem<T>> = output<DdrTableItem<T>>();
  readonly selectMultipleItem: OutputEmitterRef<T[]> = output<T[]>();
  readonly selectAction: OutputEmitterRef<DdrAction<T>> = output<DdrAction<T>>();
  readonly changePage: OutputEmitterRef<number> = output<number>();;
  readonly changePageSize: OutputEmitterRef<number> = output<number>();
  readonly sort: OutputEmitterRef<DdrTableCol[]> = output<DdrTableCol[]>();

  public rows: WritableSignal<number> = signal<number>(this.pageSize())

  public optionsCheck: WritableSignal<DdrSelectItem<T>[]> = signal<DdrSelectItem<T>[]>([]);
  public checkAll: WritableSignal<boolean> = signal<boolean>(false);

  private static nextId = 1;
  public id: string = ++DdrTableComponent.nextId + '';
  public totalItemsTable: Signal<number> = computed(() => !this.totalItems() ? this.items().length : 0)
  public pageTable: WritableSignal<number> = linkedSignal(() => {
    const page = this.page();
    return this.startPageZero() ? page + 1 : page;
  });

  readonly templateCell: Signal<TemplateRef<any> | undefined> = contentChild<TemplateRef<any>>('templateCell');

  readonly colspan: Signal<number> = computed<number>(() => {
    let value = this.cols().length;

    if (this.multiple()) {
      value++;
    }

    if (this.showActions() && this.items().length > 0) {
      value++;
    }

    return value;
  });

  readonly widthCells: Signal<number> = computed<number>(() => {
    let maxWidth = 75;

    if (!this.multiple()) {
      maxWidth += 10;
    }

    if (!(this.showActions() && this.items().length > 0)) {
      maxWidth += 15;
    }

    return maxWidth / this.cols().length;
  });

  constructor() {
    effect(() => {
      const items = this.items();
      const multiple = this.multiple();

      if (!multiple) {
        return;
      }

      items.forEach(item => {
        if (!item.selected) {
          item.selected = false;
        }
      });

      this.checkAll.set(
        items.length > 0 && items.every(item => item.selected)
      );
    })

    effect(() => this.rows.set(this.showPagination() ? this.pageSize() : Number.MAX_VALUE))

    effect(() => {
      if (this.multipleSort()) {
        return;
      }

      const cols = this.cols();
      const firstSortIndex = cols.findIndex(
        col => col.sortable !== false && !!col.modeSort
      );

      if (firstSortIndex === -1) {
        return;
      }

      cols.forEach((col, index) => {
        if (index !== firstSortIndex && col.sortable !== false && col.modeSort) {
          col.modeSort = this.constants.MODE_SORT.NO_SORT;
        }
      });
    });
  }

  onSelectItem($event: MouseEvent, item: DdrTableItem<T>) {
    const target = $event?.target as HTMLElement;
    if (this.canSelectItems() && target && !target.closest('ddr-button-split')) {
      this.selectItem.emit(item);
    }
  }

  onChangePageSize(pageSize: number) {
    this.rows.set(pageSize);
    this.changePageSize.emit(pageSize);
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
      this.changePage.emit(this.pageTable() - 1);
    } else {
      this.changePage.emit(this.pageTable());
    }
  }

  private resetSort() {
    for (const col of this.cols()) {
      if (col.sortable !== false) {
        col.modeSort = this.constants.MODE_SORT.NO_SORT;
      }
    }
  }

  onSort(col: DdrTableCol) {
    const modeSort = col.modeSort ?? this.constants.MODE_SORT.NO_SORT;

    if (!this.multipleSort()) {
      this.resetSort();
    }

    switch (modeSort) {
      case this.constants.MODE_SORT.NO_SORT:
        col.modeSort = this.constants.MODE_SORT.ASCENDING;
        break;

      case this.constants.MODE_SORT.ASCENDING:
        col.modeSort = this.constants.MODE_SORT.DESCENDING;
        break;

      case this.constants.MODE_SORT.DESCENDING:
        col.modeSort = this.constants.MODE_SORT.NO_SORT;
        break;
    }

    const cols = this.cols().filter(
      col => col.sortable !== false && !!col.modeSort
    );

    this.sort.emit(cols);
  }

}
