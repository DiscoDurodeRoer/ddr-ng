import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-7',
  templateUrl: './checkbox-binary-showcase-7.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class CheckboxBinaryShowcase7Component {

  private checkboxModel = signal({
    checkbox: true,
  });
  public checkboxForm = form(this.checkboxModel, (control) => {
    disabled(control.checkbox);
  });
}
