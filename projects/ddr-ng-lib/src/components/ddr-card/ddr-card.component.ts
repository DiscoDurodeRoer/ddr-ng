import { Component, InputSignal, ViewEncapsulation, input } from '@angular/core';

@Component({
  selector: 'ddr-card',
  templateUrl: './ddr-card.component.html',
  styleUrls: ['./ddr-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DdrCardComponent {
  readonly showHeader: InputSignal<boolean> = input<boolean>(true);
  readonly showFooter: InputSignal<boolean> = input<boolean>(false);
  readonly rounded: InputSignal<boolean> = input<boolean>(true);
  readonly border: InputSignal<boolean> = input<boolean>(true);
  readonly shadow: InputSignal<boolean> = input<boolean>(true);
  readonly background: InputSignal<string | undefined> = input<string>();
  readonly color: InputSignal<string | undefined> = input<string>();
}
