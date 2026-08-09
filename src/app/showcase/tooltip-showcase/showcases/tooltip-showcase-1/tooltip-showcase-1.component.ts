import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-1',
  templateUrl: './tooltip-showcase-1.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase1Component {}
