import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-9',
  templateUrl: './textarea-showcase-9.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase9Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
