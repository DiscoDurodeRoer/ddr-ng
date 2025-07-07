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
import { DdrInputError, DdrOrientation, DdrSize, DdrTypeInput } from '../../types/types';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrls: ['./ddr-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrControlValueAccessor,
    DdrTooltipDirective,
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
  @Input({ transform: numberAttribute }) min?: number;
  @Input({ transform: numberAttribute }) max?: number;
  @Input() autocomplete: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;

  @Output() hasErrors: EventEmitter<DdrInputError> = new EventEmitter<DdrInputError>();
  @Output() clickInput: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() keydown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @ViewChild('input') input!: NgModel;

  @ContentChild('templateValid', { static: false }) templateValidOutside: TemplateRef<any> | null = null;
  @ContentChild('templateErrors', { static: false }) templateErrorsOutside: TemplateRef<any> | null = null;

  constructor() {
    super();
  }

  checkInput() {

    if (this.constants.TYPE_INPUT.NUMBER == this.type) {
      this.value = +this.value;
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

  onclickInput($event: any) {
    this.clickInput.emit($event);
  }

  onKeydown($event: any) {
    this.keydown.emit($event);
  }
}
