import {
  Component,
  inject
} from '@angular/core';
import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
import { DdrFileHandle } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-file-showcase-2',
  templateUrl: './input-file-showcase-2.component.html',
  imports: [
    DdrInputFileComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputFileShowcase2Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  filesSelected(files: DdrFileHandle[]) {
    console.log(files);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.file.upload.files'),
    );
  }
}
