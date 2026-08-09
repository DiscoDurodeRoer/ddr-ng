import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { JsonPipe } from '@angular/common';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'radio-showcase-5',
  templateUrl: './radio-showcase-5.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class RadioShowcase5Component {

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

  public value: WritableSignal<ProgrammingLanguage | null> = signal<ProgrammingLanguage | null>(null);

}
