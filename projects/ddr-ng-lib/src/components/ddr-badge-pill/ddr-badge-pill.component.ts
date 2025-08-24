import { Component, Input, EventEmitter, Output, ViewEncapsulation, ContentChild, TemplateRef, inject } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { DdrSize, DdrStatusBadge } from '../../types/types';


@Component({
  selector: 'ddr-badge-pill',
  templateUrl: './ddr-badge-pill.component.html',
  styleUrls: ['./ddr-badge-pill.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass,
    NgStyle,
    NgTemplateOutlet
  ]
})
export class DdrBadgePillComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() text: string = '';
  @Input() customClass: string = '';
  @Input() background: string = '';
  @Input() type: DdrStatusBadge = this.constants.BADGE.INFO;
  @Input() canClick: boolean = true;
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;
  @ContentChild("templateContent", { static: false }) templateContentOutside?: TemplateRef<any>;

  @Output() clickBadge: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  onclickBadge($event: MouseEvent) {
    if (this.canClick) {
      this.clickBadge.emit($event);
    }
  }

}
