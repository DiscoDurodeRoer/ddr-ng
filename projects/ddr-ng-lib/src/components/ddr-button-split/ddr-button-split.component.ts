import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, inject, ChangeDetectionStrategy, ChangeDetectorRef, input, output } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

import { DdrOrientationButtonSplit, DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-button-split',
  templateUrl: './ddr-button-split.component.html',
  styleUrls: ['./ddr-button-split.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrClickOutsideDirective
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
  public readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly actions = input<DdrAction<T>[] | undefined>([]);
  readonly showFirst = input<boolean>(true);
  readonly showFirstInOptions = input<boolean>(true);
  readonly showFirstOnlyIcon = input<boolean>(false);
  readonly showOnlyIcon = input<boolean>(false);
  readonly transparent = input<boolean>(false);
  readonly border = input<boolean>(true);
  readonly disabled = input<boolean>(false);
  readonly position = input<DdrOrientationButtonSplit>(this.constants.ORIENTATION.BOTTOM_RIGHT);
  readonly size = input<DdrSize>(this.constants.SIZE.SMALL);
  readonly iconShowOptions = input<string>('bi bi-caret-down-fill');

  readonly selectAction = output<DdrAction<T>>();
  readonly openActions = output<boolean>();

  public showOptions: boolean = false;

  togglePanelOptions() {
    setTimeout(() => {
      this.showOptions = !this.showOptions
      this.openActions.emit(this.showOptions);
      this.changeDetectorRef.detectChanges();
    }, 100);
  }

  sendAction(action: DdrAction<T>) {
    this.selectAction.emit(action);
    this.showOptions = false;
    this.openActions.emit(this.showOptions);
    this.changeDetectorRef.detectChanges();
  }

  hideOptions() {
    setTimeout(() => {
      if (this.showOptions) {
        this.openActions.emit(false);
      }
      this.showOptions = false;
      this.changeDetectorRef.detectChanges();
    }, 100)
  }

}
