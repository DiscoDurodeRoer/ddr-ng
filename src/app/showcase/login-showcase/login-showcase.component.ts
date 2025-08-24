
import { Component, inject } from '@angular/core';
import {
  DdrAuth,
  DdrToastService,
  DdrLoginComponent,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'login-showcase',
  templateUrl: './login-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrLoginComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class LoginShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  login(auth: DdrAuth) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(auth)
    );
  }

  forgotenPassword() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.forgoten.password')
    )
  }

  registerUser() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.register.user')
    )
  }
}
