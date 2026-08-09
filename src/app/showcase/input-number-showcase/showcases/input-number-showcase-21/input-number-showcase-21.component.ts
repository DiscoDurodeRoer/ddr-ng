import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  max,
  min
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-21',
  templateUrl: './input-number-showcase-21.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase21Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    min(control.number, 5, { message: 'input.number.min' }),
      max(control.number, 20, { message: 'input.number.max' })
  });

}
