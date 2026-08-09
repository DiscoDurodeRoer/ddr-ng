import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-1',
  templateUrl: './checkbox-binary-showcase-1.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ]
})
export class CheckboxBinaryShowcase1Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
