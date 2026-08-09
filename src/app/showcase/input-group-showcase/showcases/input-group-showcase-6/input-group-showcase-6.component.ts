import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-6',
  templateUrl: './input-group-showcase-6.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase6Component {}
