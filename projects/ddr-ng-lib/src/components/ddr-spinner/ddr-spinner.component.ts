import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrls: ['./ddr-spinner.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass
  ]
})
export class DdrSpinnerComponent {

  @Input() pathImg: string = '';

  public show: boolean = false;
  public embedded: boolean = false;

}