import { Component, inject } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-12',
  templateUrl: './input-showcase-12.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase12Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.keypressed'),
      value,
    );
  }
}
