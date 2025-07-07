import { Component, EventEmitter, forwardRef, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { DdrOrientation } from '../../types/types';
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
      useExisting: forwardRef(() => DdrInputFileComponent),
      multi: true,
    },
  ]
})
export class DdrInputFileComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  @Input() label?: string;
  @Input() name: string = '';
  @Input() inline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() required: boolean = false;

  @Input() multiple: boolean = false;
  @Input() accept: string = '*';
  @Input() dragFiles: boolean = false;

  @Output() fileSelected = new EventEmitter<DdrFileHandle>();
  @Output() filesSelected = new EventEmitter<DdrFileHandle[]>();

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

      if (this.multiple) {
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
