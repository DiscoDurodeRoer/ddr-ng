import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-4',
  templateUrl: './input-password-showcase-4.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase4Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
