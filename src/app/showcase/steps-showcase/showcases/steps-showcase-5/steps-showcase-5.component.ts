import { Component, inject } from '@angular/core';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-5',
  templateUrl: './steps-showcase-5.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class StepsShowcase5Component {
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  changeStep(step: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('step.' + step),
    );
  }
}
