import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrToast } from './bean/ddr-toast';
import { DdrToastService } from './ddr-toast.service';
import { NgClass } from '@angular/common';
import { DdrOrientation } from '../../types/types';

@Component({
  selector: 'ddr-toast',
  templateUrl: './ddr-toast.component.html',
  styleUrls: ['./ddr-toast.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgClass
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
export class DdrToastComponent implements OnInit {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);

  @Input() timeOut?: number;
  @Input() orientation: DdrOrientation = this.constants.ORIENTATION.TOP_RIGHT;
  @Input() block: boolean = false;

  ngOnInit() {
    if (this.timeOut) {
      this.ddrToastService.timeOut = this.timeOut;
    }
  }

  getToastColor(toast: DdrToast) {
    return ('bg-' + toast.status + ' border-' + toast.status);
  }
}