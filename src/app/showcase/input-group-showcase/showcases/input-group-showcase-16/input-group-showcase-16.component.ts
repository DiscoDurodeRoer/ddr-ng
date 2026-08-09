import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-16',
  templateUrl: './input-group-showcase-16.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputGroupShowcase16Component {

  private inputModel = signal({
    text: 'disabled',
  });
  public inputForm = form(this.inputModel, (control) => {
    disabled(control.text)
  });

}
