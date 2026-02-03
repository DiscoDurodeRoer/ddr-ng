import { Component, InputSignal, ModelSignal, OutputEmitterRef, ViewEncapsulation, WritableSignal, effect, input, model, output, signal } from '@angular/core';
import { DdrChipValueComponent } from './components/ddr-chip-value/ddr-chip-value.component';
import { FormValueControl } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { untracked } from '@angular/core/primitives/signals';

@Component({
  selector: 'ddr-chip',
  templateUrl: './ddr-chip.component.html',
  styleUrl: './ddr-chip.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrChipValueComponent,
    JsonPipe
  ]
})
export class DdrChipComponent implements FormValueControl<string[]> {

  readonly separator: InputSignal<string> = input<string>('');
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

  public value: ModelSignal<string[]> = model<string[]>([]);
  
  constructor() {
    effect(() => {
      if (this.maxValues() > 0 && untracked(() => this.value().length) > 0) {
        this.value.update((value: any[]) =>
          value.slice(0, this.maxValues())
        );
      }
    })
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueInput.set(input.value);
  }

  onInsertElement() {
    const maxValues = this.maxValues();
    if (this.valueInput() && !this.value().find((v: string) => v == this.valueInput()) && (!maxValues || this.value().length < maxValues)) {
      this.value.update((value: string[]) => [...value, this.valueInput()]);
      this.insertValue.emit(this.valueInput());
    }
    this.valueInput.set('');
    this.getValues.emit(this.value()!);
  }

  checkValue() {
    if (this.valueInput() && this.separator() && this.valueInput().includes(this.separator())) {
      this.valueInput.update((value: string) => value.split(this.separator())[0]);
      this.onInsertElement();
    }
  }

  removeLastElement() {
    if (!this.valueInput() && this.value().length > 0) {
      const lastValue = this.value()[this.value().length - 1];
      this.value.update( (value: string[]) => value.slice(0, -1))
      this.removeValue.emit(lastValue);
      this.getValues.emit(this.value());
    }
  }

  onClickValue(value: string) {
    this.clickValue.emit(value);
  }

  onDelete(value: string) {
    this.removeValue.emit(value);
    this.value.update((values: string[]) => values.filter((v: string) => v != value));
    this.getValues.emit(this.value());
  }

}
