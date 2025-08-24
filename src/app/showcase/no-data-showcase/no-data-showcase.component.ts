import { Component } from '@angular/core';
import {
    DdrButton,
    DdrButtonMultipleComponent,
    DdrNoDataComponent,
    DdrSize,
    DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'no-data-showcase',
    templateUrl: './no-data-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrNoDataComponent,
        DdrButtonMultipleComponent,
        DdrTranslatePipe,
        FormsModule
    ]
})
export class NoDataShowcaseComponent {

    public size: DdrSize = 'large'
    public buttonsSize: DdrButton[] = [
        {
            text: 'small',
            value: 'small'
        },
        {
            text: 'medium',
            value: 'medium'
        },
        {
            text: 'large',
            value: 'large'
        }
    ];

}
