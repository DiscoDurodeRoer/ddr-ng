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
  selector: 'paginator-showcase-12',
  templateUrl: './paginator-showcase-12.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase12Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(50);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      data.push(i);
    }
    return data;
  })
}
