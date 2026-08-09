import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'dropdown-multiple-showcase-1',
  templateUrl: './dropdown-multiple-showcase-1.component.html',
  imports: [
    DdrDropdownMultipleComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  public value: WritableSignal<string[]> = signal<string[]>([]);

  selectItems(items: DdrSelectItem<string>[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(items),
    );
  }

}
