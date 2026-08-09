import {
  Component,
  signal,
  Signal
} from '@angular/core';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { JsonPipe } from '@angular/common';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase-20',
  templateUrl: './dropdown-multiple-showcase-20.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class DropdownMultipleShowcase20Component {

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

  compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

  private dropdownMultipleModel = signal({
    languages: []
  });
  public dropdownMultipleForm = form(this.dropdownMultipleModel);

}
