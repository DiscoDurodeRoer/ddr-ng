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
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';
import { NgClass } from '@angular/common';
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
        NgClass
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DdrInputGroupComponent),
            multi: true,
        },
    ]
})
export class DdrInputGroupComponent extends DdrNgModelBase {

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
  @Input() inline: boolean = false;
  @Input() disabled: boolean = false;
  @Input() autocomplete: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold:boolean=false;

  // Only nested components
  @Input() templateValidInput!: TemplateRef<any> | null
  @Input() templateErrorsInput!: TemplateRef<any> | null

  @Output() hasErrors: EventEmitter<DdrInputError> = new EventEmitter<DdrInputError>();
  @Output() action: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() clickInput: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyup: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() keydown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @ViewChild(DdrInputComponent, { static: false, read: DdrInputComponent }) input?: DdrInputComponent;
  @ContentChild('templateValid', { static: false }) templateValid?: TemplateRef<any>;
  @ContentChild('templateErrors', { static: false }) templateErrors?: TemplateRef<any>;

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
    this.keyup.emit($event);
  }

  onKeydown($event: any) {
    this.keydown.emit($event);
  }

}
