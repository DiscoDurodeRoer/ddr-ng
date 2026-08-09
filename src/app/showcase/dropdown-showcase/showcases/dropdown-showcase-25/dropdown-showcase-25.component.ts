import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  form, FormField,
  required
} from '@angular/forms/signals';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-25',
  templateUrl: './dropdown-showcase-25.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class DropdownShowcase25Component {

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

  private dropdownModel = signal({
    language: null
  });
  public dropdownForm = form(this.dropdownModel, (control) => {
    required(control.language, { message: 'dropdown.value.required' })
  });
}
