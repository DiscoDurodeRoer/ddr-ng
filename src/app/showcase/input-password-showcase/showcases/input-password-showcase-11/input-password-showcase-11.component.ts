import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-11',
  templateUrl: './input-password-showcase-11.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputPasswordShowcase11Component {

  public inputPasswordForm = new FormGroup({
    password: new FormControl('')
  })

}
