import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-9',
  templateUrl: './toggle-showcase-9.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcase9Component {

  private toggleModel = signal({
    toggle: false,
  });
  public toggleForm = form(this.toggleModel);

}
