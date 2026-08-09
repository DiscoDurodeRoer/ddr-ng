import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-1',
  templateUrl: './chip-showcase-1.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase1Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
