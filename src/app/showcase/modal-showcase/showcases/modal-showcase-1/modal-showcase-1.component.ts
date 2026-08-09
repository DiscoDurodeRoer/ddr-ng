import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrModalComponent,
  DdrModalService
} from 'ddr-ng/modal';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'modal-showcase-1',
  templateUrl: './modal-showcase-1.component.html',
  imports: [
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ],
})
export class ModalShowcase1Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public size: WritableSignal<DdrSize> = signal<DdrSize>('medium');
  public buttonsSize: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'small',
      value: 'small',
    },
    {
      text: 'medium',
      value: 'medium',
    },
    {
      text: 'large',
      value: 'large',
    },
  ]);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }
}
