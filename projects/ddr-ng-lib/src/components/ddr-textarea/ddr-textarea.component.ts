import { Component, forwardRef, TemplateRef, ViewEncapsulation, inject, input, output, contentChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientatioTooltip } from '../../types/types';

@Component({
  selector: 'ddr-textarea',
  templateUrl: './ddr-textarea.component.html',
  styleUrls: ['./ddr-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrTooltipDirective,
    NgTemplateOutlet
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrTextareaComponent,
      multi: true
    }
  ]
})
export class DdrTextareaComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder = input<string>('');
  readonly label = input<string>();
  readonly name = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly maxlength = input<string | number | null>(null);
  readonly minlength = input<string | number | null>(null);
  readonly required = input<boolean>(false);
  readonly validate = input<boolean>(false);
  readonly inline = input<boolean>(false);
  readonly rows = input<number>(1);
  readonly cols = input<number>(10);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly labelBold = input<boolean>(false);

  readonly templateValid = contentChild.required<TemplateRef<any> | null>('templateValid');
  readonly templateErrors = contentChild.required<TemplateRef<any> | null>('templateErrors');

  readonly clickTextarea = output<MouseEvent>();
  readonly keyPressed = output<string>();
  readonly blur = output<void>();

  constructor() {
    super();
  }

  onclick($event: MouseEvent) {
    this.clickTextarea.emit($event);
  }

  onKeyup() {
    this.keyPressed.emit(this.value);
  }

  onblur() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.blur.emit();
  }

}
