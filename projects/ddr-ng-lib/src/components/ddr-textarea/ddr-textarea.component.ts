import { Component, TemplateRef, ViewEncapsulation, inject, input, output, contentChild, InputSignal, Signal, OutputEmitterRef, ModelSignal, model, OutputRef, computed, WritableSignal, signal, effect } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { DdrOrientatioTooltip } from '../../types/types';
import { FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-textarea',
  templateUrl: './ddr-textarea.component.html',
  styleUrl: './ddr-textarea.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective,
    NgTemplateOutlet,
    JsonPipe
  ]
})
export class DdrTextareaComponent implements FormValueControl<string> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder: InputSignal<string> = input<string>('');
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly rows: InputSignal<number> = input<number>(1);
  readonly cols: InputSignal<number> = input<number>(10);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);

  value: ModelSignal<string> = model<string>('');
  errors: InputSignal<readonly WithOptionalField<ValidationError>[]> = input<readonly WithOptionalField<ValidationError>[]>([]);
  dirty: InputSignal<boolean> = input<boolean>(false);
  minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);

  readonly templateValid: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateValid');
  readonly templateErrors: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateErrors');

  readonly clickTextarea: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly blur: OutputEmitterRef<void> = output<void>();

  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false)
  public valid: Signal<boolean> = computed<boolean>(() => this.errors().length == 0)

  constructor() {
    effect(() => this.dirtyInput.set(this.dirty()))
  }

  onInput(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.value.set(input.value);
    this.dirtyInput.set(true)
  }

  onClick($event: MouseEvent) {
    if(!this.disabled()){
      this.clickTextarea.emit($event);
    }
  }

  onKeyup() {
    this.keyPressed.emit(this.value());
  }

  onBlur() {
    this.blur.emit();
  }

}
