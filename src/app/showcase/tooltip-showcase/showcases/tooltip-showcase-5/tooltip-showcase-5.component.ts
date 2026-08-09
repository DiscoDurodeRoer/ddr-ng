import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrButton } from 'ddr-ng/models';
import { DdrOrientationTooltip } from 'ddr-ng/types';

@Component({
  selector: 'tooltip-showcase-5',
  templateUrl: './tooltip-showcase-5.component.html',
  imports: [
    DdrButtonMultipleComponent,
    DdrTooltipDirective
  ]
})
export class TooltipShowcase5Component {

  public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up',
      value: 'top',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'right',
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom',
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'left',
    },
  ]);

  public tooltipOrientation: WritableSignal<DdrOrientationTooltip> = signal<DdrOrientationTooltip>('top');

}
