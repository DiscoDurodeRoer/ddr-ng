import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-2',
  templateUrl: './input-group-showcase-2.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase2Component {}
