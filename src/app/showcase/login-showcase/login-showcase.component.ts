
import { Component, inject } from '@angular/core';
import { DdrAuth, DdrToastService, DdrLoginComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-login-showcase',
    templateUrl: './login-showcase.component.html',
    styleUrls: ['./login-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrLoginComponent
    ]
})
export class LoginShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService)

  login($event: DdrAuth) {
    this.ddrToastService.addSuccessMessage('Click en login', JSON.stringify($event));
    console.log($event);
  }

  forgotenPassword($event: boolean) {
    this.ddrToastService.addSuccessMessage('Click en olvidar contraseña', $event + "")
    console.log($event);
  }

  registerUser($event: boolean) {
    this.ddrToastService.addSuccessMessage('Click en registro de usuarios', $event + "")
    console.log($event);
  }
}
