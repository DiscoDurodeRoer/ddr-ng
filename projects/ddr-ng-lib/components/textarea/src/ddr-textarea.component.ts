import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  input,
  output,
  contentChild,
  InputSignal,
  Signal,
  OutputEmitterRef,
  ModelSignal,
  model,
  computed,
  WritableSignal,
  signal,
  effect,
  viewChild,
  ElementRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  FormValueControl,
  MaxLengthValidationError,
  MinLengthValidationError,
  RequiredValidationError,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrOrientationTooltip } from 'ddr-ng/types';

@Component({
  selector: 'ddr-textarea',
  templateUrl: './ddr-textarea.component.html',
  styleUrl: './ddr-textarea.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrTooltipDirective, NgTemplateOutlet],
})
export class DdrTextareaComponent implements FormValueControl<string> {
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

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
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  public errors: InputSignal<readonly WithOptionalFieldTree<ValidationError>[]> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
  public dirty: InputSignal<boolean> = input<boolean>(false);
  public minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  public maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);

  public value: ModelSignal<string> = model<string>('');

  readonly clickTextarea: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly blur: OutputEmitterRef<void> = output<void>();

  readonly templateValid: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateValid');
  readonly templateErrors: Signal<TemplateRef<any> | null> = contentChild.required<TemplateRef<any> | null>('templateErrors');

  readonly textarea = viewChild.required<ElementRef<HTMLTextAreaElement>>('textarea');

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
  }

  onInput(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.value.set(input.value);
    if (this.validate()) {
      this.updateHtmlErrors();
    }
    this.dirtyInput.set(true);
  }

  onClick($event: MouseEvent) {
    if (!this.disabled()) {
      this.clickTextarea.emit($event);
    }
  }

  onKeyup() {
    this.keyPressed.emit(this.value());
  }

  onBlur() {
    this.blur.emit();
  }

  private updateHtmlErrors() {
    if (this.detectedSignalForms()) return;

    const validity = this.textarea().nativeElement.validity;

    const errors: WithOptionalFieldTree<ValidationError>[] = [];

    if (validity.valueMissing) errors.push(new RequiredValidationError());
    if (validity.tooShort) errors.push(new MinLengthValidationError(this.minLength()!));
    if (validity.tooLong) errors.push(new MaxLengthValidationError(this.maxLength()!));

    this.htmlErrors.set(errors);
  }
}
