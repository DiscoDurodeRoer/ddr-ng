import { Component, inject, OnInit } from '@angular/core';
import { DdrButtonComponent, DdrToastComponent, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-toast-showcase',
    templateUrl: './toast-showcase.component.html',
    styleUrls: ['./toast-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrToastComponent,
        DdrButtonComponent
    ]
})
export class ToastShowcaseComponent implements OnInit {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  ngOnInit() {
  this.ddrToastService.timeOut=60000
  }

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
