import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrSpinnerBlockDirective, DdrButtonComponent, DdrCardComponent, DdrTranslatePipe } from 'ddr-ng';

@Component({
  selector: 'spinner-block',
  templateUrl: './spinner-block-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockComponent {

  public loadDataEx1: boolean = true;
  public loadDataEx2: boolean = true;
  public loadDataEx3B1: boolean = true;
  public loadDataEx3B2: boolean = true;
  public loadDataEx4: boolean = true;

  onLoadDataEx1() {
    this.loadDataEx1 = false;
    setTimeout(() => {
      this.loadDataEx1 = true;
    }, 5000);
  }

  onLoadDataEx2() {
    this.loadDataEx2 = false;
    setTimeout(() => {
      this.loadDataEx2 = true;
    }, 5000);
  }

  onLoadDataEx3B1() {
    this.loadDataEx3B1 = false;
    setTimeout(() => {
      this.loadDataEx3B1 = true;
    }, 5000);
  }

  onLoadDataEx3B2() {
    this.loadDataEx3B2 = false;
    setTimeout(() => {
      this.loadDataEx3B2 = true;
    }, 5000);
  }

  onLoadDataEx4() {
    this.loadDataEx4 = false;
    setTimeout(() => {
      this.loadDataEx4 = true;
    }, 5000);
  }

}
