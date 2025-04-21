import { Component, forwardRef, Input, OnInit, Output, ViewEncapsulation, EventEmitter, OnChanges, SimpleChanges, booleanAttribute } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { isEqual } from "lodash-es";
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ddr-radio',
    templateUrl: './ddr-radio.component.html',
    styleUrls: ['./ddr-radio.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        DdrNgModelBase,
        DdrTranslatePipe,
        NgClass
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DdrRadioComponent),
            multi: true,
        },
    ]
})
export class DdrRadioComponent<T> extends DdrNgModelBase implements OnInit {

  @Input() options: DdrSelectItem<T>[] = [];
  @Input({ transform: booleanAttribute }) inline: boolean = false;

  @Output() clickRadio: EventEmitter<T> = new EventEmitter<T>();;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options.forEach(op => op.selected = false);
    this.firstValue.subscribe((value: T) => {
      const optionFound = this.options.find(s => isEqual(value, s.value));
      if (optionFound) {
        optionFound.selected = true;
        this.value = value;
        this.clickRadio.emit(this.value);
      }
    });
    this.changeValue.subscribe((value) => {
      this.options.map(option => option.selected = false)
      const optionFound = this.options.find(s => isEqual(value, s.value));
      if (optionFound) {
        optionFound.selected = true;
      }
    })
  }

  onclickRadio($event?: DdrSelectItem<T>) {
    if ($event && this.value != $event.value) {
      this.options.map(option => option.selected = false)
      $event.selected = true;
      this.value = $event.value;
      this.clickRadio.emit(this.value);
    }
  }

}
