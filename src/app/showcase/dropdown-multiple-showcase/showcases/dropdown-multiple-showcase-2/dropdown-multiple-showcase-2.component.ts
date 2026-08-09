import { JsonPipe } from '@angular/common';
import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'dropdown-multiple-showcase-2',
  templateUrl: './dropdown-multiple-showcase-2.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class DropdownMultipleShowcase2Component {

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

  public value: WritableSignal<string[]> = signal<string[]>(['java', 'angular']);

}
