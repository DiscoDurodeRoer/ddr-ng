
import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'ddr-card',
  templateUrl: './ddr-card.component.html',
  styleUrls: ['./ddr-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class DdrCardComponent {
  readonly showHeader = input<boolean>(true);
  readonly showFooter = input<boolean>(false);
  readonly rounded = input<boolean>(true);
  readonly border = input<boolean>(true);
  readonly shadow = input<boolean>(true);
  readonly background = input<string>();
  readonly color = input<string>();
}
