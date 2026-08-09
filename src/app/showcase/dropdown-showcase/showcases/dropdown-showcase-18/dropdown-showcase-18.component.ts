import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { FormsModule } from '@angular/forms';
import { DdrSelectItem } from 'ddr-ng/models';
import { JsonPipe } from '@angular/common';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase-18',
  templateUrl: './dropdown-showcase-18.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class DropdownShowcase18Component {

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

  public value: WritableSignal<ProgrammingLanguage | null> = signal(null);

}
