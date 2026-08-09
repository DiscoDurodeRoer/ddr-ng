import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-1',
  templateUrl: './toggle-showcase-1.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<boolean> = signal<boolean>(false);

  toggleValue(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + '',
    );
  }
}
