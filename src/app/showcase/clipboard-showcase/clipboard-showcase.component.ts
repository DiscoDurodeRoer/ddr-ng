import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ClipboardShowcase1Component } from './showcases/clipboard-showcase-1/clipboard-showcase-1.component';
import { ClipboardShowcase2Component } from './showcases/clipboard-showcase-2/clipboard-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'clipboard-showcase',
  templateUrl: './clipboard-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ClipboardShowcase1Component,
    ClipboardShowcase2Component,
    DdrTranslatePipe
  ]
})
export class ClipboardShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-textarea 
    name="textarea-1"
    [readonly]="true" 
    [(value)]="value" />
    
<ddr-button 
    [text]="'clipboard.copy' | ddrTranslate"  
    ddrClipboard 
    [clipboard]="value()" 
    (action)="copyText()" />
    
<ddr-textarea 
    name="textarea-1-copied" />`,
        tsCode: `import {
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
`
      },
      {
        htmlCode: `<ddr-input-group
    icon="bi bi-copy"
    ddrClipboard 
    [clipboard]="value()"
    clipboardTrigger="ddr-button"
    name="input-group-2"
    [(value)]="value"
    (action)="copyText()" />

<ddr-textarea 
    name="textarea-2-copied"/>`,
        tsCode: `import {
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
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'clipboard',
          description: 'clipboard.input.clipboard',
          default: '',
          type: 'string',
          required: true
        }
      },
      {
        item: {
          name: 'clipboardTrigger',
          description: 'clipboard.input.clipboardtrigger',
          default: 'undefined',
          type: 'string | undefined',
          required: false
        }
      }
    ]
  }

}
