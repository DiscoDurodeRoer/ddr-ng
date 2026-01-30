
import { Component, ViewEncapsulation, input, output } from '@angular/core';

@Component({
  selector: 'ddr-chip-value',
  templateUrl: './ddr-chip-value.component.html',
  styleUrls: ['./ddr-chip-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class DdrChipValueComponent {

  readonly value = input.required<string>();
  readonly canDelete = input<boolean>(true);

  readonly delete = output<string>();
  readonly clickValue = output<string>();

  onClickValue($event: MouseEvent) {
    $event?.stopPropagation();
    this.clickValue.emit(this.value());
  }

  onDelete() {
    if (this.canDelete()) {
      this.delete.emit(this.value());
    }
  }

}
