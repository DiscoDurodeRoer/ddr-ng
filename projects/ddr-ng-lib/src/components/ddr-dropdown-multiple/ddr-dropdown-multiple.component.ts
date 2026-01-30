import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, inject, OnChanges, OnDestroy, SimpleChanges, input, output, viewChild } from '@angular/core';
import { DdrCheckboxBinaryComponent } from '../ddr-checkbox-binary/ddr-checkbox-binary.component';
import { DdrDropdownComponent } from '../ddr-dropdown/ddr-dropdown.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrOrientationDropdown, DdrOrientatioTooltip } from '../../types/types';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-dropdown-multiple',
  templateUrl: './ddr-dropdown-multiple.component.html',
  styleUrl: './ddr-dropdown-multiple.component.scss',
  imports: [
    DdrDropdownComponent,
    DdrCheckboxBinaryComponent,
    FormsModule
    ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrDropdownMultipleComponent,
      multi: true,
    },
  ]
})
export class DdrDropdownMultipleComponent<T> extends DdrControlValueAccessor implements OnChanges, AfterViewInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly options = input.required<DdrSelectItem<T>[]>();
  readonly showFilter = input<boolean>(true);
  readonly label = input<string>();
  readonly name = input<string>('');
  readonly inline = input<boolean>(false);
  readonly orientation = input<DdrOrientationDropdown>(this.constants.ORIENTATION_DROPDOWN.BOTTOM);
  readonly labelPlaceholderFilter = input<string>('');
  readonly labelNoResults = input<string>();
  readonly disabled = input<boolean>(false);
  readonly placeholder = input<string>('');
  readonly required = input<boolean>(false);
  readonly validate = input<boolean>(false);
  readonly translate = input<boolean>(true);
  readonly modalOptions = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly compareFn = input<Function>((a: T, b: T) => a === b);
  readonly transparent = input<boolean>(false);

  readonly selectItems = output<DdrSelectItem<T>[]>();

  readonly dropdown = viewChild(DdrDropdownComponent);

  public optionsSelected: DdrSelectItem<T>[] = [];
  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.subscription = this.changeValue.subscribe({
      next: (v: T[]) => {
        this.selectValues(v);
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['options'] && !changes['options'].firstChange) {
        this.selectValues(this.value);
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  private selectValues(value: T[]) {

    if (!value || value.length == 0) {
      this.optionsSelected = [];
      this.options().forEach(op => op.selected = false);
      this.dropdown()!.valueShow = '';
    } else if (value.length > 0) {

      for (const option of this.options()) {
        const optionFound = value.find(v => this.compareFn()(v, option.value));
        option.selected = !!optionFound
      }

      this.optionsSelected = this.options().filter(option => option.selected);

      this.dropdown()!.valueShow = this.optionsSelected.map(option => this.translate() ? this.ddrTranslate.getTranslate(option.label) : option.label).join(', ');

    }
  }

  onSelectItem(item: DdrSelectItem<T>) {

    if (item.selected) {
      this.optionsSelected.push(item);
    } else {
      this.optionsSelected = this.optionsSelected.filter(option => !this.compareFn()(option.value, item.value));
    }

    this.value = this.optionsSelected.map(v => v.value);
    this.selectItems.emit(this.optionsSelected);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
