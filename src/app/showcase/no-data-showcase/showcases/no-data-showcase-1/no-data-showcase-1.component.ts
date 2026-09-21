import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrNoDataComponent } from 'ddr-ng/components/no-data';
import { DdrButtonSelectable } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'no-data-showcase-1',
  templateUrl: './no-data-showcase-1.component.html',
  imports: [
    DdrNoDataComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class NoDataShowcase1Component {
  public size: WritableSignal<DdrSize> = signal<DdrSize>('large');
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
}
