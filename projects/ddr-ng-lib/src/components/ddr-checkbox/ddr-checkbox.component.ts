import { Component, forwardRef, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { isEqual } from "lodash-es";
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-checkbox',
  templateUrl: './ddr-checkbox.component.html',
  styleUrls: ['./ddr-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    DdrNgModelBase,
    DdrTranslatePipe,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrCheckboxComponent),
      multi: true,
    },
  ],
})
export class DdrCheckboxComponent<T> extends DdrNgModelBase implements OnInit {

  @Input() options: DdrSelectItem<T>[] = [];

  @Input() inline: boolean = false;
  @Input() binary: boolean = false;
  @Input() labelBinary?: string;

  @Output() clickCheck: EventEmitter<T[]> = new EventEmitter<T[]>();;
  @Output() clickCheckBinary: EventEmitter<boolean> = new EventEmitter<boolean>();;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.firstValue.subscribe((value: T[] | boolean) => {
      if (value instanceof Boolean) {
        this.value = value;
        this.clickCheckBinary.emit(this.value);
      } else if (value instanceof Array) {
        const options = this.options.filter(s => (<T[]>value).find(v => isEqual(v, s.value)));
        options.forEach(op => op.selected = true);
        this.value = value;
        this.clickCheck.emit(this.value);
      }
    })
    // this.changeValue.subscribe((value) => {
    //   const options = this.options.filter(s => (<T[]>value).find(v => isEqual(v, s.value)));
    //   options.forEach(op => op.selected = true);
    // })
  }

  onClickCheck($event: MouseEvent, option: DdrSelectItem<T>) {
    if ($event) {
      $event.stopPropagation();
    }
    const optionFound = this.options.find(op => isEqual(op.value, option.value));
    if (optionFound) {
      optionFound.selected = !option.selected
      this.value = this.options.filter(s => s.selected).map(s => s.value);
      this.clickCheck.emit(this.value);
    }
  }

  onClickCheckBinary($event: MouseEvent | null) {
    if ($event) {
      $event.stopPropagation();
    }
    this.value = !this.value;
    this.clickCheckBinary.emit(this.value);
  }

}
