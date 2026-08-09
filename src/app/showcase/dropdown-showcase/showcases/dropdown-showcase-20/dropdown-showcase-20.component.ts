import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  Signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'dropdown-showcase-20',
  templateUrl: './dropdown-showcase-20.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class DropdownShowcase20Component {

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

  private dropdownModel = signal({
    language: ''
  });
  public dropdownForm = form(this.dropdownModel);

}
