import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-1',
  templateUrl: './input-password-showcase-1.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase1Component {

  public value: WritableSignal<string> = signal<string>('');

}
