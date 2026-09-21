import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-pipe-showcase-2',
  templateUrl: './paginator-pipe-showcase-2.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorPipeShowcase2Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data: WritableSignal<any[]> = signal<any[]>([]);

}
