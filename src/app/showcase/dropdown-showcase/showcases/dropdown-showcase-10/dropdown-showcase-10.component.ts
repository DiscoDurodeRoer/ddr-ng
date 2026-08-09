import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-10',
  templateUrl: './dropdown-showcase-10.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    DdrButtonComponent
  ],
})
export class DropdownShowcase10Component {

  public options: WritableSignal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
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

  public value: WritableSignal<ProgrammingLanguage | null> = signal(null);

  removeOptions() {
    this.options.set([]);
  }

  resetOptions() {
    this.options.set([
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
  }

  resetValue() {
    this.value.set(null);
  }
}
