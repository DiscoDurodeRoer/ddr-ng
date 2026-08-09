import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-5',
  templateUrl: './toast-showcase-5.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase5Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public maxToasts: WritableSignal<number> = signal<number>(this.ddrToastService.maxToasts);

  constructor() {
    effect(() => this.ddrToastService.maxToasts = this.maxToasts())
  }

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }

}
