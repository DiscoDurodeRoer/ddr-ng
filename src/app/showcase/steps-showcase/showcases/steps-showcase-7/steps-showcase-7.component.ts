import { Component } from '@angular/core';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-7',
  templateUrl: './steps-showcase-7.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe
  ]
})
export class StepsShowcase7Component { }
