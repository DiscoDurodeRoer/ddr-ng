import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrPaginatorAlignment } from 'ddr-ng';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButtonSelectable } from 'ddr-ng/models';
import { DdrPaginatorComponent, DdrPaginatorPipe } from 'ddr-ng/paginator';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-13',
  templateUrl: './paginator-showcase-13.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class PaginatorShowcase13Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])
  public alignment: WritableSignal<DdrPaginatorAlignment> = signal<DdrPaginatorAlignment>('center');

  public buttonsAlignment: Signal<DdrButtonSelectable[]> = signal<DdrButtonSelectable[]>([
    {
      text: 'left',
      value: 'left',
    },
    {
      text: 'center',
      value: 'center',
    },
    {
      text: 'right',
      value: 'right',
    },
  ]);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })

}
