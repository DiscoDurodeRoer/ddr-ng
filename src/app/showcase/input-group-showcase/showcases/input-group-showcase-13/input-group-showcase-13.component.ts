import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-13',
  templateUrl: './input-group-showcase-13.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class InputGroupShowcase13Component {

  public value: WritableSignal<string> = signal<string>('');

}
