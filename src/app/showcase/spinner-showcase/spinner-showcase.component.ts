import { Component, inject, OnInit } from '@angular/core';
import { DdrButtonComponent, DdrSpinnerComponent, DdrSpinnerService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-spinner-showcase',
    templateUrl: './spinner-showcase.component.html',
    styleUrls: ['./spinner-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrSpinnerComponent,
        DdrButtonComponent
    ]
})
export class SpinnerShowcaseComponent {
  
  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService)

  public embedded: boolean = false;

  activateSpinner(){
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }

  changeMode(){
    this.embedded = !this.embedded;
  }

}
