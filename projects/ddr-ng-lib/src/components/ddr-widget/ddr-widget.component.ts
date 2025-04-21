import { Component, ElementRef, EventEmitter, inject, Input, Output, ViewEncapsulation } from '@angular/core';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { DdrSplitButtonComponent } from '../ddr-split-button/ddr-split-button.component';
import { DdrCardComponent } from '../ddr-card/ddr-card.component'
import { DdrDragDropDirective } from '../../directives/ddr-drag-drop.directive';
import { DdrSkeletonComponent } from '../ddr-skeleton/ddr-skeleton.component'
import { NgClass } from '@angular/common';
import { DdrOrientation, DdrSkeletonMode } from '../../types/types';

@Component({
  selector: 'ddr-widget',
  templateUrl: './ddr-widget.component.html',
  styleUrls: ['./ddr-widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrCardComponent,
    DdrSplitButtonComponent,
    DdrSkeletonComponent,
    DdrDragDropDirective, 
    DdrTooltipDirective,
    NgClass
  ]
})
export class DdrWidgetComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly elem: ElementRef = inject(ElementRef);

  @Input() id!: string;
  @Input() widgetTitle?: string;
  @Input() tooltipText?: string;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.LEFT;
  @Input() showHeader: boolean = true;
  @Input() rounded: boolean = true;
  @Input() border: boolean = true;
  @Input() shadow: boolean = true;
  @Input() actions: DdrAction<any>[] = [];
  @Input() showActions: boolean = true;
  @Input() load: boolean = true;
  @Input() modeSkeleton: DdrSkeletonMode = this.constants.SKELETON.CARD;
  @Input() nElementsSkeleton: number = 1;

  @Output() selectAction: EventEmitter<DdrAction<any>> = new EventEmitter<DdrAction<any>>();

  onSelectAction($event: DdrAction<any>) {
    this.selectAction.emit($event);
  }

}
