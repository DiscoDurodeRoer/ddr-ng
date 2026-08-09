import {
  Component,
  inject
} from '@angular/core';
import { DdrLoadIframeDirective } from 'ddr-ng/directives/load-iframe';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'load-iframe-showcase-1',
  templateUrl: './load-iframe-showcase-1.component.html',
  imports: [
    DdrLoadIframeDirective
  ],
  providers: [
    DdrToastService
  ]
})
export class LoadIframeShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  load() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('load.iframe.success'),
    );
  }

}
