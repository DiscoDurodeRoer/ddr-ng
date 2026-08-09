import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-11',
  templateUrl: './input-showcase-11.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase11Component {}
