import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-progress-bar',
  templateUrl: './ddr-progress-bar.component.html',
  styleUrls: ['./ddr-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ]
})
export class DdrProgressBarComponent {

  @Input({ required: true }) value!: number;
  @Input() label?: string;
  @Input() height: number = 16;
  @Input() striped: boolean = false;
  @Input() animated: boolean= false;
  @Input() floatText: boolean = false;

}
