import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-17',
  templateUrl: './textarea-showcase-17.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase17Component {

  private textareaModel = signal({
    textarea: 'readonly'
  });
  public textareaForm = form(this.textareaModel, (control) => {
    readonly(control.textarea)
  });

}
