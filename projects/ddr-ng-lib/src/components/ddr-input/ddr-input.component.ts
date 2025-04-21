import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter, forwardRef,
  inject,
  Input,
  numberAttribute,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DdrInputError, DdrOrientation, DdrSize, DdrTypeInput } from '../../types/types';

@Component({
  selector: 'ddr-input',
  templateUrl: './ddr-input.component.html',
  styleUrls: ['./ddr-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    DdrNgModelBase,
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
  ],
})
export class DdrInputComponent extends DdrNgModelBase {

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
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;

  // Only nested components like input-group
  @Input() templateValidInput!: TemplateRef<any> | null
  @Input() templateErrorsInput!: TemplateRef<any>| null

  @Output() hasErrors: EventEmitter<DdrInputError>;
  @Output() clickInput: EventEmitter<MouseEvent>;
  @Output() keyup: EventEmitter<KeyboardEvent>;
  @Output() keydown: EventEmitter<KeyboardEvent>;

  @ViewChild('input', { static: false, read: ElementRef }) input?: ElementRef;

  @ContentChild('templateValid', { static: false }) templateValid?: TemplateRef<any>;
  @ContentChild('templateErrors', { static: false }) templateErrors?: TemplateRef<any>;

  constructor() {
    super();
    this.hasErrors = new EventEmitter<DdrInputError>();
    this.clickInput = new EventEmitter<MouseEvent>();
    this.keyup = new EventEmitter<KeyboardEvent>();
    this.keydown = new EventEmitter<KeyboardEvent>();
  }

  checkInput() {

    if (this.constants.TYPE_INPUT.NUMBER == this.type) {
      this.value = +this.value;
    }

    if (this.validate && this.input) {
      if (this.input.nativeElement.validity.valid) {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.VALID);
      } else {
        this.hasErrors.emit(this.constants.INPUT_ERRORS.ERROR);
      }
    } else {
      this.hasErrors.emit(this.constants.INPUT_ERRORS.NEUTRAL);
    }
    this.keyup.emit(this.value);
  }

  onclickInput($event: any) {
    this.clickInput.emit($event);
  }

  onKeydown($event: any) {
    this.keydown.emit($event);
  }
}
