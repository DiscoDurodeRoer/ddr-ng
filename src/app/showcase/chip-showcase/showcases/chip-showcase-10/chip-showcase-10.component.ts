import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-10',
  templateUrl: './chip-showcase-10.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class ChipShowcase10Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
