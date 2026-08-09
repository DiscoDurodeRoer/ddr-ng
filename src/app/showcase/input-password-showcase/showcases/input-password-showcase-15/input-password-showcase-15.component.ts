import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  required,
  minLength,
  maxLength,
  pattern,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-15',
  templateUrl: './input-password-showcase-15.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase15Component {

  private inputPasswordModel = signal({
    password: '',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    required(control.password, { message: 'input.value.required' }),
      minLength(control.password, 8, { message: 'input.minlength.required' }),
      maxLength(control.password, 20, { message: 'input.maxlength.required' })
      pattern(control.password, 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-]).*$/, 
        { message: 'input.pattern' }
      )
  });

}
