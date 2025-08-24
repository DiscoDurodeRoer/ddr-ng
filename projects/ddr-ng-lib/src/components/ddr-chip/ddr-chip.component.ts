import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrChipValueComponent } from './components/ddr-chip-value/ddr-chip-value.component';

@Component({
  selector: 'ddr-chip',
  templateUrl: './ddr-chip.component.html',
  styleUrls: ['./ddr-chip.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrChipValueComponent,
    FormsModule,
    DdrControlValueAccessor
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrChipComponent),
      multi: true,
    },
  ]
})
export class DdrChipComponent extends DdrControlValueAccessor implements OnInit {

  @Input() separator!: string;
  @Input() maxValues: number = 0;
  @Input() readonly: boolean = false;
  @Input() label?: string;
  @Input() name?: string;
  @Input() canDelete: boolean = true;

  @Output() insertValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() removeValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() getValues: EventEmitter<string[]> = new EventEmitter<string[]>();

  public valueInput: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.value) {
      this.value = [];
    } else if (this.maxValues >= 0) {
      this.value = this.value.splice(0, this.maxValues)
    }
  }

  onInsertElement() {
    if (this.valueInput && !this.value.find((v: any) => v == this.valueInput) && (!this.maxValues || this.value.length < this.maxValues)) {
      this.value.push(this.valueInput);
      this.insertValue.emit(this.value);
    }
    this.valueInput = '';
    this.getValues.emit(this.value);
  }

  checkValue() {
    if (this.valueInput && this.valueInput.includes(this.separator)) {
      this.valueInput = this.valueInput.split(this.separator)[0];
      this.onInsertElement();
    }
  }

  removeLastElement() {
    if (!this.valueInput && this.value.length > 0) {
      const value = this.value.pop();
      this.removeValue.emit(value);
      this.getValues.emit(this.value);
    }
  }

  onClickValue(value: string) {
    this.clickValue.emit(value);
  }

  onDelete(value: string) {
    this.removeValue.emit(value);
    this.value = this.value.filter((v: any) => v != value);
    this.getValues.emit(this.value);
  }

}
