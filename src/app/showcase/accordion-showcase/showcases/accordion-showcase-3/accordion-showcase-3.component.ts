import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-3',
  templateUrl: './accordion-showcase-3.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase3Component {}
