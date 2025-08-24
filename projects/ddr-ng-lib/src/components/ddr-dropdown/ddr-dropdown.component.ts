import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, forwardRef, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrCheckboxBinaryComponent } from '../ddr-checkbox-binary/ddr-checkbox-binary.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive'
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { DdrOrientationDropdown, DdrOrientatioTooltip, DdrSize } from '../../types/types';
import { DdrCheckboxComponent } from '../ddr-checkbox/ddr-checkbox.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrls: ['./ddr-dropdown.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputGroupComponent,
    DdrCheckboxBinaryComponent,
    DdrCheckboxComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    DdrTooltipDirective,
    NgClass,
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
      useExisting: forwardRef(() => DdrDropdownComponent),
      multi: true,
    },
  ]
})
export class DdrDropdownComponent<T> extends DdrControlValueAccessor implements AfterViewInit, OnInit, OnChanges, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input({ required: true }) options: DdrSelectItem<T>[] = [];
  @Input() showFilter: boolean = true;
  @Input() label?: string;
  @Input() name: string = '';
  @Input() inline: boolean = false;
  @Input() validate: boolean = false;
  @Input() orientation: DdrOrientationDropdown = this.constants.ORIENTATION_DROPDOWN.BOTTOM;
  @Input() labelPlaceholderFilter: string = '';
  @Input() labelNoResults?: string;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() translate: boolean = true;
  @Input() modalOptions: boolean = false;
  @Input() tooltipOrientation: DdrOrientatioTooltip = this.constants.ORIENTATION.BOTTOM;
  @Input({ required: false }) tooltipText?: string;
  @Input({ required: false }) closeOnSelect?: boolean = true;
  @Input() allowDeselect: boolean = false;
  @Input() compareFn: Function = (a: T, b: T) => a === b;
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;
  @Input() transparent: boolean = false

  @Output() selectItem: EventEmitter<DdrSelectItem<T>> = new EventEmitter<DdrSelectItem<T>>();

  @ContentChild('itemTemplate', { static: false }) itemTemplateOutside!: TemplateRef<any> | null;
  @ContentChild('templateValid', { static: false }) templateValidOutside: TemplateRef<any> | null = null;
  @ContentChild('templateErrors', { static: false }) templateErrorsOutside: TemplateRef<any> | null = null;

  @ViewChild(DdrInputGroupComponent) inputGroup!: DdrInputGroupComponent;

  public showItems: boolean = false;
  public optionsShow: DdrSelectItem<T>[] = [];
  public valueShow: string | null = null;

  public isSearching: boolean = false;
  public filterInput: string = '';
  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }



  ngAfterViewInit(): void {
    this.subscription = this.changeValue.subscribe(v => {
      this.selectValue(v);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['options'] && !changes['options'].firstChange) {
        if (!this.options || (this.options && this.options.length == 0)) {
          this.optionsShow = [];
          this.value = null;
        } else {
          this.optionsShow = this.options.slice(0);
          if (this.value) {
            this.selectValue(this.value);
          }
        }
      }
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnInit() {
    if (this.options && this.options.length > 0) {
      this.optionsShow = this.options.slice(0);
    }
  }

  private selectValue(value: T) {
    if (!value) {
      this.valueShow = '';
      this.optionsShow.forEach(op => op.selected = false);
      if (this.inputGroup) {
        this.inputGroup!.input!.input.control.markAsDirty();
        if (this.validate) {
          this.inputGroup.checkInput(this.constants.INPUT_ERRORS.VALID);
        }
      }

    } else {
      const optionFound: DdrSelectItem<T> | undefined = this.options.find(option => this.compareFn(option.value, value));
      if (optionFound) {
        this.valueShow = this.translate ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label;
        this.options.forEach(option => option.selected = this.compareFn(option.value, optionFound.value));
        if (this.inputGroup) {
          this.inputGroup!.input!.input.control.markAsDirty();
          if (this.validate) {
            if (this.value == null) {
              this.inputGroup.checkInput(this.constants.INPUT_ERRORS.ERROR);
            } else {
              this.inputGroup.checkInput(this.constants.INPUT_ERRORS.VALID);
            }
          }
        }
      } else {
        this.value = null;
      }
    }
  }

  togglePanelOptions() {
    if (!this.disabled) {
      setTimeout(() => {
        this.showItems = !this.showItems;
      }, 100);
    }
  }

  filter(searchWord: string) {
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()))
    this.isSearching = searchWord.length > 0;
  }

  onSelectItem(item: DdrSelectItem<T>) {

    if (this.allowDeselect || !item.selected) {

      item.selected = !item.selected

      if (this.closeOnSelect) {
        this.showItems = false;
      }
      if (item.selected) {
        this.valueShow = this.translate ? this.ddrTranslate.getTranslate(item.label) : item.label;
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
