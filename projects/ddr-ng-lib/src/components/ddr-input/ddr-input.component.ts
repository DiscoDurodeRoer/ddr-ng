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
  Signal
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';
import { DdrSetFocusDirective } from '../../directives/ddr-set-focus.directive';
import { Field, form, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrl: './ddr-input.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTooltipDirective,
    DdrSetFocusDirective,
    NgTemplateOutlet,
    Field,
    JsonPipe
  ]
})
export class DdrInputComponent implements FormValueControl<string | number> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder: InputSignal<string> = input<string>('');
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly type = input<DdrTypeInput>(this.constants.TYPE_INPUT.TEXT);
  // readonly disabled: InputSignal<boolean> = input<boolean>(false);
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




  readonly value: ModelSignal<string | number> = model<string | number>('');
  readonly min: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly max: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);
  readonly errors: InputSignal<readonly WithOptionalField<ValidationError>[]> = input<readonly WithOptionalField<ValidationError>[]>([]);
  readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly name: InputSignal<string> = input<string>('');
  readonly dirty: InputSignal<boolean> = input<boolean>(false)


  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');
  
  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false)
  public valid: Signal<boolean> = computed<boolean>(() => this.errors().length == 0)
  public patternAttr(): string | null {
    const patterns = this.pattern();

    if (!patterns || patterns.length === 0) {
      return null;
    }

    return patterns.map(p => p.source).join('|');
  }
  
  constructor(){
    effect(() => this.dirtyInput.set(this.dirty()))
  }

  onKeyPressed() {
    this.keyPressed.emit(this.value().toString());
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if(this.type() === this.constants.TYPE_INPUT.NUMBER){
      this.value.set(+input.value);
    }else{
      this.value.set(input.value);
    }

    if (this.validate()) {
      if (this.valid()) {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.VALID);
      } else {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.ERROR);
      }
    } else {
      this.hasErrors.emit(this.constants.INPUT_ERRORS.NEUTRAL);
    }
    this.dirtyInput.set(true)
  }

  onClickInput($event: MouseEvent) {
    if(!this.disabled()){
      this.clickInput.emit($event);
    }
  }

  onFocusLost() {
    this.focusLost.emit();
  }

}
