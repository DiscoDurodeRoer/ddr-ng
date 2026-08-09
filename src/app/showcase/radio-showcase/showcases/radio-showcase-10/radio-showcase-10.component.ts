import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'radio-showcase-10',
  templateUrl: './radio-showcase-10.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class RadioShowcase10Component {

  public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'Java',
      value: 'java',
    },
    {
      label: 'Angular',
      value: 'angular',
    },
    {
      label: 'NestJS',
      value: 'nestjs',
    },
    {
      label: 'Javascript',
      value: 'javascript',
    },
    {
      label: 'C',
      value: 'c',
    },
    {
      label: 'C++',
      value: 'cpp',
    },
  ]);

  public value: WritableSignal<string> = signal<string>('');

  private radioModel = signal({
    language: '',
  });
  public radioForm = form(this.radioModel);

}
