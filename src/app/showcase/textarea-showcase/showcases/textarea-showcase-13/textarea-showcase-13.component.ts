import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-13',
  templateUrl: './textarea-showcase-13.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase13Component {

  private textareaModel = signal({
    textarea: '',
  });
  public textareaForm = form(this.textareaModel);

}
