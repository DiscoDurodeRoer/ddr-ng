import { Component, inject, signal, Signal } from '@angular/core';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrAction } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'button-split-showcase-1',
  templateUrl: './button-split-showcase-1.component.html',
  imports: [
    DdrButtonSplitComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonSplitShowcase1Component {

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

  selectAction(action: DdrAction<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action),
    );
  }

}
