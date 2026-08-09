import {
  Component,
  ViewEncapsulation,
  TemplateRef,
  inject,
  input,
  output,
  contentChild,
  InputSignal,
  OutputEmitterRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrSize, DdrStatusBadge } from 'ddr-ng/types';

@Component({
  selector: 'ddr-badge-pill',
  templateUrl: './ddr-badge-pill.component.html',
  styleUrl: './ddr-badge-pill.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgTemplateOutlet],
})
export class DdrBadgePillComponent {
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly text: InputSignal<string> = input<string>('');
  readonly customClass: InputSignal<string> = input<string>('');
  readonly background: InputSignal<string> = input<string>('');
  readonly type: InputSignal<DdrStatusBadge> = input<DdrStatusBadge>(this.constants.BADGE.INFO);
  readonly canClick: InputSignal<boolean> = input<boolean>(true);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);

  readonly clickBadge: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  readonly templateContentOutside = contentChild<TemplateRef<any>>('templateContent');

  onClickBadge($event: MouseEvent) {
    if (this.canClick()) {
      this.clickBadge.emit($event);
    }
  }
}
