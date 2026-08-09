import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { JsonPipe } from '@angular/common';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase-21',
  templateUrl: './dropdown-multiple-showcase-21.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class DropdownMultipleShowcase21Component {

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
    languages: [
      {
        name: 'java'
      },
      {
        name: 'angular'
      }
    ]
  });
  public dropdownMultipleForm = form(this.dropdownMultipleModel);

}
