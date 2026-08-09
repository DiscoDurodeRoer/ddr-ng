import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-6',
  templateUrl: './input-number-showcase-6.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase6Component {
  public value: WritableSignal<number> = signal<number>(0);
}
