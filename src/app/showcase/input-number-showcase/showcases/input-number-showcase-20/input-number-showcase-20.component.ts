import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-20',
  templateUrl: './input-number-showcase-20.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase20Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    readonly(control.number)
  });

}
