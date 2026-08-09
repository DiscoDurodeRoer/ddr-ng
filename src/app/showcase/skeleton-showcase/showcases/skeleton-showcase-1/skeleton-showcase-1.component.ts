import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSkeletonDirective } from 'ddr-ng/directives/skeleton';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'skeleton-showcase-1',
  templateUrl: './skeleton-showcase-1.component.html',
  imports: [
    DdrRadioComponent,
    DdrSkeletonDirective,
    DdrButtonComponent,
    DdrCardComponent,
    DdrTranslatePipe
  ]
})
export class SkeletonShowcase1Component {

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

  loadData() {
    this.load.set(false);
    setTimeout(() => {
      this.load.set(true);
    }, 10000);
  }

}
