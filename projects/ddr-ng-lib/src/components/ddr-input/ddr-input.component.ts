import {
  Component,
  inject,
  TemplateRef,
  ViewEncapsulation,
  input,
  output,
  viewChild,
  contentChild,
  InputSignal,
  OutputEmitterRef,
  ModelSignal,
  model,
  computed,
  OutputRef,
  ElementRef,
  effect
} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';
import { DdrSetFocusDirective } from '../../directives/ddr-set-focus.directive';
import { DisabledReason, Field, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrls: ['./ddr-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrTooltipDirective,
    DdrSetFocusDirective,
    NgTemplateOutlet,
    Field
  ]
})
export class DdrInputComponent implements FormValueControl<string | number> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder: InputSignal<string> = input<string>('');
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly type = input<DdrTypeInput>(this.constants.TYPE_INPUT.TEXT);
  readonly name: InputSignal<string> = input<string>('');
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  // readonly maxlength: InputSignal<string | number | null> = input<string | number | null>(null);
  // readonly minlength: InputSignal<string | number | null> = input<string | number | null>(null);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly border: InputSignal<boolean> = input<boolean>(true);
  // readonly pattern: InputSignal<string> = input<string>('');
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  // readonly min: InputSignal<number | null> = input<number | null>(null);
  // readonly max: InputSignal<number | null> = input<number | null>(null);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly focus: InputSignal<boolean> = input<boolean>(false);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly autocomplete: InputSignal<AutocompleteType> = input<AutocompleteType>('off');

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  value: ModelSignal<string | number> = model<string | number>('');
  min: InputSignal<number | undefined> = input<number | undefined>(undefined);
  max: InputSignal<number | undefined> = input<number | undefined>(undefined);
  pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);
  errors: InputSignal<readonly WithOptionalField<ValidationError>[]> = input<readonly WithOptionalField<ValidationError>[]>([]);
  dirty: InputSignal<boolean> = input<boolean>(false);
  minlength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  maxlength: InputSignal<number | undefined> = input<number | undefined>(undefined);

  htmlPattern = computed(() => {
    const patterns = this.pattern();
    if (!patterns.length) return null;

    return patterns[0].source;
  });

  constructor() {

  }

  checkInput() {

    // if (this.constants.TYPE_INPUT.NUMBER == this.type()) {
    //   this.value.set(+this.value);

    //   const min = this.min!();
    //   if (min && min !== undefined && +this.value() < min) {
    //     this.value.set(min);
    //   }
    //   const max = this.max!();
    //   if (max && max !== undefined && +this.value() > max) {
    //     this.value.set(max);
    //   }
    // }

    // const inputValue = this.input();
    // if (this.validate() && inputValue) {
    //   if (inputValue) {
    //     this.hasErrors.emit(this.constants.INPUT_ERRORS.VALID);
    //   } else {
    //     this.hasErrors.emit(this.constants.INPUT_ERRORS.ERROR);
    //   }
    // } else {
    //   this.hasErrors.emit(this.constants.INPUT_ERRORS.NEUTRAL);
    // }
    this.keyPressed.emit(this.value().toString());
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

  onFocusLost() {
    this.focusLost.emit();
  }

}
