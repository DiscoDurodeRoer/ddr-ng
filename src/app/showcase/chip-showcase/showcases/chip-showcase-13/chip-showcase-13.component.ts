import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-13',
  templateUrl: './chip-showcase-13.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class ChipShowcase13Component {

  private chipModel = signal({
    items: ['item 1', 'item 2']
  });
  public formChip = form(this.chipModel);

}
