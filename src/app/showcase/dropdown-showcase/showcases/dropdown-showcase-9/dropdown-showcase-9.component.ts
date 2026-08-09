import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrButton, DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrOrientationDropdown } from 'ddr-ng/types';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';

@Component({
  selector: 'dropdown-showcase-9',
  templateUrl: './dropdown-showcase-9.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    DdrButtonMultipleComponent
  ],
})
export class DropdownShowcase9Component {

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

  public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'bottom',
      value: 'bottom',
    },
    {
      text: 'top',
      value: 'top',
    },
  ]);

  public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;

  public orientationDropdown: WritableSignal<DdrOrientationDropdown> = signal<DdrOrientationDropdown>('bottom');

}
