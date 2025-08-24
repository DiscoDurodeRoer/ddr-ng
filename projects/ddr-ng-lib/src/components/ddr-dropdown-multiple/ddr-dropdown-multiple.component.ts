import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, forwardRef, inject, Input, OnChanges, OnDestroy, Output, SimpleChanges, ViewChild } from '@angular/core';
import { DdrCheckboxBinaryComponent } from '../ddr-checkbox-binary/ddr-checkbox-binary.component';
import { DdrDropdownComponent } from '../ddr-dropdown/ddr-dropdown.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrOrientationDropdown, DdrOrientatioTooltip } from '../../types/types';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-dropdown-multiple',
  templateUrl: './ddr-dropdown-multiple.component.html',
  styleUrl: './ddr-dropdown-multiple.component.scss',
  standalone: true,
  imports: [
    DdrDropdownComponent,
    DdrCheckboxBinaryComponent,
    FormsModule,
    DdrTranslatePipe
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrDropdownMultipleComponent),
      multi: true,
    },
  ]
})
export class DdrDropdownMultipleComponent<T> extends DdrControlValueAccessor implements OnChanges, AfterViewInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input({ required: true }) options: DdrSelectItem<T>[] = [];
  @Input() showFilter: boolean = true;
  @Input() label?: string;
  @Input() name: string = '';
  @Input() inline: boolean = false;
  @Input() orientation: DdrOrientationDropdown = this.constants.ORIENTATION_DROPDOWN.BOTTOM;
  @Input() labelPlaceholderFilter: string = '';
  @Input() labelNoResults?: string;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() validate: boolean = false;
  @Input() translate: boolean = true;
  @Input() modalOptions: boolean = false;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;
  @Input() compareFn: Function = (a: T, b: T) => a === b;
  @Input() transparent: boolean = false;

  @Output() selectItems: EventEmitter<DdrSelectItem<T>[]> = new EventEmitter<DdrSelectItem<T>[]>();

  @ViewChild(DdrDropdownComponent, { static: false }) dropdown: DdrDropdownComponent<T> | null = null;

  public optionsSelected: DdrSelectItem<T>[] = [];
  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngAfterViewInit(): void {
    this.subscription = this.changeValue.subscribe(v => {
      this.selectValues(v);
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
      this.options.forEach(op => op.selected = false);
      this.dropdown!.valueShow = '';
    } else if (value.length > 0) {

      for (const option of this.options) {
        const optionFound = value.find(v => this.compareFn(v, option.value));
        option.selected = !!optionFound
      }

      this.optionsSelected = this.options.filter(option => option.selected);

      this.dropdown!.valueShow = this.optionsSelected.map(option => this.translate ? this.ddrTranslate.getTranslate(option.label) : option.label).join(', ');

    }
  }

  onSelectItem(item: DdrSelectItem<T>) {

    if (item.selected) {
      this.optionsSelected.push(item);
    } else {
      this.optionsSelected = this.optionsSelected.filter(option => !this.compareFn(option.value, item.value));
    }

    this.value = this.optionsSelected.map(v => v.value);
    this.selectItems.emit(this.optionsSelected);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
