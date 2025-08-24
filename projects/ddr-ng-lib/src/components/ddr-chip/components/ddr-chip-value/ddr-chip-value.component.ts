import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, ViewEncapsulation, Output } from '@angular/core';

@Component({
  selector: 'ddr-chip-value',
  templateUrl: './ddr-chip-value.component.html',
  styleUrls: ['./ddr-chip-value.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgClass
  ]
})
export class DdrChipValueComponent {

  @Input({ required: true }) value!: string;
  @Input() canDelete: boolean = true;

  @Output() delete: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickValue: EventEmitter<string> = new EventEmitter<string>();

  onClickValue($event: MouseEvent) {
    $event?.stopPropagation();
    this.clickValue.emit(this.value);
  }

  onDelete() {
    if (this.canDelete) {
      this.delete.emit(this.value);
    }
  }

}
