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
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { JsonPipe } from '@angular/common';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase-10',
  templateUrl: './checkbox-showcase-10.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class CheckboxShowcase10Component {

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

  public checkboxForm: FormGroup = new FormGroup({
    checkbox: new FormControl([])
  })
}
