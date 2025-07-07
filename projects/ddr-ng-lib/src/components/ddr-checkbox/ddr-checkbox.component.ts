import { Component, forwardRef, Input, OnInit, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-checkbox',
  templateUrl: './ddr-checkbox.component.html',
  styleUrls: ['./ddr-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrControlValueAccessor,
    DdrTranslatePipe,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrCheckboxComponent),
      multi: true,
    },
  ]
})
export class DdrCheckboxComponent<T> extends DdrControlValueAccessor implements OnInit {

  @Input() options: DdrSelectItem<T>[] = [];

  @Input() disabled: boolean = false;
  @Input() inline: boolean = false;

  @Output() clickCheck: EventEmitter<T[]> = new EventEmitter<T[]>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.changeValue.subscribe((value: T[]) => {
      if (value instanceof Array) {
        const options = this.options.filter(s => value.find(v => JSON.stringify(v) == JSON.stringify(s.value)));
        options.forEach(op => op.selected = true);
      }
    })
  }

  onClickCheck($event: MouseEvent, option: DdrSelectItem<T>) {
    $event?.stopPropagation();
    if (!this.disabled) {
      const optionFound = this.options.find(op => JSON.stringify(op.value) == JSON.stringify(option.value));
      if (optionFound) {
        optionFound.selected = !option.selected
        this.value = this.options.filter(s => s.selected).map(s => s.value);
        this.clickCheck.emit(this.value);
      }
    }
  }

}
