import { Component, InputSignal, ModelSignal, OutputEmitterRef, OutputRef, ViewEncapsulation, WritableSignal, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrChipValueComponent } from './components/ddr-chip-value/ddr-chip-value.component';
import { DisabledReason, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';

@Component({
  selector: 'ddr-chip',
  templateUrl: './ddr-chip.component.html',
  styleUrls: ['./ddr-chip.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrChipValueComponent,
    FormsModule
  ]
})
export class DdrChipComponent implements FormValueControl<string[]> {

  readonly separator: InputSignal<string> = input<string>(' ');
  readonly maxValues: InputSignal<number> = input<number>(0);
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly canDelete: InputSignal<boolean> = input<boolean>(true);

  readonly insertValue: OutputEmitterRef<string> = output<string>();
  readonly removeValue: OutputEmitterRef<string> = output<string>();
  readonly clickValue: OutputEmitterRef<string> = output<string>();
  readonly getValues: OutputEmitterRef<string[]> = output<string[]>();

  public valueInput: WritableSignal<string> = signal('');

  value: ModelSignal<string[]> = model<string[]>([]);
  
  constructor() {

  }

  ngOnInit() {
    if (!this.value()) {
      this.value.set([]);
    } else if (this.maxValues() >= 0) {
      this.value.update((value: any[]) => value.splice(0, this.maxValues()));
    }
  }

  onInsertElement() {
    const maxValues = this.maxValues();
    if (this.valueInput && !this.value()!.find((v: any) => v == this.valueInput) && (!maxValues || this.value.length < maxValues)) {
      this.value()!.push(this.valueInput());
      this.insertValue.emit(this.valueInput());
    }
    this.valueInput.set('');
    this.getValues.emit(this.value()!);
  }

  checkValue() {
    const separator = this.separator();
    if (this.valueInput && this.valueInput().includes(separator)) {
      this.valueInput.update((value: string) => value.split(separator)[0]);
      this.onInsertElement();
    }
  }

  removeLastElement() {
    if (!this.valueInput && this.value.length > 0) {
      const value = this.value().pop();
      this.removeValue.emit(value!);
      this.getValues.emit(this.value()!);
    }
  }

  onClickValue(value: string) {
    this.clickValue.emit(value);
  }

  onDelete(value: string) {
    this.removeValue.emit(value);
    this.value.update((value: any[] | null) => value!.filter((v: any) => v != value));
    this.getValues.emit(this.value()!);
  }

}
