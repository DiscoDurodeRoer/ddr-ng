import { Component, EventEmitter, forwardRef, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrls: ['./ddr-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrNgModelBase,
    DdrTooltipDirective,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrToggleComponent),
      multi: true,
    },
  ],
})
export class DdrToggleComponent extends DdrNgModelBase {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() label?: string;
  @Input() inline: boolean = false;
  @Input() required: boolean = false;
  @Input() tooltipText?: string;
  @Input() small: boolean = false;

  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super();
  }

  onClick() {
    this.value = !this.value;
    this.toggled.emit(this.value);
  }

}
