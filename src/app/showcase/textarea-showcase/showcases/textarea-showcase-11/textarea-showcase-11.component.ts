import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-11',
  templateUrl: './textarea-showcase-11.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class TextareaShowcase11Component {

  public value: WritableSignal<string> = signal<string>('');

}
