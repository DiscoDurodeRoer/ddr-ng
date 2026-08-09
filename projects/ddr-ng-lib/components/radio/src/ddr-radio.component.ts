import { Component, ViewEncapsulation, input, output, InputSignal, OutputEmitterRef, ModelSignal, model, effect } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'ddr-radio',
  templateUrl: './ddr-radio.component.html',
  styleUrl: './ddr-radio.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTranslatePipe
  ]
})
export class DdrRadioComponent<T> implements FormValueControl<T | null> {

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly label: InputSignal<string> = input<string>('');
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);

  readonly value: ModelSignal<T | null> = model<T | null>(null);

  readonly clickRadio: OutputEmitterRef<T> = output<T>();

  constructor() {
    effect(() => this.selectValue(this.value()))
  }

  private selectValue(value: T | null) {
    if (value) {
      const optionFound = this.options().find(s => this.compareFn()(value, s.value));
      if (optionFound) {
        optionFound.selected = true;
        this.value.set(value);
      }
    } else {
      this.options().forEach(op => op.selected = false);
    }
  }

  onclickRadio($event?: DdrSelectItem<T>) {
    if ($event && this.value() != $event.value) {
      this.options().map(option => option.selected = false)
      $event.selected = true;
      this.value.set($event.value);
      this.clickRadio.emit(this.value()!);
    }
  }

}
