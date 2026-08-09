import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-9',
  templateUrl: './input-number-showcase-9.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase9Component {}
