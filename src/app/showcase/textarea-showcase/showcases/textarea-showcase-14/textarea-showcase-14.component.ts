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
  selector: 'textarea-showcase-14',
  templateUrl: './textarea-showcase-14.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class TextareaShowcase14Component {

  private textareaModel = signal({
    textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  });
  public textareaForm = form(this.textareaModel);

}
