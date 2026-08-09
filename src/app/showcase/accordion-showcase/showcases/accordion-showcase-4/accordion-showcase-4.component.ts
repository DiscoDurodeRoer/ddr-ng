import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-4',
  templateUrl: './accordion-showcase-4.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase4Component {}
