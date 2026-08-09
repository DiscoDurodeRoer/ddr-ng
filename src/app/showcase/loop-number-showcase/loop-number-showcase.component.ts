import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { LoopNumberShowcase1Component } from './showcases/loop-number-showcase-1/loop-number-showcase-1.component';
import { LoopNumberShowcase2Component } from './showcases/loop-number-showcase-2/loop-number-showcase-2.component';
import { LoopNumberShowcase3Component } from './showcases/loop-number-showcase-3/loop-number-showcase-3.component';
import { LoopNumberShowcase4Component } from './showcases/loop-number-showcase-4/loop-number-showcase-4.component';
import { LoopNumberShowcase5Component } from './showcases/loop-number-showcase-5/loop-number-showcase-5.component';
import { LoopNumberShowcase6Component } from './showcases/loop-number-showcase-6/loop-number-showcase-6.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'loop-number-showcase',
  templateUrl: './loop-number-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    LoopNumberShowcase1Component,
    LoopNumberShowcase2Component,
    LoopNumberShowcase3Component,
    LoopNumberShowcase4Component,
    LoopNumberShowcase5Component,
    LoopNumberShowcase6Component,
    DdrTranslatePipe
  ],
})
export class LoopNumberShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `@for (i of 10 | ddrLoopNumber; track i) {
    <div>
        <span>{{i}}</span>
    </div>
}`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number'

@Component({
  selector: 'loop-number-showcase-1',
  templateUrl: './loop-number-showcase-1.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase1Component {}
`
      },
      {
        htmlCode: `@for (i of 5 | ddrLoopNumber : -5 ; track i) {
    <div>
        <span>{{i}}</span>
    </div>
}`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-2',
  templateUrl: './loop-number-showcase-2.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase2Component { }
`
      },
      {
        htmlCode: `<table class="table table-bordered">
    @for (i of 10 | ddrLoopNumber; track i) {
    <tr>
        @for (j of 10 | ddrLoopNumber; track j) {
        <td> {{i}} {{j}}</td>
        }
    </tr>
    }
</table>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-3',
  templateUrl: './loop-number-showcase-3.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase3Component { }
`
      },
      {
        htmlCode: `@for (i of 10 | ddrLoopNumber: 0 : 1 : true ; track i) {
    <div>
        <span>{{i}}</span>
    </div>
}`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-4',
  templateUrl: './loop-number-showcase-4.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase4Component { }
`
      },
      {
        htmlCode: `@for (i of 10 | ddrLoopNumber: 0 : 2 ; track i) {
    <div>
        <span>{{i}}</span>
    </div>
}`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-5',
  templateUrl: './loop-number-showcase-5.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase5Component { }
`
      },
      {
        htmlCode: `@for (i of 10 | ddrLoopNumber: 0 : 1 : false : true ; track i) {
    <div>
        <span>{{i}}</span>
    </div>
}`,
        tsCode: `import { Component } from '@angular/core';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';

@Component({
  selector: 'loop-number-showcase-6',
  templateUrl: './loop-number-showcase-6.component.html',
  imports: [
    DdrLoopNumberPipe
  ]
})
export class LoopNumberShowcase6Component { }
`
      }
    ],
    params: [
      {
        item: {
          name: 'end',
          description: 'loop.number.param.end',
          required: true,
          type: 'number'
        }
      },
      {
        item: {
          name: 'start',
          description: 'loop.number.param.start',
          required: false,
          type: 'number',
          default: '0'
        }
      },
      {
        item: {
          name: 'step',
          description: 'loop.number.param.step',
          required: false,
          type: 'number',
          default: '1'
        }
      },
      {
        item: {
          name: 'reverse',
          description: 'loop.number.param.reverse',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'includeLast',
          description: 'loop.number.param.includelast',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      }
    ]
  }

}
