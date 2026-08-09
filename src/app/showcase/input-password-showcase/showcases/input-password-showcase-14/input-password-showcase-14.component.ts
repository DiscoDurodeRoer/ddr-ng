import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-14',
  templateUrl: './input-password-showcase-14.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputPasswordShowcase14Component {

  private inputPasswordModel = signal({
    password: 'readonly',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    readonly(control.password)
  });

}
