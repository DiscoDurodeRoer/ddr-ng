import { Component, ViewEncapsulation, input, output, InputSignal, OutputEmitterRef, effect, signal, WritableSignal, ModelSignal, model } from '@angular/core';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrCheckboxComponent } from '../ddr-checkbox/ddr-checkbox.component';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-checkbox-binary',
  templateUrl: './ddr-checkbox-binary.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrCheckboxComponent
  ]
})
export class DdrCheckboxBinaryComponent implements FormValueControl<boolean> {

  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly label: InputSignal<string | undefined> = input<string | undefined>();

  readonly clickCheck: OutputEmitterRef<boolean> = output<boolean>();

  public value: ModelSignal<boolean> = model(false);

  public options: WritableSignal<DdrSelectItem<boolean>[]> = signal<DdrSelectItem<boolean>[]>([
    {
      label: this.label() || '',
      value: false
    }
  ]);

  constructor() {
    effect(() => {
      this.options.set([
        {
          label: this.label() || '',
          value: this.value() || false
        }
      ])
    })
  }

  onClick(selected: any[]) {
    this.value.set(selected.length != 0);
    this.clickCheck.emit(this.value());
  }

}
