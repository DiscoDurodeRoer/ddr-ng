import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrButtonSelectable } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'steps-showcase-16',
  templateUrl: './steps-showcase-16.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class StepsShowcase16Component {

  public buttons: WritableSignal<DdrButtonSelectable[]> = signal([
    {
      text: 'small',
      value: 'small',
    },
    {
      text: 'medium',
      value: 'medium',
    },
    {
      text: 'large',
      value: 'large',
    },
  ])

  public sizeButton: WritableSignal<DdrSize> = signal('small');
}
