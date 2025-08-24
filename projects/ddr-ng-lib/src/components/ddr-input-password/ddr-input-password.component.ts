import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrInputError, DdrOrientatioTooltip } from '../../types/types';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-input-password',
  templateUrl: './ddr-input-password.component.html',
  styleUrls: ['./ddr-input-password.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    DdrControlValueAccessor,
    FormsModule,
    NgTemplateOutlet
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrInputPasswordComponent),
      multi: true,
    },
  ]
})
export class DdrInputPasswordComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() inline: boolean = false;
  @Input() pattern: string = '';
  @Input() name: string = '';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold: boolean = false;
  @Input() showPassword: boolean = false;

  @Output() hasErrors: EventEmitter<DdrInputError> = new EventEmitter<DdrInputError>();
  @Output() clickInput: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() keyPressed: EventEmitter<string> = new EventEmitter<string>();

  @ContentChild('templateValid', { static: false }) templateValidOutside: TemplateRef<any> | null = null;
  @ContentChild('templateErrors', { static: false }) templateErrorsOutside: TemplateRef<any> | null = null;

  constructor() {
    super();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onHasErrors($event: DdrInputError) {
    this.hasErrors.emit($event);
  }

  onKeyup($event: string) {
    this.keyPressed.emit($event);
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

}
