import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrModalType } from 'ddr-ng/types';
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

@Component({
  selector: 'modal-showcase-3',
  templateUrl: './modal-showcase-3.component.html',
  imports: [
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcase3Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public type: WritableSignal<DdrModalType> = signal<DdrModalType>('info');
  public buttonsType: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'info',
      value: 'info',
    },
    {
      text: 'confirm',
      value: 'confirm',
    },
    {
      text: 'no-buttons',
      value: 'no-buttons',
    },
  ]);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  accept() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.accept'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
