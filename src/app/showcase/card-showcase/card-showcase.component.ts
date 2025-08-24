import { Component } from '@angular/core';
import { DdrCardComponent, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'card-showcase',
    templateUrl: './card-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrCardComponent,
        DdrTranslatePipe
    ]
})
export class CardShowcaseComponent { }
