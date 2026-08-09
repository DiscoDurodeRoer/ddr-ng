import {
  Component,
  signal
} from '@angular/core';
import {
  FormField,
  form,
  maxLength,
  minLength,
  required
} from '@angular/forms/signals';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-17',
  templateUrl: './input-group-showcase-17.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputGroupShowcase17Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
    minLength(control.text, 5, { message: 'input.group.minlength.required' })
    maxLength(control.text, 20, { message: 'input.group.maxlength.required' })
  });

}
