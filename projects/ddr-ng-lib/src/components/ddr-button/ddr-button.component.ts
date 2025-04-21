import {
  booleanAttribute,
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
import { DdrModeButton, DdrSize, DdrTypeButton } from '../../types/types';

@Component({
    selector: 'ddr-button',
    templateUrl: './ddr-button.component.html',
    styleUrls: ['./ddr-button.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        DdrTooltipDirective,
        NgClass
    ]
})
export class DdrButtonComponent implements OnInit {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() icon?: string;
  @Input() img?: string;
  @Input() text?: string;
  @Input({ transform: booleanAttribute }) block: boolean = false;
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
  @Input() type: DdrTypeButton = this.constants.TYPE_BUTTON.BUTTON;
  @Input() mode: DdrModeButton = this.constants.MODES_BUTTON.DEFAULT;
  @Input() size: DdrSize = this.constants.SIZE.SMALL;
  @Input() position?: string;
  @Input({ transform: booleanAttribute }) border: boolean = true;
  @Input({ transform: booleanAttribute }) floatButton: boolean = false;
  @Input({ transform: booleanAttribute }) iconLeft: boolean = true;
  @Input() tooltipText?: string;
  @Input({ transform: booleanAttribute }) transparent: boolean = false;

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
