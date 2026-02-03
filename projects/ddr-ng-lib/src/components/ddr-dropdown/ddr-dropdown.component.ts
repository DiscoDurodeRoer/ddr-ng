import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, TemplateRef, ViewEncapsulation, input, output, contentChild, viewChild, InputSignal, OutputEmitterRef, WritableSignal, signal, ModelSignal, model, effect, computed, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientationDropdown, DdrOrientatioTooltip, DdrSize } from '../../types/types';
import { Field, FieldTree, form, FormValueControl, ValidationError, WithOptionalField } from '@angular/forms/signals';
import { DdrFilterDropdown } from './bean/filter-dropdown.model';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrl: './ddr-dropdown.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrInputGroupComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    NgTemplateOutlet,
    Field
  ],
  animations: [
    trigger('overlayAnimationBottom', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ]),
    trigger('overlayAnimationTop', [
      state('void', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ]
})
export class DdrDropdownComponent<T> implements FormValueControl<T | null> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private readonly ddrTranslate: DdrTranslateService = inject(DdrTranslateService);

  readonly options: InputSignal<DdrSelectItem<T>[]> = input.required<DdrSelectItem<T>[]>();
  readonly showFilter: InputSignal<boolean> = input<boolean>(true);
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly name: InputSignal<string> = input<string>('');
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly orientation: InputSignal<DdrOrientationDropdown> = input<DdrOrientationDropdown>(this.constants.ORIENTATION_DROPDOWN.BOTTOM);
  readonly labelPlaceholderFilter: InputSignal<string> = input<string>('');
  readonly labelNoResults: InputSignal<string | undefined> = input<string | undefined>();
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly translate: InputSignal<boolean> = input<boolean>(true);
  readonly modalOptions: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly closeOnSelect: InputSignal<boolean> = input<boolean>(true);
  readonly allowDeselect: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);

  readonly errors: InputSignal<readonly WithOptionalField<ValidationError>[]> = input<readonly WithOptionalField<ValidationError>[]>([]);

  readonly selectItem: OutputEmitterRef<DdrSelectItem<T>> = output<DdrSelectItem<T>>();

  readonly itemTemplateOutside = contentChild<TemplateRef<any> | null>('itemTemplate');
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  readonly inputGroup = viewChild.required(DdrInputGroupComponent);

  public showItems: WritableSignal<boolean> = signal<boolean>(false);
  public optionsShow: Signal<DdrSelectItem<T>[]> = computed<DdrSelectItem<T>[]>(() =>
    !this.options()?.length ? [] : this.options().filter(option => option.label.toLowerCase().includes(this.filterForm.filter().value().toLowerCase())));
  public valueShow: WritableSignal<string> = signal<string>('');

  public value: ModelSignal<T | null> = model<T | null>(null);
  public filterModel: WritableSignal<DdrFilterDropdown> = signal<DdrFilterDropdown>({ filter: '' });
  public filterForm: FieldTree<DdrFilterDropdown> = form(this.filterModel);

  public iconOrientation: Signal<string> = computed<string>(() => this.orientation() === this.constants.ORIENTATION.BOTTOM ? 'bi bi-caret-down-fill' : 'bi bi-caret-up-fill')

  constructor() {
    effect(() => this.selectValue(this.value()))
  }

  private selectValue(value: T | null) {
    if (!value) {
      this.valueShow.set('');
      this.optionsShow().forEach(op => op.selected = op.selected || false);
      if (this.validate() && this.inputGroup()) {
        this.inputGroup().checkInput(this.constants.INPUT_ERRORS.ERROR);
      }

    } else {
      const optionFound: DdrSelectItem<T> | undefined = this.options().find(option => this.compareFn()(option.value, value));
      if (optionFound) {
        this.valueShow.set(this.translate() ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label);
        this.optionsShow().forEach(option => option.selected = option.selected || this.compareFn()(option.value, optionFound.value));
        if (this.validate() && this.inputGroup()) {
          if (this.value() == null) {
            this.inputGroup().checkInput(this.constants.INPUT_ERRORS.ERROR);
          } else {
            this.inputGroup().checkInput(this.constants.INPUT_ERRORS.VALID);
          }
        }
      } else {
        this.value.set(null);
      }
    }
  }

  togglePanelOptions() {
    if (!this.disabled()) {
      setTimeout(() => {
        this.showItems.update((value: boolean) => !value);
      }, 100);
    }
  }

  onSelectItem(item: DdrSelectItem<T>) {

    if (this.allowDeselect() || !item.selected) {

      item.selected = !item.selected

      if (this.closeOnSelect()) {
        this.showItems.set(false);
      }
      if (item.selected) {
        this.valueShow.set(this.translate() ? this.ddrTranslate.getTranslate(item.label) : item.label);
        this.value.set(item.value);
      } else {
        this.valueShow.set('');
        this.value.set(null);
      }

      this.selectItem.emit(item);

    }

  }

  hidePanelItems() {
    setTimeout(() => {
      this.showItems.set(false);
    }, 100);
  }

}
