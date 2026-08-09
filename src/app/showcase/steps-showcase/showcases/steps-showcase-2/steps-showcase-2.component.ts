import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { Person } from './bean/person';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';

@Component({
  selector: 'steps-showcase-2',
  templateUrl: './steps-showcase-2.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent,
    DdrInputNumberComponent,
    DdrTranslatePipe
  ],
})
export class StepsShowcase2Component {
  public person: Signal<Person> = signal<Person>({
    name: '',
    age: 0,
  });
}
