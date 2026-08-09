import { Component } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-5',
  templateUrl: './toggle-showcase-5.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase5Component {}
