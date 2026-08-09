import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { CardShowcase1Component } from './showcases/card-showcase-1/card-showcase-1.component';
import { CardShowcase2Component } from './showcases/card-showcase-2/card-showcase-2.component';
import { CardShowcase3Component } from './showcases/card-showcase-3/card-showcase-3.component';
import { CardShowcase4Component } from './showcases/card-showcase-4/card-showcase-4.component';
import { CardShowcase5Component } from './showcases/card-showcase-5/card-showcase-5.component';
import { CardShowcase6Component } from './showcases/card-showcase-6/card-showcase-6.component';
import { CardShowcase7Component } from './showcases/card-showcase-7/card-showcase-7.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'card-showcase',
  templateUrl: './card-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    CardShowcase1Component,
    CardShowcase2Component,
    CardShowcase3Component,
    CardShowcase4Component,
    CardShowcase5Component,
    CardShowcase6Component,
    CardShowcase7Component,
    DdrTranslatePipe
  ],
})
export class CardShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-card>
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-1',
  templateUrl: './card-showcase-1.component.html',
  imports: [
    DdrCardComponent
  ],
})
export class CardShowcase1Component {}
`
      },
      {
        htmlCode: `<ddr-card [showHeader]="false">
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-2',
  templateUrl: './card-showcase-2.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase2Component {}
`
      },
      {
        htmlCode: `<ddr-card [showFooter]="true">
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
    <span card-footer>Lorem ipsum dolor</span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-3',
  templateUrl: './card-showcase-3.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase3Component {}
`
      },
      {
        htmlCode: `<ddr-card [rounded]="false">
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-4',
  templateUrl: './card-showcase-4.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-card [border]="false">
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-5',
  templateUrl: './card-showcase-5.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase5Component {}
`
      },
      {
        htmlCode: `<ddr-card [shadow]="false">
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-6',
  templateUrl: './card-showcase-6.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-card [showHeader]="false" background="green" color="white">
    <span class="h4" card-title>Lorem ipsum dolor</span>
    <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
    </span>
</ddr-card>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'card-showcase-7',
  templateUrl: './card-showcase-7.component.html',
  imports: [
    DdrCardComponent
  ]
})
export class CardShowcase7Component {}
`
      }
    ],
    inputs: [

      {
        item: {
          name: 'showHeader',
          description: 'card.input.showheader',
          type: 'boolean',
          required: false,
          default: 'true'
        }
      },
      {
        item: {
          name: 'showFooter',
          description: 'card.input.showfooter',
          type: 'boolean',
          required: false,
          default: 'false'
        }
      },
      {
        item: {
          name: 'rounded',
          description: 'card.input.rounded',
          type: 'boolean',
          required: false,
          default: 'true'
        }
      },
      {
        item: {
          name: 'border',
          description: 'card.input.border',
          type: 'boolean',
          required: false,
          default: 'true'
        }
      },
      {
        item: {
          name: 'shadow',
          description: 'card.input.shadow',
          type: 'boolean',
          required: false,
          default: 'true',
        }
      },
      {
        item: {
          name: 'background',
          description: 'card.input.background',
          type: 'string',
          required: false,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'color',
          description: 'card.input.color',
          type: 'string',
          required: false,
          default: 'undefined'
        }
      },
    ],
    slots: [
      {
        item: {
          selector: '[card-title]',
          description: 'card.slot.title'
        }
      },
      {
        item: {
          selector: '[card-content]',
          description: 'card.slot.content'
        }
      },
      {
        item: {
          selector: '[card-footer]',
          description: 'card.slot.footer'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-card',
          description: 'card.style.card'
        }
      },
      {
        item: {
          class: 'ddr-card--rounded',
          description: 'card.style.rounded'
        }
      },
      {
        item: {
          class: 'ddr-card--shadow',
          description: 'card.style.shadow'
        }
      },
      {
        item: {
          class: 'ddr-card__title',
          description: 'card.style.title'
        }
      },
      {
        item: {
          class: 'ddr-card__body',
          description: 'card.style.body'
        }
      },
      {
        item: {
          class: 'ddr-card__footer',
          description: 'card.style.footer'
        }
      },
    ]
  }

}
