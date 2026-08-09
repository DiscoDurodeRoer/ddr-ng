import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  inject,
  input,
  output,
  viewChild,
  InputSignal,
  OutputEmitterRef,
  Signal,
  ModelSignal,
  model,
  computed,
  contentChild,
  TemplateRef,
} from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrOrientationDropdown, DdrOrientationTooltip } from 'ddr-ng/types';

@Component({
  selector: 'ddr-dropdown-multiple',
  templateUrl: './ddr-dropdown-multiple.component.html',
  styleUrl: './ddr-dropdown-multiple.component.scss',
  imports: [DdrDropdownComponent, DdrCheckboxBinaryComponent, NgTemplateOutlet]
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
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);

  public value: ModelSignal<T[]> = model<T[]>([]);

  readonly selectItems: OutputEmitterRef<DdrSelectItem<T>[]> = output<DdrSelectItem<T>[]>();

  readonly dropdown: Signal<DdrDropdownComponent<any> | undefined> = viewChild(DdrDropdownComponent);

  readonly itemTemplateOutside = contentChild<TemplateRef<any> | null>('itemTemplate');
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public optionsDropdown: Signal<DdrSelectItem<T>[]> = computed(() =>
    this.options()
      .map(option => ({
        ...option,
        selected: this.value()?.some(value =>
          this.compareFn()(value, option.value)
        )
      }))
  );

  public optionsSelected: Signal<DdrSelectItem<T>[]> = computed(() => this.optionsDropdown().filter((option) => option.selected));

  public textInput = computed(() =>
    this.value()?.length
      ? this.optionsSelected()
        .filter((option) => option.selected)
        .map((option) =>
          this.translate()
            ? this.ddrTranslate.getTranslate(option.label)
            : option.label,
        )
        .join(', ')
      : '',
  );

  onSelectItem(item: DdrSelectItem<T>) {
    this.dropdown()!.value.set(null);
    this.dropdown()?.dirtyInput.set(true);

    this.value.update((v) =>
      item.selected ?
        [...v, item.value] :
        v.filter((option) => !this.compareFn()(option, item.value))
    )

    this.selectItems.emit(this.optionsSelected());
  }
}
