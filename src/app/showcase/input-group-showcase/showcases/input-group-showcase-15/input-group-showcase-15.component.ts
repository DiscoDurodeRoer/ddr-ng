import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-15',
  templateUrl: './input-group-showcase-15.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class InputGroupShowcase15Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel);

}
