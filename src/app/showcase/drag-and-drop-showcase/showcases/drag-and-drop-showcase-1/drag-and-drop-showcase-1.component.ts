import {
  Component,
  inject
} from '@angular/core';
import { DdrDragDropDirective } from 'ddr-ng/directives/drag-and-drop';
import { DdrFileHandle } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'drag-and-drop-showcase-1',
  templateUrl: './drag-and-drop-showcase-1.component.html',
  styleUrl: './drag-and-drop-showcase-1.component.scss',
  imports: [
    DdrDragDropDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcase1Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files),
    );
  }

}
