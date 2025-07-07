import { Component, inject } from '@angular/core';
import { DdrToastService, DdrFileHandle, DdrDragDropDirective, DdrButtonComponent } from 'ddr-ng'
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-drag-and-drop-showcase',
  templateUrl: './drag-and-drop-showcase.component.html',
  styleUrls: ['./drag-and-drop-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrDragDropDirective,
    DdrButtonComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);

  public dragAndDropEnabled: boolean = true;

  loadFiles($event: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage("Exito", "Fichero recogidos " + JSON.stringify($event));
  }

  toggleEnabled() {
    this.dragAndDropEnabled = !this.dragAndDropEnabled;
  }

}
