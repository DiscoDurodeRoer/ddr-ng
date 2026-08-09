import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSpinnerService } from 'ddr-ng/spinner'
import { DdrTranslatePipe } from 'ddr-ng/translate'

@Component({
  selector: 'spinner-showcase-2',
  templateUrl: './spinner-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcase2Component {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService);

  constructor() {
    this.ddrSpinnerService.changeSpinnerPath('/img/spinner/spinner.gif');
  }

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }
}
