import { Component, inject } from '@angular/core';
import { DdrButton, DdrButtonMultipleComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'button-multiple-showcase',
  templateUrl: './button-multiple-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonMultipleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttons: DdrButton[] = [
    {
      text: 'button.multiple.1',
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    },
    {
      text: 'button.multiple.2',
      icon: 'bi bi-x',
      value: 'BUTTON_2'
    },
    {
      text: 'button.multiple.3',
      icon: 'bi bi-trash',
      value: 'BUTTON_3'
    }
  ];

  public buttonsEx2: DdrButton[] = [
    {
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    },
    {
      icon: 'bi bi-x',
      value: 'BUTTON_2'
    },
    {
      icon: 'bi bi-trash',
      value: 'BUTTON_3'
    }
  ];

  public buttonsEx3: DdrButton[] = [
    {
      text: 'button.multiple.1',
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    }
  ];

  public valueButtonEx4: string = 'BUTTON_3';

  clickButton(button: DdrButton) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(button)
    )
  }

}
