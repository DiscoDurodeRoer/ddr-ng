import { Component, EventEmitter, Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'ddr-chip-value',
  templateUrl: './ddr-chip-value.component.html',
  styleUrls: ['./ddr-chip-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class DdrChipValueComponent {

  @Input({ required: true }) value!: string;

  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickValue: EventEmitter<string> = new EventEmitter<string>();

  onClickValue($event: MouseEvent) {
    $event?.stopPropagation();
    this.clickValue.emit(this.value);
  }

  onDelete() {
    this.delete.emit(this.value);
  }

}
