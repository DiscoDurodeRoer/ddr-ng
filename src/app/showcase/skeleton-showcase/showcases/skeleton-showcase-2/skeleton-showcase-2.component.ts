import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSkeletonDirective } from 'ddr-ng/directives/skeleton';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'skeleton-showcase-2',
  templateUrl: './skeleton-showcase-2.component.html',
  imports: [
    DdrRadioComponent,
    DdrInputNumberComponent,
    DdrCardComponent,
    DdrButtonComponent,
    DdrSkeletonDirective,
    DdrLoopNumberPipe,
    DdrTranslatePipe
  ]
})
export class SkeletonShowcase2Component {

  public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'skeleton.cirle',
      value: 'circle',
    },
    {
      label: 'skeleton.rectangle',
      value: 'rectangle',
    },
    {
      label: 'skeleton.square',
      value: 'square',
    },
    {
      label: 'skeleton.card',
      value: 'card',
    },
    {
      label: 'skeleton.list',
      value: 'list',
    },
    {
      label: 'skeleton.graphic',
      value: 'graphic',
    },
  ]);

  public mode: WritableSignal<string> = signal<string>('circle');
  public load: WritableSignal<boolean> = signal<boolean>(true);
  public nElements: WritableSignal<number> = signal<number>(1);

  loadData() {
    this.load.set(false);
    setTimeout(() => {
      this.load.set(true);
    }, 10000);
  }
}
