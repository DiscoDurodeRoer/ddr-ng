import { Component, inject } from '@angular/core';
import { DdrResolutionService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-resolution-showcase',
    templateUrl: './resolution-showcase.component.html',
    styleUrls: ['./resolution-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent
    ]
})
export class ResolutionShowcaseComponent {

  public resolution: DdrResolutionService = inject(DdrResolutionService);
 
}
