import {
  Component,
  inject
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-8',
  templateUrl: './textarea-showcase-8.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TextareaShowcase8Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickTextarea($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('textarea.keypressed'),
      value,
    );
  }

  blur() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.blur'),
    );
  }
}
