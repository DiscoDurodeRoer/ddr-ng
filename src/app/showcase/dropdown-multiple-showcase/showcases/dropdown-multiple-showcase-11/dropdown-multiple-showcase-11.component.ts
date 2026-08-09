import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrButton,
  DdrSelectItem
} from 'ddr-ng/models';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrOrientationDropdown } from 'ddr-ng/types';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';

@Component({
  selector: 'dropdown-multiple-showcase-11',
  templateUrl: './dropdown-multiple-showcase-11.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class DropdownMultipleShowcase11Component {

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

  public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([]);

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

  public orientationDropdown: WritableSignal<DdrOrientationDropdown> = signal<DdrOrientationDropdown>('bottom');

}
