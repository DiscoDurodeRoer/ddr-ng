import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, inject, ViewEncapsulation } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { NgClass, NgStyle } from '@angular/common';
import { DdrToast } from './bean/ddr-toast';
import { DdrOrientationToast } from '../../types/types';

@Component({
  selector: 'ddr-toast',
  templateUrl: './ddr-toast.component.html',
  styleUrls: ['./ddr-toast.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass,
    NgStyle
  ],
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ])
  ]
})
export class DdrToastComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  public toasts: DdrToast[] = [];
  public orientation!: DdrOrientationToast;

  closeToast(index: number) {
    const toast: DdrToast = this.toasts[index];
    toast.rendered = false;
    setTimeout(() => {
      this.toasts.splice(index, 1);
    }, 195);
  }


}