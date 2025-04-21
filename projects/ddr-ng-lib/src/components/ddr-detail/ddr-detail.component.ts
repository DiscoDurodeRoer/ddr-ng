
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input, inject } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientation } from '../../types/types';

@Component({
  selector: 'ddr-detail',
  templateUrl: './ddr-detail.component.html',
  styleUrls: ['./ddr-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  animations: [
    trigger('slide-right', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slide-left', [
      transition(':enter', [
        style({ transform: 'translateX(-200%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(-200%)' }))
      ])
    ]),
    trigger('slide-top', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ]),
    trigger('slide-bottom', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class DdrDetailComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  @Input() orientation: DdrOrientation = this.constants.ORIENTATION.LEFT;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  public showDetail: boolean = true;

  closeDetail() {
    this.showDetail = false;
    setTimeout(() => {
      this.close.emit(true);
    }, 600);
  }

}