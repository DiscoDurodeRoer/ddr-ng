import {
  Component,
  signal,
  Signal
} from '@angular/core';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-22',
  templateUrl: './dropdown-showcase-22.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    FormField,
    JsonPipe
  ]
})
export class DropdownShowcase22Component {

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
  public dropdownForm = form(this.dropdownModel);

}
