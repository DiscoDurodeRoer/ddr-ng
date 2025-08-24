import { Component } from '@angular/core';
import { DdrButton, DdrButtonMultipleComponent, DdrOrientatioTooltip, DdrTooltipDirective, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'tooltip-showcase',
    templateUrl: './tooltip-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrTooltipDirective,
        DdrTranslatePipe,
        DdrButtonMultipleComponent,
        FormsModule
    ]
})
export class TooltipShowcaseComponent {

    public buttonsOrientation: DdrButton[] = [
        {
            icon: 'bi bi-arrow-up',
            value: 'top'
        },
        {
            icon: 'bi bi-arrow-right',
            value: 'right'
        },
        {
            icon: 'bi bi-arrow-down',
            value: 'bottom'
        },
        {
            icon: 'bi bi-arrow-left',
            value: 'left'
        }
    ];

    public tooltipOrientation: DdrOrientatioTooltip = 'top';

    public tooltipTemplateData: any = {
        value: 'data template'
    }


}