
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass } from '@angular/common';
import { DdrIconPositionButton, DdrModeButton, DdrOrientatioTooltip, DdrSize, DdrTypeButton } from '../../types/types';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

@Component({
  selector: 'ddr-button',
  templateUrl: './ddr-button.component.html',
  styleUrls: ['./ddr-button.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective,
    DdrTranslatePipe,
    NgClass
  ]
})
export class DdrButtonComponent implements OnInit {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() icon?: string;
  @Input() img?: string;
  @Input() text?: string;
  @Input() block: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: DdrTypeButton = this.constants.TYPE_BUTTON.BUTTON;
  @Input() mode: DdrModeButton = this.constants.MODES_BUTTON.DEFAULT;
  @Input() size: DdrSize = this.constants.SIZE.SMALL;
  @Input() position?: string;
  @Input() border: boolean = true;
  @Input() floatButton: boolean = false;
  @Input() iconPosition: DdrIconPositionButton = 'left';
  @Input() tooltipText?: string;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.TOP;
  @Input() transparent: boolean = false;

  @Output() action: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  ngOnInit() {
    if (this.floatButton && !this.position) {
      this.position = this.constants.ORIENTATION.BOTTOM_RIGHT;
    }
  }

  clickButton($event: any) {
    if (!this.disabled) {
      this.action.emit($event);
    }
  }
}
