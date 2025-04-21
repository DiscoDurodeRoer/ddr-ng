import { Component } from '@angular/core';
import { DdrAccordionComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-accordion-showcase',
    templateUrl: './accordion-showcase.component.html',
    styleUrls: ['./accordion-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrAccordionComponent
    ]
})
export class AccordionShowcaseComponent {

}
