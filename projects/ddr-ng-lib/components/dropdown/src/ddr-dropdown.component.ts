import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  inject,
  TemplateRef,
  ViewEncapsulation,
  input,
  output,
  contentChild,
  viewChild,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  ModelSignal,
  model,
  effect,
  computed,
  Signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  FieldTree,
  form,
  FormField,
  FormValueControl,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';
import { DdrFilterDropdown } from './bean/filter-dropdown.model';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrOrientationDropdown, DdrOrientationTooltip, DdrSize } from 'ddr-ng/types';
import { DdrClickOutsideDirective } from 'ddr-ng/directives/click-outside';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrl: './ddr-dropdown.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    NgTemplateOutlet,
    FormField,
  ],
  animations: [
    trigger('overlayAnimationBottom', [
      state(
        'void',
        style({
          transform: 'translateY(5%)',
          opacity: 0,
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translate(0)',
          opacity: 1,
        }),
      ),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ]),
    trigger('overlayAnimationTop', [
      state(
        'void',
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        }),
      ),
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        }),
      ),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ]),
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
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly closeOnSelect: InputSignal<boolean> = input<boolean>(true);
  readonly allowDeselect: InputSignal<boolean> = input<boolean>(false);
  readonly compareFn: InputSignal<Function> = input<Function>((a: T, b: T) => a === b);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM,);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly textInput: InputSignal<string | undefined> = input<string | undefined>();
  readonly errors: InputSignal<readonly WithOptionalFieldTree<ValidationError>[]> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);

  public value: ModelSignal<T | null> = model<T | null>(null);

  readonly selectItem: OutputEmitterRef<DdrSelectItem<T>> = output<DdrSelectItem<T>>();

  readonly itemTemplateOutside = contentChild<TemplateRef<any> | null>('itemTemplate');
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  readonly inputGroup = viewChild.required(DdrInputGroupComponent);

  public showItems: WritableSignal<boolean> = signal<boolean>(false);
  public optionsShow: Signal<DdrSelectItem<T>[]> = computed<DdrSelectItem<T>[]>(
    () =>
      !this.options()?.length
        ? []
        : this.options()
          .filter((option) =>
            option.label
              .toLowerCase()
              .includes(this.filterForm.filter().value().toLowerCase()),
          )
          .map((option) => ({
            ...option,
            selected:
              this.value() != null
                ? this.compareFn()(option.value, this.value())
                : option.selected,
          })),
  );
  public valueShow: Signal<string> = computed(() =>
    this.value() != null
      ? this.options()
        .filter((option) => this.compareFn()(option.value, this.value()))
        .map((option) =>
          this.translate()
            ? this.ddrTranslate.getTranslate(option.label)
            : option.label,
        )
        .join(', ')
      : '',
  );

  public dirtyInput: WritableSignal<boolean> = signal<boolean>(false);
  public filterModel: WritableSignal<DdrFilterDropdown> = signal<DdrFilterDropdown>({ filter: '' });
  public filterForm: FieldTree<DdrFilterDropdown> = form(this.filterModel);

  public iconOrientation: Signal<string> = computed<string>(() =>
    this.orientation() === this.constants.ORIENTATION.BOTTOM
      ? 'bi bi-caret-down-fill'
      : 'bi bi-caret-up-fill',
  );

  constructor() {
    effect(() => this.selectValue(this.value()));
  }

  private selectValue(value: T | null) {
    if (this.value() !== null) {
      this.dirtyInput.set(true);
    }
    if (this.validate()) {
      if (value == null) {
        this.inputGroup().checkInput(this.constants.INPUT_ERRORS.ERROR);
      } else {
        this.inputGroup().checkInput(this.constants.INPUT_ERRORS.VALID);
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
      item.selected = !item.selected;

      if (this.closeOnSelect()) {
        this.showItems.set(false);
      }

      this.value.set(item.selected ? item.value : null);

      this.selectItem.emit(item);
    }
  }

  hidePanelItems() {
    setTimeout(() => {
      this.showItems.set(false);
    }, 100);
  }
}
