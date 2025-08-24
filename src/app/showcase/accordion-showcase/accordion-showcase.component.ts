import { Component, inject } from '@angular/core';
import { DdrAccordionComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'accordion-showcase',
    templateUrl: './accordion-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrAccordionComponent,
        DdrTranslatePipe
    ],
    providers: [
        DdrToastService
    ]
})
export class AccordionShowcaseComponent {

    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

    onClickOpen(state: boolean) {
        this.ddrToastService.addSuccessMessage(this.ddrTranslateService.getTranslate('success'), "clickOpen: " + state)
    }
}
