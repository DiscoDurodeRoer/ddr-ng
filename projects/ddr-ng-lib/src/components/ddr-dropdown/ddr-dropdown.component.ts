import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, EventEmitter, forwardRef, inject, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isEqual } from "lodash-es";
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrNgModelBase } from '../ddr-ngmodel-base/ddr-ngmodel-base.component';
import { DdrTranslateService } from '../../services/ddr-translate.service';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrCheckboxComponent } from '../ddr-checkbox/ddr-checkbox.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive'
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { DdrOrientation, DdrOrientationDropdown } from '../../types/types';

@Component({
  selector: 'ddr-dropdown',
  templateUrl: './ddr-dropdown.component.html',
  styleUrls: ['./ddr-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrInputGroupComponent,
    DdrCheckboxComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    DdrTooltipDirective,
    NgClass,
    NgStyle,
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
  ],
})
export class DdrDropdownComponent<T> extends DdrNgModelBase implements OnInit, OnChanges {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)
  private ddrTranslate: DdrTranslateService = inject(DdrTranslateService)

  @Input({ required: true }) options: DdrSelectItem<T>[] = [];
  @Input() showFilter: boolean = true;
  @Input() label?: string;
  @Input() inline: boolean = false;
  @Input() orientation: DdrOrientationDropdown = this.constants.ORIENTATION_DROPDOWN.BOTTOM;
  @Input() labelPlaceholderFilter?: string;
  @Input() labelNoResults?: string;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() multiple: boolean = false;
  @Input() required: boolean = false;
  @Input() labelCheckAll?: string;
  @Input() translate: boolean = true;
  @Input() touchUI: boolean = false;
  @Input() showTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.BOTTOM;
  @Input() tooltipText?: string;

  @Output() selectItem: EventEmitter<T> = new EventEmitter<T>();
  @Output() selectMultipleItem: EventEmitter<T[]> = new EventEmitter<T[]>();

  @ContentChild(TemplateRef, { static: false }) template!: TemplateRef<any> | null;

  public showItems: boolean = false;
  public optionsShow: DdrSelectItem<T>[] = [];
  public valueShow: string | null = null;
  public optionsCheck: DdrSelectItem<T>[] = [];
  public checkAll: boolean = false;
  public isSearching: boolean = false;
  public indexSelected?: number;
  public filterInput: string = '';

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['options'] && !changes['options'].firstChange) {
        if (!this.options || (this.options && this.options.length == 0)) {
          this.optionsShow = [];
          this.value = null;
          this.optionsCheck = [];
          this.checkAll = false;
        } else {
          this.optionsShow = this.options.slice(0);
          const valuesSelected = this.options.filter(v => v.selected).map(v => v.value);
          if (this.value || (this.multiple && valuesSelected.length > 0)) {
            if (this.value) {
              this.preload(this.value);
            } else if (this.multiple && valuesSelected.length > 0) {
              this.preload(valuesSelected);
            }
          }

          this.optionsCheck = [];
          for (const op of this.options) {
            if (!this.optionsCheck.find(opC => opC.value == op.value)) {
              this.optionsCheck.push({
                label: '',
                value: op.value,
                selected: op.selected
              });
            }
          }
        }

      }
    }
  }

  ngOnInit() {
    if (this.options && this.options.length > 0) {
      this.optionsShow = this.options.slice(0);

      for (const op of this.options) {
        if (!this.optionsCheck.find(opC => opC.value == op.value)) {
          this.optionsCheck.push({
            label: '',
            value: op.value,
            selected: op.selected
          });
        }
      }

      if (this.multiple) {
        const optionsSelected: DdrSelectItem<T>[] = this.options.filter(op => op.selected);
        this.valueShow = optionsSelected.map(v => this.translate ? this.ddrTranslate.getTranslate(v.label) : v.label).join(', ');
      } else {
        let optionFound: DdrSelectItem<T> | undefined = this.options.find(option => option.selected);
        if (optionFound) {
          this.valueShow = this.translate ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label;
        }
      }
    }

    this.firstValue.subscribe((v) => {
      if (v == null || v == undefined) {
        this.valueShow = null;
        this.optionsShow.forEach(op => op.selected = false);
        if (this.multiple) {
          this.checkAll = false;
          this.optionsCheck.forEach(op => op.selected = false);
        }
      } else {
        this.optionsShow.forEach(op => op.selected = false);
        if (this.multiple) {
          this.optionsCheck.forEach(op => op.selected = false);

          if (v instanceof Array) {
            if (v.length == 0) {
              this.valueShow = '';
              this.checkAll = false;
            } else {

              for (const element of v) {
                let optionFound: DdrSelectItem<T> | undefined = this.options.find(option => isEqual(option.value, element));
                if (optionFound) {
                  optionFound.selected = false;
                  this.markItem(optionFound);
                }
              }
              this.checkAll = !this.options.some(op => op.selected == false);
            }
          }

        } else {
          let optionFound: DdrSelectItem<T> | undefined = this.options.find(option => isEqual(option.value, v));
          if (optionFound) {
            this.valueShow = this.translate ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label;
            this.markItem(optionFound);
            this.indexSelected = this.options.findIndex(option => isEqual(option.value, v));
          }
        }

      }
    })

    this.changeValue.subscribe(v => {
      if (v == null || v == undefined) {
        this.valueShow = null;
        this.optionsShow.forEach(op => op.selected = false);
        if (this.multiple) {
          this.checkAll = false;
          this.optionsCheck.forEach(op => op.selected = false);
        }
      } else {
        this.optionsShow.forEach(op => op.selected = false);
        if (this.multiple) {
          this.optionsCheck.forEach(op => op.selected = false);
        }
        this.preload(v);
      }
    })

  }

  preload(value: T | T[]) {
    // Multiple
    if (value instanceof Array) {
      if (value.length == 0) {
        this.valueShow = '';
        this.checkAll = false;
      } else {
        for (const element of value) {
          let optionFound: DdrSelectItem<T> | undefined = this.options.find(option => isEqual(option.value, element));
          if (optionFound) {
            optionFound.selected = true;
            const indexItem = this.optionsCheck.findIndex(it => isEqual(it.value, element));
            if (indexItem != -1) {
              this.optionsCheck[indexItem].selected = true;
            }
          }
        }
        const optionsSelected: DdrSelectItem<T>[] = this.options.filter(op => op.selected);
        this.valueShow = optionsSelected.map(v => this.translate ? this.ddrTranslate.getTranslate(v.label) : v.label).join(', ');
        // this.value = optionsSelected.map(v => v.value);
        this.checkAll = !this.options.some(op => !op.selected);
        this.selectMultipleItem.emit(value);
      }

      // Single
    } else {
      let optionFound: DdrSelectItem<T> | undefined = this.options.find(option => isEqual(option.value, value));
      if (optionFound) {
        this.valueShow = this.translate ? this.ddrTranslate.getTranslate(optionFound.label) : optionFound.label;
        this.onSelectItem(optionFound);
        this.indexSelected = this.options.findIndex(option => isEqual(option.value, value));
      }
    }


  }

  showPanelOptions($event: any) {
    if (!this.disabled) {
      this.showItems = !this.showItems;
    }
  }

  filter(searchWord: string) {
    this.optionsShow = this.options.filter(option => option.label.toLowerCase().includes(searchWord.toLowerCase()))
    this.isSearching = searchWord.length > 0;
  }

  onSelectItem(item: DdrSelectItem<T>) {
    this.markItem(item);
    this.selectItem.emit(item.value);
  }

  clickMultiple(item: DdrSelectItem<T>) {
    this.markItem(item);
    this.selectMultipleItem.emit(this.value);
  }

  markItem(item: DdrSelectItem<T>) {
    if (this.multiple) {
      item.selected = !item.selected;
      const indexItem = this.optionsCheck.findIndex(it => it.value == item.value);
      if (indexItem != -1) {
        this.optionsCheck[indexItem].selected = item.selected;
      }
      const optionsSelected: DdrSelectItem<T>[] = this.options.filter(op => op.selected);
      this.valueShow = optionsSelected.map(v => this.translate ? this.ddrTranslate.getTranslate(v.label) : v.label).join(', ');
      this.value = optionsSelected.map(v => v.value);
      this.checkAll = !this.options.some(op => !op.selected);
    } else {
      this.showItems = false;
      this.valueShow = this.translate ? this.ddrTranslate.getTranslate(item.label) : item.label;
      this.value = item.value;
    }
  }

  clickCheckAll() {
    this.checkAll = !this.checkAll;
    this.options.forEach((option) => { option.selected = this.checkAll });
    this.optionsCheck.forEach((option) => (option.selected = this.checkAll));
    if (this.checkAll) {
      this.valueShow = this.options.map(op => this.translate ? this.ddrTranslate.getTranslate(op.label) : op.label).join(', ');
      this.value = this.options.map(v => v.value);
      this.selectMultipleItem.emit(this.value);
    } else {
      this.valueShow = '';
      this.value = [];
      this.selectMultipleItem.emit([]);
    }
  }

  // selectOptionKey($event: KeyboardEvent) {
  //   if ($event instanceof KeyboardEvent && !this.multiple && this.showItems) {
  //     $event.stopPropagation();
  //     if (this.indexSelected == null) {
  //       this.indexSelected = 0;
  //     } else {
  //       switch ($event.code) {
  //         case 'ArrowDown':
  //           if (this.indexSelected < this.options.length - 1) {
  //             this.indexSelected++;
  //           }
  //           break;
  //         case 'ArrowUp':
  //           if (this.indexSelected != 0) {
  //             this.indexSelected--;
  //           }
  //           break;
  //       }
  //     }

  //     this.onSelectItem(this.options[this.indexSelected]);
  //     this.showItems = true;
  //   }
  // }

  hidePanelItems() {
    this.showItems = false;
  }

}
