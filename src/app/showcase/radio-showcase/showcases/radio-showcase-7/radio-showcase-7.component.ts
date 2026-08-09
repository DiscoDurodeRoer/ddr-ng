import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'radio-showcase-7',
  templateUrl: './radio-showcase-7.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class RadioShowcase7Component {

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

  public value: WritableSignal<ProgrammingLanguage> = signal<ProgrammingLanguage>({
    name: 'angular'
  });

}
