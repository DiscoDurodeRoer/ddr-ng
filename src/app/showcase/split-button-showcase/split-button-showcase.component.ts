import { Component, inject } from '@angular/core';
import { DdrAction, DdrSplitButtonComponent, DdrToastService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-split-button-showcase',
  templateUrl: './split-button-showcase.component.html',
  styleUrls: ['./split-button-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrSplitButtonComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class SplitButtonShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  public actions: DdrAction<string>[] = [
    {
      label: 'Save',
      value: 'SAVE',
      item: 'save',
      icon: 'bi bi-floppy'
    },
    {
      label: 'Update',
      value: 'UPDATE',
      item: 'update',
      icon: 'bi bi-arrow-clockwise'
    },
    {
      label: 'Delete',
      value: 'DELETE',
      item: 'delete',
      icon: 'bi bi-trash'
    }
  ];

  selectAction($event: any) {
    this.ddrToastService.addSuccessMessage("Accion seleccionada ejemplo 1", JSON.stringify($event));
  }

}
