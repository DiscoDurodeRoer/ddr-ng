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
  selector: 'chip-showcase-12',
  templateUrl: './chip-showcase-12.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class ChipShowcase12Component {

  private chipModel = signal({
    items: []
  });
  public formChip = form(this.chipModel);

}
