import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-file-showcase-8',
  templateUrl: './input-file-showcase-8.component.html',
  imports: [
    DdrInputFileComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class InputFileShowcase8Component {

  public value: WritableSignal<File[]> = signal<File[]>([]);

}
