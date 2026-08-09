import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  ViewEncapsulation,
  inject,
  OnInit,
  input,
  output,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DdrDetailService } from './services/ddr-detail.service';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrOrientationDetail, DdrPositionDetail } from 'ddr-ng/types';

@Component({
  selector: 'ddr-detail',
  templateUrl: './ddr-detail.component.html',
  styleUrl: './ddr-detail.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [NgTemplateOutlet],
  animations: [
    trigger('slide-right-to-right', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
    trigger('slide-left-to-right', [
      transition(':enter', [
        style({ transform: 'translateX(-200%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(-200%)' })),
      ]),
    ]),
    trigger('slide-right-to-left', [
      transition(':enter', [
        style({ transform: 'translateX(200%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(200%)' })),
      ]),
    ]),
    trigger('slide-left-to-left', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
    trigger('slide-top', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('600ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
    trigger('slide-bottom', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('600ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class DdrDetailComponent implements OnInit {
  
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  readonly id: InputSignal<string> = input.required<string>();
  readonly position: InputSignal<DdrPositionDetail> =
    input<DdrPositionDetail>(this.constants.ORIENTATION.RIGHT);
  readonly orientation: InputSignal<DdrOrientationDetail> =
    input<DdrOrientationDetail>(this.constants.ORIENTATION.RIGHT);

  readonly close: OutputEmitterRef<boolean> = output<boolean>();

  public show: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit(): void {
    this.ddrDetailService.add(this);
  }

  closeDetail() {
    this.show.set(false);
    setTimeout(() => {
      this.close.emit(true);
    }, 600);
  }
}
