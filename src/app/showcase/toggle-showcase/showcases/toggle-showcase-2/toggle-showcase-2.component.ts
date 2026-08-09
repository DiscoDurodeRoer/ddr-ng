import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-2',
  templateUrl: './toggle-showcase-2.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase2Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
