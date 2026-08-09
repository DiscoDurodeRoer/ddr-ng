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
  selector: 'login-showcase-8',
  templateUrl: './login-showcase-8.component.html',
  imports: [
    DdrLoginComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class LoginShowcase8Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  login(auth: DdrAuth) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(auth),
    );
  }

}
