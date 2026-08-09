import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-2',
  templateUrl: './textarea-showcase-2.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase2Component {

  public value: WritableSignal<string> = signal<string>('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

}
