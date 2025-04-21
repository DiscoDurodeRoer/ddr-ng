import { Component, ContentChild, ElementRef, forwardRef, Input, Output, TemplateRef, ViewChild, EventEmitter, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DdrOrientation } from '../../types/types';

@Component({
  selector: 'ddr-textarea',
  templateUrl: './ddr-textarea.component.html',
  styleUrls: ['./ddr-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    DdrNgModelBase,
    DdrTooltipDirective,
    NgClass,
    NgTemplateOutlet
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrTextareaComponent),
      multi: true
    }
  ]
})
export class DdrTextareaComponent extends DdrNgModelBase {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() placeholder: string = '';
  @Input() label?: string;
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxlength: number | null = null;
  @Input() minlength: number | null = null;
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() inline: boolean = false;
  @Input() rows: number = 1;
  @Input() cols: number = 10;
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold:boolean=false;

  @ContentChild('templateValid', { static: false }) templateValid!: TemplateRef<any> | null;
  @ContentChild('templateErrors', { static: false }) templateErrors!: TemplateRef<any> | null;

  @Output() clickTextarea: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyup: EventEmitter<string> = new EventEmitter<string>();
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    super();
  }

  onclick($event: MouseEvent) {
    this.clickTextarea.emit($event);
  }

  onKeyup() {
    this.keyup.emit(this.value);
  }

  onblur() {
    this.blur.emit();
  }

}
