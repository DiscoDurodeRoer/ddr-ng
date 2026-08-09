import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-3',
  templateUrl: './input-showcase-3.component.html',
  imports: [
    DdrInputComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase3Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  submitForm(event: Event) {
    event.preventDefault();
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.form.submit'),
    );
  }
}
