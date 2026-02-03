import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation, input, output, InputSignal, OutputEmitterRef, ModelSignal, model } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { DdrOrientatioTooltip, DdrSize } from '../../types/types';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrl: './ddr-toggle.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DdrTooltipDirective
  ]
})
export class DdrToggleComponent implements FormValueControl<boolean> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);

  readonly toggled: OutputEmitterRef<boolean> = output<boolean>();

  value: ModelSignal<boolean> = model<boolean>(false);

  onClick() {
    this.value.update((value: boolean) => !value);
    this.toggled.emit(this.value());
  }

}
