import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-2',
  templateUrl: './accordion-showcase-2.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase2Component {}
