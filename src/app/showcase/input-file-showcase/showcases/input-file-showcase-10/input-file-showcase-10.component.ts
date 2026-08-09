import {
  Component,
  computed,
  Signal,
  signal
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-file-showcase-10',
  templateUrl: './input-file-showcase-10.component.html',
  imports: [
    DdrInputFileComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputFileShowcase10Component {

  public fileSelected: Signal<File | null> = computed(() => this.inputFileForm.file().value().length ? this.inputFileForm.file().value()[0] : null)

  private inputFileModel = signal({
    file: [],
  });
  public inputFileForm = form(this.inputFileModel);

}
