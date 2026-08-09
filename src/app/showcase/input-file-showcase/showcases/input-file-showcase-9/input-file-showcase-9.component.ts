import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-file-showcase-9',
  templateUrl: './input-file-showcase-9.component.html',
  imports: [
    DdrInputFileComponent,
    DdrTranslatePipe,
    ReactiveFormsModule
  ]
})
export class InputFileShowcase9Component {

  public fileForm = new FormGroup({
    file: new FormControl<File[]>([])
  })

  get controlFile() {
    return this.fileForm.get('file')?.value
  }

}
