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
  ElementRef,
  effect,
  signal,
  WritableSignal,
  InputSignalWithTransform
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  FormValueControl,
  MaxLengthValidationError,
  MaxValidationError,
  MinLengthValidationError,
  MinValidationError,
  PatternValidationError,
  RequiredValidationError,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrAutocompleteType, DdrInputError, DdrOrientationTooltip, DdrSize } from 'ddr-ng/types';
import { DdrSetFocusDirective } from './directives/ddr-set-focus.directive';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrl: './ddr-input.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrTooltipDirective, DdrSetFocusDirective, NgTemplateOutlet],
})
export class DdrInputComponent implements FormValueControl<string> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly placeholder: InputSignal<string> = input<string>('');
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly border: InputSignal<boolean> = input<boolean>(true);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly focus: InputSignal<boolean> = input<boolean>(false);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly autocomplete: InputSignal<DdrAutocompleteType> = input<DdrAutocompleteType>('off');
  readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([],);
  readonly errors: InputSignal<readonly WithOptionalFieldTree<ValidationError>[]> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
  readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly name: InputSignal<string> = input<string>('');
  readonly dirty: InputSignal<boolean> = input<boolean>(false);
  readonly hidden: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> = input<boolean>(false);

  public value: ModelSignal<string> = model<string>('');

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly inputText: OutputEmitterRef<string> = output<string>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid',);
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors',);

  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false);
  private readonly detectedSignalForms: WritableSignal<boolean> = signal<boolean>(false);
  readonly htmlErrors = signal<WithOptionalFieldTree<ValidationError>[]>([]);

  readonly valid = computed(() => this.htmlErrors().length === 0 && this.errors().length === 0);
  readonly currentErrors = computed(() => {
    if (this.htmlErrors().length > 0) {
      return this.htmlErrors();
    }
    return this.errors();
  });
  readonly usingSignalForms = computed(() => this.detectedSignalForms());

  constructor() {
    effect(() => this.dirtyInput.set(this.dirty()));
    effect(() => {
      if (!this.detectedSignalForms() && this.errors().length > 0) {
        this.detectedSignalForms.set(true);
      }
    });
    effect(() => {
      if (this.validate() && this.dirtyInput() && this.value() !== undefined) {
        this.updateHtmlErrors();
      }
    })
    effect(() => {
      if (this.validate() && this.dirtyInput() && this.value() !== undefined) {
        if (this.valid()) {
          this.hasErrors.emit(this.constants.INPUT_ERRORS.VALID);
        } else {
          this.hasErrors.emit(this.constants.INPUT_ERRORS.ERROR);
        }
      } else {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.NEUTRAL);
      }
    })
  }

  onKeyPressed() {
    this.keyPressed.emit(this.value().toString());
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this.dirtyInput.set(true);
    this.inputText.emit(input.value);
  }

  onClickInput($event: MouseEvent) {
    if (!this.disabled()) {
      this.clickInput.emit($event);
    }
  }

  onFocusLost() {
    this.focusLost.emit();
  }

  updateHtmlErrors() {
    if (this.detectedSignalForms()) return;

    const validity = this.input().nativeElement.validity;

    const errors: WithOptionalFieldTree<ValidationError>[] = [];

    if (validity.valueMissing || !this.value()) errors.push(new RequiredValidationError());
    if (validity.tooShort) errors.push(new MinLengthValidationError(this.minLength()!));
    if (validity.tooLong) errors.push(new MaxLengthValidationError(this.maxLength()!));
    if (validity.patternMismatch) errors.push(new PatternValidationError(this.pattern()[0]));
    if (validity.rangeUnderflow) errors.push(new MinValidationError(+this.input().nativeElement.min));
    if (validity.rangeOverflow) errors.push(new MaxValidationError(+this.input().nativeElement.max));

    this.htmlErrors.set(errors);
  }
}
