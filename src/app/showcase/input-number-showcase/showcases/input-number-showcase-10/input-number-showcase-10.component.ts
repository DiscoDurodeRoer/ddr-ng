import {
  Component,
  inject
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-10',
  templateUrl: './input-number-showcase-10.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputNumberShowcase10Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.number.event.click'),
    );
  }

  keyPressed(value: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.number.keypressed'),
      value.toString(),
    );
  }
}
