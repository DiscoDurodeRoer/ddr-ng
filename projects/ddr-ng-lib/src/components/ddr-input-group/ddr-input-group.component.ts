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
  contentChild
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputComponent } from '../ddr-input/ddr-input.component';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';

import { NgTemplateOutlet } from '@angular/common';
import { AutocompleteType, DdrInputError, DdrOrientatioTooltip, DdrSize, DdrTypeInput } from '../../types/types';

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
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrInputGroupComponent,
      multi: true,
    },
  ]
})
export class DdrInputGroupComponent extends DdrControlValueAccessor {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label = input<string>();
  readonly icon = input<string>('');
  readonly name = input<string>('');
  readonly placeholder = input<string>('');
  readonly type = input<DdrTypeInput>(this.constants.TYPE_INPUT.TEXT);
  readonly validate = input<boolean>(false);
  readonly required = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly pattern = input<string>('');
  readonly maxlength = input<string | number | null>(null);
  readonly minlength = input<string | number | null>(null);
  readonly inline = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly disabledButton = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly labelBold = input<boolean>(false);
  readonly min = input<number | null>(null);
  readonly max = input<number | null>(null);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent = input<boolean>(false);
  readonly focus = input<boolean>(false);
  readonly autocomplete = input<AutocompleteType>('off');

  readonly hasErrors = output<DdrInputError>();
  readonly action = output<MouseEvent>();
  readonly clickInput = output<MouseEvent>();
  readonly keyPressed = output<string>();
  readonly focusLost = output<void>();

  readonly input = viewChild(DdrInputComponent, { read: DdrInputComponent });
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public errorsInput: DdrInputError = this.constants.INPUT_ERRORS.NEUTRAL;

  constructor() {
    super();
  }

  clickButton($ev: any) {
    if (!this.disabled()) {
      this.action.emit($ev);
    }
  }

  checkInput($event: DdrInputError) {
    this.errorsInput = $event;
    this.hasErrors.emit($event);
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

  onKeyup($event: string) {
    this.keyPressed.emit($event);
  }

  onFocusLost() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.focusLost.emit();
  }

}
