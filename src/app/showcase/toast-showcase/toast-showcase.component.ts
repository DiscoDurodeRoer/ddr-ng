import { Component, inject } from '@angular/core';
import {
  DdrButton,
  DdrButtonComponent,
  DdrInputComponent,
  DdrButtonMultipleComponent,
  DdrOrientationToast,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toast-showcase',
  templateUrl: './toast-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    DdrInputComponent,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttonsOrientation: DdrButton[] = [
    {
      icon: 'bi bi-arrow-up-right',
      value: 'top-right'
    },
    {
      icon: 'bi bi-arrow-up-left',
      value: 'top-left'
    },
    {
      icon: 'bi bi-arrow-down-right',
      value: 'bottom-right'
    },
    {
      icon: 'bi bi-arrow-down-left',
      value: 'bottom-left'
    }
  ];

  public toastOrientation: DdrOrientationToast = 'top-right';

  public buttons: DdrButton[] = [
    {
      text: 'toast.info',
      value: 'info'
    },
    {
      text: 'toast.danger',
      value: 'danger'
    },
    {
      text: 'toast.warning',
      value: 'warning'
    },
    {
      text: 'toast.success',
      value: 'success'
    }
  ];

  public maxToasts: number = this.ddrToastService.maxToasts;
  public toastTimeout: number = this.ddrToastService.timeOut

  showToast(button: DdrButton) {

    this.ddrToastService.maxToasts = this.maxToasts;
    this.ddrToastService.timeOut = this.toastTimeout;

    switch (button.value) {
      case 'info':
        this.ddrToastService.addInfoMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'danger':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'warning':
        this.ddrToastService.addWarningMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'success':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
    }


  }

  changeOrientation() {
    this.ddrToastService.orientation = this.toastOrientation
  }

}
