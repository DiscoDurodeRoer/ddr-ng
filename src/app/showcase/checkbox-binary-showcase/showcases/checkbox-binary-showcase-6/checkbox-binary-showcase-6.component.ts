import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-6',
  templateUrl: './checkbox-binary-showcase-6.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class CheckboxBinaryShowcase6Component {

  private checkboxModel = signal({
    checkbox: true,
  });
  public checkboxForm = form(this.checkboxModel);
  
}
