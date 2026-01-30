import { Component, ViewEncapsulation, input } from '@angular/core';


@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrls: ['./ddr-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None,
  
})
export class DdrSpinnerComponent {

  readonly pathImg = input<string>('');

  public show: boolean = false;
  public embedded: boolean = false;

}