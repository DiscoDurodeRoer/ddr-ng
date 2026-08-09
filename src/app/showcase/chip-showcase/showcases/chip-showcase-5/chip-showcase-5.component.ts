import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-5',
  templateUrl: './chip-showcase-5.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase5Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
