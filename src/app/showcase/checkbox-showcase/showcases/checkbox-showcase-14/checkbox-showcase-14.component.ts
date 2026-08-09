import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase-14',
  templateUrl: './checkbox-showcase-14.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class CheckboxShowcase14Component {

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

  private checkboxModel = signal({
    languages: [
      {
        name: 'angular',
      },
      {
        name: 'javascript',
      }
    ]
  });
  public formCheckbox = form(this.checkboxModel);

}
