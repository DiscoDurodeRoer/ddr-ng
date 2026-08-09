import { Component, inject } from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-7',
  templateUrl: './chip-showcase-7.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase7Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  removeValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.remove.element'),
      item,
    );
  }
}
