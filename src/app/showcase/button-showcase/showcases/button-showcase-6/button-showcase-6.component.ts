import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-6',
  templateUrl: './button-showcase-6.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase6Component {

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
