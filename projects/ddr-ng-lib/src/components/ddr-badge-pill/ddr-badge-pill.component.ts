import { Component, ViewEncapsulation, TemplateRef, inject, input, output, contentChild } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { NgTemplateOutlet } from '@angular/common';
import { DdrSize, DdrStatusBadge } from '../../types/types';

@Component({
  selector: 'ddr-badge-pill',
  templateUrl: './ddr-badge-pill.component.html',
  styleUrls: ['./ddr-badge-pill.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet
  ]
})
export class DdrBadgePillComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly text = input<string>('');
  readonly customClass = input<string>('');
  readonly background = input<string>('');
  readonly type = input<DdrStatusBadge>(this.constants.BADGE.INFO);
  readonly canClick = input<boolean>(true);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly templateContentOutside = contentChild<TemplateRef<any>>("templateContent");

  readonly clickBadge = output<MouseEvent>();

  onClickBadge($event: MouseEvent) {
    if (this.canClick()) {
      this.clickBadge.emit($event);
    }
  }

}
