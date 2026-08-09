import { Component, inject } from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-6',
  templateUrl: './chip-showcase-6.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [DdrToastService]
})
export class ChipShowcase6Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  insertValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.insert.element'),
      item,
    );
  }

}
