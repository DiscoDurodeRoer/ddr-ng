import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'radio-showcase-1',
  templateUrl: './radio-showcase-1.component.html',
  imports: [
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class RadioShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  public clickRadio(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value,
    );
  }

}
