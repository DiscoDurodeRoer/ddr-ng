import { Component } from '@angular/core';
import { DdrTooltipDirective } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-tooltip-showcase',
  templateUrl: './tooltip-showcase.component.html',
  styleUrls: ['./tooltip-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTooltipDirective
  ]
})
export class TooltipShowcaseComponent {

}
