import { Component, forwardRef, OnInit, ViewEncapsulation, input, output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrChipValueComponent } from './components/ddr-chip-value/ddr-chip-value.component';

@Component({
  selector: 'ddr-chip',
  templateUrl: './ddr-chip.component.html',
  styleUrls: ['./ddr-chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrChipValueComponent,
    FormsModule
    ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrChipComponent,
      multi: true,
    },
  ]
})
export class DdrChipComponent extends DdrControlValueAccessor implements OnInit {

  readonly separator = input.required<string>();
  readonly maxValues = input<number>(0);
  readonly readonly = input<boolean>(false);
  readonly label = input<string>();
  readonly name = input<string>();
  readonly canDelete = input<boolean>(true);

  readonly insertValue = output<string>();
  readonly removeValue = output<string>();
  readonly clickValue = output<string>();
  readonly getValues = output<string[]>();

  public valueInput: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    if (!this.value) {
      this.value = [];
    } else if (this.maxValues() >= 0) {
      this.value = this.value.splice(0, this.maxValues())
    }
  }

  onInsertElement() {
    const maxValues = this.maxValues();
    if (this.valueInput && !this.value.find((v: any) => v == this.valueInput) && (!maxValues || this.value.length < maxValues)) {
      this.value.push(this.valueInput);
      this.insertValue.emit(this.value);
    }
    this.valueInput = '';
    this.getValues.emit(this.value);
  }

  checkValue() {
    const separator = this.separator();
    if (this.valueInput && this.valueInput.includes(separator)) {
      this.valueInput = this.valueInput.split(separator)[0];
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
