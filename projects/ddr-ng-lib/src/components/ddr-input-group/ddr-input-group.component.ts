import {
  Component,
  ViewEncapsulation,
  forwardRef,
  TemplateRef,
  inject,
  numberAttribute,
  input,
  output,
  viewChild,
  contentChild,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  ModelSignal,
  OutputRef,
  model,
  computed
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';

import { NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-input-group',
  templateUrl: './ddr-input-group.component.html',
  styleUrls: ['./ddr-input-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputComponent,
    NgTemplateOutlet
  ]
})
export class DdrInputGroupComponent implements FormValueControl<string | number> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly icon: InputSignal<string> = input<string>('');
  readonly name: InputSignal<string> = input<string>('');
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly type: InputSignal<DdrTypeInput> = input<DdrTypeInput>(this.constants.TYPE_INPUT.TEXT);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  // readonly pattern: InputSignal<string> = input<string>('');
  // readonly maxlength: InputSignal<string | number | null> = input<string | number | null>(null);
  // readonly minlength: InputSignal<string | number | null> = input<string | number | null>(null);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly disabledButton: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  // readonly min: InputSignal<number | null> = input<number | null>(null);
  // readonly max: InputSignal<number | null> = input<number | null>(null);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly focus: InputSignal<boolean> = input<boolean>(false);
  readonly autocomplete: InputSignal<AutocompleteType> = input<AutocompleteType>('off');

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly action: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();
  readonly focusLost: OutputEmitterRef<void> = output<void>();

  readonly input = viewChild(DdrInputComponent, { read: DdrInputComponent });
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public errorsInput: WritableSignal<DdrInputError> = signal<DdrInputError>(this.constants.INPUT_ERRORS.NEUTRAL);

  value: ModelSignal<string | number> = model<string | number>('');

  min: InputSignal<number | undefined> = input<number | undefined>(undefined);
  minlength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  max: InputSignal<number | undefined> = input<number | undefined>(undefined);
  maxlength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);

  htmlPattern = computed(() => {
    const patterns = this.pattern();
    if (!patterns.length) return null;

    return patterns[0].source;
  });

  constructor() {

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
