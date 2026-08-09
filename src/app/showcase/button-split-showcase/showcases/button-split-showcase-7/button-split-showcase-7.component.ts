import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrAction, DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrOrientationButtonSplit } from 'ddr-ng/types';

@Component({
  selector: 'button-split-showcase-7',
  templateUrl: './button-split-showcase-7.component.html',
  imports: [
    DdrButtonSplitComponent,
    DdrButtonMultipleComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonSplitShowcase7Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  public actions: Signal<DdrAction<string>[]> = signal([
    {
      label: 'button.split.save',
      value: 'SAVE',
      item: 'save',
      icon: 'bi bi-floppy',
    },
    {
      label: 'button.split.update',
      value: 'UPDATE',
      item: 'update',
      icon: 'bi bi-pencil',
    },
    {
      label: 'button.split.delete',
      value: 'DELETE',
      item: 'delete',
      icon: 'bi bi-trash',
    },
  ]);

  public buttons: Signal<DdrButton[]> = signal([
    {
      text: 'bottom-right',
      value: 'bottom-right',
    },
    {
      text: 'bottom-left',
      value: 'bottom-left',
    },
    {
      text: 'top-right',
      value: 'top-right',
    },
    {
      text: 'top-left',
      value: 'top-left',
    },
  ]);

  public position: WritableSignal<DdrOrientationButtonSplit> = signal('bottom-right');

  selectAction(action: DdrAction<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action),
    );
  }

}
