import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-3',
  templateUrl: './chip-showcase-3.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase3Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
