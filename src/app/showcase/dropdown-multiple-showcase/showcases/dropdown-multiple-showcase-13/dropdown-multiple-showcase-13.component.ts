import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrSelectItem } from 'ddr-ng/models';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrButtonComponent } from 'ddr-ng/components/button';

@Component({
  selector: 'dropdown-multiple-showcase-13',
  templateUrl: './dropdown-multiple-showcase-13.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcase13Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public options: WritableSignal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
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

  compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

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

  changeOptions() {
    if (this.options()[0].label == 'Javascript') {
      this.options.set([
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
      ]);
    } else {
      this.options.set([
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
    }
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate(
        'dropdown.multiple.change.options.confirm',
      ),
      JSON.stringify(this.options()),
    );
  }
}
