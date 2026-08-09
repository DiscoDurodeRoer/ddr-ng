import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, inject, ViewEncapsulation } from '@angular/core';

import { DdrToast } from './bean/ddr-toast';
import { DdrOrientationToast } from 'ddr-ng/types';
import { DdrConstantsService } from 'ddr-ng/constants';

@Component({
  selector: 'ddr-toast',
  templateUrl: './ddr-toast.component.html',
  styleUrl: './ddr-toast.component.scss',
  encapsulation: ViewEncapsulation.None,
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
  public readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public toasts: DdrToast[] = [];
  public orientation!: DdrOrientationToast;

  closeToast(index: number) {
    const toast: DdrToast = this.toasts[index];
    toast.rendered = false;
    setTimeout(() => {
      this.toasts.splice(index, 1);
      this.changeDetectorRef.detectChanges();
    }, 195);
  }


}