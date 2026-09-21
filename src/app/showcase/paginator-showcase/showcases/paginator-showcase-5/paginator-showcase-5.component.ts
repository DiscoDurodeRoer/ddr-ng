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
  selector: 'paginator-showcase-5',
  templateUrl: './paginator-showcase-5.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase5Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
