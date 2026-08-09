import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'button-multiple-showcase-4',
  templateUrl: './button-multiple-showcase-4.component.html',
  imports: [
    DdrButtonMultipleComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonMultipleShowcase4Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService)

  public buttons: DdrButton[] = [
    {
      text: 'button.multiple.1',
      icon: 'bi bi-check',
      value: 'BUTTON_1',
    },
    {
      text: 'button.multiple.2',
      icon: 'bi bi-x',
      value: 'BUTTON_2',
    },
    {
      text: 'button.multiple.3',
      icon: 'bi bi-trash',
      value: 'BUTTON_3',
    },
  ]

  public valueButton: WritableSignal<string> = signal('BUTTON_3');
  
  clickButton(button: DdrButton) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(button),
    );
  }
}
