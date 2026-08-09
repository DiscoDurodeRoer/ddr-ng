import { Component, inject, signal, Signal } from '@angular/core';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrAction } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'button-split-showcase-12',
  templateUrl: './button-split-showcase-12.component.html',
  imports: [
    DdrButtonSplitComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonSplitShowcase12Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  openActions(open: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate(
        open ? 'button.split.open' : 'button.split.close',
      ),
    );
  }
}
