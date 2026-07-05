
import {
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
  input,
  output,
  signal,
  WritableSignal,
  effect,
  InputSignal
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';

import { DdrIconPositionButton, DdrModeButton, DdrOrientation, DdrOrientatioTooltip, DdrSize, DdrTypeButton } from '../../types/types';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

@Component({
  selector: 'ddr-button',
  templateUrl: './ddr-button.component.html',
  styleUrl: './ddr-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective,
    DdrTranslatePipe
  ]
})
export class DdrButtonComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly icon: InputSignal<string | undefined> = input<string | undefined>();
  readonly img: InputSignal<string | undefined> = input<string | undefined>();
  readonly text: InputSignal<string | undefined> = input<string | undefined>();
  readonly block: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly type: InputSignal<DdrTypeButton> = input<DdrTypeButton>(this.constants.TYPE_BUTTON.BUTTON);
  readonly mode: InputSignal<DdrModeButton> = input<DdrModeButton>(this.constants.MODES_BUTTON.DEFAULT);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.SMALL);
  readonly position: InputSignal<DdrOrientation | undefined> = input<DdrOrientation | undefined>();
  readonly border: InputSignal<boolean> = input<boolean>(true);
  readonly floatButton: InputSignal<boolean> = input<boolean>(false);
  readonly iconPosition = input<DdrIconPositionButton>('left');
  readonly tooltipText = input<string>();
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.TOP);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);

  readonly action = output<MouseEvent>();

  public positionButton: WritableSignal<DdrOrientation | undefined> = signal<DdrOrientation | undefined>(this.constants.ORIENTATION.BOTTOM_RIGHT);

  constructor() {
    effect(() => {
      if (this.floatButton() && !this.position()) {
        this.positionButton.set(this.constants.ORIENTATION.BOTTOM_RIGHT);
      } else {
        this.positionButton.set(this.position())
      }
    })
  }

  clickButton($event: any) {
    if (!this.disabled()) {
      this.action.emit($event);
    }
  }
}
