import { inject, Injectable } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrToast } from './bean/ddr-toast';

@Injectable({
  providedIn: 'root'
})
export class DdrToastService {

  private readonly constants: DdrConstantsService = inject(DdrConstantsService);

  public toasts: DdrToast[] = [];
  public timeOut: number = this.constants.TOAST.TIMEOUT_DEFAULT;

  addInfoMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_INFO)
  }

  addWarningMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_WARNING)
  }

  addErrorMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_ERROR)
  }

  addSuccessMessage(title: string, message: string) {
    this.addMessage(title, message, this.constants.TOAST.STATUS_SUCCESS)
  }

  private addMessage(title: string, message: string, status: string) {
    const toast = {
      title, 
      message, 
      status
    };

    if (this.toasts.length < this.constants.TOAST.MAX_TOAST) {
      this.toasts.push(toast);
    } else {
      this.toasts = this.toasts.slice(1, this.toasts.length);
      this.toasts.push(toast);
    }

    setTimeout(() => {
      this.closeToast(toast);
    }, this.timeOut);
  }

  closeToast(toast: DdrToast) {
    let index: number = this.toasts.findIndex(t => t === toast);
    if (index !== -1) {
      this.toasts.splice(index, 1);
    }
  }

}
