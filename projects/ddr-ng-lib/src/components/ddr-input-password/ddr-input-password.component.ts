import { Component, TemplateRef, ViewEncapsulation, forwardRef, inject, input, output, contentChild } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    FormsModule,
    NgTemplateOutlet
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrInputPasswordComponent,
      multi: true,
    },
  ]
})
export class DdrInputPasswordComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly label = input<string>('');
  readonly placeholder = input<string>('');
  readonly required = input<boolean>(false);
  readonly validate = input<boolean>(false);
  readonly inline = input<boolean>(false);
  readonly pattern = input<string>('');
  readonly name = input<string>('');
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly labelBold = input<boolean>(false);
  readonly showPassword = input<boolean>(false);

  readonly hasErrors = output<DdrInputError>();
  readonly clickInput = output<MouseEvent>();
  readonly keyPressed = output<string>();

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  constructor() {
    super();
  }

  togglePassword() {
    this.showPassword = !this.showPassword();
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
