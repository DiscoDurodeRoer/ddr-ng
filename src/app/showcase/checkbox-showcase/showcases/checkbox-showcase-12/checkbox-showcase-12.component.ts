import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-showcase-12',
  templateUrl: './checkbox-showcase-12.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class CheckboxShowcase12Component {

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

  private checkboxModel = signal({
    languages: []
  });
  public formCheckbox = form(this.checkboxModel);

}
