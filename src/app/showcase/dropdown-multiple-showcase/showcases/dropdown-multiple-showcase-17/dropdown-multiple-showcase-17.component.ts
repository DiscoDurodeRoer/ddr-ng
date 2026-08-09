import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  Signal
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase-17',
  templateUrl: './dropdown-multiple-showcase-17.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class DropdownMultipleShowcase17Component {

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

  public dropdownMultipleForm = new FormGroup({
    dropdownMultiple: new FormControl([])
  })

}
