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
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'ddr-checkbox',
  templateUrl: './ddr-checkbox.component.html',
  styleUrl: './ddr-checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrTranslatePipe],
})
export class DdrCheckboxComponent<T> implements FormValueControl<T[]> {

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly label: InputSignal<string> = input<string>('');
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>(
    (a: T, b: T) => a === b,
  );

  public value: ModelSignal<T[]> = model<T[]>([]);

  readonly clickCheck: OutputEmitterRef<T[]> = output<T[]>();

  public optionsCheckbox: Signal<DdrSelectItem<T>[]> = computed(() =>
    this.options().map(option => ({
      ...option,
      selected: this.value()?.some(value =>
        this.compareFn()(value, option.value)
      ),
    })),
  );

  onClickCheck($event: MouseEvent, option: DdrSelectItem<T>) {
    $event?.stopPropagation();
    if (!this.disabled()) {

      this.value.update(values => {
        const exists = values.some(v => this.compareFn()(v, option.value));
        return exists
          ? values.filter(v => !this.compareFn()(v, option.value))
          : [...values, option.value];
      });

      this.clickCheck.emit(this.value());
    }
  }
}
