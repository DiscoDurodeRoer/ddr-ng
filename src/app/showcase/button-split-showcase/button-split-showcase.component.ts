import { Component, inject } from '@angular/core';
import {
  DdrAction,
  DdrButton,
  DdrButtonMultipleComponent,
  DdrButtonSplitComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrOrientationButtonSplit
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'button-split-showcase',
  templateUrl: './button-split-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrButtonSplitComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonSplitShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public actions: DdrAction<string>[] = [
    {
      label: 'button.split.save',
      value: 'SAVE',
      item: 'save',
      icon: 'bi bi-floppy'
    },
    {
      label: 'button.split.update',
      value: 'UPDATE',
      item: 'update',
      icon: 'bi bi-pencil'
    },
    {
      label: 'button.split.delete',
      value: 'DELETE',
      item: 'delete',
      icon: 'bi bi-trash'
    }
  ];

  public buttons: DdrButton[] = [
    {
      text: 'bottom-right',
      value: 'bottom-right'
    },
    {
      text: 'bottom-left',
      value: 'bottom-left'
    },
    {
      text: 'top-right',
      value: 'top-right'
    },
    {
      text: 'top-left',
      value: 'top-left'
    }
  ];

  public position: DdrOrientationButtonSplit = 'bottom-right';

  selectAction(action: DdrAction<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action)
    );
  }

  openActions(open: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate(open ? 'button.split.open' : 'button.split.close')
    );
  }

}
