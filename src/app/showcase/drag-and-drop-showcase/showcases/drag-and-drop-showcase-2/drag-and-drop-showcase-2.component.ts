import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrDragDropDirective } from 'ddr-ng/directives/drag-and-drop';
import { DdrFileHandle } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'drag-and-drop-showcase-2',
  templateUrl: './drag-and-drop-showcase-2.component.html',
  styleUrl: './drag-and-drop-showcase-2.component.scss',
  imports: [
    DdrDragDropDirective,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcase2Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public dragDropEnabled: WritableSignal<boolean> = signal<boolean>(true);

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files),
    );
  }

  toggleEnabled() {
    this.dragDropEnabled.update((value) => !value);
  }

}
