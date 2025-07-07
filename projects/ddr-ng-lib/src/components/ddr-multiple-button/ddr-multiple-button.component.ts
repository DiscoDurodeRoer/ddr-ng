import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
  forwardRef,
  inject,
} from '@angular/core';
import { DdrButton } from './bean/ddr-button';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
import { DdrSize } from '../../types/types';


@Component({
    selector: 'ddr-multiple-button',
    templateUrl: './ddr-multiple-button.component.html',
    styleUrls: ['./ddr-multiple-button.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        DdrButtonComponent,
        DdrTranslatePipe,
        DdrControlValueAccessor,
        NgClass
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DdrMultipleButtonComponent),
            multi: true,
        },
    ]
})
export class DdrMultipleButtonComponent extends DdrControlValueAccessor {

  private constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() buttons: DdrButton[] = [];
  @Input() showSelectedButton: boolean = false;
  @Input() modeButtonsSize: DdrSize = this.constants.SIZE.MEDIUM;
  @Input() transparent: boolean = false;

  @Output() action: EventEmitter<DdrButton> = new EventEmitter<DdrButton>();;

  constructor() {
    super();
  }

  clickButton(button: DdrButton) {
    this.value = button.value;
    this.action.emit(button);
  }
}
