import {
  Component,
  inject,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'dropdown-showcase-12',
  templateUrl: './dropdown-showcase-12.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownShowcase12Component {

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

  public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;

  public value: WritableSignal<ProgrammingLanguage> = signal({ name: 'angular' });

  selectItem(item: DdrSelectItem<ProgrammingLanguage>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item),
    );
  }

}
