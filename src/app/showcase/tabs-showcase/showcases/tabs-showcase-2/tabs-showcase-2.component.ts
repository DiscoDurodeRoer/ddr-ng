import { Component } from '@angular/core';
import {
  DdrTabItemComponent,
  DdrTabsComponent
} from 'ddr-ng/components/tabs';

@Component({
  selector: 'tabs-showcase-2',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-2.component.html',
  styleUrl: './tabs-showcase-2.component.scss',
})
export class TabsShowcase2Component { }
