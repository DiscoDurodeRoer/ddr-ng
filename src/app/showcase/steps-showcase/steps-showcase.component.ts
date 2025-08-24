import { Component, inject } from '@angular/core';
import {
  DdrInputComponent,
  DdrStepComponent,
  DdrStepsComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { FormsModule } from '@angular/forms';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { Person } from './bean/person';

@Component({
  selector: 'steps-showcase',
  templateUrl: './steps-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class StepsShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public personExample2: Person = {
    name: '',
    age: 0
  };
  public personExample8: Person = {
    name: '',
    age: 0
  };

  changeStep(step: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('step.' + step)
    );
  }

  lastStep() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('step.last')
    );
  }

}
