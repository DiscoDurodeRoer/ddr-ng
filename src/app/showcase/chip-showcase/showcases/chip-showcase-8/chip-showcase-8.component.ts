import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-8',
  templateUrl: './chip-showcase-8.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase8Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string[]> = signal<string[]>(['item 1', 'item 2']);

  clickValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.selected.element'),
      item,
    );
  }
}
