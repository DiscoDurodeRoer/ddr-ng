import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { DdrSpinnerService } from './ddr-spinner.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrls: ['./ddr-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgClass
  ]
})
export class DdrSpinnerComponent {

  public readonly ddrSpinner: DdrSpinnerService = inject(DdrSpinnerService)

  @Input() embedded: boolean = false;
  @Input() pathImgSpinner: string = '';

}