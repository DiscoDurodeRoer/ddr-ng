import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { LoadIframeShowcase1Component } from './showcases/load-iframe-showcase-1/load-iframe-showcase-1.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'load-iframe-showcase',
  templateUrl: './load-iframe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    LoadIframeShowcase1Component,
    DdrTranslatePipe
  ]
})
export class LoadIframeShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `import {
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
`,
        tsCode: `<iframe 
    src="https://discoduroderoer.es" 
    ddrLoadIframe 
    (loadIframe)="load()" 
    width="100%" 
    height="500px">
</iframe>`
      }
    ],
    outputs: [
      {
        item: {
          name: 'loadIframe',
          description: 'Evento al cargar el iframe',
          type: 'void'
        }
      }
    ]
  }

}
