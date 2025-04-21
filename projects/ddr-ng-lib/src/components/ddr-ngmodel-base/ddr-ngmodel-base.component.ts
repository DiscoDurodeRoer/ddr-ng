import { Component } from '@angular/core';
import { ControlValueAccessor, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: '',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class DdrNgModelBase implements ControlValueAccessor {

  private innerValue: any;
  private firstTime: boolean;
  public firstValue: Subject<any>;
  public changeValue: Subject<any>;

  constructor() {
    this.innerValue = null;
    this.firstValue = new Subject<any>();
    this.changeValue = new Subject<any>();
    this.firstTime = true;
  }

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  //get accessor
  get value(): any {
    return this.innerValue;
  };

  //set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  //Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    // value !== undefined && 
    if (value !== this.innerValue) {
      this.innerValue = value;
      if (this.firstTime) {
        this.firstValue.next(this.innerValue);
        this.firstTime = false;
      } else {
        this.changeValue.next(this.innerValue);
      }
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
