import {
  Component,
  forwardRef,
  inject,
  numberAttribute,
  TemplateRef,
  ViewEncapsulation,
  input,
  output,
  viewChild,
  contentChild
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';
import { DdrSetFocusDirective } from '../../directives/ddr-set-focus.directive';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrls: ['./ddr-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrTooltipDirective,
    DdrSetFocusDirective,
    NgTemplateOutlet
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrInputComponent,
      multi: true,
    },
  ]
})
export class DdrInputComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly placeholder = input<string>('');
  readonly label = input<string>();
  readonly type = input<DdrTypeInput>(this.constants.TYPE_INPUT.TEXT);
  readonly name = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly maxlength = input<string | number | null>(null);
  readonly minlength = input<string | number | null>(null);
  readonly required = input<boolean>(false);
  readonly validate = input<boolean>(false);
  readonly inline = input<boolean>(false);
  readonly border = input<boolean>(true);
  readonly pattern = input<string>('');
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly min = input<number | null>(null);
  readonly max = input<number | null>(null);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly labelBold = input<boolean>(false);
  readonly focus = input<boolean>(false);
  readonly transparent = input<boolean>(false);
  readonly autocomplete = input<AutocompleteType>('off');

  readonly hasErrors = output<DdrInputError>();
  readonly clickInput = output<MouseEvent>();
  readonly keyPressed = output<string>();
  readonly focusLost = output<void>();

  readonly input = viewChild.required<NgModel>('input');

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  constructor() {
    super();
  }

  checkInput() {

    if (this.constants.TYPE_INPUT.NUMBER == this.type()) {
      this.value = +this.value;

      const min = this.min();
      if (min && min !== undefined && this.value < min) {
        this.value = min;
      }
      const max = this.max();
      if (max && max !== undefined && this.value > max) {
        this.value = max;
      }
    }

    const inputValue = this.input();
    if (this.validate() && inputValue) {
      if (inputValue.valid) {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.VALID);
      } else {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.ERROR);
      }
    } else {
      this.hasErrors.emit(this.constants.INPUT_ERRORS.NEUTRAL);
    }
    this.keyPressed.emit(this.value);
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

  onFocusLost(){
    // TODO: The 'emit' function requires a mandatory void argument
    this.focusLost.emit();
  }

}
