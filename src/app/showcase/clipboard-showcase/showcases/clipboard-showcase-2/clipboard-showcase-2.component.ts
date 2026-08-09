import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrClipboardDirective } from 'ddr-ng/directives/clipboard';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'clipboard-showcase-2',
  templateUrl: './clipboard-showcase-2.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrClipboardDirective,
    DdrTextareaComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ClipboardShowcase2Component {

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
