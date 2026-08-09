import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-24',
  templateUrl: './dropdown-showcase-24.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class DropdownShowcase24Component {

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
    language: { name: 'angular' }
  });
  public dropdownForm = form(this.dropdownModel, (control) => {
    disabled(control.language)
  });

}
