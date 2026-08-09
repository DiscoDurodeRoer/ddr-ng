import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number'

@Component({
  selector: 'loop-number-showcase-1',
  templateUrl: './loop-number-showcase-1.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase1Component {}
