import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { DdrAuth } from '../../common/ddr-auth.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrInputPasswordComponent } from '../ddr-input-password/ddr-input-password.component';
import { FormsModule } from '@angular/forms';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
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
    DdrInputGroupComponent,
    DdrTranslatePipe,
    DdrInputPasswordComponent,
    NgClass,
    DdrCardComponent
  ]
})
export class DdrLoginComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() validate: boolean = false;
  @Input() showForgotPassword: boolean = true;
  @Input() showCreateUser: boolean = true;
  @Input() showHeader: boolean = false;
  @Input() showLabelUser: boolean = true;
  @Input() showLabelPassword: boolean = true;

  @Input() labelSubmit?: string;
  @Input() labelForgotenPwd?: string;
  @Input() labelCreateUser?: string;
  @Input() labelValidUsername?: string;
  @Input() labelInvalidUsername?: string;
  @Input() labelValidPassword?: string;
  @Input() labelInvalidPassword?: string;
  @Input() labelUsername?: string;
  @Input() labelPlaceholderUsername?: string;
  @Input() labelPassword?: string;
  @Input() labelPlaceholderPassword?: string;

  @Output() doLogin: EventEmitter<DdrAuth> = new EventEmitter<DdrAuth>();
  @Output() forgotenPassword: EventEmitter<void> = new EventEmitter<void>();
  @Output() registerUser: EventEmitter<void> = new EventEmitter<void>();

  public user: DdrAuth = {
    username: '',
    password: ''
  };

  @ViewChild('pwd') inputPwd?: ElementRef;

  /**
   * Iniciar sesión
   */
  login() {
    this.doLogin.emit(this.user);
  }

  /**
   * Recuperar contraseña
   */
  recoverPassword() {
    this.forgotenPassword.emit();
  }

  /**
   * Registro de usuarios
   */
  createUser() {
    this.registerUser.emit();
  }
}
