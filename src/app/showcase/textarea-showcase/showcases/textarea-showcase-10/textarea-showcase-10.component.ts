import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-10',
  templateUrl: './textarea-showcase-10.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase10Component {

  public value: WritableSignal<string> = signal<string>('readonly');

}
