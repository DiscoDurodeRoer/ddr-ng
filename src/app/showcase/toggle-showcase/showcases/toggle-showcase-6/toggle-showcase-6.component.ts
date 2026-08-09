import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-6',
  templateUrl: './toggle-showcase-6.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase6Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
