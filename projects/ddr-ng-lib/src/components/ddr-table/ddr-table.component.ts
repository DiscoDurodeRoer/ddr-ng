import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  input,
  output,
  contentChild
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTableCol } from './bean/ddr-table-col';
import { DdrTableItem } from './bean/ddr-table-item';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrDropdownComponent } from '../ddr-dropdown/ddr-dropdown.component';
import { FormsModule } from '@angular/forms';
import { DdrButtonSplitComponent } from '../ddr-button-split/ddr-button-split.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';


import { NgxPaginationModule } from 'ngx-pagination';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { DdrCheckboxBinaryComponent } from '../ddr-checkbox-binary/ddr-checkbox-binary.component';
import { DdrNestedPropertyPipe } from '../../pipes/ddr-nested-property.pipe';

@Component({
  selector: 'ddr-table',
  templateUrl: './ddr-table.component.html',
  styleUrls: ['./ddr-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgxPaginationModule,
    DdrDropdownComponent,
    DdrCheckboxBinaryComponent,
    DdrButtonSplitComponent,
    DdrTranslatePipe,
    DdrTooltipDirective,
    DdrNestedPropertyPipe,
    FormsModule,
    NgTemplateOutlet
]
})
export class DdrTableComponent<T extends { [key: string]: any }> implements OnInit, OnChanges {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly cols = input.required<DdrTableCol[]>();
  readonly items = input<DdrTableItem<T>[]>([]);
  readonly showPagination = input<boolean>(true);
  readonly startPageZero = input<boolean>(false);
  readonly page = input<number>(1);
  readonly showTotal = input<boolean>(true);
  readonly allowChangeRows = input<boolean>(true);
  readonly multiple = input<boolean>(false);
  readonly showActions = input<boolean>(false);
  readonly canSelectItems = input<boolean>(true);
  readonly canSort = input<boolean>(false);
  readonly showBorder = input<boolean>(true);
  readonly showFooter = input<boolean>(true);
  readonly optionsRowsPagination = input<number[]>([]);

  // Translations
  readonly labelNoResults = input<string>();
  readonly labelRegisters = input<string>();
  readonly labelRegister = input<string>();
  readonly labelToPagination = input<string>();
  readonly labelOfPagination = input<string>();

  readonly totalItems = input<number>(0);

  readonly selectItem = output<DdrTableItem<T>>();
  readonly selectMultipleItem = output<T[]>();
  readonly selectAction = output<DdrAction<T>>();
  readonly changePage = output<number>();;
  readonly changeRow = output<number>();
  readonly sort = output<DdrTableCol>();

  public optionsRows: DdrSelectItem<number>[] = [];
  public rows: number = 10

  public optionsCheck: DdrSelectItem<T>[] = [];
  public checkAll: boolean = false;

  private static nextId = 1;
  public id: string = ++DdrTableComponent.nextId + '';
  public colspan: number = 1;
  public widthCells?: number;

  readonly templateCell = contentChild<TemplateRef<any>>('templateCell');

  ngOnInit() {

    const optionsRowsPagination = this.optionsRowsPagination();
    if (optionsRowsPagination && optionsRowsPagination.length > 0) {
      for (const row of optionsRowsPagination) {
        this.optionsRows.push({
          label: row.toString(),
          value: row
        })
      }
      this.rows = this.optionsRows[0].value;
    } else {
      this.optionsRows = [
        { label: '5', value: 5 },
        { label: '10', value: 10 },
        { label: '25', value: 25 },
        { label: '50', value: 50 },
      ];
      this.rows = 10;
    }

    if (!this.showPagination()) {
      this.rows = Number.MAX_VALUE;
    }

    if (this.multiple() && this.items().length > 0) {
      this.initItemsSelected()
    }

    if (!this.totalItems()) {
      this.totalItems = this.items().length;
    }

    this.calculateCols();
    this.resetSort();

    this.changeDetectorRef.markForCheck();

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['multiple']) {
        this.initItemsSelected()
      }
      if (changes['page'] && this.startPageZero()) {
        this.page = this.page() + 1;
      }
      if (changes['items'] || changes['multiple'] || changes['showActions']) {
        this.calculateCols();
        if (changes['items']) {
          this.totalItems = this.items().length;
        }
      }
      if (changes['totalItems']) {
        if (this.totalItems() <= this.rows) {
          this.page = 1;
        }
      }
      if (changes['canSort']) {
        this.resetSort();
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  onSelectItem($event: MouseEvent, item: DdrTableItem<T>) {
    const target = $event?.target as HTMLElement;
    if (this.canSelectItems() && target && !target.closest('ddr-button-split')) {
      this.selectItem.emit(item);
    }
  }

  changeRows(event: DdrSelectItem<number>) {
    this.rows = event.value;
    this.changeRow.emit(this.rows);
    this.changeDetectorRef.markForCheck();
  }

  selectAll() {
    if (this.checkAll) {
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
    this.checkAll = this.items().every(op => op.selected);
    this.selectMultipleItem.emit(valuesSelected);
  }

  onSelectAction($event: DdrAction<T>, element: T, index: number) {
    $event.item = element;
    $event.index = index;
    this.selectAction.emit($event);
  }

  onPageChange($event: number) {
    this.page = $event;
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
    this.colspan = this.cols().length;
    let maxWidth = 80;

    if (this.multiple()) {
      this.colspan++;
      maxWidth += 10;
    }

    if (this.showActions() && this.items().length > 0) {
      this.colspan++;
      maxWidth += 10;
    }

    this.widthCells = maxWidth / this.cols().length;
  }

  private initItemsSelected() {
    this.items().forEach((it) => {
      if (!it.selected) {
        it.selected = false;
      }
    });
    this.checkAll = this.items().length > 0 && this.items().every(op => op.selected);
  }

}
