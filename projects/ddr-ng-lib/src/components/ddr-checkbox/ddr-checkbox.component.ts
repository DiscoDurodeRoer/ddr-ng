import { Component, ViewEncapsulation, input, output, InputSignal, OutputEmitterRef, ModelSignal, model, effect } from '@angular/core';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-checkbox',
  templateUrl: './ddr-checkbox.component.html',
  styleUrl: './ddr-checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTranslatePipe
  ]
})
export class DdrCheckboxComponent<T> implements FormValueControl<T[]> {

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);

  readonly clickCheck: OutputEmitterRef<T[]> = output<T[]>();

  public value: ModelSignal<T[]> = model<T[]>([]);

  constructor() {
    effect(() => {
      this.options()
        .filter(s => 
          this.value().find(v => this.compareFn()(v, s.value)))
        .forEach(op => op.selected = true);
    })
  }

  onClickCheck($event: MouseEvent, option: DdrSelectItem<T>) {
    $event?.stopPropagation();
    if (!this.disabled()) {
      const optionFound = this.options().find(op => this.compareFn()(op.value, option.value));
      if (optionFound) {
        optionFound.selected = !option.selected
        this.value.set(this.options().filter(s => s.selected).map(s => s.value));
        this.clickCheck.emit(this.value());
      }
    }
  }

}
