import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-16',
  templateUrl: './input-number-showcase-16.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputNumberShowcase16Component {

  public inputNumberForm = new FormGroup({
    input: new FormControl(0)
  })

}
