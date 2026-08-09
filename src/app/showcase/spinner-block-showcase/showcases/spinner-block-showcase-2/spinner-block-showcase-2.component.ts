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
  selector: 'spinner-block-showcase-2',
  templateUrl: './spinner-block-showcase-2.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase2Component {

  public loadData: WritableSignal<boolean> = signal<boolean>(true);

  onLoadData() {
    this.loadData.set(false);
    setTimeout(() => {
      this.loadData.set(true);
    }, 5000);
  }

}
