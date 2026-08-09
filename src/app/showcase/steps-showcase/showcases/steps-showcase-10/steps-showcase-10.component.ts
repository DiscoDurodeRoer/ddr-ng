import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-10',
  templateUrl: './steps-showcase-10.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    FormsModule
  ],
})
export class StepsShowcase10Component {

  public value: WritableSignal<number> = signal<number>(2);

}
