import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  maxLength,
  minLength,
  pattern,
  required
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-22',
  templateUrl: './input-showcase-22.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase22Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
    minLength(control.text, 8, { message: 'input.minlength.required' }),
    maxLength(control.text, 20, { message: 'input.maxlength.required' }),
    pattern(control.text, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-]).*$/, { message: 'input.pattern'})
  });

}
