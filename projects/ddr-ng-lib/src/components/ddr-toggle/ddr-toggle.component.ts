import { Component, EventEmitter, forwardRef, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass } from '@angular/common';
import { DdrOrientatioTooltip, DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrls: ['./ddr-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrControlValueAccessor,
    DdrTooltipDirective,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrToggleComponent),
      multi: true,
    },
  ]
})
export class DdrToggleComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() label?: string;
  @Input() inline: boolean = false;
  @Input() tooltipText?: string;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.BOTTOM;
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super();
  }

  onClick() {
    this.value = !this.value;
    this.toggled.emit(this.value);
  }

}
