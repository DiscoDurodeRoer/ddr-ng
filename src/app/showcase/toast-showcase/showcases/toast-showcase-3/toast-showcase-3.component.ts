import {
  Component,
  effect,
  inject,
  signal,
  Signal,
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
import { DdrOrientationToast } from 'ddr-ng/types';

@Component({
  selector: 'toast-showcase-3',
  templateUrl: './toast-showcase-3.component.html',
  imports: [
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase3Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  constructor() {
    effect(() => this.ddrToastService.orientation = this.toastOrientation())
  }

  public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up-right',
      value: 'top-right',
    },
    {
      icon: 'bi bi-arrow-up-left',
      value: 'top-left',
    },
    {
      icon: 'bi bi-arrow-down-right',
      value: 'bottom-right',
    },
    {
      icon: 'bi bi-arrow-down-left',
      value: 'bottom-left',
    },
  ]);

  public toastOrientation: WritableSignal<DdrOrientationToast> = signal('top-right');

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }

}
