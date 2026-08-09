import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-19',
  templateUrl: './dropdown-showcase-19.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class DropdownShowcase19Component {

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

  public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;

  public dropdownForm = new FormGroup({
    dropdown: new FormControl(null)
  })

}
