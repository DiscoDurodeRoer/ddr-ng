import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'dropdown-showcase-1',
  templateUrl: './dropdown-showcase-1.component.html',
  imports: [
    DdrDropdownComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownShowcase1Component {

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

  public value: WritableSignal<string> = signal<string>('');

  selectItem(item: DdrSelectItem<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item),
    );
  }

}
