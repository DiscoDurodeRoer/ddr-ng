import {
  Component,
  signal
} from '@angular/core';
import {
  email,
  form,
  FormField,
  required
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-23',
  templateUrl: './input-showcase-23.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputShowcase23Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
      email(control.text, { message: 'input.email.error' })
  });

}
