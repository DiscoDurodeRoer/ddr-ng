import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-3',
  templateUrl: './toggle-showcase-3.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase3Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
