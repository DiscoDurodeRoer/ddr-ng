import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  FormField,
  form
} from '@angular/forms/signals';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-23',
  templateUrl: './dropdown-showcase-23.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    FormField,
    JsonPipe
  ]
})
export class DropdownShowcase23Component {

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
    language: {
      name: 'angular'
    }
  });
  public dropdownForm = form(this.dropdownModel);

}
