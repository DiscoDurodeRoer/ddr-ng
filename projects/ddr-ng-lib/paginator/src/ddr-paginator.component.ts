import { Component, computed, effect, inject, input, InputSignal, model, ModelSignal, output, OutputEmitterRef, signal, Signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrButtonSelectable, DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { DdrPaginatorAlignment, DdrPaginatorNavigationDisplay, DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'ddr-paginator',
  templateUrl: './ddr-paginator.component.html',
  styleUrl: './ddr-paginator.component.scss',
  imports: [
    DdrButtonMultipleComponent,
    DdrDropdownComponent,
    DdrTranslatePipe,
    DdrInputNumberComponent,
    DdrButtonComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class DdrPaginatorComponent {

  private translateService: DdrTranslateService = inject(DdrTranslateService);
  public constants: DdrConstantsService = inject(DdrConstantsService);

  readonly page: ModelSignal<number> = model.required<number>();
  readonly pageSize = model.required<number>();
  readonly totalItems: InputSignal<number> = input.required<number>();
  readonly visiblePages: InputSignal<number> = input<number>(5);
  readonly startZero: InputSignal<boolean> = input<boolean>(false);
  readonly showNavigation: InputSignal<boolean> = input<boolean>(false);
  readonly navigationDisplay: InputSignal<DdrPaginatorNavigationDisplay> = input<DdrPaginatorNavigationDisplay>('both');
  readonly size: InputSignal<DdrSize> = input<DdrSize>('medium');
  readonly showSummary: InputSignal<boolean> = input<boolean>(false);
  readonly allowChangePageSize: InputSignal<boolean> = input<boolean>(false);
  readonly showGoToPage: InputSignal<boolean> = input<boolean>(false);
  readonly pageSizeValues: InputSignal<number[]> = input<number[]>([]);
  readonly alignment: InputSignal<DdrPaginatorAlignment> = input<DdrPaginatorAlignment>('left');
  readonly pageSizeName: InputSignal<string> = input<string>('page-size');
  readonly goToPageName: InputSignal<string> = input<string>('go-to-page');

  // translations
  readonly labelPrevious: InputSignal<string> = input<string>('paginator.previous');
  readonly labelNext: InputSignal<string> = input<string>('paginator.next');
  readonly labelOf: InputSignal<string> = input<string>('paginator.of');
  readonly labelPageSize: InputSignal<string> = input<string>('paginator.pagesize');
  readonly labelGoToPage: InputSignal<string> = input<string>('paginator.go.to.page');
  readonly labelButtonGoToPage: InputSignal<string> = input<string>('paginator.button.go.to.page');
  readonly labelItems: InputSignal<string> = input<string>('paginator.items');


  public changePage: OutputEmitterRef<number> = output<number>();
  public previous: OutputEmitterRef<number> = output<number>();
  public next: OutputEmitterRef<number> = output<number>();
  public changePageSize: OutputEmitterRef<number> = output<number>();

  readonly totalPages: Signal<number> = computed(() => Math.ceil(this.normalizedTotalItems() / this.normalizedPageSize()));

  readonly firstPage = computed(() => 1);

  readonly lastPage = computed(() => this.totalPages());

  readonly isFirstPage: Signal<boolean> = computed(() => this.page() === this.firstPage());

  readonly isLastPage: Signal<boolean> = computed(() => this.page() === this.lastPage());

  readonly valuePage: Signal<string> = computed<string>(() => String(this.page()));

  readonly pageOffset: Signal<number> = computed<number>(() =>
    this.startZero() ? -1 : 0
  );

  public readonly buttons: Signal<DdrButtonSelectable[]> = computed(() => {

    const buttons: DdrButtonSelectable[] = [];

    if (this.totalPages() > 0 && this.showNavigation()) {
      buttons.push({
        icon: this.navigationDisplay() !== 'text' ? 'bi bi-arrow-left' : '',
        text: this.navigationDisplay() !== 'icon' ? this.translateService.getTranslate(this.labelPrevious()) : '',
        value: 'previous',
        disabled: this.isFirstPage()
      })
    }

    let start;
    let end;
    const middleSize = this.normalizedVisiblePages() - 2;
    const half = Math.floor(middleSize / 2);

    if (this.totalPages() < this.normalizedVisiblePages()) {
      start = this.firstPage() + 1;
      end = this.lastPage() - 1;
    } else if (this.isFirstPage()) {
      start = this.firstPage() + 1;
      end = this.normalizedVisiblePages() - 1;
    } else if (this.isLastPage()) {
      start = this.lastPage() - this.normalizedVisiblePages() + 2;
      end = this.lastPage() - 1;
    } else if (this.currentPage() <= half + 2) {
      start = this.firstPage() + 1;
      end = start + middleSize - 1;
    } else if (this.currentPage() >= this.totalPages() - half - 1) {
      end = this.lastPage() - 1;
      start = end - middleSize + 1;
    } else {
      start = this.currentPage() - half;
      end = start + (this.normalizedVisiblePages() - 2) - 1;
    }

    buttons.push({
      text: String(this.firstPage()),
      value: String(this.firstPage() + this.pageOffset())
    });

    for (let i = start; i <= end; i++) {
      buttons.push({
        text: String(i),
        value: String(i + this.pageOffset())
      })
    }

    buttons.push({
      text: String(this.lastPage()),
      value: String(this.lastPage() + this.pageOffset())
    });

    if (this.totalPages() > 0 && this.showNavigation()) {
      buttons.push({
        icon: this.navigationDisplay() !== 'text' ? 'bi bi-arrow-right' : '',
        text: this.navigationDisplay() !== 'icon' ? this.translateService.getTranslate(this.labelNext()) : '',
        value: 'next',
        disabled: this.isLastPage(),
        iconPosition: 'right'
      })
    }

    return buttons;
  })

  public readonly startSummary: Signal<number> = computed(() => (this.currentPage() - 1) * this.normalizedPageSize() + 1
  );

  public readonly endSummary: Signal<number> = computed(() => Math.min(this.currentPage() * this.normalizedPageSize(), this.normalizedTotalItems())
  );

  public readonly pageSizeOptions: Signal<DdrSelectItem<number>[]> = computed(() =>
    this.pageSizeValues().map((value: number) => ({
      label: String(value),
      value
    }))
  );

  readonly disabledButtonGoToPage: Signal<boolean> = computed(() => this.valueInputPage() < 1 || this.valueInputPage() > this.totalPages())

  readonly normalizedVisiblePages: Signal<number> = computed(() =>
    Math.max(3, this.visiblePages())
  );

  readonly normalizedPageSize: Signal<number> = computed(() =>
    Math.max(1, this.pageSize())
  );

  readonly normalizedTotalItems: Signal<number> = computed(() =>
    Math.max(0, this.totalItems())
  );

  readonly currentPage: Signal<number> = computed(() =>
    Math.max(this.firstPage(), this.page() + (this.startZero() ? 1 : 0))
  );

  public valueInputPage: WritableSignal<number> = signal<number>(1);

  constructor() {
    effect(() => {
      const options = this.pageSizeValues();
      const currentPageSize = this.pageSize();

      if (!options.length) {
        return;
      }

      if (!options.includes(currentPageSize)) {
        this.pageSize.set(options[0]);
      }
    });
  }

  previousPage(): void {
    if (!this.isFirstPage()) {
      this.page.update((page) => page - 1);
      this.previous.emit(this.page());
    }
  }

  nextPage(): void {
    if (!this.isLastPage()) {
      this.page.update((page) => page + 1);
      this.next.emit(this.page());
    }
  }

  onPageChange(button: DdrButtonSelectable): void {
    switch (button.value) {
      case 'previous':
        this.previousPage()
        break;
      case 'next':
        this.nextPage();
        break;
      default:
        if (this.page() != +button.value) {
          this.page.set(+button.value)
          this.changePage.emit(+button.value);
        }
    }

  }

  onChangePageSize(item: DdrSelectItem<number>) {
    this.pageSize.set(item.value);

    const totalPages = this.totalPages();

    if (this.currentPage() > totalPages) {
      this.page.set(totalPages + this.pageOffset());
    }

    this.changePageSize.emit(this.pageSize());
  }

  goToPage() {
    this.page.set(this.valueInputPage());
    this.changePage.emit(this.page());
  }

}
