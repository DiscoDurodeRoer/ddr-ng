import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-13',
  templateUrl: './steps-showcase-13.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ],
})
export class StepsShowcase13Component {

  private stepModel = signal({
    step: 2
  })
  public stepForm = form(this.stepModel)

}
