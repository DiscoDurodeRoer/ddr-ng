import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-7',
  templateUrl: './input-showcase-7.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase7Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
