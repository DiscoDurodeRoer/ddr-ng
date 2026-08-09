import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TranslatePipeShowcase1Component } from './showcases/translate-pipe-showcase-1/translate-pipe-showcase-1.component';
import { TranslatePipeShowcase2Component } from './showcases/translate-pipe-showcase-2/translate-pipe-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-pipe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TranslatePipeShowcase1Component,
    TranslatePipeShowcase2Component,
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div>{{'translate.pipe.example' | ddrTranslate}}</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'translate-pipe-showcase-1',
  templateUrl: './translate-pipe-showcase-1.component.html',
  imports: [
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcase1Component {}
`
      },
      {
        htmlCode: `<div>{{'translate.pipe.example.params' | ddrTranslate:params}}</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'translate-pipe-showcase-2',
  templateUrl: './translate-pipe-showcase-2.component.html',
  imports: [
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcase2Component { 

  public params: any = {
    param1: 'Test',
    param2: 10,
    param3: true
  }
}
`
      }
    ],
    params: [
      {
        item: {
          name: 'value',
          description: 'translate.param.value',
          required: true,
          type: 'string'
        }
      },
      {
        item: {
          name: 'params',
          description: 'translate.param.params',
          required: false,
          type: 'any',
          default: 'undefined'
        }
      }
    ]
  }

}
