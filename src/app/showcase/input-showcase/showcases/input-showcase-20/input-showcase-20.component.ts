import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-20',
  templateUrl: './input-showcase-20.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase20Component {

  private inputModel = signal({
    text: 'disabled',
  });
  public inputForm = form(this.inputModel, (control) => {
    disabled(control.text)
  });

}
