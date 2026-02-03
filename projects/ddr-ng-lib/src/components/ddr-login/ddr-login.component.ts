import {
  Component,
  ElementRef,
  inject,
  ViewEncapsulation,
  input,
  output,
  viewChild,
  InputSignal,
  OutputEmitterRef,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrAuth } from '../../common/ddr-auth.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrInputPasswordComponent } from '../ddr-input-password/ddr-input-password.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { DdrCardComponent } from '../ddr-card/ddr-card.component';
import { Field, form, required, submit } from '@angular/forms/signals';

@Component({
  selector: 'ddr-login',
  templateUrl: './ddr-login.component.html',
  styleUrl: './ddr-login.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    DdrInputPasswordComponent,
    DdrCardComponent,
    Field
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
  readonly passwordRequired: InputSignal<boolean> = input<boolean>(true);

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

  private loginModel: WritableSignal<DdrAuth> = signal<DdrAuth>({
    username: '',
    password: ''
  });
  public formLogin = form(this.loginModel, (login) => {
    required(login.username, { when: () => this.userRequired() })
    required(login.password, { when: () => this.passwordRequired() })
  })

  constructor(){

  }

  login(event: Event) {
    event.preventDefault();
    submit(this.formLogin, async () => {
      this.doLogin.emit(this.loginModel());
    });
  }

  recoverPassword() {
    this.forgotenPassword.emit();
  }

  createUser() {
    this.registerUser.emit();
  }
}
