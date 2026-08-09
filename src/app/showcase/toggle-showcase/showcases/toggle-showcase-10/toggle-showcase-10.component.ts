import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-10',
  templateUrl: './toggle-showcase-10.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class ToggleShowcase10Component {

  private toggleModel = signal({
    toggle: true
  });
  public toggleForm = form(this.toggleModel);

}
