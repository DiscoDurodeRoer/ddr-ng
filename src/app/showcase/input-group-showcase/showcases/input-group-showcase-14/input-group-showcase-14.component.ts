import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-14',
  templateUrl: './input-group-showcase-14.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputGroupShowcase14Component {

  public inputForm = new FormGroup({
    input: new FormControl('')
  })
}
