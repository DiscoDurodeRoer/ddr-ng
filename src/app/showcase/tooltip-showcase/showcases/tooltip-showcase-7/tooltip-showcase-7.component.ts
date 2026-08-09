import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'tooltip-showcase-7',
  templateUrl: './tooltip-showcase-7.component.html',
  imports: [
    DdrTooltipDirective,
    DdrTranslatePipe
  ]
})
export class TooltipShowcase7Component {

  public tooltipTemplateData: any = {
    value: 'data template',
  };
  
}
