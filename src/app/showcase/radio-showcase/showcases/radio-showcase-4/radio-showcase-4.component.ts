import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrSelectItem } from 'ddr-ng/models';
import { JsonPipe } from '@angular/common';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'radio-showcase-4',
  templateUrl: './radio-showcase-4.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class RadioShowcase4Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

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

  public value: WritableSignal<ProgrammingLanguage> = signal<ProgrammingLanguage>({ name: 'angular' });

  public clickRadio(value: ProgrammingLanguage) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(value),
    );
  }

}
