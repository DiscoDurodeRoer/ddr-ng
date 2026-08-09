import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { SafeShowcase1Component } from './showcases/safe-showcase-1/safe-showcase-1.component';
import { SafeShowcase2Component } from './showcases/safe-showcase-2/safe-showcase-2.component';
import { SafeShowcase3Component } from './showcases/safe-showcase-3/safe-showcase-3.component';
import { SafeShowcase4Component } from './showcases/safe-showcase-4/safe-showcase-4.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'safe-showcase',
  templateUrl: './safe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    SafeShowcase1Component,
    SafeShowcase2Component,
    SafeShowcase3Component,
    SafeShowcase4Component,
    DdrTranslatePipe
  ],
})
export class SafeShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div [innerHTML]="html | ddrSafe"></div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-1',
  templateUrl: './safe-showcase-1.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase1Component {

  public html: string = '<p>Example <b>HTML</b> via <u>code</u></p>';

}
`
      },
      {
        htmlCode: `<div [style]="css | ddrSafe:'style'">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum repudiandae velit error ab magni
    nobis ut tempora quibusdam ad enim quisquam vitae nulla quam, inventore consequuntur sapiente, eaque mollitia!
</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-2',
  templateUrl: './safe-showcase-2.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase2Component {

  public css: string = 'background: linear-gradient(to right, red, yellow)';

}
`
      },
      {
        htmlCode: `<img [src]="url | ddrSafe:'url'">`,
        tsCode: `import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-3',
  templateUrl: './safe-showcase-3.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase3Component {

  public url: string =
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U';

}
`
      },
      {
        htmlCode: `<iframe 
    width="560" 
    height="315" 
    [src]="resourceUrl | ddrSafe:'resourceUrl'" 
    frameborder="0"
    referrerpolicy="strict-origin-when-cross-origin">
</iframe>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-4',
  templateUrl: './safe-showcase-4.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase4Component {

  public resourceUrl: string = 'https://www.youtube.com/embed/J0aXUDqGlnU';

}
`
      }
    ],
    params: [
      {
        item: {
          name: 'value',
          description: 'safe.param.value',
          required: true,
          type: 'any'
        }
      },
      {
        item: {
          name: 'type',
          description: 'safe.param.type',
          required: false,
          type: 'DdrSafeType',
          default: 'html',
          values: "'html' | 'style' | 'url' | 'resourceUrl'"
        }
      }
    ]
  }

}