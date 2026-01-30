import { Component, inject, ViewEncapsulation, input, output, InputSignal, OutputEmitterRef, WritableSignal, signal, ModelSignal, OutputRef, model } from '@angular/core';
import { DdrOrientatioTooltip } from '../../types/types';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrFileHandle } from '../../common/ddr-file-handler.model';
import { DomSanitizer } from '@angular/platform-browser';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-input-file',
  templateUrl: './ddr-input-file.component.html',
  styleUrl: './ddr-input-file.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    FormsModule
  ]
})
export class DdrInputFileComponent implements FormValueControl<File | null> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly required: InputSignal<boolean> = input<boolean>(false);

  readonly multiple: InputSignal<boolean> = input<boolean>(false);
  readonly accept: InputSignal<string> = input<string>('*');

  readonly fileSelected: OutputEmitterRef<DdrFileHandle> = output<DdrFileHandle>();
  readonly filesSelected: OutputEmitterRef<DdrFileHandle[]> = output<DdrFileHandle[]>();

  public fileNames: WritableSignal<string> = signal('');

  constructor() {
    
  }
  value: ModelSignal<File | null> = model<File | null>(null);
  
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;

    if (files) {
      const ddrFiles: DdrFileHandle[] = Array.from(files).map((file: File) => ({
        file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      }))

      if (this.multiple()) {
        // this.value.set(Array.from(files).map((file: File) => file));
        this.fileNames.set(Array.from(files).map(f => f.name).join(', '));
        this.filesSelected.emit(ddrFiles);
      } else {
        this.value.set(ddrFiles[0].file);
        this.fileNames.set(ddrFiles[0].file.name);
        this.fileSelected.emit(ddrFiles[0]);
      }
    }

  }

}
