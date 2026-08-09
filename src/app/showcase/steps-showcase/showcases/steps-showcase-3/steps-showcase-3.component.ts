import { Component } from '@angular/core';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-3',
  templateUrl: './steps-showcase-3.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe
  ],
})
export class StepsShowcase3Component { }
