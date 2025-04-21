import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ddr-card',
    templateUrl: './ddr-card.component.html',
    styleUrls: ['./ddr-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        NgClass,
        NgStyle
    ]
})
export class DdrCardComponent {
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() rounded: boolean = true;
  @Input() border: boolean = true;
  @Input() shadow: boolean = true;
  @Input() background?: string;
  @Input() color?: string;
  
}
