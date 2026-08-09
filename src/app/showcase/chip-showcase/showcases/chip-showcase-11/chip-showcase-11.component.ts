import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-11',
  templateUrl: './chip-showcase-11.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class ChipShowcase11Component {

  public chipForm: FormGroup = new FormGroup({
    items: new FormControl(['item1', 'item2'])
  })

}
