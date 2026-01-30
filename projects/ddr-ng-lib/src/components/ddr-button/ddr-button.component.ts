
import {
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
  input,
  output,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';

import { DdrIconPositionButton, DdrModeButton, DdrOrientation, DdrOrientatioTooltip, DdrSize, DdrTypeButton } from '../../types/types';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

@Component({
  selector: 'ddr-button',
  templateUrl: './ddr-button.component.html',
  styleUrls: ['./ddr-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective,
    DdrTranslatePipe
]
})
export class DdrButtonComponent implements OnInit {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly icon = input<string>();
  readonly img = input<string>();
  readonly text = input<string>();
  readonly block = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly type = input<DdrTypeButton>(this.constants.TYPE_BUTTON.BUTTON);
  readonly mode = input<DdrModeButton>(this.constants.MODES_BUTTON.DEFAULT);
  readonly size = input<DdrSize>(this.constants.SIZE.SMALL);
  readonly position = input<string>();
  readonly border = input<boolean>(true);
  readonly floatButton = input<boolean>(false);
  readonly iconPosition = input<DdrIconPositionButton>('left');
  readonly tooltipText = input<string>();
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.TOP);
  readonly transparent = input<boolean>(false);

  readonly action = output<MouseEvent>();

  public positionButton: WritableSignal<DdrOrientation> = signal('');

  ngOnInit() {
    if (this.floatButton() && !this.position()) {
      this.position = this.constants.ORIENTATION.BOTTOM_RIGHT;
    }
  }

  clickButton($event: any) {
    if (!this.disabled()) {
      this.action.emit($event);
    }
  }
}
