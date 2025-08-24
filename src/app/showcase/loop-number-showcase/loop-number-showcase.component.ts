import { Component } from '@angular/core';
import { DdrLoopNumberPipe, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'loop-number-showcase',
    templateUrl: './loop-number-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrLoopNumberPipe,
        DdrTranslatePipe
    ]
})
export class LoopNumberShowcaseComponent { }
