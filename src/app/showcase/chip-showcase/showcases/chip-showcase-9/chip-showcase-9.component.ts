import {
  Component,
  inject
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-9',
  templateUrl: './chip-showcase-9.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase9Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  getValues(items: string[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.elements'),
      JSON.stringify(items),
    );
  }
}
