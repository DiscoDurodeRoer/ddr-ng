import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-1',
  templateUrl: './accordion-showcase-1.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase1Component {}
