import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-15',
  templateUrl: './input-number-showcase-15.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class InputNumberShowcase15Component {

  public value: WritableSignal<number> = signal<number>(0);

}
