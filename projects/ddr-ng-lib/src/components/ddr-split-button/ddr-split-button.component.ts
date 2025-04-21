import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, ViewEncapsulation, EventEmitter, inject } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
import { DdrOrientation, DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-split-button',
  templateUrl: './ddr-split-button.component.html',
  styleUrls: ['./ddr-split-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
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
  ],
})
export class DdrSplitButtonComponent<T> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() actions?: DdrAction<T>[] = [];
  @Input() showFirst: boolean = true;
  @Input() showFirstInOptions: boolean = true;
  @Input() showFirstOnlyIcon: boolean = false;
  @Input() showOnlyIcon: boolean = false;
  @Input() transparent: boolean = false;
  @Input() border: boolean = true;
  @Input() disabled: boolean = false;
  @Input() position: DdrOrientation = this.constants.ORIENTATION.BOTTOM_LEFT;
  @Input() size: DdrSize = this.constants.SIZE.SMALL;
  @Input() iconShowOptions: string = 'bi bi-caret-down-fill';

  @Output() selectAction: EventEmitter<DdrAction<T>> = new EventEmitter<DdrAction<T>>();
  @Output() openCloseActions: EventEmitter<boolean> = new EventEmitter<boolean>();

  public showOptions: boolean = false;

  openCloseOptions($event: MouseEvent) {
    if ($event) {
      $event.stopPropagation();
    }
    this.showOptions = !this.showOptions
    this.openCloseActions.emit(this.showOptions);
  }

  sendAction($event: MouseEvent | null, action: DdrAction<T>) {
    if ($event) {
      $event.stopPropagation();
    }
    this.selectAction.emit(action);
    this.showOptions = false;
  }

  hideOptions() {
    this.showOptions = false;
  }

}
