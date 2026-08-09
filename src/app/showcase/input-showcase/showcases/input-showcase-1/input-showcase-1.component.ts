import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-1',
  templateUrl: './input-showcase-1.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class InputShowcase1Component {

  public value: WritableSignal<string> = signal<string>('');

}
