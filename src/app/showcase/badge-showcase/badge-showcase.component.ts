import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { BadgeShowcase1Component } from './showcases/badge-showcase-1/badge-showcase-1.component';
import { BadgeShowcase2Component } from './showcases/badge-showcase-2/badge-showcase-2.component';
import { BadgeShowcase3Component } from './showcases/badge-showcase-3/badge-showcase-3.component';
import { BadgeShowcase4Component } from './showcases/badge-showcase-4/badge-showcase-4.component';
import { BadgeShowcase5Component } from './showcases/badge-showcase-5/badge-showcase-5.component';
import { BadgeShowcase6Component } from './showcases/badge-showcase-6/badge-showcase-6.component';
import { BadgeShowcase7Component } from './showcases/badge-showcase-7/badge-showcase-7.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'badge-showcase',
  templateUrl: './badge-showcase.component.html',
  encapsulation: ViewEncapsulation.None,
  imports: [
    BaseShowcaseComponent,
    BadgeShowcase1Component,
    BadgeShowcase2Component,
    BadgeShowcase3Component,
    BadgeShowcase4Component,
    BadgeShowcase5Component,
    BadgeShowcase6Component,
    BadgeShowcase7Component,
    DdrTranslatePipe
  ]
})
export class BadgeShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-badge-pill 
    text="Badge" 
    type="info" />
<ddr-badge-pill 
    text="Badge" 
    type="danger" />
<ddr-badge-pill 
    text="Badge" 
    type="warning" />
<ddr-badge-pill 
    text="Badge" 
    type="success" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-1',
  templateUrl: './badge-showcase-1.component.html',
  imports: [
    DdrBadgePillComponent
  ]
})
export class BadgeShowcase1Component { }
`
      },
      {
        htmlCode: `<ddr-badge-pill 
    text="Badge" 
    size="small" 
    type="info" />
<ddr-badge-pill 
    text="Badge" 
    size="medium" 
    type="info" />
<ddr-badge-pill 
    text="Badge" 
    size="large" 
    type="info" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-2',
  templateUrl: './badge-showcase-2.component.html',
  imports: [
    DdrBadgePillComponent
  ]
})
export class BadgeShowcase2Component { }
`
      },
      {
        htmlCode: `<ddr-badge-pill 
    text="Badge"
    customClass="myclass" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-3',
  templateUrl: './badge-showcase-3.component.html',
  styleUrl: './badge-showcase-3.component.scss',
  imports: [
    DdrBadgePillComponent
  ]
})
export class BadgeShowcase3Component { }
`,
        cssCode: `.myclass{
    background: orange !important;
    color: white !important;
}`
      },
      {
        htmlCode: `<ddr-badge-pill 
    text="Badge"
    background="cyan" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-4',
  templateUrl: './badge-showcase-4.component.html',
  imports: [
    DdrBadgePillComponent
  ]
})
export class BadgeShowcase4Component { }
`
      },
      {
        htmlCode: `<ddr-badge-pill 
    [canClick]="false"
    text="Badge"
    type="info" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-5',
  templateUrl: './badge-showcase-5.component.html',
  imports: [
    DdrBadgePillComponent
  ]
})
export class BadgeShowcase5Component { }
`
      },
      {
        htmlCode: `<ddr-badge-pill 
    type="info">
    <ng-template #templateContent>
        <span>Badge</span>
    </ng-template>
</ddr-badge-pill>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';

@Component({
  selector: 'badge-showcase-6',
  templateUrl: './badge-showcase-6.component.html',
  imports: [
    DdrBadgePillComponent
  ],
})
export class BadgeShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-badge-pill 
    text="Badge" 
    type="info" 
    (clickBadge)="clickBadge($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'badge-showcase-7',
  templateUrl: './badge-showcase-7.component.html',
  imports: [
    DdrBadgePillComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class BadgeShowcase7Component {

  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  clickBadge(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      'Click',
    );
  }

}

`
      }
    ],
    inputs: [
      {
        item: {
          name: "text",
          description: "badge.input.text",
          type: "string",
          required: false,
          default: "''"
        }
      },
      {
        item: {
          name: "customClass",
          description: "badge.input.customclass",
          type: "string",
          required: false,
          default: "''"
        }
      },
      {
        item: {
          name: "type",
          description: "badge.input.type",
          type: "DdrStatusBadge",
          required: false,
          default: "'info'",
          values: "'info' | 'warning' | 'danger' | 'success'"
        }
      },
      {
        item: {
          name: "size",
          description: "badge.input.size",
          type: "DdrSize",
          required: false,
          default: "'medium'",
          values: "'large' | 'medium' | 'small'"
        }
      },
      {
        item: {
          name: "canClick",
          description: "badge.input.canclick",
          type: "boolean",
          required: false,
          default: "true"
        }
      },
      {
        item: {
          name: "background",
          description: "badge.input.background",
          type: "string",
          required: false,
          default: "undefined"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: "clickBadge",
          description: "badge.output.clickbadge",
          type: "MouseEvent"
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateContent',
          description: 'badge.template.template'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-badge',
          description: 'badge.style.badge'
        }
      },
      {
        item: {
          class: 'ddr-badge--clickable',
          description: 'badge.style.clickable'
        }
      },
      {
        item: {
          class: 'ddr-badge--info',
          description: 'badge.style.info'
        }
      },
      {
        item: {
          class: 'ddr-badge--danger',
          description: 'badge.style.danger'
        }
      },
      {
        item: {
          class: 'ddr-badge--warning',
          description: 'badge.style.warning'
        }
      },
      {
        item: {
          class: 'ddr-badge--success',
          description: 'badge.style.success'
        }
      },
      {
        item: {
          class: 'ddr-badge--small',
          description: 'badge.style.small'
        }
      },
      {
        item: {
          class: 'ddr-badge--medium',
          description: 'badge.style.medium'
        }
      },
      {
        item: {
          class: 'ddr-badge--large',
          description: 'badge.style.large'
        }
      }
    ]
  }

}
