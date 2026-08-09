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
  selector: 'spinner-block-showcase-1',
  templateUrl: './spinner-block-showcase-1.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase1Component {

  public loadData: WritableSignal<boolean> = signal<boolean>(true);

  onLoadData() {
    this.loadData.set(false);
    setTimeout(() => {
      this.loadData.set(true);
    }, 5000);
  }
}
