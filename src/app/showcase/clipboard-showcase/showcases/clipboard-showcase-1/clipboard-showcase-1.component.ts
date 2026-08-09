import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrClipboardDirective } from 'ddr-ng/directives/clipboard';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'clipboard-showcase-1',
  templateUrl: './clipboard-showcase-1.component.html',
  imports: [
    DdrTextareaComponent,
    DdrButtonComponent,
    DdrClipboardDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ClipboardShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string> = signal<string>('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nesciunt temporibus ex et debitis quisquam doloribus beatae adipisci quo ab fuga provident similique illum, qui illo at inventore dicta esse.');

  copyText() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clipboard.copy.success'),
    );
  }

}
