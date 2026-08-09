import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrModalComponent, DdrModalService } from 'ddr-ng/modal';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'modal-showcase-4',
  templateUrl: './modal-showcase-4.component.html',
  imports: [
    DdrModalComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    DdrToggleComponent
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcase4Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public clickOutsideEnabled: WritableSignal<boolean> = signal<boolean>(true);

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

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
