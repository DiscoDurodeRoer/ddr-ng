import { Component } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent } from 'ddr-ng/components/tabs';

@Component({
  selector: 'tabs-showcase-1',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-1.component.html',
  styleUrl: './tabs-showcase-1.component.scss',
})
export class TabsShowcase1Component {}
