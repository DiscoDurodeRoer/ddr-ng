
import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Output, EventEmitter, ViewEncapsulation, Input, inject, OnInit } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { NgTemplateOutlet } from '@angular/common';
import { DdrOrientatioDetail } from '../../types/types';
import { DdrDetailService } from './ddr-detail.service';

@Component({
    selector: 'ddr-detail',
    templateUrl: './ddr-detail.component.html',
    styleUrls: ['./ddr-detail.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
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
export class DdrDetailComponent implements OnInit {

    public readonly constants: DdrConstantsService = inject(DdrConstantsService)
    public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

    @Input({ required: true }) id!: string;
    @Input() orientation: DdrOrientatioDetail = this.constants.ORIENTATION.RIGHT;

    @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

    public show: boolean = false;

    ngOnInit(): void {
        this.ddrDetailService.add(this)
    }

    closeDetail() {
        this.show = false;
        setTimeout(() => {
            this.close.emit(true);
        }, 600);
    }

}