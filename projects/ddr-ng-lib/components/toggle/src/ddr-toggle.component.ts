import {
  Component,
  inject,
  ViewEncapsulation,
  input,
  output,
  InputSignal,
  OutputEmitterRef,
  ModelSignal,
  model
} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import {
  DdrSize,
  DdrOrientationTooltip
} from 'ddr-ng/types';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrl: './ddr-toggle.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective
  ]
})
export class DdrToggleComponent implements FormValueControl<boolean> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);

  public value: ModelSignal<boolean> = model<boolean>(false);

  readonly toggled: OutputEmitterRef<boolean> = output<boolean>();

  onClick() {
    this.value.update((value: boolean) => !value);
    this.toggled.emit(this.value());
  }

}
