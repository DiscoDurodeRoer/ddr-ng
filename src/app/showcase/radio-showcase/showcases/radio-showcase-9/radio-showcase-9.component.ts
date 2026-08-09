import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'radio-showcase-9',
  templateUrl: './radio-showcase-9.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class RadioShowcase9Component {

  public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
    {
      label: 'Java',
      value: {
        name: 'java',
      },
    },
    {
      label: 'Angular',
      value: {
        name: 'angular',
      },
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs',
      },
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript',
      },
    },
    {
      label: 'C',
      value: {
        name: 'c',
      },
    },
    {
      label: 'C++',
      value: {
        name: 'cpp',
      },
    },
  ]);

  public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

  public radioForm = new FormGroup({
    language: new FormControl({ name: 'angular' })
  })

}
