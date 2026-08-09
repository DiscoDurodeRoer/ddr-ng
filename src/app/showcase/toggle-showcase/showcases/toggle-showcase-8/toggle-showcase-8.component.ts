import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-8',
  templateUrl: './toggle-showcase-8.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class ToggleShowcase8Component {

  public toggleForm = new FormGroup({
    toggle: new FormControl(false)
  })

}
