import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-pipe-showcase-3',
  templateUrl: './paginator-pipe-showcase-3.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorPipeShowcase3Component {

  public page: WritableSignal<number> = signal<number>(0);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      data.push(i);
    }
    return data;
  })
}
