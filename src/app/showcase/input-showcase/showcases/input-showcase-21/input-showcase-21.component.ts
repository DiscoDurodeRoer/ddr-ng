import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-21',
  templateUrl: './input-showcase-21.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase21Component {

  private inputModel = signal({
    text: 'readonly',
  });
  public inputForm = form(this.inputModel, (control) => {
    readonly(control.text)
  });

}
