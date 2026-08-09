import {
  Component,
  inject
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrInputError } from 'ddr-ng/types';

@Component({
  selector: 'input-showcase-5',
  templateUrl: './input-showcase-5.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase5Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  hasErrors(inputError: DdrInputError) {
    switch (inputError) {
      case 'valid':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('success'),
          this.ddrTranslateService.getTranslate('input.has.errors')
        );
        break;
      case 'error':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('error'),
          this.ddrTranslateService.getTranslate('input.has.not.errors')
        );
        break;
    }
  }

}
