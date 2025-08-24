import {
  Component,
  ContentChild,
  EventEmitter, forwardRef,
  inject,
  Input,
  numberAttribute,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';
import { DdrSetFocusDirective } from '../../directives/ddr-set-focus.directive';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrls: ['./ddr-input.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrControlValueAccessor,
    DdrTooltipDirective,
    DdrSetFocusDirective,
    NgClass,
    NgTemplateOutlet
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrInputComponent),
      multi: true,
    },
  ]
})
export class DdrInputComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() placeholder: string = '';
  @Input() label?: string;
  @Input() type: DdrTypeInput = this.constants.TYPE_INPUT.TEXT;
  @Input() name: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxlength: string | number | null = null;
  @Input() minlength: string | number | null = null;
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() inline: boolean = false;
  @Input() border: boolean = true;
  @Input() pattern: string = '';
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;
  @Input() min: number | null = null;
  @Input() max: number | null = null;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;
  @Input() focus: boolean = false;
  @Input() transparent: boolean = false;
  @Input() autocomplete: AutocompleteType = 'off';

  @Output() hasErrors: EventEmitter<DdrInputError> = new EventEmitter<DdrInputError>();
  @Output() clickInput: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyPressed: EventEmitter<string> = new EventEmitter<string>();
  @Output() focusLost: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('input') input!: NgModel;

  @ContentChild('templateValid', { static: false }) templateValidOutside: TemplateRef<any> | null = null;
  @ContentChild('templateErrors', { static: false }) templateErrorsOutside: TemplateRef<any> | null = null;

  constructor() {
    super();
  }

  checkInput() {

    if (this.constants.TYPE_INPUT.NUMBER == this.type) {
      this.value = +this.value;

      if (this.min && this.min !== undefined && this.value < this.min) {
        this.value = this.min;
      }
      if (this.max && this.max !== undefined && this.value > this.max) {
        this.value = this.max;
      }
    }

    if (this.validate && this.input) {
      if (this.input.valid) {
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

  onFocusLost() {
    this.focusLost.emit();
  }

}
