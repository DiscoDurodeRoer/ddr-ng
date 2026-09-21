import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-8',
  templateUrl: './paginator-showcase-8.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class PaginatorShowcase8Component {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private ddrToastService: DdrToastService = inject(DdrToastService);

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  });

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.change.page', { page }),
    )
  }

  onPrevious(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.previous.page', { page }),
    )
  }

  onNext(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.next.page', { page }),
    )
  }
}
