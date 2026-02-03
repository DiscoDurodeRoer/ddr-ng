import { Component, InputSignal, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'ddr-progress-bar',
  templateUrl: './ddr-progress-bar.component.html',
  styleUrl: './ddr-progress-bar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DdrProgressBarComponent {
  readonly value: InputSignal<number> = input.required<number>();
  readonly label: InputSignal<string | undefined> = input<string | undefined>();
  readonly height: InputSignal<number> = input<number>(16);
  readonly striped: InputSignal<boolean> = input<boolean>(false);
  readonly animated: InputSignal<boolean> = input<boolean>(false);
  readonly floatText: InputSignal<boolean> = input<boolean>(false);
}
