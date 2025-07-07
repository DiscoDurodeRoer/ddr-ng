import { ComponentRef, inject, Injectable, ViewContainerRef } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrToast } from './bean/ddr-toast';
import { DdrToastComponent } from './ddr-toast.component';
import { DdrOrientationToast, DdrToastStatus } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class DdrToastService {

  private readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private readonly viewContainerRef: ViewContainerRef = inject(ViewContainerRef)

  private _timeOut: number = this.constants.TOAST.TIMEOUT_DEFAULT;
  private _maxToasts: number = this.constants.TOAST.MAX_TOAST;
  private _orientation: DdrOrientationToast = this.constants.ORIENTATION.TOP_RIGHT;

  public set maxToasts(value: number) {
    this._maxToasts = value;
  }

  public set timeOut(value: number) {
    this._timeOut = value;
  }

  public set orientation(value: DdrOrientationToast) {
    this._orientation = value;
    this.ddrToastComponent.instance.orientation = this._orientation;
  }

  private ddrToastComponent!: ComponentRef<DdrToastComponent>;

  constructor() {
    this.ddrToastComponent = this.viewContainerRef.createComponent(DdrToastComponent);
    this.ddrToastComponent.instance.orientation = this._orientation;
  }

  public addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_INFO)
  }

  public addWarningMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_WARNING)
  }

  public addErrorMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_ERROR)
  }

  public addSuccessMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_SUCCESS)
  }

  private addMessage(title: string, message: string, status: DdrToastStatus) {
    const toast: DdrToast = {
      title,
      message,
      status,
      rendered: true
    };

    let toasts: DdrToast[] = this.ddrToastComponent.instance.toasts;

    if (toasts.length == this._maxToasts) {
      this.ddrToastComponent.instance.closeToast(0);
    }

    this.ddrToastComponent.instance.toasts = [...this.ddrToastComponent.instance.toasts, toast];

    setTimeout(() => {
      if (toast.rendered) {
        this.closeToast(0);
      }
    }, this._timeOut);

  }

  private closeToast(index: number) {
    if (index !== -1) {
      this.ddrToastComponent.instance.closeToast(index);
    }
  }

}
