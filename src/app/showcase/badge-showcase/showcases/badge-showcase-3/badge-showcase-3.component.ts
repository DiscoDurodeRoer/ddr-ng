import { Component, ViewEncapsulation } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-3',
  templateUrl: './badge-showcase-3.component.html',
  styleUrl: './badge-showcase-3.component.scss',
  imports: [
    DdrBadgePillComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class BadgeShowcase3Component { }
