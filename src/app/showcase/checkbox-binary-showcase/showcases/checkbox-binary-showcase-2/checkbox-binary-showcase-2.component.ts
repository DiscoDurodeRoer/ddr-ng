import { Component } from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-2',
  templateUrl: './checkbox-binary-showcase-2.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ],
})
export class CheckboxBinaryShowcase2Component {}
