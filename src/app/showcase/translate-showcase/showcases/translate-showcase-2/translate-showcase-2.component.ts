import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'translate-showcase-2',
  templateUrl: './translate-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrInputComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TranslateShowcase2Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public valueParam: WritableSignal<string> = signal<string>('param');

  showToast() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate(
        'translate.example.param',
        {
          'param': this.valueParam()
        }
      ),
    );
  }

}
