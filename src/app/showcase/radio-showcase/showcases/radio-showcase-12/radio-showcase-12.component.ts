import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'radio-showcase-12',
  templateUrl: './radio-showcase-12.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class RadioShowcase12Component {

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

  private radioModel = signal({
    language: { name: 'angular' }
  });
  public radioForm = form(this.radioModel);

}
