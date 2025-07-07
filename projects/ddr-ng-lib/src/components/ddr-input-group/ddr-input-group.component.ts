import {
  Component,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
  forwardRef,
  ContentChild,
  TemplateRef,
  ViewChild,
  inject,
  numberAttribute,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DdrInputError, DdrOrientation, DdrTypeInput } from '../../types/types';


@Component({
  selector: 'ddr-input-group',
  templateUrl: './ddr-input-group.component.html',
  styleUrls: ['./ddr-input-group.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputComponent,
    DdrTooltipDirective,
    NgClass,
    NgTemplateOutlet
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrInputGroupComponent),
      multi: true,
    },
  ]
})
export class DdrInputGroupComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() label?: string;
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() type: DdrTypeInput = this.constants.TYPE_INPUT.TEXT;
  @Input() validate: boolean = false;
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() pattern: string = '';
  @Input() maxlength: string | number | null = null;
  @Input() minlength: string | number | null = null;
  @Input() inline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() disabledButton: boolean = false;
  @Input() autocomplete: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;
  @Input({ transform: numberAttribute }) min?: number;
  @Input({ transform: numberAttribute }) max?: number;

  @Output() hasErrors: EventEmitter<DdrInputError> = new EventEmitter<DdrInputError>();
  @Output() action: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() clickInput: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyPressed: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() keydown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @ViewChild(DdrInputComponent, { static: false, read: DdrInputComponent }) input?: DdrInputComponent;
  @ContentChild('templateValid', { static: false }) templateValidOutside: TemplateRef<any> | null = null;
  @ContentChild('templateErrors', { static: false }) templateErrorsOutside: TemplateRef<any> | null = null;

  public errorsInput: DdrInputError = this.constants.INPUT_ERRORS.NEUTRAL;

  constructor() {
    super();
  }

  clickButton($ev: any) {
    if (!this.disabled) {
      this.action.emit($ev);
    }
  }

  checkInput($event: DdrInputError) {
    this.errorsInput = $event;
    this.hasErrors.emit($event);
  }

  onclickInput($event: any) {
    this.clickInput.emit($event);
  }

  onKeyup($event: any) {
    this.keyPressed.emit($event);
  }

  onKeydown($event: any) {
    this.keydown.emit($event);
  }

}
