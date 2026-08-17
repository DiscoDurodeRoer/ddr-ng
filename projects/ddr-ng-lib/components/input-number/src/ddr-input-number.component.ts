import {
  AfterViewInit,
  Component,
  computed,
  contentChild,
  effect,
  inject,
  input,
  InputSignal,
  InputSignalWithTransform,
  linkedSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
  signal,
  Signal,
  TemplateRef,
  viewChild,
  WritableSignal
} from '@angular/core';
import { FormValueControl, ValidationError, WithOptionalFieldTree } from '@angular/forms/signals';
import { NgTemplateOutlet } from '@angular/common';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrAutocompleteType, DdrInputError, DdrOrientationTooltip, DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'ddr-input-number',
  templateUrl: './ddr-input-number.component.html',
  styleUrl: './ddr-input-number.component.scss',
  imports: [
    DdrInputComponent,
    NgTemplateOutlet
  ],
})
export class DdrInputNumberComponent implements AfterViewInit, FormValueControl<number> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly ddrInput = viewChild.required(DdrInputComponent, { read: DdrInputComponent });

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly readonly: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> = input<boolean>(false);
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
  readonly errors: InputSignal<readonly ValidationError.WithOptionalFieldTree[]> | InputSignalWithTransform<readonly ValidationError.WithOptionalFieldTree[], unknown> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);;
  readonly disabled: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> = input<boolean>(false);
  readonly name: InputSignal<string> | InputSignalWithTransform<string, unknown> = input<string>('');
  readonly dirty: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> = input<boolean>(false);
  readonly hidden: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown> = input<boolean>(false);
  readonly min: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> = input<number | undefined>();
  readonly max: InputSignal<number | undefined> | InputSignalWithTransform<number | undefined, unknown> = input<number | undefined>();
  readonly allowNegative: InputSignal<boolean> = input<boolean>(true);
  readonly allowDecimals: InputSignal<boolean> = input<boolean>(true);
  readonly step: InputSignal<number> = input<number>(1);
  readonly ariaLabel: InputSignal<string | undefined> = input<string | undefined>(undefined);

  public value: ModelSignal<number> = model<number>(this.minimunValue());

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<number> = output<number>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false);
  public valueInput: WritableSignal<string> = linkedSignal(() => this.value()?.toString())
  private invalidCharacters: Signal<string[]> = computed(() => {
    let invalidCharacters = ['e', 'E', '+'];
    if (!this.allowNegative()) invalidCharacters = invalidCharacters.concat(['-']);
    if (!this.allowDecimals()) invalidCharacters = invalidCharacters.concat([',', '.']);
    return invalidCharacters;
  });

  constructor() {
    effect(() => this.dirtyInput.set(this.dirty()));
    effect(() => this.ddrInput().input().nativeElement.step = this.step().toString())
  }

  ngAfterViewInit(): void {
    const input = this.ddrInput().input().nativeElement;

    input.type = this.constants.TYPE_INPUT.NUMBER;
    input.min = this.min() ? this.min()!.toString() : '';
    input.max = this.max() ? this.max()!.toString() : '';

    input.addEventListener('keydown', (event: KeyboardEvent) => {
      if (this.invalidCharacters().includes(event.key)) event.preventDefault();
    });
  }

  onKeyPressed() {
    this.keyPressed.emit(this.value());
  }

  onInput(inputText: string) {
    this.dirtyInput.set(true);
    let value = inputText == "" ? this.minimunValue() : +inputText;
    this.value.set(value);
    this.valueInput.set(value.toString())
  }

  onClickInput($event: MouseEvent) {
    if (!this.disabled()) {
      this.clickInput.emit($event);
    }
  }

  onFocusLost() {
    this.focusLost.emit();
  }

  private minimunValue() {
    return Math.min(this.min() ?? Infinity, this.max() ?? Infinity, 0)
  }

}
