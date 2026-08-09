import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-10',
  templateUrl: './input-password-showcase-10.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class InputPasswordShowcase10Component {

  public value: WritableSignal<string> = signal<string>('');

}
