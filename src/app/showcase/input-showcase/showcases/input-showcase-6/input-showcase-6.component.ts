import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-6',
  templateUrl: './input-showcase-6.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase6Component {}
