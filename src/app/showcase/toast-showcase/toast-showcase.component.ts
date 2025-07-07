import { Component, inject } from '@angular/core';
import { DdrButtonComponent, DdrToastService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-toast-showcase',
  templateUrl: './toast-showcase.component.html',
  styleUrls: ['./toast-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  addInfo() {
    this.ddrToastService.addInfoMessage("titulo", "contenido")
  }
  addError() {
    this.ddrToastService.addErrorMessage("titulo", "contenido")
  }
  addWarning() {
    this.ddrToastService.addWarningMessage("titulo", "contenido")
  }
  addSuccess() {
    this.ddrToastService.addSuccessMessage("titulo", "contenido")
  }


}
