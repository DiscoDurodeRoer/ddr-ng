import {
  Component,
  ViewEncapsulation,
  input,
  output,
  InputSignal,
  OutputEmitterRef,
  ModelSignal,
  model,
  computed,
  Signal,
} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'ddr-checkbox-binary',
  templateUrl: './ddr-checkbox-binary.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrCheckboxComponent],
})
export class DdrCheckboxBinaryComponent implements FormValueControl<boolean> {

  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly label: InputSignal<string | undefined> = input<string | undefined>();

  public value: ModelSignal<boolean> = model(false);

  readonly clickCheck: OutputEmitterRef<boolean> = output<boolean>();

  public valueCheckbox: Signal<boolean[]> = computed(() => this.value() ? [this.value()] : []);

  public options: Signal<DdrSelectItem<boolean>[]> = computed<DdrSelectItem<boolean>[]>(() => [
    {
      label: this.label() || '',
      value: this.value() || false
    },
  ]);

  onClick(selected: any[]) {
    this.value.set(selected.length != 0);
    this.clickCheck.emit(this.value());
  }
}
