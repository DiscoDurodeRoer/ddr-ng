import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-12',
  templateUrl: './input-password-showcase-12.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase12Component {

  private inputPasswordModel = signal({
    password: '',
  });
  public inputPasswordForm = form(this.inputPasswordModel);

}
