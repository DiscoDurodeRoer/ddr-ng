import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-16',
  templateUrl: './textarea-showcase-16.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase16Component {

  private textareaModel = signal({
    textarea: 'disabled'
  });
  public textareaForm = form(this.textareaModel, (control) => {
    disabled(control.textarea)
  });

}
