import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  required,
  minLength,
  maxLength,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-15',
  templateUrl: './textarea-showcase-15.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase15Component {

  private textareaModel = signal({
    textarea: ''
  });
  public textareaForm = form(this.textareaModel, (control) => {
    required(control.textarea, { message: 'textarea.value.required' });
    minLength(control.textarea, 3, { message: 'textarea.minlength.required' });
    maxLength(control.textarea, 10, { message: 'textarea.maxlength.required' });
  });

}
