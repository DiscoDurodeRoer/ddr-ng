import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-9',
  templateUrl: './input-showcase-9.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase9Component {

  public value: WritableSignal<string> = signal<string>('');

}
