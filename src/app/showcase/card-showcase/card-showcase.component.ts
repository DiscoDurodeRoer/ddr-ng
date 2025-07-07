import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-card-showcase',
    templateUrl: './card-showcase.component.html',
    styleUrls: ['./card-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrCardComponent
    ]
})
export class CardShowcaseComponent {

}
