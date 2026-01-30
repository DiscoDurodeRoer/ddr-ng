import { Component, TemplateRef, ViewEncapsulation, inject, input, output, contentChild, InputSignal, Signal, OutputEmitterRef, ModelSignal, model, OutputRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientatioTooltip } from '../../types/types';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-textarea',
  templateUrl: './ddr-textarea.component.html',
  styleUrls: ['./ddr-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrTooltipDirective,
    NgTemplateOutlet
  ]
})
export class DdrTextareaComponent implements FormValueControl<string> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder: InputSignal<string> = input<string>('');
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  // readonly maxlength: InputSignal<string | number | null> = input<string | number | null>(null);
  // readonly minlength: InputSignal<string | number | null> = input<string | number | null>(null);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly rows: InputSignal<number> = input<number>(1);
  readonly cols: InputSignal<number> = input<number>(10);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);

  readonly templateValid: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateValid');
  readonly templateErrors: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateErrors');

  readonly clickTextarea: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly blur: OutputEmitterRef<void> = output<void>();

  value: ModelSignal<string> = model<string>('');
  errors: InputSignal<readonly WithOptionalField<ValidationError>[]> = input<readonly WithOptionalField<ValidationError>[]>([]);
  dirty: InputSignal<boolean> = input<boolean>(false);
  minlength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  maxlength: InputSignal<number | undefined> = input<number | undefined>(undefined);

  constructor() {

  }

  onclick($event: MouseEvent) {
    this.clickTextarea.emit($event);
  }

  onKeyup() {
    this.keyPressed.emit(this.value());
  }

  onblur() {
    this.blur.emit();
  }

}
