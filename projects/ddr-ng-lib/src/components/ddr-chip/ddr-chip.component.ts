import { Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrChipValueComponent } from './components/ddr-chip-value/ddr-chip-value.component';

@Component({
  selector: 'ddr-chip',
  templateUrl: './ddr-chip.component.html',
  styleUrls: ['./ddr-chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrChipValueComponent,
    FormsModule,
    DdrNgModelBase
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrChipComponent),
      multi: true,
    },
  ],
})
export class DdrChipComponent extends DdrNgModelBase implements OnInit {

  @Input() separator!: string;
  @Input() maxValues: number = 0;
  @Input() label?: string;

  @Output() insertValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() getValues: EventEmitter<string[]> = new EventEmitter<string[]>();

  public valueInput: string = '';

  constructor() {
    super();
  }

  ngOnInit() {
    if(!this.value){
      this.value = [];
    }else if(this.maxValues >= 0){
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

  removeLastElement(){
    if(!this.valueInput && this.value.length > 0){
      this.value.pop();
    }
  }

  onClickValue($event: string) {
    this.clickValue.emit($event);
  }

  onDelete($event: string) {
    this.value = this.value.filter((v: any) => v != $event);
    this.getValues.emit(this.value);
  }

}
