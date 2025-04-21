import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrOrientation } from '../../types/types';

@Component({
  selector: 'ddr-input-password',
  templateUrl: './ddr-input-password.component.html',
  styleUrls: ['./ddr-input-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrInputGroupComponent,
    DdrNgModelBase,
    FormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrInputPasswordComponent),
      multi: true,
    },
  ],
})
export class DdrInputPasswordComponent extends DdrNgModelBase {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() inline: boolean = false;
  @Input() pattern: string = '';
  @Input() labelValid?: string;
  @Input() labelInvalid?: string;
  @Input() autocomplete: boolean = false;
  @Input() name: string = 'password';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() labelBold:boolean=false;

  @Output() hasErrors: EventEmitter<number> = new EventEmitter<number>();
  @Output() keyup: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();
  @Output() keydown: EventEmitter<KeyboardEvent> = new EventEmitter<KeyboardEvent>();

  @ContentChild('templateValid', { static: false }) templateValid!: TemplateRef<any> | null;
  @ContentChild('templateErrors', { static: false }) templateErrors!: TemplateRef<any> | null;

  public showPwd: boolean = false;

  constructor() {
    super();
  }

  showPassword() {
    this.showPwd = !this.showPwd;
  }

  onHasErrors($event: number){
    this.hasErrors.emit($event);
  }

  onKeyup($event: any) {
    this.keyup.emit($event);
  }

  onKeydown($event: any) {
    this.keydown.emit($event);
  }

}
