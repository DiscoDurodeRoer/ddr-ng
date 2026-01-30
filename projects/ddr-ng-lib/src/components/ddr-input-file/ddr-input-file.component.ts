import { Component, forwardRef, inject, ViewEncapsulation, input, output } from '@angular/core';
import { DdrOrientation, DdrOrientatioTooltip } from '../../types/types';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrFileHandle } from '../../common/ddr-file-handler.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ddr-input-file',
  templateUrl: './ddr-input-file.component.html',
  styleUrl: './ddr-input-file.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrInputFileComponent,
      multi: true,
    },
  ]
})
export class DdrInputFileComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  readonly label = input<string>();
  readonly name = input<string>('');
  readonly inline = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly tooltipText = input<string>();
  readonly labelBold = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly required = input<boolean>(false);

  readonly multiple = input<boolean>(false);
  readonly accept = input<string>('*');

  readonly fileSelected = output<DdrFileHandle>();
  readonly filesSelected = output<DdrFileHandle[]>();

  public fileNames: string = ''

  constructor() {
    super();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;

    if (files) {
      const ddrFiles: DdrFileHandle[] = Array.from(files).map((file: File) => ({
        file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      }))

      if (this.multiple()) {
        this.value = Array.from(files).map((file: File) => file);
        this.fileNames = Array.from(files).map(f => f.name).join(', ');
        this.filesSelected.emit(ddrFiles);
      } else {
        this.value = ddrFiles[0].file;
        this.fileNames = ddrFiles[0].file.name;
        this.fileSelected.emit(ddrFiles[0]);
      }
    }

  }

}
