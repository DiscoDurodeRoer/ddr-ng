import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-4',
  templateUrl: './progress-bar-showcase-4.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase4Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
