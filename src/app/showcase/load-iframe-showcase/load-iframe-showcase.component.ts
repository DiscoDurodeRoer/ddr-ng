import { Component, inject } from '@angular/core';
import { DdrToastService, DdrLoadIframeDirective, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'load-iframe-showcase',
  templateUrl: './load-iframe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrLoadIframeDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class LoadIframeShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  load() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'), 
      this.ddrTranslateService.getTranslate('load.iframe.success')
    );
  }

}
