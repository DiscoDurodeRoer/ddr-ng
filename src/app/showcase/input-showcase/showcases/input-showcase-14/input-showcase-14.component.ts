import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-14',
  templateUrl: './input-showcase-14.component.html',
  imports: [
    DdrInputComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase14Component {

  public focus: WritableSignal<boolean> = signal<boolean>(false);

  focusInput() {
    this.focus.set(true);
  }

  focusLost() {
    this.focus.set(false);
  }
}
