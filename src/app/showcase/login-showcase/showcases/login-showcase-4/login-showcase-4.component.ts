import {
  Component,
  inject
} from '@angular/core';
import {
  DdrAuth,
  DdrLoginComponent
} from 'ddr-ng/login';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'login-showcase-4',
  templateUrl: './login-showcase-4.component.html',
  imports: [
    DdrLoginComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class LoginShowcase4Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  login(auth: DdrAuth) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(auth),
    );
  }

  forgotenPassword() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.forgoten.password'),
    );
  }

  registerUser() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.register.user'),
    );
  }

}
