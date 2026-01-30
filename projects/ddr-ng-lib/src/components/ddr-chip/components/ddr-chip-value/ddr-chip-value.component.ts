import { Component, InputSignal, OutputEmitterRef, ViewEncapsulation, input, output } from '@angular/core';

@Component({
  selector: 'ddr-chip-value',
  templateUrl: './ddr-chip-value.component.html',
  styleUrls: ['./ddr-chip-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DdrChipValueComponent {

  readonly value: InputSignal<string> = input.required<string>();
  readonly canDelete: InputSignal<boolean> = input<boolean>(true);

  readonly delete: OutputEmitterRef<string> = output<string>();
  readonly clickValue: OutputEmitterRef<string> = output<string>();

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
