import {
  Component,
  ViewEncapsulation,
  TemplateRef,
  inject,
  input,
  output,
  viewChild,
  contentChild,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  ModelSignal,
  model,
  effect,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  FormValueControl,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrAutocompleteType, DdrInputError, DdrOrientationTooltip, DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'ddr-input-group',
  templateUrl: './ddr-input-group.component.html',
  styleUrl: './ddr-input-group.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrButtonComponent, DdrInputComponent, NgTemplateOutlet],
})
export class DdrInputGroupComponent implements FormValueControl<string> {
  
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly icon: InputSignal<string> = input<string>('');
  readonly name: InputSignal<string> = input<string>('');
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly disabledButton: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly focus: InputSignal<boolean> = input<boolean>(false);
  readonly autocomplete: InputSignal<DdrAutocompleteType> = input<DdrAutocompleteType>('off');
  readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([],);
  readonly errors: InputSignal<readonly WithOptionalFieldTree<ValidationError>[]> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);
  readonly dirty: InputSignal<boolean> = input<boolean>(false);

  public value: ModelSignal<string> = model<string>('');

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly action: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly input = viewChild(DdrInputComponent, { read: DdrInputComponent });
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid',);
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public errorsInput: WritableSignal<DdrInputError> = signal<DdrInputError>(this.constants.INPUT_ERRORS.NEUTRAL,);
  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    effect(() => this.dirtyInput.set(this.dirty()));
  }

  clickButton($ev: any) {
    if (!this.disabled()) {
      this.action.emit($ev);
    }
  }

  checkInput(errors: DdrInputError) {
    this.errorsInput.set(errors);
    this.hasErrors.emit(errors);
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

  onKeyup($event: string) {
    this.keyPressed.emit($event);
  }

  onFocusLost() {
    this.focusLost.emit();
  }
}
