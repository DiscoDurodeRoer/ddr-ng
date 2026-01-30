import { ComponentRef, inject, Injectable, signal, ViewContainerRef, WritableSignal } from '@angular/core';
import { DdrSpinnerComponent } from '../components/ddr-spinner/ddr-spinner.component';

@Injectable({
  providedIn: 'root'
})
export class DdrSpinnerService {

  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);

  private spinnerRef?: ComponentRef<DdrSpinnerComponent>;
  public spinnerPathImg: WritableSignal<string> = signal<string>('');

  hideSpinner() {
    if (this.spinnerRef) {
      this.spinnerRef.destroy();
      this.spinnerRef = undefined;
    }
  }

  showSpinner() {
    if (!this.spinnerRef) {
      this.spinnerRef = this.viewContainerRef.createComponent(DdrSpinnerComponent);
      this.spinnerRef.instance.pathImg.set(this.spinnerPathImg());
    }
  }

}
