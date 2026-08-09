import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-7',
  templateUrl: './toggle-showcase-7.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class ToggleShowcase7Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
