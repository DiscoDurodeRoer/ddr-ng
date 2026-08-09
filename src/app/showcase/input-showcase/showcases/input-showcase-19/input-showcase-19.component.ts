import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-19',
  templateUrl: './input-showcase-19.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField,
    JsonPipe
  ]
})
export class InputShowcase19Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel);

}
