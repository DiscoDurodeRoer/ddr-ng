import { Component, inject } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrFileHandle, DdrInputFileComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';

@Component({
  selector: 'input-file-showcase',
  templateUrl: './input-file-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputFileComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputFileShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  fileSelected(file: DdrFileHandle) {
    console.log(file);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.file.upload.file'),
    )
  }

  filesSelected(files: DdrFileHandle[]) {
    console.log(files);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.file.upload.files'),
    )
  }

}
