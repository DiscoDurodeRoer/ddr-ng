import {
  Component,
  signal,
  Signal
} from '@angular/core';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'dropdown-showcase-17',
  templateUrl: './dropdown-showcase-17.component.html',
  styleUrl: './dropdown-showcase-17.component.scss',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe
  ]
})
export class DropdownShowcase17Component {

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

}
