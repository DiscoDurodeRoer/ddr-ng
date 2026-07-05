import { Component, inject, input, output, viewChild, InputSignal, OutputEmitterRef, signal, WritableSignal, Signal, ModelSignal, model, effect, computed } from '@angular/core';
import { DdrCheckboxBinaryComponent } from '../ddr-checkbox-binary/ddr-checkbox-binary.component';
import { DdrDropdownComponent } from '../ddr-dropdown/ddr-dropdown.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrOrientationDropdown, DdrOrientatioTooltip } from '../../types/types';
import { FormValueControl } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ddr-dropdown-multiple',
  templateUrl: './ddr-dropdown-multiple.component.html',
  styleUrl: './ddr-dropdown-multiple.component.scss',
  imports: [
    DdrDropdownComponent,
    DdrCheckboxBinaryComponent
  ]
})
export class DdrDropdownMultipleComponent<T> implements FormValueControl<T[]> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService);

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly showFilter: InputSignal<boolean> = input<boolean>(true);
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly orientation: InputSignal<DdrOrientationDropdown> = input<DdrOrientationDropdown>(this.constants.ORIENTATION_DROPDOWN.BOTTOM);
  readonly labelPlaceholderFilter: InputSignal<string> = input<string>('');
  readonly labelNoResults: InputSignal<string | undefined> = input<string | undefined>();
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly translate: InputSignal<boolean> = input<boolean>(true);
  readonly modalOptions: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  public textInput = computed(() => this.value().length ?
    this.optionsSelected()
      .filter(option => option.selected)
      .map(option => this.translate() ? this.ddrTranslate.getTranslate(option.label) : option.label)
      .join(', ')
    : '')

  readonly selectItems: OutputEmitterRef<DdrSelectItem<T>[]> = output<DdrSelectItem<T>[]>();

  readonly dropdown: Signal<DdrDropdownComponent<any> | undefined> = viewChild(DdrDropdownComponent);

  public optionsSelected: WritableSignal<DdrSelectItem<T>[]> = signal<DdrSelectItem<T>[]>([]);

  public value: ModelSignal<T[]> = model<T[]>([]);

  constructor() {
    effect(() => this.selectValues(this.value()))
  }

  private selectValues(value: T[]) {

    if (!value || value.length == 0) {
      this.optionsSelected.set([]);
      this.options().forEach(op => op.selected = false);
    } else if (value.length > 0) {

      for (const option of this.options()) {
        const optionFound = value.find(v => this.compareFn()(v, option.value));
        option.selected = !!optionFound
      }
      this.optionsSelected.set(this.options().filter(option => option.selected));
    }
  }

  onSelectItem(item: DdrSelectItem<T>) {
    this.dropdown()!.value.set(null);
    if (item.selected) {
      this.optionsSelected.update((value: DdrSelectItem<T>[]) => [...value, item]);
    } else {
      this.optionsSelected.update((value: DdrSelectItem<T>[]) => value.filter(option => !this.compareFn()(option.value, item.value)));
    }

    this.value.set(this.optionsSelected().map(v => v.value));
    this.selectItems.emit(this.optionsSelected());
  }

}
