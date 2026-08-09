import {
  Component,
  inject,
  ViewEncapsulation,
  input,
  output,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  ModelSignal,
  model,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormValueControl } from '@angular/forms/signals';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrOrientationTooltip } from 'ddr-ng/types';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrFileHandle } from 'ddr-ng/models';

@Component({
  selector: 'ddr-input-file',
  templateUrl: './ddr-input-file.component.html',
  styleUrl: './ddr-input-file.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrInputGroupComponent],
})
export class DdrInputFileComponent implements FormValueControl<File[]> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> =
    input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly multiple: InputSignal<boolean> = input<boolean>(false);
  readonly accept: InputSignal<string> = input<string>('*');

  public value: ModelSignal<File[]> = model<File[]>([]);

  readonly fileSelected: OutputEmitterRef<DdrFileHandle> = output<DdrFileHandle>();
  readonly filesSelected: OutputEmitterRef<DdrFileHandle[]> = output<DdrFileHandle[]>();

  public fileNames: WritableSignal<string> = signal<string>('');


  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const files: FileList | null = input.files;

    if (files) {
      const ddrFiles: DdrFileHandle[] = Array.from(files).map((file: File) => ({
        file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file),
        ),
      }));

      this.value.set(
        ddrFiles.map((ddrFileHandle: DdrFileHandle) => ddrFileHandle.file),
      );
      this.fileNames.set(
        ddrFiles
          .map((ddrFileHandle: DdrFileHandle) => ddrFileHandle.file.name)
          .join(', '),
      );
      if (this.multiple()) {
        this.filesSelected.emit(ddrFiles);
      } else {
        this.fileSelected.emit(ddrFiles[0]);
      }
    }
  }
}
