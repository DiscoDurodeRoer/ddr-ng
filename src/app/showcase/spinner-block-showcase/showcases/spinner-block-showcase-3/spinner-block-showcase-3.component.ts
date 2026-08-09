import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSpinnerBlockDirective } from 'ddr-ng/spinner';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'spinner-block-showcase-3',
  templateUrl: './spinner-block-showcase-3.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase3Component {

  public loadDataBlock1: WritableSignal<boolean> = signal<boolean>(true);
  public loadDataBlock2: WritableSignal<boolean> = signal<boolean>(true);

  onLoadDataBlock1() {
    this.loadDataBlock1.set(false);
    setTimeout(() => {
      this.loadDataBlock1.set(true);
    }, 5000);
  }

  onLoadDataBlock2() {
    this.loadDataBlock2.set(false);
    setTimeout(() => {
      this.loadDataBlock2.set(true);
    }, 5000);
  }
}
