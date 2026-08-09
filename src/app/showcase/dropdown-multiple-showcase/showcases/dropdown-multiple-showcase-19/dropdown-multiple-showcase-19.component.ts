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
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'dropdown-multiple-showcase-19',
  templateUrl: './dropdown-multiple-showcase-19.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class DropdownMultipleShowcase19Component {

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

  private dropdownMultipleModel = signal({
    languages: ['java', 'angular']
  });
  public dropdownMultipleForm = form(this.dropdownMultipleModel);

}
