
import { Component, inject } from '@angular/core';
import { DdrAuth, DdrToastService, DdrLoginComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-login-showcase',
  templateUrl: './login-showcase.component.html',
  styleUrls: ['./login-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrLoginComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class LoginShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService)

  login($event: DdrAuth) {
    this.ddrToastService.addSuccessMessage('Click en login', JSON.stringify($event));
    console.log($event);
  }

  forgotenPassword() {
    this.ddrToastService.addSuccessMessage('Exito', 'Click en olvidar contraseña')
  }

  registerUser() {
    this.ddrToastService.addSuccessMessage('Exito', 'Click en registro de usuarios')
  }
}
