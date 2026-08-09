import { ApplicationRef, ComponentRef, createComponent, DOCUMENT, EnvironmentInjector, inject, Service, signal, WritableSignal } from '@angular/core';
import { DdrSpinnerComponent } from '../ddr-spinner.component';

@Service()
export class DdrSpinnerService {

  private readonly appRef = inject(ApplicationRef);
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly document = inject(DOCUMENT);

  private spinnerRef?: ComponentRef<DdrSpinnerComponent>;
  private spinnerPathImg: WritableSignal<string> = signal<string>('');

  hideSpinner() {
    if (this.spinnerRef) {
      this.appRef.detachView(this.spinnerRef.hostView);
      this.spinnerRef.destroy();
      this.spinnerRef = undefined;
    }
  }

  showSpinner() {
    if (!this.spinnerRef) {
      this.spinnerRef = createComponent(DdrSpinnerComponent, {
        environmentInjector: this.environmentInjector
      });
      this.spinnerRef.instance.pathImg.set(this.spinnerPathImg());
      this.appRef.attachView(this.spinnerRef.hostView);
      this.document.body.appendChild(this.spinnerRef.location.nativeElement);
    }
  }

  changeSpinnerPath(path: string) {
    this.spinnerPathImg.set(path)
  }

}
