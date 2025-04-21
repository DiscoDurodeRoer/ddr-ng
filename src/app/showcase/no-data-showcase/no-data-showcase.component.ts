import { Component } from '@angular/core';
import { DdrNoDataComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-no-data-showcase',
    templateUrl: './no-data-showcase.component.html',
    styleUrls: ['./no-data-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrNoDataComponent
    ]
})
export class NoDataShowcaseComponent {

}
