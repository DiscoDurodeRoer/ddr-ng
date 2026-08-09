import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-11',
  templateUrl: './input-group-showcase-11.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase11Component {

  public focus: WritableSignal<boolean> = signal<boolean>(false);

  focusInputGroup() {
    this.focus.set(true);
  }

  focusLost() {
    this.focus.set(true);
  }
}
