import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  Signal
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'radio-showcase-8',
  templateUrl: './radio-showcase-8.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class RadioShowcase8Component {

  public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'Angular',
      value: 'angular',
    },
    {
      label: 'NestJS',
      value: 'nestjs',
    },
    {
      label: 'Javascript',
      value: 'javascript',
    },
    {
      label: 'C',
      value: 'c',
    },
    {
      label: 'C++',
      value: 'cpp',
    },
  ]);

  public radioForm = new FormGroup({
    language: new FormControl('')
  })

}
