import { Component } from '@angular/core';
import { DdrTreeComponent } from 'ddr-ng/components/tree';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'tree-showcase-9',
  templateUrl: './tree-showcase-9.component.html',
  imports: [
    DdrTreeComponent,
    DdrTranslatePipe
  ]
})
export class TreeShowcase9Component {}
