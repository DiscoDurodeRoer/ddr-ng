import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-2',
  templateUrl: './toast-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase2Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttons: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'toast.info',
      value: 'info',
    },
    {
      text: 'toast.danger',
      value: 'danger',
    },
    {
      text: 'toast.warning',
      value: 'warning',
    },
    {
      text: 'toast.success',
      value: 'success',
    },
  ]);

  public buttonSelected: WritableSignal<string> = signal<string>('info');

  showToast() {

    switch (this.buttonSelected()) {
      case 'info':
        this.ddrToastService.addInfoMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'danger':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'warning':
        this.ddrToastService.addWarningMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'success':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
    }
  }

}
