import { Component } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-4',
  templateUrl: './toggle-showcase-4.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase4Component {}
