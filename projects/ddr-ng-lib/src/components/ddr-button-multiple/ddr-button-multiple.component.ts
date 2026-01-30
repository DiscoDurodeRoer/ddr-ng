import {
  Component,
  ViewEncapsulation,
  inject,
  input,
  output
} from '@angular/core';
import { DdrButton } from './bean/ddr-button';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { DdrSize } from '../../types/types';


@Component({
  selector: 'ddr-button-multiple',
  templateUrl: './ddr-button-multiple.component.html',
  styleUrls: ['./ddr-button-multiple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrButtonMultipleComponent,
      multi: true,
    },
  ]
})
export class DdrButtonMultipleComponent extends DdrControlValueAccessor {

  private constants: DdrConstantsService = inject(DdrConstantsService);

  readonly buttons = input<DdrButton[]>([]);
  readonly showSelectedButton = input<boolean>(false);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent = input<boolean>(false);

  readonly action = output<DdrButton>();;

  constructor() {
    super();
  }

  clickButton(button: DdrButton) {
    this.value = button.value;
    this.action.emit(button);
  }
}
