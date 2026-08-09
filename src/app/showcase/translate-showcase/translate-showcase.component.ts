import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TranslateShowcase1Component } from './showcases/translate-showcase-1/translate-showcase-1.component';
import { TranslateShowcase2Component } from './showcases/translate-showcase-2/translate-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TranslateShowcase1Component,
    TranslateShowcase2Component,
    DdrTranslatePipe
  ]
})
export class TranslateShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button 
    [text]="'translate.example' | ddrTranslate" 
    (action)="showToast()" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'translate-showcase-1',
  templateUrl: './translate-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TranslateShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  showToast() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('translate.example.show'),
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-input 
    name="input-2"
    [(value)]="valueParam" />

<ddr-button 
    [text]="'translate.example' | ddrTranslate" 
    (action)="showToast()" />`,
        tsCode: `import {
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
`
      }
    ],
    service: {
      name: 'DdrTranslateService',
      methods: [
        {
          item: {
            name: 'getData',
            description: 'translate.method.getdata'
          }
        },
        {
          item: {
            name: 'getTranslate',
            description: 'translate.method.gettranslate'
          }
        }
      ]
    }
  }

}
