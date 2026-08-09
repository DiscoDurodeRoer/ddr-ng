import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSpinnerService } from 'ddr-ng/spinner'
import { DdrTranslatePipe } from 'ddr-ng/translate'

@Component({
  selector: 'spinner-showcase-1',
  templateUrl: './spinner-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcase1Component {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService);

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }
}
