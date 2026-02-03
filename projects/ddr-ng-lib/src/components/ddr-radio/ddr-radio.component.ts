import { Component, ViewEncapsulation, ChangeDetectionStrategy, input, output, InputSignal, OutputEmitterRef, ModelSignal, model, effect } from '@angular/core';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-radio',
  templateUrl: './ddr-radio.component.html',
  styleUrl: './ddr-radio.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DdrTranslatePipe
  ]
})
export class DdrRadioComponent<T> implements FormValueControl<T | null> {

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);

  readonly clickRadio: OutputEmitterRef<T> = output<T>();

  readonly value: ModelSignal<T | null> = model<T | null>(null);

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
