import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, ViewEncapsulation, EventEmitter, inject } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
import { DdrOrientationButtonSplit, DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-button-split',
  templateUrl: './ddr-button-split.component.html',
  styleUrls: ['./ddr-button-split.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective,
    NgClass
  ],
  animations: [
    trigger('overlayAnimation', [
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
    ])
  ]
})
export class DdrButtonSplitComponent<T> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() actions?: DdrAction<T>[] = [];
  @Input() showFirst: boolean = true;
  @Input() showFirstInOptions: boolean = true;
  @Input() showFirstOnlyIcon: boolean = false;
  @Input() showOnlyIcon: boolean = false;
  @Input() transparent: boolean = false;
  @Input() border: boolean = true;
  @Input() disabled: boolean = false;
  @Input() position: DdrOrientationButtonSplit = this.constants.ORIENTATION.BOTTOM_RIGHT;
  @Input() size: DdrSize = this.constants.SIZE.SMALL;
  @Input() iconShowOptions: string = 'bi bi-caret-down-fill';

  @Output() selectAction: EventEmitter<DdrAction<T>> = new EventEmitter<DdrAction<T>>();
  @Output() openActions: EventEmitter<boolean> = new EventEmitter<boolean>();

  public showOptions: boolean = false;

  togglePanelOptions() {
    setTimeout(() => {
      this.showOptions = !this.showOptions
      this.openActions.emit(this.showOptions);
    }, 100);
  }

  sendAction(action: DdrAction<T>) {
    this.selectAction.emit(action);
    this.showOptions = false;
    this.openActions.emit(this.showOptions);
  }

  hideOptions() {
    setTimeout(() => {
      if (this.showOptions) {
        this.openActions.emit(false);
      }
      this.showOptions = false;
    }, 100)
  }

}
