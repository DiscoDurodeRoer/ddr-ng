import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-13',
  templateUrl: './input-password-showcase-13.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase13Component {

  private inputPasswordModel = signal({
    password: 'disabled',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    disabled(control.password)
  });

}
