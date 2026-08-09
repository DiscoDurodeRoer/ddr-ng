import {
  Component,
  inject
} from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-3',
  templateUrl: './checkbox-binary-showcase-3.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxBinaryShowcase3Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickCheck(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + '',
    );
  }
}
