import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-2',
  templateUrl: './loop-number-showcase-2.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase2Component { }
