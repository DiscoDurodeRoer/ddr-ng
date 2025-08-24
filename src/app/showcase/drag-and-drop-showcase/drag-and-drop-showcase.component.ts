import { Component, inject } from '@angular/core';
import { DdrToastService, DdrFileHandle, DdrDragDropDirective, DdrButtonComponent, DdrTranslateService, DdrTranslatePipe } from 'ddr-ng'
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'drag-and-drop-showcase',
  templateUrl: './drag-and-drop-showcase.component.html',
  styleUrls: ['./drag-and-drop-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrDragDropDirective,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public dragDropEnabled: boolean = true;

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files)
    );
  }

  toggleEnabled() {
    this.dragDropEnabled = !this.dragDropEnabled;
  }

}
