import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-19',
  templateUrl: './input-number-showcase-19.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase19Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    disabled(control.number)
  });

}
