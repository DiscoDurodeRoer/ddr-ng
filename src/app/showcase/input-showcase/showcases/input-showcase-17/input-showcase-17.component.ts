import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-17',
  templateUrl: './input-showcase-17.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class InputShowcase17Component {

  public value: WritableSignal<string> = signal<string>('');

}
