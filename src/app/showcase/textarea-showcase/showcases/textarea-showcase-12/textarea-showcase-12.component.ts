import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-12',
  templateUrl: './textarea-showcase-12.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class TextareaShowcase12Component {

  public textareaForm = new FormGroup({
    textarea: new FormControl('')
  })

}
