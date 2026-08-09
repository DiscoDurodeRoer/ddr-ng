import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { Person } from './bean/person';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';

@Component({
  selector: 'steps-showcase-8',
  templateUrl: './steps-showcase-8.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent,
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class StepsShowcase8Component {
  public person: Signal<Person> = signal<Person>({
    name: '',
    age: 0,
  });
}
