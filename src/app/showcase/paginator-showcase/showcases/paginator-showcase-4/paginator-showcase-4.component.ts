import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrSize } from 'ddr-ng';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButtonSelectable } from 'ddr-ng/models';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-4',
  templateUrl: './paginator-showcase-4.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class PaginatorShowcase4Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public size: WritableSignal<DdrSize> = signal<DdrSize>('medium');

  public buttonsSize: Signal<DdrButtonSelectable[]> = signal<DdrButtonSelectable[]>([
    {
      text: 'small',
      value: 'small',
    },
    {
      text: 'medium',
      value: 'medium',
    },
    {
      text: 'large',
      value: 'large',
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
