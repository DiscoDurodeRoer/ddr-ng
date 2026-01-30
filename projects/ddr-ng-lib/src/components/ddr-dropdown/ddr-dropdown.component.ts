import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, inject, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewEncapsulation, input, output, contentChild, viewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslateService } from '../../services/ddr-translate.service';

import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';

import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';

import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientationDropdown, DdrOrientatioTooltip, DdrSize } from '../../types/types';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrls: ['./ddr-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    DdrInputGroupComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    NgTemplateOutlet
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
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrDropdownComponent,
      multi: true,
    },
  ]
})
export class DdrDropdownComponent<T> extends DdrControlValueAccessor implements OnInit, OnChanges, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly options = input.required<DdrSelectItem<T>[]>();
  readonly showFilter = input<boolean>(true);
  readonly label = input<string>();
  readonly name = input<string>('');
  readonly inline = input<boolean>(false);
  readonly validate = input<boolean>(false);
  readonly orientation = input<DdrOrientationDropdown>(this.constants.ORIENTATION_DROPDOWN.BOTTOM);
  readonly labelPlaceholderFilter = input<string>('');
  readonly labelNoResults = input<string>();
  readonly disabled = input<boolean>(false);
  readonly placeholder = input<string>('');
  readonly required = input<boolean>(false);
  readonly translate = input<boolean>(true);
  readonly modalOptions = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText = input<string>();
  readonly closeOnSelect = input<boolean | undefined>(true);
  readonly allowDeselect = input<boolean>(false);
  readonly compareFn = input<Function>((a: T, b: T) => a === b);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent = input<boolean>(false);

  readonly selectItem = output<DdrSelectItem<T>>();

  readonly itemTemplateOutside = contentChild.required<TemplateRef<any> | null>('itemTemplate');
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  readonly inputGroup = viewChild.required(DdrInputGroupComponent);

  public showItems: boolean = false;
  public optionsShow: DdrSelectItem<T>[] = [];
  public valueShow: string | null = null;

  public isSearching: boolean = false;
  public filterInput: string = '';
  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['options'] && !changes['options'].firstChange) {
        const options = this.options();
        if (!options || (options && options.length == 0)) {
          this.optionsShow = [];
          this.value = null;
        } else {
          this.optionsShow = options.slice(0);
          if (this.value) {
            this.selectValue(this.value);
          }
        }
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnInit() {
    this.subscription = this.changeValue.subscribe({
      next: (v: T) => {
        this.selectValue(v);
      }
    })
    const options = this.options();
    if (options && options.length > 0) {
      this.optionsShow = options.slice(0);
    }
  }

  private selectValue(value: T) {
    if (!value) {
      this.valueShow = '';
      this.optionsShow.forEach(op => op.selected = false);
      const inputGroup = this.inputGroup();
      if (inputGroup) {
        inputGroup!.input()!.input().control.markAsDirty();
        if (this.validate()) {
          inputGroup.checkInput(this.constants.INPUT_ERRORS.VALID);
        }
      }

    } else {
      const optionFound: DdrSelectItem<T> | undefined = this.options().find(option => this.compareFn()(option.value, value));
      if (optionFound) {
        this.valueShow = this.translate() ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label;
        this.options().forEach(option => option.selected = this.compareFn()(option.value, optionFound.value));
        const inputGroup = this.inputGroup();
        if (inputGroup) {
          inputGroup!.input()!.input().control.markAsDirty();
          if (this.validate()) {
            if (this.value == null) {
              inputGroup.checkInput(this.constants.INPUT_ERRORS.ERROR);
            } else {
              inputGroup.checkInput(this.constants.INPUT_ERRORS.VALID);
            }
          }
        }
      } else {
        this.value = null;
      }
    }
  }

  togglePanelOptions() {
    if (!this.disabled()) {
      setTimeout(() => {
        this.showItems = !this.showItems;
        this.changeDetectorRef.detectChanges();
      }, 100);
    }
  }

  filter(searchWord: string) {
    this.optionsShow = this.options().filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()))
    this.isSearching = searchWord.length > 0;
  }

  onSelectItem(item: DdrSelectItem<T>) {

    if (this.allowDeselect() || !item.selected) {

      item.selected = !item.selected

      if (this.closeOnSelect()) {
        this.showItems = false;
      }
      if (item.selected) {
        this.valueShow = this.translate() ? this.ddrTranslate.getTranslate(item.label) : item.label;
        this.value = item.value;
      } else {
        this.valueShow = ''
        this.value = null;
      }

      this.selectItem.emit(item);

    }

  }

  hidePanelItems() {
    setTimeout(() => {
      this.showItems = false;
    }, 100);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
