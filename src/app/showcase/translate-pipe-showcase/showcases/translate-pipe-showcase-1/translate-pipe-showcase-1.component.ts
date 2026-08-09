import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'translate-pipe-showcase-1',
  templateUrl: './translate-pipe-showcase-1.component.html',
  imports: [
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcase1Component {}
