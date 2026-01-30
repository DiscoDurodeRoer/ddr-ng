import {
  Component,
  ElementRef,
  inject,
  ViewEncapsulation,
  input,
  output,
  viewChild,
  InputSignal,
  OutputEmitterRef
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

  readonly showForgotPassword: InputSignal<boolean> = input<boolean>(false);
  readonly showCreateUser: InputSignal<boolean> = input<boolean>(false);
  readonly showHeader: InputSignal<boolean> = input<boolean>(false);
  readonly showFooter: InputSignal<boolean> = input<boolean>(false);
  readonly showLabelUser: InputSignal<boolean> = input<boolean>(true);
  readonly showLabelPassword: InputSignal<boolean> = input<boolean>(true);
  readonly userRequired: InputSignal<boolean> = input<boolean>(true);
  readonly userPassword: InputSignal<boolean> = input<boolean>(true);

  readonly labelSubmit: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelForgotenPassword: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelCreateUser: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelUsername: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelPlaceholderUsername: InputSignal<string | undefined> = input<string>();
  readonly labelPassword: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelPlaceholderPassword: InputSignal<string | undefined> = input<string | undefined>();

  readonly doLogin: OutputEmitterRef<DdrAuth> = output<DdrAuth>();
  readonly forgotenPassword: OutputEmitterRef<void> = output<void>();
  readonly registerUser: OutputEmitterRef<void> = output<void>();

  public user: DdrAuth = {
    username: '',
    password: ''
  };

  readonly inputPwd = viewChild<ElementRef>('pwd');

  login() {
    this.doLogin.emit(this.user);
  }

  recoverPassword() {
    this.forgotenPassword.emit();
  }

  createUser() {
    this.registerUser.emit();
  }
}
