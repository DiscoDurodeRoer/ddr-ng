import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrSpinnerService,
  DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'spinner-showcase',
  templateUrl: './spinner-showcase.component.html',
  styleUrls: ['./spinner-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcaseComponent {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService)

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }

  showSpinnerImg() {
    this.ddrSpinnerService.spinnerPathImg = './img/spinner/spinner.gif';
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
      this.ddrSpinnerService.spinnerPathImg = '';
    }, 5000);
  }

}
