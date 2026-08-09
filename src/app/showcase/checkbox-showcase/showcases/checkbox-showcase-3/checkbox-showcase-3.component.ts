import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { JsonPipe } from '@angular/common';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase-3',
  templateUrl: './checkbox-showcase-3.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class CheckboxShowcase3Component {

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

  public value: WritableSignal<ProgrammingLanguage[]> = signal([]);

}
