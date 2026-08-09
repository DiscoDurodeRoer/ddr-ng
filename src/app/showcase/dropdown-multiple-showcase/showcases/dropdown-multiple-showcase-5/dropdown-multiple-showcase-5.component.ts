import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase-5',
  templateUrl: './dropdown-multiple-showcase-5.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcase5Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) =>
    a.name == b.name;

  public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
    {
      name: 'java',
    },
    {
      name: 'angular',
    },
    {
      name: 'cpp',
    },
  ]);

  resetValues() {
    this.value.set([]);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('dropdown.multiple.reset.confirm'),
    );
  }

}
