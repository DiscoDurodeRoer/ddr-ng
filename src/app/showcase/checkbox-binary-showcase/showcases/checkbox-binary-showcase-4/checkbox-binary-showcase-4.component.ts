import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-4',
  templateUrl: './checkbox-binary-showcase-4.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class CheckboxBinaryShowcase4Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
