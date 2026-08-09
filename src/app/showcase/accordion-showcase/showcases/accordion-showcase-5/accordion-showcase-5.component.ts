import { Component, inject } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-5',
  templateUrl: './accordion-showcase-5.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class AccordionShowcase5Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  onClickOpen(state: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      'clickOpen: ' + state,
    );
  }

}
