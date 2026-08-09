import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-2',
  templateUrl: './input-showcase-2.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase2Component {}
