import {
  Component,
  ElementRef,
  inject,
  ViewEncapsulation,
  input,
  output,
  viewChild
} from '@angular/core';
import { DdrAuth } from '../../common/ddr-auth.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';

import { DdrInputPasswordComponent } from '../ddr-input-password/ddr-input-password.component';
import { FormsModule } from '@angular/forms';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

import { DdrCardComponent } from '../ddr-card/ddr-card.component';

@Component({
  selector: 'ddr-login',
  templateUrl: './ddr-login.component.html',
  styleUrls: ['./ddr-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    DdrInputPasswordComponent,
    DdrCardComponent,
    ]
})
export class DdrLoginComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly showForgotPassword = input<boolean>(false);
  readonly showCreateUser = input<boolean>(false);
  readonly showHeader = input<boolean>(false);
  readonly showFooter = input<boolean>(false);
  readonly showLabelUser = input<boolean>(true);
  readonly showLabelPassword = input<boolean>(true);
  readonly userRequired = input<boolean>(true);
  readonly userPassword = input<boolean>(true);

  readonly labelSubmit = input<string>();
  readonly labelForgotenPassword = input<string>();
  readonly labelCreateUser = input<string>();
  readonly labelUsername = input<string>();
  readonly labelPlaceholderUsername = input<string>();
  readonly labelPassword = input<string>();
  readonly labelPlaceholderPassword = input<string>();

  readonly doLogin = output<DdrAuth>();
  readonly forgotenPassword = output<void>();
  readonly registerUser = output<void>();

  public user: DdrAuth = {
    username: '',
    password: ''
  };

  readonly inputPwd = viewChild<ElementRef>('pwd');

  login() {
    this.doLogin.emit(this.user);
  }

  recoverPassword() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.forgotenPassword.emit();
  }

  createUser() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.registerUser.emit();
  }
}
