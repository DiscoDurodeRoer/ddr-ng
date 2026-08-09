import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-file-showcase-11',
  templateUrl: './input-file-showcase-11.component.html',
  imports: [
    DdrInputFileComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputFileShowcase11Component {

  private inputFileModel = signal({
    file: [],
  });
  public inputFileForm = form(this.inputFileModel, (control) => {
    disabled(control.file)
  });

}
