import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewEncapsulation, inject, ChangeDetectionStrategy, ChangeDetectorRef, input, output, WritableSignal, signal, InputSignal, OutputEmitterRef } from '@angular/core';
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

  readonly actions: InputSignal<DdrAction<T>[]> = input<DdrAction<T>[]>([]);
  readonly showFirst: InputSignal<boolean> = input<boolean>(true);
  readonly showFirstInOptions: InputSignal<boolean> = input<boolean>(true);
  readonly showFirstOnlyIcon: InputSignal<boolean> = input<boolean>(false);
  readonly showOnlyIcon: InputSignal<boolean> = input<boolean>(false);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);
  readonly border: InputSignal<boolean> = input<boolean>(true);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly position: InputSignal<DdrOrientationButtonSplit> = input<DdrOrientationButtonSplit>(this.constants.ORIENTATION.BOTTOM_RIGHT);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.SMALL);
  readonly iconShowOptions: InputSignal<string> = input<string>('bi bi-caret-down-fill');

  readonly selectAction: OutputEmitterRef<DdrAction<T>> = output<DdrAction<T>>();
  readonly openActions: OutputEmitterRef<boolean> = output<boolean>();

  public showOptions: WritableSignal<boolean> = signal<boolean>(false);

  togglePanelOptions() {
    setTimeout(() => {
      this.showOptions.update((value: boolean) => !value);
      this.openActions.emit(this.showOptions());
    }, 100);
  }

  sendAction(action: DdrAction<T>) {
    this.selectAction.emit(action);
    this.showOptions.set(false);
    this.openActions.emit(this.showOptions());
  }

  hideOptions() {
    setTimeout(() => {
      if (this.showOptions()) {
        this.openActions.emit(false);
      }
      this.showOptions.set(false);
    }, 100)
  }

}
