import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-5',
  templateUrl: './checkbox-binary-showcase-5.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class CheckboxBinaryShowcase5Component {

  public checkboxForm: FormGroup = new FormGroup({
    checkbox: new FormControl(true)
  })

}
