
import { Component, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'ddr-progress-bar',
  templateUrl: './ddr-progress-bar.component.html',
  styleUrls: ['./ddr-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class DdrProgressBarComponent {

  readonly value = input.required<number>();
  readonly label = input<string>();
  readonly height = input<number>(16);
  readonly striped = input<boolean>(false);
  readonly animated = input<boolean>(false);
  readonly floatText = input<boolean>(false);

}
