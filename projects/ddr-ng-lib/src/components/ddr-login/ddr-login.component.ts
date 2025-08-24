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
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DdrCardComponent } from '../ddr-card/ddr-card.component';

@Component({
  selector: 'ddr-login',
  templateUrl: './ddr-login.component.html',
  styleUrls: ['./ddr-login.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputComponent,
    DdrInputGroupComponent,
    DdrTranslatePipe,
    DdrInputPasswordComponent,
    DdrCardComponent,
    NgTemplateOutlet,
    NgClass
  ]
})
export class DdrLoginComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() showForgotPassword: boolean = false;
  @Input() showCreateUser: boolean = false;
  @Input() showHeader: boolean = false;
  @Input() showFooter: boolean = false;
  @Input() showLabelUser: boolean = true;
  @Input() showLabelPassword: boolean = true;
  @Input() userRequired: boolean = true;
  @Input() userPassword: boolean = true;

  @Input() labelSubmit?: string;
  @Input() labelForgotenPassword?: string;
  @Input() labelCreateUser?: string;
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
