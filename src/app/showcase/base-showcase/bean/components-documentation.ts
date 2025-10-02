import { CLASSES, Documentation } from "./documentation"

export const COMPONENTS_DOCUMENTATION: Record<string, Documentation> = {
  "ddr-accordion": {
    htmlCode: `
<div class="row">
  <div class="col-12 mb-2">
    <span class="h3">{{'accordion.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-accordion [titleAccordion]="'accordion.title' | ddrTranslate">

      <div content-accordion>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita tempore magni quaerat voluptatem
          repudiandae, odio assumenda perspiciatis aspernatur! Libero similique dolores nesciunt ratione
          voluptatibus nobis, minima recusandae amet nam earum?
          Iure ratione alias incidunt dolores repellat asperiores, autem exercitationem aliquid quam voluptatem eos
          sint ea minima odit nisi quibusdam, cum optio minus qui mollitia a? Libero eveniet hic eum quos?
          Voluptas qui, tempore illo ea et, accusamus tempora beatae cupiditate magnam iusto, praesentium quia vel
          explicabo impedit hic aliquam dolorum aperiam. Nostrum nobis rem modi eum tempora, repudiandae sapiente
          ex!
          Repellendus, quaerat impedit, quasi sunt saepe molestiae excepturi fugit officia eveniet, ad hic ipsum
          minus dolor velit ipsa ut optio unde. Quam eaque optio laudantium suscipit animi praesentium voluptatum
          saepe?
          Necessitatibus iusto nemo ipsam eum excepturi aperiam nisi neque consequuntur libero distinctio? Molestias
          alias vero ullam eos velit numquam officiis dicta eligendi, nesciunt libero expedita distinctio fugiat
          harum quaerat. Suscipit.
        </p>
      </div>

    </ddr-accordion>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mb-2">
    <span class="h3">{{'accordion.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">

    <ddr-accordion [titleAccordion]="'accordion.title' | ddrTranslate" [open]="true">

      <div content-accordion>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, assumenda numquam dolore a, harum alias
          enim repellendus recusandae qui non illum consequatur. Quas culpa sunt ex illum molestias ipsam
          consectetur.
          Libero enim nesciunt vitae temporibus adipisci optio magni laudantium possimus rerum. Quos, odit, delectus
          soluta debitis facere dignissimos inventore ratione, eligendi amet in cumque eveniet? Possimus assumenda
          expedita asperiores sit.
          Reiciendis nisi error minima dicta libero voluptatum quod porro fugit sapiente aliquam eveniet totam
          accusamus voluptates, a commodi repellat nostrum beatae. Doloribus repudiandae provident dolore recusandae
          vero aliquid quae aspernatur!
          Animi veniam ex dolorem, recusandae voluptatibus inventore labore repellat voluptatem. Iure porro
          molestias reprehenderit eius, deserunt incidunt dicta ipsum ut ullam quidem illum voluptates, explicabo
          odio unde quis voluptatum necessitatibus.
          Nostrum saepe fuga reprehenderit est rerum ipsam cumque nihil officia mollitia, illo laudantium eveniet
          quas consequatur nulla, commodi excepturi officiis! Incidunt quas sunt praesentium eius sed, voluptatem
          repellendus fugiat assumenda?
        </p>
      </div>
    </ddr-accordion>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mb-2">
    <span class="h3">{{'accordion.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">

    <ddr-accordion [titleAccordion]="'accordion.title' | ddrTranslate" [shadow]="false" [border]="false">

      <div content-accordion>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fuga. Aliquam blanditiis similique commodi
          excepturi eveniet laudantium atque provident, ipsam modi quae sapiente! Molestiae numquam esse ducimus,
          sed velit a!
          Fugiat ipsam consequuntur ad exercitationem non amet aut sit perferendis quo error, culpa cupiditate
          quaerat maxime iure! Quae, illo quod modi autem earum repudiandae non recusandae, ullam numquam quisquam
          quam!
          Veritatis error praesentium illo inventore, nihil dicta! Impedit aperiam quisquam ex ipsum dolore at a
          dolorem, aliquam consequatur omnis pariatur nulla mollitia! Magnam illo soluta nemo vero quia et ea?
          In mollitia velit maxime qui ea. Suscipit, minus esse atque laborum nobis hic a eaque. Quos dolorum quae
          sed nisi iure totam assumenda voluptas, itaque, eius, earum repellendus! Perferendis, dolor?
          Voluptatum voluptates voluptatem vero id sequi rem dignissimos aspernatur laudantium quidem sit
          reprehenderit modi, incidunt tempora adipisci nobis. Officiis, ad inventore accusantium incidunt quod
          labore. Architecto facilis quaerat quidem consectetur!
        </p>
      </div>
    </ddr-accordion>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mb-2">
    <span class="h3">{{'accordion.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">

    <ddr-accordion [titleAccordion]="'accordion.title' | ddrTranslate" [slim]="true">

      <div content-accordion>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fuga. Aliquam blanditiis similique commodi
          excepturi eveniet laudantium atque provident, ipsam modi quae sapiente! Molestiae numquam esse ducimus,
          sed velit a!
          Fugiat ipsam consequuntur ad exercitationem non amet aut sit perferendis quo error, culpa cupiditate
          quaerat maxime iure! Quae, illo quod modi autem earum repudiandae non recusandae, ullam numquam quisquam
          quam!
          Veritatis error praesentium illo inventore, nihil dicta! Impedit aperiam quisquam ex ipsum dolore at a
          dolorem, aliquam consequatur omnis pariatur nulla mollitia! Magnam illo soluta nemo vero quia et ea?
          In mollitia velit maxime qui ea. Suscipit, minus esse atque laborum nobis hic a eaque. Quos dolorum quae
          sed nisi iure totam assumenda voluptas, itaque, eius, earum repellendus! Perferendis, dolor?
          Voluptatum voluptates voluptatem vero id sequi rem dignissimos aspernatur laudantium quidem sit
          reprehenderit modi, incidunt tempora adipisci nobis. Officiis, ad inventore accusantium incidunt quod
          labore. Architecto facilis quaerat quidem consectetur!
        </p>
      </div>
    </ddr-accordion>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mb-2">
    <span class="h3">{{'accordion.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">

    <ddr-accordion [titleAccordion]="'accordion.title' | ddrTranslate" (clickOpen)="onClickOpen($event)">

      <div content-accordion>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, fuga. Aliquam blanditiis similique commodi
          excepturi eveniet laudantium atque provident, ipsam modi quae sapiente! Molestiae numquam esse ducimus,
          sed velit a!
          Fugiat ipsam consequuntur ad exercitationem non amet aut sit perferendis quo error, culpa cupiditate
          quaerat maxime iure! Quae, illo quod modi autem earum repudiandae non recusandae, ullam numquam quisquam
          quam!
          Veritatis error praesentium illo inventore, nihil dicta! Impedit aperiam quisquam ex ipsum dolore at a
          dolorem, aliquam consequatur omnis pariatur nulla mollitia! Magnam illo soluta nemo vero quia et ea?
          In mollitia velit maxime qui ea. Suscipit, minus esse atque laborum nobis hic a eaque. Quos dolorum quae
          sed nisi iure totam assumenda voluptas, itaque, eius, earum repellendus! Perferendis, dolor?
          Voluptatum voluptates voluptatem vero id sequi rem dignissimos aspernatur laudantium quidem sit
          reprehenderit modi, incidunt tempora adipisci nobis. Officiis, ad inventore accusantium incidunt quod
          labore. Architecto facilis quaerat quidem consectetur!
        </p>
      </div>
    </ddr-accordion>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrAccordionComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'accordion-showcase',
    templateUrl: './accordion-showcase.component.html',
    styleUrls: ['./accordion-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrAccordionComponent,
        DdrTranslatePipe
    ],
    providers: [
        DdrToastService
    ]
})
export class AccordionShowcaseComponent {

    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

    onClickOpen(state: boolean) {
        this.ddrToastService.addSuccessMessage(this.ddrTranslateService.getTranslate('success'), "clickOpen: " + state)
    }
}`,
    inputs: [
      {
        item: {
          name: "titleAccordion",
          description: "accordion.input.titleAccordion",
          type: "string",
          required: true,
          default: "''"
        }
      },
      {
        item: {
          name: "slim",
          description: "accordion.input.slim",
          type: "boolean",
          required: false,
          default: "false"
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickOpen',
          description: 'accordion.output.clickopen',
          type: 'boolean'
        }
      }
    ],
    slots: [
      {
        item: {
          selector: '[content-accordion]',
          description: 'accordion.slot.content'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-accordion',
          description: 'accordion.style.accordion'
        }
      },
      {
        item: {
          class: 'ddr-accordion--shadow',
          description: 'accordion.style.shadow'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title',
          description: 'accordion.style.title'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title--is-opened',
          description: 'accordion.style.title.opened'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title--is-closed',
          description: 'accordion.style.title.closed'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title--slim',
          description: 'accordion.style.slim'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title--text',
          description: 'accordion.style.accordion'
        }
      },
      {
        item: {
          class: 'ddr-accordion__title--icon',
          description: 'accordion.style.title.icon'
        }
      },
      {
        item: {
          class: 'ddr-accordion__content',
          description: 'accordion.style.content'
        }
      },
      {
        item: {
          class: 'ddr-accordion__content--is-opened',
          description: 'accordion.style.content.is.opened'
        }
      },
      {
        item: {
          class: 'ddr-accordion__content--is-closed',
          description: 'accordion.style.content.is.closed'
        }
      },
      {
        item: {
          class: 'ddr-accordion__content--slim',
          description: 'accordion.style.content.slim'
        }
      },
    ]
  },
  "ddr-badge-pill": {
    htmlCode: `
<div class="row">
  <div class="col-12 ">
    <span class="h3">{{'badge.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          text="Badge" 
          type="info" 
          (clickBadge)="clickBadge($event)" />
    <ddr-badge-pill 
          text="Badge" 
          type="danger" 
          (clickBadge)="clickBadge($event)" />
    <ddr-badge-pill 
          text="Badge" 
          type="warning" 
          (clickBadge)="clickBadge($event)" />
    <ddr-badge-pill 
          text="Badge" 
          type="success" 
          (clickBadge)="clickBadge($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'badge.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          text="Badge" 
          size="small" 
          type="info" 
          (clickBadge)="clickBadge($event)" />
    <ddr-badge-pill 
          text="Badge" 
          size="medium" 
          type="info" 
          (clickBadge)="clickBadge($event)" />
    <ddr-badge-pill 
          text="Badge" 
          size="large" 
          type="info" 
          (clickBadge)="clickBadge($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'badge.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          text="Badge"
          customClass="myclass" 
          (clickBadge)="clickBadge($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'badge.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          text="Badge"
          background="cyan" 
          (clickBadge)="clickBadge($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'badge.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          [canClick]="false"
          text="Badge"
          type="info" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'badge.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-badge-pill 
          type="info" 
          (clickBadge)="clickBadge($event)">
          <ng-template #templateContent>
            <span>Badge</span>
          </ng-template>
    </ddr-badge-pill>
  </div>
</div>`,
    cssCode: `
.myclass {
    background: orange !important;
    color: white !important;
}`,
    tsCode: `
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DdrToastService, DdrBadgePillComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'badge-showcase',
  templateUrl: './badge-showcase.component.html',
  styleUrls: ['./badge-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,,
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrBadgePillComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class BadgeShowcaseComponent {

  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  clickBadge($event: MouseEvent) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      "Click");
    console.log($event);
  }

}`,
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
          name: 'template',
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
  },
  "ddr-detail": {
    htmlCode: `
<div class="mb-2">
  <ddr-button 
      [text]="'detail.open' | ddrTranslate" 
      size="medium"
      (action)="openDetail()"/>
</div>
<div>
  <p>{{'detail.orientation' | ddrTranslate}}: </p>
  <ddr-button-multiple
      [buttons]="buttonsOrientation"
      [showSelectedButton]="true"
      [(ngModel)]="orientation"
      (action)="changeOrientation($event)" />
</div>

<ddr-detail 
  [id]="ID_DETAIL" 
  [orientation]="orientation" 
  (close)="closeDetail()">
  <div detail-title>
    <span>{{'detail.title.example' | ddrTranslate}}</span>
  </div>
  <div detail-content>
    <div class="row">
      <div class="col-12">
        <span>{{'detail.content.example.1' | ddrTranslate}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <span>{{'detail.content.example.2' | ddrTranslate}}</span>
      </div>
    </div>
  </div>
</ddr-detail>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { 
  DdrToastService, 
  DdrDetailComponent, 
  DdrButtonComponent, 
  DdrOrientatioDetail, 
  DdrDetailService, 
  DdrTranslatePipe, 
  DdrTranslateService, 
  DdrButton, 
  DdrButtonMultipleComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'detail-showcase',
  templateUrl: './detail-showcase.component.html',
  styleUrls: ['./detail-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrDetailComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ShowcaseDdrDetailComponent {

  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public orientation: DdrOrientatioDetail = 'right'
  public buttonsOrientation: DdrButton[] = [
    {
      icon: 'bi bi-arrow-up',
      value: 'top'
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'right'
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom'
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'left'
    }
  ];

  public readonly ID_DETAIL: string = 'example-detail'

  openDetail() {
    this.ddrDetailService.open(this.ID_DETAIL)
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      this.ddrTranslateService.getTranslate("detail.opening")
    );
  }

  closeDetail() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      this.ddrTranslateService.getTranslate("detail.closing")
    );
  }

  changeOrientation(button: DdrButton) {
    this.orientation = button.value as DdrOrientatioDetail;
  }

}`,
    inputs: [
      {
        item: {
          name: 'id',
          description: 'detail.input.id',
          type: 'string',
          required: true,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'orientation',
          description: 'detail.input.orientation',
          type: 'DdrOrientatioDetail',
          required: false,
          default: "'right'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'close',
          description: 'detail.output.close',
          type: 'boolean'
        }
      }
    ],
    slots: [
      {
        item: {
          selector: '[detail-title]',
          description: 'detail.slot.title'
        }
      },
      {
        item: {
          selector: '[detail-content]',
          description: 'detail.slot.content'
        }
      }
    ],
    service: {
      name: 'DdrDetailService',
      methods: [
        {
          item: {
            name: 'add',
            description: 'detail.service.add'
          }
        },
        {
          item: {
            name: 'remove',
            description: 'detail.service.remove'
          }
        },
        {
          item: {
            name: 'open',
            description: 'detail.service.open'
          }
        },
        {
          item: {
            name: 'close',
            description: 'detail.service.close'
          }
        },
      ]
    },
    styles: [
      {
        item: {
          class: 'ddr-detail',
          description: 'detail.styles.detail'
        }
      },
      {
        item: {
          class: 'ddr-detail__content',
          description: 'detail.styles.content'
        }
      },
      {
        item: {
          class: 'ddr-detail__content--title',
          description: 'detail.styles.title'
        }
      },
      {
        item: {
          class: 'ddr-detail__content--close',
          description: 'detail.styles.close'
        }
      }
    ]
  },
  "ddr-card": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'card.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card>
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [showHeader]="false">
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [showFooter]="true">
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
      <span card-footer>{{'card.footer' | ddrTranslate}}</span>
    </ddr-card>
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [rounded]="false">
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [border]="false">
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [shadow]="false">
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'card.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card 
      [showHeader]="false" 
      background="green" 
      color="white">
      <span class="h4" card-title>{{'card.title' | ddrTranslate}}</span>
      <span card-content>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
        earum corporis mollitia delectus necessitatibus perspiciatis,
        temporibus sed nam veritatis nostrum quaerat deserunt placeat
        eveniet libero eaque enim, porro neque quod!
      </span>
    </ddr-card>
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrCardComponent, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'card-showcase',
    templateUrl: './card-showcase.component.html',
    styleUrls: ['./card-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrCardComponent,
        DdrTranslatePipe
    ]
})
export class CardShowcaseComponent { }`,
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
  },
  "ddr-chip": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'chip.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>
    <ddr-chip  
          [label]="'chip.example' | ddrTranslate"
          name="chip-1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          [(ngModel)]="values"
          name="chip-2" />
  </div>
  <div class="col-12">
    <span>{{ values | json }}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <p class="mt-2">{{'chip.separator' | ddrTranslate}}</p>
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          separator=","
          name="chip-3" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <p class="mt-2">{{'chip.max.elements' | ddrTranslate}}</p>
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          [maxValues]="5"
          name="chip-4" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          [canDelete]="false"
          name="chip-5" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          (insertValue)="insertValue($event)"
          name="chip-6" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          (removeValue)="removeValue($event)"
          name="chip-7" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          (clickValue)="clickValue($event)"
          name="chip-8" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'chip.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <ddr-chip 
          [label]="'chip.example' | ddrTranslate"
          (getValues)="getValues($event)"
          name="chip-9" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrChipComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chip-showcase',
  templateUrl: './chip-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public values: string[] = ["item 1", "item 2"]

  getValues(items: string[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.elements'),
      JSON.stringify(items)
    );
  }

  clickValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.selected.element'),
      item
    );
  }

  insertValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.insert.element'),
      item
    );
  }

  removeValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.remove.element'),
      item
    );
  }

}`,
    inputs: [
      {
        item: {
          name: 'label',
          description: 'chip.input.label',
          required: false,
          type: 'string',
          default: 'undefined',
        }
      },
      {
        item: {
          name: 'maxValues',
          description: 'chip.input.maxvalues',
          required: false,
          type: 'number',
          default: '0'
        }
      },
      {
        item: {
          name: 'separator',
          description: 'chip.input.separator',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'name',
          description: 'chip.input.name',
          required: false,
          type: 'string',
          default: 'undefined',
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'chip.input.readonly',
          required: false,
          type: 'boolean',
          default: 'false',
        }
      },
      {
        item: {
          name: 'canDelete',
          description: 'chip.input.candelete',
          required: false,
          type: 'boolean',
          default: 'true',
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'insertValue',
          description: 'chip.output.insertvalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'removeValue',
          description: 'chip.output.removevalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'clickValue',
          description: 'chip.output.clickvalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'getValues',
          description: 'chip.output.getvalues',
          type: 'string[]'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-chip',
          description: 'chip.style.chip'
        }
      },
      {
        item: {
          class: 'ddr-chip__label',
          description: 'chip.style.label'
        }
      },
      {
        item: {
          class: 'ddr-chip__container',
          description: 'chip.style.container'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__values',
          description: 'chip.style.container.values'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__input',
          description: 'chip.style.container.input'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__input',
          description: 'chip.style.container.input'
        }
      },
    ]
  },
  "ddr-modal": {
    htmlCode: `
<div class="row mt-3">
  <div class="col-12">
    <p>{{'modal.size' | ddrTranslate}}:</p>
    <ddr-button-multiple
      [buttons]="buttonsSize"
      [showSelectedButton]="true"
      [(ngModel)]="size" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>{{'modal.size.button' | ddrTranslate}}:</p>
    <ddr-button-multiple
      [buttons]="buttonsSizeButton"
      [showSelectedButton]="true"
      [(ngModel)]="sizeButton" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>{{'modal.type' | ddrTranslate}}:</p>
    <ddr-button-multiple
      [buttons]="buttonsType"
      [showSelectedButton]="true"
      [(ngModel)]="type" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>clickOutside:</p>
    <ddr-toggle
      [small]="true"
      [(ngModel)]="clickOutsideEnabled" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
      [text]="'modal.open' | ddrTranslate"
      size="medium"
      (action)="openModal()" />
  </div>
</div>

<ddr-modal
  id="modal-example"
  [type]="type"
  [labelConfirm]="'modal.confirm' | ddrTranslate"
  [labelClose]="'modal.close' | ddrTranslate"
  [size]="size"
  [sizeButton]="sizeButton"
  [clickOutsideEnabled]="clickOutsideEnabled"
  (close)="closeModal()"
  (accept)="closeModal()"
  (clickOutside)="clickOutside($event)">
  <span class="h1" modal-title>Lorem</span>

  <span modal-content>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
    reiciendis, recusandae enim, accusamus illo dicta obcaecati, nam ab
    voluptatum asperiores tenetur error. Similique doloribus at possimus
    fuga excepturi veritatis distinctio!
  </span>
</ddr-modal>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrModalComponent,
  DdrButtonComponent,
  DdrModalService,
  DdrSize,
  DdrButton,
  DdrButtonMultipleComponent,
  DdrTranslatePipe,
  DdrToggleComponent,
  DdrModalType,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'modal-showcase',
  templateUrl: './modal-showcase.component.html',
  styleUrls: ['./modal-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrToggleComponent,
    FormsModule
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcaseComponent {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public clickOutsideEnabled: boolean = true;

  public size: DdrSize = 'medium'
  public buttonsSize: DdrButton[] = [
    {
      text: 'small',
      value: 'small'
    },
    {
      text: 'medium',
      value: 'medium'
    },
    {
      text: 'large',
      value: 'large'
    }
  ];

  public type: DdrModalType = 'info'
  public buttonsType: DdrButton[] = [
    {
      text: 'info',
      value: 'info'
    },
    {
      text: 'confirm',
      value: 'confirm'
    },
    {
      text: 'no-buttons',
      value: 'no-buttons'
    }
  ];

  public sizeButton: DdrSize = 'small'
  public buttonsSizeButton: DdrButton[] = [
    {
      text: 'small',
      value: 'small'
    },
    {
      text: 'medium',
      value: 'medium'
    },
    {
      text: 'large',
      value: 'large'
    }
  ];

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open('modal-example');
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside($event: any) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}`,
    inputs: [
      {
        item: {
          name: 'id',
          description: 'modal.input.id',
          type: 'string',
          required: true,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'type',
          description: 'modal.input.type',
          type: 'DdrModalType',
          required: false,
          default: "undefined",
          values: "'confirm' | 'info' | 'no-buttons'"
        }
      },
      {
        item: {
          name: 'labelConfirm',
          description: 'modal.input.labelconfirm',
          type: 'string',
          required: false,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelClose',
          description: 'modal.input.labelclose',
          type: 'string',
          required: false,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'clickOutsideEnabled',
          description: 'modal.input.clickoutsideenabled',
          type: 'string',
          required: false,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'size',
          description: 'modal.input.size',
          type: 'DdrSize',
          required: false,
          default: "'medium'",
          values: "'large' | 'medium' | 'small'"
        }
      },
      {
        item: {
          name: 'sizeButton',
          description: 'modal.input.sizebutton',
          type: 'DdrSize',
          required: false,
          default: "'small'",
          values: "'large' | 'medium' | 'small'"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'close',
          description: 'modal.output.close',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'accept',
          description: 'modal.output.accept',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'clickOutside',
          description: 'modal.output.clickoutside',
          type: 'MouseEvent'
        }
      }
    ],
    service: {
      name: 'DdrModalService',
      methods: [
        {
          item: {
            name: 'add',
            description: 'modal.service.add'
          }
        },
        {
          item: {
            name: 'remove',
            description: 'modal.service.remove'
          }
        },
        {
          item: {
            name: 'open',
            description: 'modal.service.open'
          }
        },
        {
          item: {
            name: 'close',
            description: 'modal.service.close'
          }
        },
      ]
    },
    slots: [
      {
        item: {
          selector: '[modal-title]',
          description: 'modal.slot.title'
        }
      },
      {
        item: {
          selector: '[modal-content]',
          description: 'modal.slot.content'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-modal',
          description: 'modal.style.modal'
        }
      },
      {
        item: {
          class: 'ddr-modal__content',
          description: 'modal.style.content'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--large',
          description: 'modal.style.large'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--medium',
          description: 'modal.style.medium'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--small',
          description: 'modal.style.small'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--title',
          description: 'modal.style.content.title'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--close',
          description: 'modal.style.content.close'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--card-buttons',
          description: 'modal.style.content.card.buttons'
        }
      },
      {
        item: {
          class: 'ddr-modal__content--card-buttons__button',
          description: 'modal.style.content.card.buttons.button'
        }
      },
    ]
  },
  "ddr-no-data": {
    htmlCode: `
<div class="row mt-3">
  <div class="col-12">
      <p>{{'no.data.size' | ddrTranslate}}: </p>
      <ddr-button-multiple
            [buttons]="buttonsSize"
            [showSelectedButton]="true"
            [(ngModel)]="size" />
  </div>
</div>

<div class="row  mt-3">
  <div class="col-12">
      <ddr-no-data 
            icon="bi bi-database-fill-x"
            text="no.data.text"
            [size]="size" />
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import {
    DdrButton,
    DdrButtonMultipleComponent,
    DdrNoDataComponent,
    DdrSize,
    DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'no-data-showcase',
    templateUrl: './no-data-showcase.component.html',
    styleUrls: ['./no-data-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrNoDataComponent,
        DdrButtonMultipleComponent,
        DdrTranslatePipe,
        FormsModule
    ]
})
export class NoDataShowcaseComponent {

    public size: DdrSize = 'large'
    public buttonsSize: DdrButton[] = [
        {
            text: 'small',
            value: 'small'
        },
        {
            text: 'medium',
            value: 'medium'
        },
        {
            text: 'large',
            value: 'large'
        }
    ];

}`,
    inputs: [
      {
        item: {
          name: 'icon',
          description: 'no.data.input.icon',
          type: 'string',
          required: true,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'text',
          description: 'no.data.input.text',
          type: 'string',
          required: true,
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'size',
          description: 'no.data.input.size',
          type: 'DdrSize',
          required: false,
          default: "'large'",
          values: "'small' | 'medium'| 'large'"
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-no-data',
          description: 'no.data.style.no.data'
        }
      },
      {
        item: {
          class: 'ddr-no-data--large',
          description: 'no.data.style.large'
        }
      },
      {
        item: {
          class: 'ddr-no-data--medium',
          description: 'no.data.style.medium'
        }
      },
      {
        item: {
          class: 'ddr-no-data--small',
          description: 'no.data.style.small'
        }
      },
      {
        item: {
          class: 'ddr-no-data__icon',
          description: 'no.data.style.icon'
        }
      },
      {
        item: {
          class: 'ddr-no-data__text',
          description: 'no.data.style.text'
        }
      },
    ]
  },
  "ddr-steps": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.2' | ddrTranslate}}</span>    
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="!!personExample2.name">
        <ng-template #stepContent>
          <ddr-input [label]="'step.name' | ddrTranslate" [(ngModel)]="personExample2.name" />
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="!!personExample2.age">
        <ng-template #stepContent>
          <ddr-input [label]="'step.age' | ddrTranslate" [(ngModel)]="personExample2.age" />
        </ng-template>
      </ddr-step>

    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [vertical]="true"
      [canJumpStep]="true">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.3' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.3' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>

    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true"
      (changeStep)="changeStep($event)">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true"
      (lastStep)="lastStep()">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [showButtons]="false">

      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="true">
        <ng-template #stepContent>
          <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
      </ddr-step>

    </ddr-steps>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'steps.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [validateIcon]="true">
      
      <ddr-step [titleStep]="'step.1' | ddrTranslate" [canGoNext]="!!personExample8.name">
        <ng-template #stepContent>
          <ddr-input [label]="'step.name' | ddrTranslate" [(ngModel)]="personExample8.name" />
        </ng-template>
      </ddr-step>
      <ddr-step [titleStep]="'step.2' | ddrTranslate" [canGoNext]="!!personExample8.age">
        <ng-template #stepContent>
          <ddr-input [label]="'step.age' | ddrTranslate" [(ngModel)]="personExample8.age" />
        </ng-template>
      </ddr-step>

    </ddr-steps>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrInputComponent,
  DdrStepComponent,
  DdrStepsComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { FormsModule } from '@angular/forms';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { Person } from './bean/person';

@Component({
  selector: 'steps-showcase',
  templateUrl: './steps-showcase.component.html',
  styleUrls: ['./steps-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class StepsShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public personExample2: Person = {
    name: '',
    age: 0
  };
  public personExample8: Person = {
    name: '',
    age: 0
  };

  changeStep(step: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('step.' + step)
    );
  }

  lastStep() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('step.last')
    );
  }

}`,
    inputs: [
      {
        item: {
          name: 'vertical',
          component: 'ddr-steps',
          description: 'steps.input.vertical',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'canJumpStep',
          component: 'ddr-steps',
          description: 'steps.input.canjumpstep',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'labelNext',
          component: 'ddr-steps',
          description: 'steps.input.labelnext',
          type: 'string',
          default: 'undefined',
          required: false
        }
      },
      {
        item: {
          name: 'labelPrevious',
          component: 'ddr-steps',
          description: 'steps.input.labelprevious',
          type: 'string',
          default: 'undefined',
          required: false
        }
      },
      {
        item: {
          name: 'showButtons',
          component: 'ddr-steps',
          description: 'steps.input.showbuttons',
          type: 'boolean',
          default: 'true',
          required: false
        }
      },
      {
        item: {
          name: 'validateIcon',
          component: 'ddr-steps',
          description: 'steps.input.validateicon',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'titleStep',
          component: 'ddr-step',
          description: 'steps.input.titlestep',
          type: 'string',
          default: 'undefined',
          required: true
        }
      },
      {
        item: {
          name: 'canGoNext',
          component: 'ddr-step',
          description: 'steps.input.cangonext',
          type: 'boolean',
          default: 'false',
          required: false
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'changeStep',
          component: 'ddr-steps',
          description: 'steps.output.changestep',
          type: 'number'
        }
      },
      {
        item: {
          name: 'lastStep',
          component: 'ddr-steps',
          description: 'steps.output.laststep',
          type: 'number'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'stepContent',
          component: 'ddr-step',
          description: 'steps.templates.stepcontent'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'next',
          description: 'steps.translation.next'
        }
      },
      {
        item: {
          name: 'previous',
          description: 'steps.translation.previous'
        }
      }
    ],
    classes: [
      CLASSES['PersonStep']
    ],
    styles: [
      {
        item: {
          class: 'ddr-steps',
          description: 'steps.style.steps'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal',
          description: 'steps.style.horizontal'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step',
          description: 'steps.style.horizontal.info.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step--hover',
          description: 'steps.style.horizontal.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step',
          description: 'steps.style.horizontal.step.number'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step--open',
          description: 'steps.style.horizontal.step.open'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step--closed',
          description: 'steps.style.horizontal.step.closed'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__title-step',
          description: 'steps.style.horizontal.title.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__line',
          description: 'steps.style.horizontal.line'
        }
      },
      {
        item: {
          class: 'ddr-steps__template',
          description: 'steps.style.template'
        }
      },
      {
        item: {
          class: 'ddr-steps__template__content',
          description: 'steps.style.template.content'
        }
      },
      {
        item: {
          class: 'ddr-steps__template__content',
          description: 'steps.style.template.content'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step',
          description: 'steps.style.vertical.info.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step--hover',
          description: 'steps.style.vertical.info.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step--hover',
          description: 'steps.style.vertical.info.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step',
          description: 'steps.style.vertical.info.step.number'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step--open',
          description: 'steps.style.vertical.info.step.number.open'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step--closed',
          description: 'steps.style.vertical.info.step.number.closed'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__title-step',
          description: 'steps.style.vertical.info.step.number.title.step'
        }
      }
    ]
  },
  "ddr-tabs": {
    htmlCode: `
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tabs.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tabs>
      <ddr-tab-item titleTab="tab1">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
      </ddr-tab-item>
      <ddr-tab-item titleTab="tab2">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
          Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a excepturi ut!
          Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit velit.
        </ng-template>
      </ddr-tab-item>
      <ddr-tab-item titleTab="tab3">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima, deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus rem quas odio maxime.
          In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod error?
          Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit, ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis recusandae!
          Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est adipisci, quia corrupti?
          Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus! Pariatur?
          Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum consequuntur non unde.
          Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
          Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere deleniti necessitatibus.
          Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error, corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum consequuntur nisi.
          Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex corporis.
        </ng-template>
      </ddr-tab-item>
    </ddr-tabs>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tabs.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tabs>
      <ddr-tab-item titleTab="tab1" icon="bi bi-house-fill">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
      </ddr-tab-item>
      <ddr-tab-item titleTab="tab2" icon="bi bi-person-fill">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
          Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a excepturi ut!
          Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit velit.
        </ng-template>
      </ddr-tab-item>
        <ddr-tab-item titleTab="tab3" icon="bi bi-bell-fill">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima, deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus rem quas odio maxime.
          In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod error?
          Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit, ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis recusandae!
          Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est adipisci, quia corrupti?
          Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus! Pariatur?
          Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum consequuntur non unde.
          Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
          Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere deleniti necessitatibus.
          Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error, corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum consequuntur nisi.
          Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex corporis.
        </ng-template>
      </ddr-tab-item>
    </ddr-tabs>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tabs.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tabs (changeTab)="changeTab($event)">
      <ddr-tab-item titleTab="tab1">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
      </ddr-tab-item>
      <ddr-tab-item titleTab="tab2">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
          Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a excepturi ut!
          Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit velit.
        </ng-template>
      </ddr-tab-item>
        <ddr-tab-item titleTab="tab3">
        <ng-template #tabContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima, deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus rem quas odio maxime.
          In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod error?
          Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit, ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis recusandae!
          Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est adipisci, quia corrupti?
          Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus! Pariatur?
          Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum consequuntur non unde.
          Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
          Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere deleniti necessitatibus.
          Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error, corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum consequuntur nisi.
          Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex corporis.
        </ng-template>
      </ddr-tab-item>
    </ddr-tabs>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTabsComponent,
    DdrTabItemComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TabsShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  changeTab(tab: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('tabs.' + (tab + 1))
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'titleTab',
          component: 'ddr-tab-item',
          description: 'tabs.input.titleTab',
          required: true,
          default: "undefined",
          type: 'string'
        }
      },
      {
        item: {
          name: 'icon',
          component: 'ddr-tab-item',
          description: 'tabs.input.icon',
          required: true,
          default: "undefined",
          type: 'string',
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'changeTab',
          component: 'ddr-tabs',
          description: 'tabs.output.changetab',
          type: 'number'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'tabContent',
          description: 'tabs.template.tabcontent',
          component: 'ddr-tab-item'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-tabs',
          description: 'tabs.style.tabs'
        }
      },
      {
        item: {
          class: 'ddr-tabs__title',
          description: 'tabs.style.title'
        }
      },
      {
        item: {
          class: 'ddr-tabs__title--selected',
          description: 'tabs.style.title.selected'
        }
      },
      {
        item: {
          class: 'ddr-tabs__content',
          description: 'tabs.style.content'
        }
      }
    ]
  },
  "ddr-table": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'table.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items" 
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          (selectItem)="selectItem($event)" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items"
          [showPagination]="false"
          [allowChangeRows]="false"
          (selectItem)="selectItem($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items"
          [canSelectItems]="false"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          (selectItem)="selectItem($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items"
          [showBorder]="false"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          (selectItem)="selectItem($event)" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items" 
          [multiple]="true"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)" 
          (selectMultipleItem)="selectMultipleItem($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="items"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)" 
          (selectMultipleItem)="selectMultipleItem($event)">
      <ng-template #templateCell let-item="item" let-col="col">
        {{ item[col.property] }}
      </ng-template>
    </ddr-table>
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="colsNested" 
          [items]="itemsNested"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)" 
          (selectMultipleItem)="selectMultipleItem($event)">
      <ng-template #templateCell let-item="item" let-col="col">
        {{ item | ddrNestedProperty: col.property }}
      </ng-template>
    </ddr-table>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="itemsWithActions" 
          [showActions]="true"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)" 
          (selectAction)="selectAction($event)"
          (selectMultipleItem)="selectMultipleItem($event)" 
          (changePage)="onChangePage($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="[]"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="cols" 
          [items]="itemsWithActions" 
          [showActions]="true" 
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)" 
          (changePage)="onChangePage($event)"
          (changeRow)="onChangeTotalItemsPerPage($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'table.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-table 
          [cols]="colsSort" 
          [items]="items" 
          [canSort]="true"
          [labelRegisters]="'table.registers' | ddrTranslate"
          [labelRegister]="'table.register' | ddrTranslate"
          [labelToPagination]="'table.to' | ddrTranslate"
          [labelOfPagination]="'table.of' | ddrTranslate"
          [labelNoResults]="'table.empty' | ddrTranslate"
          (selectItem)="selectItem($event)"
          (sort)="sortItems($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrTableCol,
  DdrAction,
  DdrTableItem,
  DdrTableComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrNestedPropertyPipe
} from 'ddr-ng';
import { Person } from './bean/person';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'table-showcase',
  templateUrl: './table-showcase.component.html',
  styleUrls: ['./table-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTableComponent,
    DdrTranslatePipe,
    DdrNestedPropertyPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    }
  ];

  public colsNested: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
    {
      label: 'table.documentation',
      property: 'documentation.nif',
      tooltip: 'table.documentation.nif'
    }
  ];

  public colsSort: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
      canSort: true
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
      canSort: true
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
      canSort: true
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
      canSort: true
    }
  ];

  public actions: DdrAction<Person>[] = [
    {
      label: 'table.action.save',
      value: 'SAVE',
      icon: 'bi bi-floppy'
    },
    {
      label: 'table.action.update',
      value: 'UPDATE',
      icon: 'bi bi-arrow-clockwise'
    },
    {
      label: 'table.action.delete',
      value: 'DELETE',
      icon: 'bi bi-trash'
    }
  ];

  public items: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    }
  ];

  public itemsNested: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    }
  ];

  public itemsWithActions: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    }
  ];

  selectMultipleItem(items: Person[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.multiple.select.item'),
      JSON.stringify(items)
    );
  }

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item)
    );
  }

  sortItems(col: DdrTableCol) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(col)
    );
  }

  selectAction(action: DdrAction<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.action'),
      JSON.stringify(action)
    );
  }

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.page') + " :" + page.toString()
    );
  }

  onChangeTotalItemsPerPage(rows: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.rows') + " :" + rows.toString()
    );
  }
}`,
    classes: [
      CLASSES['DdrTableCol'],
      CLASSES['DdrTableItem'],
      CLASSES['DdrAction'],
      CLASSES['PersonTable']
    ],
    inputs: [
      {
        item: {
          name: 'cols',
          description: 'table.input.cols',
          required: true,
          default: '[]',
          type: 'DdrTableCol[]'
        }
      },
      {
        item: {
          name: 'items',
          description: 'table.input.items',
          required: false,
          default: '[]',
          type: 'DdrTableItem<T>[]'
        }
      },
      {
        item: {
          name: 'showPagination',
          description: 'table.input.showpagination',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'optionsRowsPagination',
          description: 'table.input.optionsrowspagination',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'showTotal',
          description: 'table.input.showtotal',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'allowChangeRows',
          description: 'table.input.allowchangerows',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'allowChangeRows',
          description: 'table.input.allowchangerows',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'multiple',
          description: 'table.input.multiple',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showActions',
          description: 'table.input.showactions',
          required: false,
          default: '[]',
          type: 'DdrAction<T>[]'
        }
      },
      {
        item: {
          name: 'totalItems',
          description: 'table.input.totalitems',
          required: false,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'canSort',
          description: 'table.input.cansort',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showBorder',
          description: 'table.input.showborder',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showFooter',
          description: 'table.input.showfooter',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },

      {
        item: {
          name: 'canSelectItems',
          description: 'table.input.canselectitems',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'startPageZero',
          description: 'table.input.startpagezero',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'page',
          description: 'table.input.page',
          required: false,
          default: '1',
          type: 'number'
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'table.input.labelnoresults',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelRegisters',
          description: 'table.input.labelregisters',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelRegister',
          description: 'table.input.labelregister',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelToPagination',
          description: 'table.input.labeltopagination',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelOfPagination',
          description: 'table.input.labelofpagination',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'selectItem',
          description: 'table.output.selectitem',
          type: 'DdrTableItem<T>'
        }
      },
      {
        item: {
          name: 'selectMultipleItem',
          description: 'table.output.selectmultipleitem',
          type: 'T[]'
        }
      },
      {
        item: {
          name: 'selectAction',
          description: 'table.output.selectaction',
          type: 'DdrAction<T>'
        }
      },
      {
        item: {
          name: 'changePage',
          description: 'table.output.changepage',
          type: 'DdrAction<T>'
        }
      },
      {
        item: {
          name: 'changeRow',
          description: 'table.output.changerow',
          type: 'number'
        }
      },
      {
        item: {
          name: 'sort',
          description: 'table.output.sort',
          type: 'DdrTableCol'
        }
      },
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'table.template.itemtemplate'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'to',
          description: 'table.translation.to'
        }
      },
      {
        item: {
          name: 'of',
          description: 'table.translation.of'
        }
      },
      {
        item: {
          name: 'register',
          description: 'table.translation.register'
        }
      },
      {
        item: {
          name: 'registers',
          description: 'table.translation.registers'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-table',
          description: 'table.style.table'
        }
      },
      {
        item: {
          class: 'ddr-table__table',
          description: 'table.style.table.table'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-row',
          description: 'table.style.header.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-row--checkbox',
          description: 'table.style.header.row.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell',
          description: 'table.style.header.cell'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell--tooltip',
          description: 'table.style.header.cell.tooltip'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell--sort',
          description: 'table.style.header.cell.sort'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row',
          description: 'table.style.body.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--border',
          description: 'table.style.border'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--hoveable',
          description: 'table.style.body.row.hoveable'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--checkbox',
          description: 'table.style.body.row.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell',
          description: 'table.style.body.cell'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell--title-mobile',
          description: 'table.style.body.cell.title.mobile'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell--text-mobile',
          description: 'table.style.body.cell.text.mobile'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--actions',
          description: 'table.style.body.row.actions'
        }
      },
      {
        item: {
          class: 'ddr-table__table--foot-row',
          description: 'table.style.foot.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--foot-cell',
          description: 'table.style.foot.cell'
        }
      }
    ]
  },
  "ddr-tree": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'tree.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx2" 
      [border]="true" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree
      [nodes]="nodesEx3" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree
      [nodes]="nodesEx4" 
      (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx5" 
      [actionsOnlyLeafs]="true"
      (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx6" >
      <ng-template #templateNode let-item="item">
        <div class="mt-2">{{'tree.value' | ddrTranslate}}: {{ item.value }}</div>
      </ng-template>
    </ddr-tree>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx7"
      (clickNode)="clickNode($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-tree 
      [nodes]="nodesEx8"
      [canClick]="false"
      (clickNode)="clickNode($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
     <ddr-tree 
      [nodes]="[]"
      [labelNoData]="'tree.empty' | ddrTranslate" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 background-test-transparent">
     <ddr-tree 
      [nodes]="nodesEx10"
      [transparent]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tree.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
     <ddr-tree 
      [nodes]="nodesEx11"
      [showIconArrow]="false" />
  </div>
</div>`,
    cssCode: `.background-test-transparent {
    background: turquoise;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrTreeNode,
  DdrAction,
  DdrToastService,
  DdrTreeComponent,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { TreeData } from './bean/tree-data';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'tree-showcase',
  styleUrl: './tree-showcase.component.scss',
  templateUrl: './tree-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTreeComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TreeShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public nodesEx1: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx2: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx3: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      icon: 'bi bi-bell',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              icon: 'bi bi-bell',
              data: {
                value: 'E1.1.1'
              },
            }
          ]
        },
        {
          name: 'E1.2',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      icon: 'bi bi-bell',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx4: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
              actions: [
                {
                  label: 'tree.action.update',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'tree.action.delete',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: []
    }
  ];

  public nodesEx5: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              },
              actions: [
                {
                  label: 'tree.action.update',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1'
                },
                {
                  label: 'tree.action.delete',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2'
                }
              ],
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1'
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2'
            }
          ],
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1'
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2'
        }
      ],
      children: []
    }
  ];

  public nodesEx6: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx7: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx8: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx10: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  public nodesEx11: DdrTreeNode<TreeData>[] = [
    {
      name: 'E1',
      data: {
        value: 'E1'
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1'
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1'
              }
            }
          ]
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2'
          }
        }
      ]
    },
    {
      name: 'E2',
      data: {
        value: 'E2'
      },
      children: []
    }
  ];

  selectAction(action: DdrAction<TreeData>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action)
    );
  }

  clickNode(nodeData: TreeData) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(nodeData)
    );
  }

}`,
    classes: [
      CLASSES['DdrTreeNode']
    ],
    inputs: [
      {
        item: {
          name: 'nodes',
          description: 'tree.input.nodes',
          required: false,
          default: '[]',
          type: 'DdrTreeNode<T>[]'
        }
      },
      {
        item: {
          name: 'border',
          description: 'tree.input.border',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'actionsOnlyLeafs',
          description: 'tree.input.actionsonlyleafs',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'open',
          description: 'tree.input.open',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'canClick',
          description: 'tree.input.canclick',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'tree.input.transparent',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showIconArrow',
          description: 'tree.input.showiconarrow',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'selectAction',
          description: 'tree.output.selectaction',
          type: 'T'
        }
      },
    ],
    templates: [
      {
        item: {
          name: 'templateNode',
          description: 'tree.template.templatenode'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'tree.no.data',
          description: 'tree.translation.no.data'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-tree',
          description: 'tree.style.tree'
        }
      },
      {
        item: {
          class: 'ddr-tree--transparent',
          description: 'tree.style.tree.transparent'
        }
      },
      {
        item: {
          class: 'ddr-tree__no-data',
          description: 'tree.style.no.data'
        }
      },
      {
        item: {
          class: 'ddr-tree__container',
          description: 'tree.style.container'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node',
          description: 'tree.style.container.node'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content',
          description: 'tree.style.container.node.content'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__icon',
          description: 'tree.style.container.node.content.icon'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__text',
          description: 'tree.style.container.node.content.text'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__content__custom',
          description: 'tree.style.container.node.content.custom'
        }
      },
      {
        item: {
          class: 'ddr-tree__container__node__actions',
          description: 'tree.style.container.node.actions'
        }
      },
    ]
  },
  "ddr-button": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'button.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          icon="bi bi-person"
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
            class="me-1"
            mode="save"
            text="button.text"
            (action)="clickButton($event)" />
    
     <ddr-button
            mode="danger"
            text="button.text"
            (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="button.text"
          [disabled]="true"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          [floatButton]="true"
          position="bottom-right"
          icon="bi bi-person"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <form (ngSubmit)="submitForm()">
      <ddr-button
            type="submit"
            text="button.text" />
    </form>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          [block]="true"
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          class="me-1"
          size="large"
          text="button.text"
          (action)="clickButton($event)" />

    <ddr-button
          class="me-1"
          size="medium"
          text="button.text"
          (action)="clickButton($event)" />

    <ddr-button
          class="me-1"
          size="small"
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="button.text"
          [tooltipText]="'button.tooltip' | ddrTranslate"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          [transparent]="true"
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          icon="bi bi-person"
          text="button.text"
          iconPosition="right"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.example.12' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          img="img/button/star.png"
          text="button.text"
          (action)="clickButton($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrToastService, DdrButtonComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcaseComponent {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click')
    );
  }

  submitForm() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.form.submit')
    );
  }
}`,
    inputs: [
      {
        item: {
          name: 'text',
          description: 'button.input.text',
          required: false,
          default: "undefined",
          type: 'string'
        },
      },
      {
        item: {
          name: 'type',
          description: 'button.input.type',
          required: false,
          default: "'button'",
          type: 'DdrTypeButton',
          values: "'button' | 'submit'"
        },
      },
      {
        item: {
          name: 'icon',
          description: 'button.input.icon',
          required: false,
          default: "undefined",
          type: 'string'
        },
      },
      {
        item: {
          name: 'block',
          description: 'button.input.block',
          required: false,
          default: "false",
          type: 'boolean'
        },
      },
      {
        item: {
          name: 'disabled',
          description: 'button.input.disabled',
          required: false,
          default: "false",
          type: 'boolean'
        },
      },
      {
        item: {
          name: 'disabled',
          description: 'button.input.disabled',
          required: false,
          default: "false",
          type: 'boolean'
        },
      },
      {
        item: {
          name: 'mode',
          description: 'button.input.mode',
          required: false,
          default: "'default'",
          type: 'DdrModeButton',
          values: "'default' | 'save' | 'danger'"
        },
      },
      {
        item: {
          name: 'size',
          description: 'button.input.size',
          required: false,
          default: "'small'",
          type: 'DdrSize',
          values: "'small' | 'medium' | 'large'"
        },
      },
      {
        item: {
          name: 'floatButton',
          description: 'button.input.floatbutton',
          required: false,
          default: "false",
          type: 'boolean'
        },
      },
      {
        item: {
          name: 'position',
          description: 'button.input.position',
          required: false,
          default: "'bottom-right'",
          type: 'DdrOrientation',
          values: "'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'"
        },
      },
      {
        item: {
          name: 'iconPosition',
          description: 'button.input.iconposition',
          required: false,
          default: "'left'",
          type: 'DdrIconPositionButton',
          values: "'left' | 'right'"
        },
      },
      {
        item: {
          name: 'img',
          description: 'button.input.img',
          required: false,
          default: "undefined",
          type: 'string'
        },
      },
      {
        item: {
          name: 'tooltipText',
          description: 'button.input.tooltiptext',
          required: false,
          default: "undefined",
          type: 'string'
        },
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'button.input.tooltipOrientation',
          required: false,
          default: "'top'",
          type: 'DdrOrientatioTooltip',
          values: "'top' | 'right' | 'bottom' | 'left'"
        },
      },
      {
        item: {
          name: 'transparent',
          description: 'button.input.transparent',
          required: false,
          default: "false",
          type: 'boolean'
        },
      },
      {
        item: {
          name: 'border',
          description: 'button.input.border',
          required: false,
          default: "false",
          type: 'boolean'
        },
      }
    ],
    outputs: [
      {
        item: {
          name: 'action',
          description: 'button.output.action',
          type: 'MouseEvent'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-button',
          description: 'button.style.button'
        }
      },
      {
        item: {
          class: 'btn-ddr--mode-default',
          description: 'button.style.mode.default'
        }
      },
      {
        item: {
          class: 'btn-ddr--mode-save',
          description: 'button.style.mode.save'
        }
      },
      {
        item: {
          class: 'btn-ddr--mode-danger',
          description: 'button.style.mode.danger'
        }
      },
      {
        item: {
          class: 'btn-ddr--block',
          description: 'button.style.block'
        }
      },
      {
        item: {
          class: 'btn-ddr--inline',
          description: 'button.style.inline'
        }
      },
      {
        item: {
          class: 'btn-ddr--border',
          description: 'button.style.border'
        }
      },
      {
        item: {
          class: 'btn-ddr--without-border',
          description: 'button.style.without.border'
        }
      },
      {
        item: {
          class: 'btn-ddr--small',
          description: 'button.style.small'
        }
      },
      {
        item: {
          class: 'btn-ddr--medium',
          description: 'button.style.medium'
        }
      },
      {
        item: {
          class: 'btn-ddr--large',
          description: 'button.style.large'
        }
      },
      {
        item: {
          class: 'btn-ddr--disabled',
          description: 'button.style.disabled'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button',
          description: 'button.style.float.button'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--bottom-left',
          description: 'button.style.float.button.bottom.left'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--bottom-center',
          description: 'button.style.float.button.bottom.center'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--bottom-right',
          description: 'button.style.float.button.bottom.right'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--top-left',
          description: 'button.style.float.button.top.left'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--top-center',
          description: 'button.style.float.button.top.center'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--top-right',
          description: 'button.style.float.button.top.right'
        }
      },
      {
        item: {
          class: 'btn-ddr--transparent',
          description: 'button.style.transparent'
        }
      },
      {
        item: {
          class: 'btn-ddr--icon',
          description: 'button.style.icon'
        }
      },
      {
        item: {
          class: 'btn-ddr--icon-right',
          description: 'button.style.icon.right'
        }
      },
      {
        item: {
          class: 'btn-ddr--icon-left',
          description: 'button.style.icon.left'
        }
      },
      {
        item: {
          class: 'btn-ddr--float-button--items',
          description: 'button.style.float.button.items'
        }
      },
      {
        item: {
          class: 'btn-ddr--img',
          description: 'button.style.img'
        }
      },
      {
        item: {
          class: 'btn-ddr--text',
          description: 'button.style.text'
        }
      },
    ]
  },
  "ddr-button-multiple": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttons"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttonsEx2"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttonsEx3"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttons"
          [showSelectedButton]="true"
          [(ngModel)]="valueButtonEx4"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p class="mt-3">{{'small' | ddrTranslate}}</p>
    <ddr-button-multiple
          [buttons]="buttons"
          size="small"
          (action)="clickButton($event)" />

    <p class="mt-3">{{'medium' | ddrTranslate}}</p>
    <ddr-button-multiple
          [buttons]="buttons"
          size="medium"
          (action)="clickButton($event)" />

    <p class="mt-3">{{'large' | ddrTranslate}}</p>
    <ddr-button-multiple
      [buttons]="buttons"
      size="large"
      (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.multiple.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttons"
          [transparent]="true"
          (action)="clickButton($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrButton, DdrButtonMultipleComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'multiple-button-showcase',
  templateUrl: './multiple-button-showcase.component.html',
  styleUrls: ['./multiple-button-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonMultipleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttons: DdrButton[] = [
    {
      text: 'button.multiple.1',
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    },
    {
      text: 'button.multiple.2',
      icon: 'bi bi-x',
      value: 'BUTTON_2'
    },
    {
      text: 'button.multiple.3',
      icon: 'bi bi-trash',
      value: 'BUTTON_3'
    }
  ];

  public buttonsEx2: DdrButton[] = [
    {
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    },
    {
      icon: 'bi bi-x',
      value: 'BUTTON_2'
    },
    {
      icon: 'bi bi-trash',
      value: 'BUTTON_3'
    }
  ];

  public buttonsEx3: DdrButton[] = [
    {
      text: 'button.multiple.1',
      icon: 'bi bi-check',
      value: 'BUTTON_1'
    }
  ];

  public valueButtonEx4: string = 'BUTTON_3';

  clickButton(button: DdrButton) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(button)
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'buttons',
          description: 'button.multiple.input.buttons',
          type: 'DdrButton[]',
          default: '[]',
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'button.multiple.input.size',
          type: 'DdrSize',
          default: 'medium',
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'showSelectedButton',
          description: 'button.multiple.input.showselectedbutton',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'button.multiple.input.transparent',
          type: 'boolean',
          default: 'false',
          required: false
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'action',
          description: 'button.multiple.output.action',
          type: 'DdrButton'
        }
      }
    ],
    classes: [
      CLASSES['DdrButton']
    ],
    styles: [
      {
        item: {
          class: 'ddr-button-multiple',
          description: 'button.multiple.style.multiple.button'
        }
      },
      {
        item: {
          class: 'ddr-button-multiple__selected',
          description: 'button.multiple.style.selected'
        }
      },
      {
        item: {
          class: 'ddr-button-multiple__first-button',
          description: 'button.multiple.style.first.button'
        }
      },
      {
        item: {
          class: 'ddr-button-multiple__intermediate-button',
          description: 'button.multiple.style.intermediate.button'
        }
      },
      {
        item: {
          class: 'ddr-button-multiple__last-button',
          description: 'button.multiple.style.last.button'
        }
      },
      {
        item: {
          class: 'ddr-button-multiple__last-button',
          description: 'button.multiple.style.last.button'
        }
      },
    ]
  },
  "ddr-button-split": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'button.split.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [showFirstOnlyIcon]="true"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [transparent]="true"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [transparent]="true"
          [border]="false"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.split.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [showFirstInOptions]="false"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'button.split.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <ddr-button-split
          class="me-2"
          [actions]="actions"
          size="small"
          (selectAction)="selectAction($event)" />

    <ddr-button-split
          class="me-2"
          [actions]="actions"
          size="medium"
          (selectAction)="selectAction($event)" />

    <ddr-button-split
          [actions]="actions"
          size="large"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-multiple
          [buttons]="buttons"
          [(ngModel)]="position"
          [showSelectedButton]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [position]="position"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [disabled]="true"
          (selectAction)="selectAction($event)" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          iconShowOptions="bi bi-arrow-down-short"
          (selectAction)="selectAction($event)" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [showFirst]="false"
          (selectAction)="selectAction($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
          [actions]="actions"
          [showOnlyIcon]="true"
          (selectAction)="selectAction($event)" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'button.split.example.12' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button-split
        [actions]="actions"
        (openActions)="openActions($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrAction,
  DdrButton,
  DdrButtonMultipleComponent,
  DdrOrientationButtonSplit,
  DdrButtonSplitComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'button-split-showcase',
  templateUrl: './button-split-showcase.component.html',
  styleUrls: ['./button-split-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonSplitComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonSplitShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public actions: DdrAction<string>[] = [
    {
      label: 'button.split.save',
      value: 'SAVE',
      item: 'save',
      icon: 'bi bi-floppy'
    },
    {
      label: 'button.split.update',
      value: 'UPDATE',
      item: 'update',
      icon: 'bi bi-pencil'
    },
    {
      label: 'button.split.delete',
      value: 'DELETE',
      item: 'delete',
      icon: 'bi bi-trash'
    }
  ];

  public buttons: DdrButton[] = [
    {
      text: 'bottom-right',
      value: 'bottom-right'
    },
    {
      text: 'bottom-left',
      value: 'bottom-left'
    },
    {
      text: 'top-right',
      value: 'top-right'
    },
    {
      text: 'top-left',
      value: 'top-left'
    }
  ];

  public position: DdrOrientationButtonSplit = 'bottom-right';

  selectAction(action: DdrAction<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action)
    );
  }

  openActions(open: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate(open ? 'button.split.open' : 'button.split.close')
    );
  }

}`,
    inputs: [
      {
        item: {
          name: 'actions',
          description: 'button.split.input.actions',
          type: 'DdrAction<T>[]',
          default: '[]',
          required: false
        }
      },
      {
        item: {
          name: 'showFirst',
          description: 'button.split.input.showfirst',
          type: 'boolean',
          default: 'true',
          required: false
        }
      },
      {
        item: {
          name: 'showFirstInOptions',
          description: 'button.split.input.showfirstinoptions',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'showFirstOnlyIcon',
          description: 'button.split.input.showfirstonlyicon',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'showOnlyIcon',
          description: 'button.split.input.showonlyicon',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'button.split.input.transparent',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'button.split.input.size',
          type: 'string',
          default: "'small'",
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'border',
          description: 'button.split.input.border',
          type: 'boolean',
          default: 'true',
          required: false
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'button.split.input.disabled',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'position',
          description: 'button.split.input.position',
          type: 'DdrOrientationButtonSplit',
          default: "'bottom-right'",
          required: false,
          values: "'bottom-right' | 'bottom-left' | 'top-left' | 'top-right'"
        }
      },
      {
        item: {
          name: 'iconShowOptions',
          description: 'button.split.input.iconshowoptions',
          type: 'string',
          default: "'bi bi-caret-down-fill'",
          required: false
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'selectAction',
          description: 'button.split.output.selectaction',
          type: 'DdrAction<T>'
        }
      },
      {
        item: {
          name: 'openActions',
          description: 'button.split.output.openactions',
          type: 'boolean'
        }
      }
    ],
    classes: [
      CLASSES['DdrAction']
    ],
    styles: [
      {
        item: {
          class: 'ddr-button-split',
          description: 'button.split.style.button.split'
        }
      },
      {
        item: {
          class: 'ddr-button-split--transparent',
          description: 'button.split.style.transparent'
        }
      },
      {
        item: {
          class: 'ddr-button-split--without-border',
          description: 'button.split.style.without.border'
        }
      },
      {
        item: {
          class: 'ddr-button-split__action-principal',
          description: 'button.split.style.action.principal'
        }
      },
      {
        item: {
          class: 'ddr-button-split__action-principal--more-actions',
          description: 'button.split.style.more.actions'
        }
      },
      {
        item: {
          class: 'ddr-button-split__action-secondaries',
          description: 'button.split.style.action.secondaries'
        }
      },
      {
        item: {
          class: 'ddr-button-split__action-secondaries-no-border-left',
          description: 'button.split.style.action.secondaries.without.border.left'
        }
      },
      {
        item: {
          class: 'ddr-button-split__options ddr-button-split__options--position-bottom-right',
          description: 'button.split.style.position.bottom.right'
        }
      },
      {
        item: {
          class: 'ddr-button-split__options ddr-button-split__options--position-bottom-left',
          description: 'button.split.style.position.bottom.left'
        }
      },
      {
        item: {
          class: 'ddr-button-split__options ddr-button-split__options--position-top-left',
          description: 'button.split.style.position.top.left'
        }
      },
      {
        item: {
          class: 'ddr-button-split__options ddr-button-split__options--position-top-right',
          description: 'button.split.style.position.top.right'
        }
      },
      {
        item: {
          class: 'dddr-button-split__options--with-text',
          description: 'button.split.style.with.text'
        }
      },
    ]
  },
  "ddr-input": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'input.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text"
          name="example-1" 
          [(ngModel)]="valueEx1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'input.value' | ddrTranslate}}: {{valueEx1}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text" 
          name="example-2" 
          [inline]="true" />
  </div>
</div>

<div class="row mt-2">
  <div class="col-12">
    <span class="h3">{{'input.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text" 
          name="example-3" 
          [required]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
        [label]="'input.label' | ddrTranslate" 
        [placeholder]="'input.placeholder' | ddrTranslate" 
        type="text" 
        name="example-4" 
        [border]="false" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="email" 
          name="example-5" 
          [required]="true" 
          [validate]="true"
          [minlength]="5" >

      <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
      </ng-template>

      <ng-template #templateErrors let-errors="errors">
        @if(errors?.required){
          <span>{{'input.value.required' | ddrTranslate}}</span>
        }
        @if(errors?.minlength){
          <span class="me-2">{{'input.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
          <span>{{'input.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
        }
      </ng-template>
    </ddr-input>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text" 
          name="example-6" 
          [required]="true" 
          [inline]="true"
          [validate]="true" 
          [minlength]="5" >

      <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
      </ng-template>

      <ng-template #templateErrors let-errors="errors">
        @if(errors?.required){
          <span>{{'input.value.required' | ddrTranslate}}</span>
        }
        @if(errors?.minlength){
          <span class="me-2">{{'input.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
          <span>{{'input.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
        }
      </ng-template>
    </ddr-input>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text" 
          name="example-7" 
          [disabled]="true"
          [(ngModel)]="valueEx7" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          type="text" 
          name="example-8" 
          [readonly]="true"
          [(ngModel)]="valueEx8" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder.number' | ddrTranslate" 
          type="number" 
          name="example-9"
          [min]="0" 
          [max]="10"
          [(ngModel)]="valueEx9" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>{{'input.value' | ddrTranslate }}: {{valueEx9}}</p>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          [labelBold]="true" 
          type="text" 
          name="example-10" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          [tooltipText]="'input.tooltip' | ddrTranslate" 
          type="text" 
          name="example-11" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.12' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate"
          type="text" 
          name="example-12"
          (clickInput)="clickInput($event)"
          (keyPressed)="keyPressed($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.13' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'small' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          size="small"
          type="text" 
          name="example-13-small" />
    <ddr-input 
          [label]="'medium' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          size="medium"
          type="text" 
          name="example-13-medium" />
    <ddr-input 
          [label]="'large' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate" 
          size="large"
          type="text" 
          name="example-13-large" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.14' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="input.focus"
          (action)="focusInput()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate"
          [focus]="focusEx14"
          type="text" 
          name="example-14"
          (focusLost)="onFocusLost()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.example.15' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 background-test-transparent">
    <ddr-input 
          [label]="'input.label' | ddrTranslate" 
          [placeholder]="'input.placeholder' | ddrTranslate"
          [transparent]="true"
          [border]="true"
          type="text" 
          name="example-15" />
  </div>
</div>`,
    cssCode: `
.background-test-transparent {
    background: turquoise;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrInputComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-showcase',
  templateUrl: './input-showcase.component.html',
  styleUrls: ['./input-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public valueEx1: string = '';
  public valueEx7: string = 'Disabled';
  public valueEx8: string = 'Read only';
  public valueEx9: number = 5;
  public focusEx14: boolean = false;

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.keypressed'),
      value
    )
  }

  focusInput() {
    this.focusEx14 = true;
  }

  onFocusLost() {
    this.focusEx14 = false;
  }

}`,
    inputs: [
      {
        item: {
          name: 'name',
          description: 'input.input.name',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.input.placeholder',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'label',
          description: 'input.input.label',
          type: 'string',
          default: "undefined",
          required: false
        }
      },
      {
        item: {
          name: 'type',
          description: 'input.input.type',
          type: 'string',
          default: "'text'",
          required: false,
          values: "'text' | 'email' | 'phone' | 'number' | 'url' | 'password'"
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.input.disabled',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.input.readonly',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'maxlength',
          description: 'input.input.maxlength',
          type: 'string | number | null',
          default: "null",
          required: false
        }
      },
      {
        item: {
          name: 'minlength',
          description: 'input.input.minlength',
          type: 'string | number | null',
          default: "null",
          required: false
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.input.required',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.input.required',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.input.validate',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.input.inline',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'border',
          description: 'input.input.border',
          type: 'boolean',
          default: "true",
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.input.pattern',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.input.labelbold',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'input.input.size',
          type: 'DdrSize',
          default: "'medium'",
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.input.tooltiptext',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.input.tooltipOrientation',
          type: 'DdrOrientatioTooltip',
          default: "'bottom'",
          required: false,
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'min',
          description: 'input.input.min',
          type: 'number',
          default: "undefined",
          required: false
        }
      },
      {
        item: {
          name: 'max',
          description: 'input.input.max',
          type: 'number',
          default: "undefined",
          required: false
        }
      },
      {
        item: {
          name: 'focus',
          description: 'input.input.focus',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'input.input.transparent',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'autocomplete',
          description: 'input.input.autocomplete',
          type: 'AutocompleteType',
          default: "'off'",
          required: false,
          values: "'on' | 'off' | 'username' | 'current-password' | 'new-password' | 'name' | 'given-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'postal-code' | 'country' | 'country-name';"
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'hasErrors',
          description: 'input.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'focusLost',
          description: 'input.output.focuslost',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input',
          description: 'input.styles.input'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container',
          description: 'input.styles.container'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container--inline',
          description: 'input.styles.container.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label',
          description: 'input.styles.container.label'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label--inline',
          description: 'input.styles.container.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label--transparent',
          description: 'input.styles.container.label.transparent'
        }
      },

      {
        item: {
          class: 'ddr-input__input-container__input',
          description: 'input.styles.container.input'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--border',
          description: 'input.styles.container.input.border'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--without-border',
          description: 'input.styles.container.input.without.border'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--small',
          description: 'input.styles.container.input.small'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--medium',
          description: 'input.styles.container.input.medium'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--large',
          description: 'input.styles.container.input.large'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--inline',
          description: 'input.styles.container.input.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--disabled',
          description: 'input.styles.container.input.disabled'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--transparent',
          description: 'input.styles.container.input.transparent'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--border-transparent',
          description: 'input.styles.container.input.border.transparent'
        }
      },
    ]
  },
  "ddr-input-group": {
    htmlCode: `
<div class="row">
  <div class="col-12">
      <span class="h3">{{'input.group.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          name="example-1"
          [(ngModel)]="value"
          (action)="clickButton($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'input.group.value' | ddrTranslate}}: {{value}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.2' | ddrTranslate}}</span>
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          [required]="true"
          [validate]="true"
          minlength="5"
          name="example-2"
          (action)="clickButton($event)">

        <ng-template #templateValid>
            <span>{{'input.group.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
          @if(errors?.required){
            <span>{{'input.group.value.required' | ddrTranslate}}</span>
          }
          @if(errors?.minlength){
            <span class="me-2">{{'input.group.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
            <span>{{'input.group.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
          }
        </ng-template>

    </ddr-input-group>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          [inline]="true"
          type="text"
          icon="bi bi-send"
          [required]="true"
          [validate]="true"
          name="example-3"
          (action)="clickButton($event)">

        <ng-template #templateValid>
            <span>{{'input.group.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
          @if(errors?.required){
            <span>{{'input.group.value.required' | ddrTranslate}}</span>
          }
          @if(errors?.minlength){
            <span class="me-2">{{'input.group.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
            <span>{{'input.group.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
          }
        </ng-template>

      </ddr-input-group>
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          [disabled]="true"
          name="example-4"
          (action)="clickButton($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          [disabledButton]="true"
          name="example-5"
          (action)="clickButton($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          [tooltipText]="'input.group.tooltip' | ddrTranslate" 
          name="example-6"
          (action)="clickButton($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          type="text"
          icon="bi bi-send"
          [labelBold]="true"
          name="example-7"
          (action)="clickButton($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="number" 
          name="example-8"
          [min]="0" 
          [max]="10"
          [(ngModel)]="valueEx8"
          (action)="clickButton($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'input.group.value' | ddrTranslate}}: {{valueEx8}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          name="example-9"
          (action)="clickButton($event)"
          (clickInput)="clickInput($event)"
          (keyPressed)="keyPressed($event)" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          size="small"
          name="example-10-small" />
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          size="medium"
          name="example-10-medium" />
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          size="large"
          name="example-10-large" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="input.group.focus"
          (action)="focusInputGroup()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          [focus]="focusEx11"
          name="example-11"
          (focusLost)="onFocusLost()"  />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.group.example.12' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 background-test-transparent ">
    <ddr-input-group
          [label]="'input.group.label' | ddrTranslate"
          [placeholder]="'input.group.placeholder' | ddrTranslate"
          icon="bi bi-send"
          type="text" 
          [transparent]="true"
          name="example-12" />
    </div>
</div>`,
    cssCode: `
.background-test-transparent {
  background: turquoise;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrInputGroupComponent,
  DdrTranslateService,
  DdrTranslatePipe,
  DdrButtonComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-group-showcase',
  templateUrl: './input-group-showcase.component.html',
  styleUrls: ['./input-group-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputGroupComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: string = '';
  public valueEx8: number = 5;
  public focusEx11: boolean = false;

  clickButton($ev: MouseEvent) {
    console.log($ev);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click')
    );
  }

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.group.keypressed'),
      value
    )
  }

  focusInputGroup() {
    this.focusEx11 = true;
  }

  onFocusLost() {
    this.focusEx11 = false;
  }

}`,
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.group.input.label',
          default: 'undefined',
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'icon',
          description: 'input.group.input.icon',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.group.input.name',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.group.input.placeholder',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'type',
          description: 'input.group.input.type',
          default: "'text'",
          type: 'string',
          required: false,
          values: "'text' | 'email' | 'phone' | 'number' | 'url' | 'password'"
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.group.input.validate',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.group.input.required',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.group.input.readonly',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.group.input.pattern',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'maxlength',
          description: 'input.group.input.maxlength',
          default: "null",
          type: "string | number | null",
          required: false
        }
      },
      {
        item: {
          name: 'minlength',
          description: 'input.group.input.minlength',
          default: "null",
          type: "string | number | null'",
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.group.input.inline',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.group.input.disabled',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'disabledButton',
          description: 'input.group.input.disabledbutton',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.group.input.tooltiptext',
          default: "undefined",
          type: "string",
          required: false
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.group.input.labelbold',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'min',
          description: 'input.group.input.min',
          default: "undefined",
          type: "DdrOrientation",
          required: false
        }
      },
      {
        item: {
          name: 'max',
          description: 'input.group.input.max',
          default: "undefined",
          type: "number",
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'input.group.input.size',
          default: "'medium'",
          type: "DdrSize",
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'focus',
          description: 'input.group.input.focus',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'input.group.input.transparent',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'autocomplete',
          description: 'input.group.input.autocomplete',
          type: 'AutocompleteType',
          default: "'off'",
          required: false,
          values: "'on' | 'off' | 'username' | 'current-password' | 'new-password' | 'name' | 'given-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'postal-code' | 'country' | 'country-name';"
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'hasErrors',
          description: 'input.group.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'action',
          description: 'input.group.output.action',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.group.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.group.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'focusLost',
          description: 'input.group.output.focuslost',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.group.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.group.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-group',
          description: 'input.group.style'
        }
      },
      {
        item: {
          class: 'ddr-input-group__input',
          description: 'input.group.style.input'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button',
          description: 'input.group.style.button'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button--is-valid',
          description: 'input.group.style.button.is.valid'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button--is-invalid',
          description: 'input.group.style.button.is.invalid'
        }
      },
    ]
  },
  "ddr-input-password": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'input.password.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-1"
          [(ngModel)]="value" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'input.password.value' | ddrTranslate}}: {{value}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.2' | ddrTranslate}}</span>
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-2"
          [required]="true"
          [validate]="true">

        <ng-template #templateValid>
            <span>{{'input.password.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @if(errors?.required){
              <span>{{'input.password.required' | ddrTranslate}}</span>
            }
            @if(errors?.minlength){
              <span class="me-2">{{'input.password.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
              <span>{{'input.password.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
            }
        </ng-template>

    </ddr-input-password>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-3"
          [inline]="true"
          [required]="true"
          [validate]="true">

        <ng-template #templateValid>
            <span>{{'input.password.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @if(errors?.required){
              <span>{{'input.password.required' | ddrTranslate}}</span>
            }
            @if(errors?.minlength){
              <span class="me-2">{{'input.password.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
              <span>{{'input.password.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
            }
        </ng-template>

      </ddr-input-password>
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-4"
          [disabled]="true"
          [(ngModel)]="valueEx4" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-5"
          [readonly]="true"
          [(ngModel)]="valueEx5" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-6"
          [showPassword]="true" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-7"
          [tooltipText]="'input.password.tooltip' | ddrTranslate" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-8"
          [labelBold]="true" />
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'input.password.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-password
          [label]="'input.password.label' | ddrTranslate"
          [placeholder]="'input.password.placeholder' | ddrTranslate"
          name="example-9"
          (clickInput)="clickInput($event)"
          (keyPressed)="keyPressed($event)" />
    </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrInputPasswordComponent,
  DdrToastService,
  DdrTranslatePipe, 
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-password-showcase',
  templateUrl: './input-password-showcase.component.html',
  styleUrls: ['./input-password-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputPasswordShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: string = '';
  public valueEx4: string = 'Disabled';
  public valueEx5: string = 'Read only';

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.password.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.password.keypressed'),
      value
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.password.input.label',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.password.input.required',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.password.input.validate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.password.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.password.input.placeholder',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.password.input.readonly',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.password.input.disabled',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.password.input.inline',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.password.input.tooltiptext',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.password.input.tooltiporientation',
          required: false,
          type: 'DdrOrientatioTooltip',
          default: "'bottom'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.password.input.labelbold',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'showPassword',
          description: 'input.password.input.showpassword',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.password.input.pattern',
          default: "''",
          type: 'string',
          required: false
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'hasErrors',
          description: 'input.password.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.password.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.password.output.keypressed',
          type: 'string'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.password.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.password.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-password',
          description: 'input.password.input'
        }
      }
    ]
  },
  "ddr-input-file": {
    htmlCode: `
<div class="row">
    <div class="col-12">
        <span class="h3">{{'input.file.example.1' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-1"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.2' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-2"
                    [multiple]="true"
                    (filesSelected)="filesSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.3' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-3"
                    accept=".pdf, .txt"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.4' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-4"
                    [disabled]="true"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.5' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-5"
                    [inline]="true"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.6' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-6"
                    [tooltipText]="'input.file.tooltip' | ddrTranslate"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'input.file.example.7' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-input-file 
                    [label]="'input.file' | ddrTranslate"
                    name="example-7"
                    [labelBold]="true"
                    (fileSelected)="fileSelected($event)" />
    </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrFileHandle, DdrInputFileComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';

@Component({
  selector: 'input-file-showcase',
  templateUrl: './input-file-showcase.component.html',
  styleUrl: './input-file-showcase.component.scss',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputFileComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputFileShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  fileSelected(file: DdrFileHandle) {
    console.log(file);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.file.upload.file'),
    )
  }

  filesSelected(files: DdrFileHandle[]) {
    console.log(files);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.file.upload.files'),
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.file.input.label',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.file.input.name',
          default: "''",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.file.input.inline',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.file.input.disabled',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.file.input.labelbold',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.file.input.required',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.file.input.tooltiptext',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.file.input.tooltipOrientation',
          default: "'bottom'",
          required: false,
          type: 'DdrOrientatioTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'multiple',
          description: 'input.file.input.multiple',
          default: "false",
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'accept',
          description: 'input.file.input.accept',
          default: "'*'",
          required: false,
          type: 'string'
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'fileSelected',
          description: 'input.file.output.fileselected',
          type: 'DdrFileHandle'
        }
      },
      {
        item: {
          name: 'filesSelected',
          description: 'input.file.output.filesselected',
          type: 'DdrFileHandle[]'
        }
      }
    ],
    classes: [
      CLASSES['DdrFileHandle']
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-file',
          description: 'input.file.style.file'
        }
      }
    ]
  },
  "ddr-textarea": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'textarea.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-1" 
          [(ngModel)]="value1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'textarea.value' | ddrTranslate}}: {{value1}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-2" 
          [(ngModel)]="value2" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'textarea.value' | ddrTranslate}}: {{value2}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-3" 
          [minlength]="3"
          [maxlength]="10" 
          [required]="true" 
          [validate]="true">

      <ng-template #templateValid>
        <span>{{'textarea.ok' | ddrTranslate}}</span>
      </ng-template>

      <ng-template #templateErrors let-errors="errors">
        @if (errors?.required) {
          <span>{{'textarea.value.required' | ddrTranslate}}</span>
        }
        @if(errors?.minlength){
          <span class="me-2">{{'textarea.minlength.required' | ddrTranslate}} {{ errors?.minlength.requiredLength }}</span>
          <span>{{'textarea.minlength.actual' | ddrTranslate}} {{ errors?.minlength?.actualLength }}</span>
        }
      </ng-template>
    </ddr-textarea>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-4" 
          [inline]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-5"
          [rows]="15"
          [cols]="30" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-6"
          [tooltipText]="'textarea.tooltip' | ddrTranslate" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-7"
          [labelBold]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'textarea.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [label]="'textarea.label' | ddrTranslate" 
          [placeholder]="'textarea.placeholder' | ddrTranslate"
          name="example-8"
          (clickTextarea)="clickTextarea($event)"
          (keyPressed)="keyPressed($event)"
          (blur)="blur()" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrTextareaComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'textarea-showcase',
  templateUrl: './textarea-showcase.component.html',
  styleUrls: ['./textarea-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class TextareaShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  value1: string = '';
  value2: string = "Valor inicial";

  clickTextarea($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('textarea.keypressed'),
      value
    )
  }

  blur() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.blur')
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'placeholder',
          description: 'textarea.input.placeholder',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'label',
          description: 'textarea.input.label',
          required: false,
          default: "undefined",
          type: 'string'
        }
      },
      {
        item: {
          name: 'name',
          description: 'textarea.input.name',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'textarea.input.disabled',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'textarea.input.readonly',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'required',
          description: 'textarea.input.required',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'maxlength',
          description: 'textarea.input.maxlength',
          required: false,
          default: "null",
          type: 'string | number | null'
        }
      },
      {
        item: {
          name: 'minlength',
          description: 'textarea.input.minlength',
          required: false,
          default: "null",
          type: 'string | number | null'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'textarea.input.validate',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'textarea.input.inline',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'rows',
          description: 'textarea.input.rows',
          required: false,
          default: "1",
          type: 'number'
        }
      },
      {
        item: {
          name: 'cols',
          description: 'textarea.input.cols',
          required: false,
          default: "10",
          type: 'number'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'textarea.input.labelbold',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'textarea.input.tooltiptext',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'textarea.input.tooltipOrientation',
          default: "'bottom'",
          required: false,
          type: 'DdrOrientatioTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'clickTextarea',
          description: 'textarea.output.clicktextarea',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'textarea.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'blur',
          description: 'textarea.output.blur',
          type: 'void'
        }
      },
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'textarea.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'textarea.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-textarea',
          description: 'textarea.style'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label',
          description: 'textarea.style.label'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label--inline',
          description: 'textarea.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label--inline',
          description: 'textarea.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-textarea__textarea',
          description: 'textarea.style.textarea'
        }
      },
      {
        item: {
          class: 'ddr-textarea__textarea--inline',
          description: 'textarea.style.textarea.inline'
        }
      },
    ]
  },
  "ddr-radio": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'radio.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options1"
          [(ngModel)]="value1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'radio.value' | ddrTranslate}}: {{value1 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'radio.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options2"
          [(ngModel)]="value2" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'radio.value' | ddrTranslate}}: {{value2 | json}}</span>
  </div>
</div>
    
<div class="row mt-3">
  <div class="col-12">
      <span class="h3">{{'radio.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options3"
          [(ngModel)]="value3" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'radio.value' | ddrTranslate}}: {{value3 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'radio.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options4"
          [(ngModel)]="value4" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'radio.value' | ddrTranslate}}: {{value4 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'radio.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options5"
          [inline]="true"
          [(ngModel)]="value5" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'radio.value' | ddrTranslate}}: {{value5 | json}}</span>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrRadioComponent,
  DdrSelectItem,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ProgrammingLanguage } from './example';

@Component({
  selector: 'radio-showcase',
  templateUrl: './radio-showcase.component.html',
  styleUrls: ['./radio-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrRadioComponent,
    DdrTranslatePipe,
    FormsModule,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class RadioShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public options1: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];

  public options2: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];

  public options3: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      },
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options4: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      },
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];
  public options5: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      },
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public value1: string = '';
  public value2: string = 'angular';;
  public value3: ProgrammingLanguage | null = null;
  public value4: ProgrammingLanguage = { name: 'cpp' };
  public value5: ProgrammingLanguage | null = null;;

}`,
    inputs: [
      {
        item: {
          name: 'options',
          description: 'radio.input.options',
          default: '[]',
          required: true,
          type: 'DdrSelectItem<T>'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'radio.input.inline',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickRadio',
          description: 'radio.output.clickradio',
          type: 'T'
        }
      }
    ],
    classes: [
      CLASSES['DdrSelectItem'],
      CLASSES['ProgrammingLanguage']
    ],
    styles: [
      {
        item: {
          class: 'ddr-radio',
          description: 'radio.style'
        }
      },
      {
        item: {
          class: 'ddr-radio__container',
          description: 'radio.style.container'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input',
          description: 'radio.style.container.input'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--active',
          description: 'radio.style.container.input.active'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--active',
          description: 'radio.style.container.input.active'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--desactive',
          description: 'radio.style.container.input.desactive'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--desactive',
          description: 'radio.style.container.input.desactive'
        }
      },
    ]
  },
  "ddr-checkbox": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options1"
          [(ngModel)]="value1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.value' | ddrTranslate}}: {{value1 | json}}</span>
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options2"
          [(ngModel)]="value2" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.value' | ddrTranslate}}: {{value2 | json}}</span>
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options3"
          [(ngModel)]="value3" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.value' | ddrTranslate}}: {{value3 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options4"
          [(ngModel)]="value4" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.value' | ddrTranslate}}: {{value4 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options5"
          [inline]="true"
          [(ngModel)]="value5" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.value' | ddrTranslate}}: {{value5 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options6"
          [disabled]="true"
          [(ngModel)]="value6" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox
          [options]="options7"
          (clickCheck)="clickCheck($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrCheckboxComponent, DdrSelectItem, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase',
  templateUrl: './checkbox-showcase.component.html',
  styleUrls: ['./checkbox-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public options1: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];
  public options2: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];
  public options3: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options4: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options5: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options6: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options7: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public value1: string[] = [];
  public value2: string[] = ['java', 'c'];
  public value3: ProgrammingLanguage[] = [];
  public value4: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'nestjs'
    }
  ];
  public value5: ProgrammingLanguage[] = [];
  public value6: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    }
  ];

  clickCheck(value: ProgrammingLanguage[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(value)
    )
  }


}`,
    inputs: [
      {
        item: {
          name: 'options',
          description: 'checkbox.input.options',
          default: '[]',
          type: 'DdrSelectItem<T>[]',
          required: true
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'checkbox.input.disabled',
          default: 'false',
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'checkbox.input.inline',
          default: 'false',
          type: 'boolean',
          required: false
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickCheck',
          description: 'checkbox.output.clickcheck',
          type: 'T[]'
        }
      }
    ],
    classes: [
      CLASSES['DdrSelectItem'],
      CLASSES['ProgrammingLanguage']
    ],
    styles: [
      {
        item: {
          class: 'ddr-checkbox',
          description: 'checkbox.style.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container',
          description: 'checkbox.style.container'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input',
          description: 'checkbox.style.input'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--active',
          description: 'checkbox.style.input.active'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--desactive',
          description: 'checkbox.style.input.desactive'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--disabled',
          description: 'checkbox.style.input.disabled'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--label',
          description: 'checkbox.style.container.label'
        }
      }
    ]
  },
  "ddr-checkbox-binary": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'checkbox.binary.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox-binary 
          label="checkbox.binary.label"
          [(ngModel)]="value" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'checkbox.binary.value' | ddrTranslate}}: {{value}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.binary.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox-binary 
          label="checkbox.binary.label"
          [disabled]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'checkbox.binary.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-checkbox-binary 
          label="checkbox.binary.label"
          (clickCheck)="clickCheck($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrCheckboxBinaryComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'checkbox-binary-showcase',
  templateUrl: './checkbox-binary-showcase.component.html',
  styleUrls: ['./checkbox-binary-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxBinaryShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: boolean = true;

  clickCheck(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    )
  }

}`,
    inputs: [
      {
        item: {
          name: 'disabled',
          description: 'checkbox.binary.input.disabled',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'label',
          description: 'checkbox.binary.input.label',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickCheck',
          description: 'checkbox.binary.output.clickcheck',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-checkbox-binary',
          description: 'checkbox.binary.style.binary'
        }
      }
    ]
  },
  "ddr-dropdown": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx1"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      name="dropdown-1"
      [(ngModel)]="value1"
      (selectItem)="selectItem($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value1}}</span>
  </div>
</div> 

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx2" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      name="dropdown-2"
      [(ngModel)]="value2"
      (selectItem)="selectItem($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value2}}</span>
  </div>
</div> 

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx3" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      name="dropdown-3"
      [(ngModel)]="value3"
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value3 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx4" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-4"
      [(ngModel)]="value4"
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value4 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx5" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-5"
      [(ngModel)]="value5"
      (selectItem)="selectItemObject($event)">

      <ng-template #itemTemplate let-item="item">
        <span>{{item.label + ' [' + item.value.name + ']'}}</span>
      </ng-template>

    </ddr-dropdown>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value5 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx6" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-6"
      [(ngModel)]="value6" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value6 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx7" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [inline]="true"
      [compareFn]="compareFn"
      name="dropdown-7"
      [(ngModel)]="value7" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value7 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx8" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      [showFilter]="false"
      name="dropdown-8"
      [(ngModel)]="value8" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value8 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.9' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <ddr-button-multiple class="mb-3"
      [buttons]="buttonsOrientation"
      [showSelectedButton]="true"
      [(ngModel)]="orientationDropdown" />

    <ddr-dropdown 
      [options]="optionsEx9" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [orientation]="orientationDropdown" 
      [compareFn]="compareFn"
      name="dropdown-9"
      [(ngModel)]="value9"
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value9 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.10' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx10" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [(ngModel)]="value10" 
      [compareFn]="compareFn"
      name="dropdown-10"
      (selectItem)="selectItemObject($event)" />

    <ddr-button text="dropdown.reset.value" (action)="resetValueEx10()" />
    <ddr-button text="dropdown.reset.options" (action)="resetOptionsEx10()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value10 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.11' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx11" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [disabled]="true"
      name="dropdown-11"
      [(ngModel)]="value11" 
      (selectItem)="selectItemObject($event)" />

  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value11 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.12' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx12" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [allowDeselect]="true"
      name="dropdown-12"
      [(ngModel)]="value12" 
      (selectItem)="selectItemObject($event)" />

  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value12 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.13' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx13" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [modalOptions]="true"
      name="dropdown-13"
      [(ngModel)]="value13" 
      (selectItem)="selectItemObject($event)" />

  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value13 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.14' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx14" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [closeOnSelect]="false"
      name="dropdown-14"
      [(ngModel)]="value14" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value14 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.15' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx15" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [tooltipText]="'dropdown.tooltip' | ddrTranslate"
      name="dropdown-15"
      [(ngModel)]="value15" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value15 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.16' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-dropdown 
      [options]="optionsEx16" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [allowDeselect]="true"
      [validate]="true"
      [required]="true"
      name="dropdown-16"
      [(ngModel)]="value16" 
      (selectItem)="selectItemObject($event)">

      <ng-template #templateValid>
        <span>{{'dropdown.ok' | ddrTranslate}}</span>
      </ng-template>

      <ng-template #templateErrors let-errors="errors">
        @if(errors?.required){
          <span>{{'dropdown.value.required' | ddrTranslate}}</span>
        }
      </ng-template>

    </ddr-dropdown>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value16 | json}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.example.17' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 background-test-transparent">
    <ddr-dropdown 
      [options]="optionsEx17" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [transparent]="true"
      name="dropdown-17"
      [(ngModel)]="value17" 
      (selectItem)="selectItemObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value17 | json}}</span>
  </div>
</div>`,
    cssCode: `
.background-test-transparent {
  background: turquoise;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrSelectItem,
  DdrToastService,
  DdrDropdownComponent,
  DdrButtonComponent,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrButtonMultipleComponent,
  DdrButton,
  DdrOrientationDropdown
} from 'ddr-ng';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase',
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrDropdownComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name

  public optionsEx1: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];

  public optionsEx2: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];

  public optionsEx3: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx4: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx5: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx6: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx7: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx8: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx9: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx10: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx11: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx12: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx13: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx14: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx15: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx16: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx17: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public buttonsOrientation: DdrButton[] = [
    {
      text: 'bottom',
      value: 'bottom'
    },
    {
      text: 'top',
      value: 'top'
    }
  ];

  public orientationDropdown: DdrOrientationDropdown = 'bottom'

  public value1: string = '';
  public value2: string = 'angular';
  public value3: ProgrammingLanguage | null = null;
  public value4: ProgrammingLanguage = {
    name: 'angular'
  };
  public value5: ProgrammingLanguage | null = null;
  public value6: ProgrammingLanguage | null = null;
  public value7: ProgrammingLanguage | null = null;
  public value8: ProgrammingLanguage | null = null;
  public value9: ProgrammingLanguage | null = null;
  public value10: ProgrammingLanguage | null = {
    name: 'angular'
  };
  public value11: ProgrammingLanguage = {
    name: 'angular'
  };
  public value12: ProgrammingLanguage | null = {
    name: 'angular'
  };
  public value13: ProgrammingLanguage | null = null;
  public value14: ProgrammingLanguage | null = null;
  public value15: ProgrammingLanguage | null = null;
  public value16: ProgrammingLanguage | null = null;
  public value17: ProgrammingLanguage | null = null;

  selectItem(item: DdrSelectItem<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item)
    )
  }

  selectItemObject(item: DdrSelectItem<ProgrammingLanguage>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item)
    )
  }

  resetOptionsEx10() {
    this.optionsEx10 = [];
  }

  resetValueEx10() {
    this.value10 = null;
  }

}`,
    inputs: [
      {
        item: {
          name: 'options',
          description: 'dropdown.input.options',
          required: true,
          type: 'DdrSelectItem<T>',
          default: '[]'
        }
      },
      {
        item: {
          name: 'showFilter',
          description: 'dropdown.input.showfilter',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'label',
          description: 'dropdown.input.label',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'dropdown.input.inline',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'dropdown.input.validate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'orientation',
          description: 'dropdown.input.orientation',
          required: false,
          type: 'DdrOrientationDropdown',
          default: 'bottom',
          values: "'bottom' | 'top'"
        }
      },
      {
        item: {
          name: 'labelPlaceholderFilter',
          description: 'dropdown.input.labelplaceholderfilter',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'dropdown.input.labelNoResults',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'dropdown.input.disabled',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'dropdown.input.placeholder',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'required',
          description: 'dropdown.input.required',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'translate',
          description: 'dropdown.input.translate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'modalOptions',
          description: 'dropdown.input.modaloptions',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'dropdown.input.tooltipOrientation',
          required: false,
          type: 'DdrOrientatioTooltip',
          default: "'bottom'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'dropdown.input.tooltiptext',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'closeOnSelect',
          description: 'dropdown.input.closeonselect',
          required: false,
          type: 'boolean',
          default: "true"
        }
      },
      {
        item: {
          name: 'allowDeselect',
          description: 'dropdown.input.allowdeselect',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'dropdown.input.comparefn',
          required: false,
          type: 'Function',
          default: "(a: T, b: T) => a === b"
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'dropdown.input.transparent',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'name',
          description: 'dropdown.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'selectItem',
          description: 'dropdown.output.selectitem',
          type: 'DdrSelectItem<T>'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'dropdown.template.itemtemplate'
        }
      },
      {
        item: {
          name: 'templateValid',
          description: 'dropdown.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'dropdown.template.templateerrors'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'dropdown.no.results',
          description: 'dropdown.translation.no.results'
        }
      }
    ],
    classes: [
      CLASSES['DdrSelectItem'],
      CLASSES['ProgrammingLanguage']
    ],
    styles: [
      {
        item: {
          class: 'ddr-dropdown',
          description: 'dropdown.style.dropdown'
        }
      },
      {
        item: {
          class: 'ddr-dropdown--selectionable',
          description: 'dropdown.style.selectionable'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items',
          description: 'dropdown.style.panel.items'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--top',
          description: 'dropdown.style.panel.items.top'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--modal',
          description: 'dropdown.style.panel.items.modal'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--search',
          description: 'dropdown.style.panel.items.search'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--search--input',
          description: 'dropdown.style.panel.items.search.input'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--no-results',
          description: 'dropdown.style.panel.items.no.results'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--no-results--no-filter',
          description: 'dropdown.style.panel.items.no.results.no.filter'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__with-filter',
          description: 'dropdown.style.panel.items.with.filter'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__item',
          description: 'dropdown.style.panel.items.item'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__item--active',
          description: 'dropdown.style.panel.items.item.active'
        }
      }
    ]
  },
  "ddr-dropdown-multiple": {
    htmlCode: `
<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.1' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple 
                    [options]="optionsEx1" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    name="dropdown-multiple-1"
                    [(ngModel)]="value1" 
                    (selectItems)="selectItems($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <p>{{'Valor :' + (value1 | json)}}</p>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.2' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx2" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    name="dropdown-multiple-2"
                    [(ngModel)]="value2" 
                    (selectItems)="selectItems($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <p>{{'Valor :' + (value2 | json)}}</p>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.3' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple 
                    [options]="optionsEx3" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    name="dropdown-multiple-3"
                    [(ngModel)]="value3" 
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value3 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.4' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple 
                    [options]="optionsEx4" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    name="dropdown-multiple-4"
                    [(ngModel)]="value4" 
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value4 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.5' | ddrTranslate}}</span>
        <h3></h3>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx5" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    name="dropdown-multiple-5"
                    [(ngModel)]="value5"
                    (selectItems)="selectItemsObject($event)" />

        <ddr-button 
            text="dropdown.multiple.reset" 
            (action)="resetValuesEx5()" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value5 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.6' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx6" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [disabled]="true"
                    [compareFn]="compareFn"
                    name="dropdown-multiple-6"
                    [(ngModel)]="value6"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value6 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.7' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx7" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [modalOptions]="true"
                    [compareFn]="compareFn"
                    name="dropdown-multiple-7"
                    [(ngModel)]="value7"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value7 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.8' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx8" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [showFilter]="false"
                    [compareFn]="compareFn"
                    name="dropdown-multiple-8"
                    [(ngModel)]="value8"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value8 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.9' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx9" 
                    [label]="'dropdown.multiple.label' | ddrTranslate" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    name="dropdown-multiple-9"
                    [(ngModel)]="value9"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value9 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.10' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx10" 
                    [label]="'dropdown.multiple.label' | ddrTranslate" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [tooltipText]="'dropdown.multiple.tooltip' | ddrTranslate"
                    [compareFn]="compareFn"
                    name="dropdown-multiple-10"
                    [(ngModel)]="value10"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value10 | json}}</span>
    </div>
</div>


<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.11' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">

        <ddr-button-multiple class="mb-3"
                [buttons]="buttonsOrientation"
                [showSelectedButton]="true"
                [(ngModel)]="orientationDropdown" />

        <ddr-dropdown-multiple
                    [options]="optionsEx11" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [orientation]="orientationDropdown"
                    [compareFn]="compareFn"
                    name="dropdown-multiple-11"
                    [(ngModel)]="value11"
                    (selectItems)="selectItemsObject($event)" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value11 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.12' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx12" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    name="dropdown-multiple-12"
                    [(ngModel)]="value12"
                    (selectItems)="selectItemsObject($event)">

            <ng-template #itemTemplate let-item="item">
                <span>{{item.label + ' ' + (item.value | json)}}</span>
            </ng-template>

        </ddr-dropdown-multiple>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value12 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.13' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx13" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [(ngModel)]="value13"
                    name="dropdown-multiple-13"
                    [compareFn]="compareFn"
                    (selectItems)="selectItemsObject($event)" />

        <ddr-button 
            text="dropdown.multiple.change.options" 
            (action)="changeOptionsEx13()" />
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value13 | json}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span class="h3">{{'dropdown.multiple.example.14' | ddrTranslate}}</span>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <ddr-dropdown-multiple
                    [options]="optionsEx14" 
                    [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                    [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                    [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                    [compareFn]="compareFn"
                    [required]="true"
                    [validate]="true"
                    name="dropdown-multiple-14"
                    [(ngModel)]="value14"
                    (selectItems)="selectItemsObject($event)" >

            <ng-template #templateValid>
                <span>{{'dropdown.multiple.ok' | ddrTranslate}}</span>
            </ng-template>

            <ng-template #templateErrors let-errors="errors">
                @if(errors?.required){
                <span>{{'dropdown.multiple.value.required' | ddrTranslate}}</span>
                }
            </ng-template>
        </ddr-dropdown-multiple>
    </div>
</div>

<div class="row mt-3">
    <div class="col-12">
        <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value14 | json}}</span>
    </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'dropdown.multiple.example.15' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 background-test-transparent">
    <ddr-dropdown-multiple
                [options]="optionsEx15" 
                [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
                [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
                [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
                [compareFn]="compareFn"
                [transparent]="true"
                name="dropdown-multiple-15"
                [(ngModel)]="value15"
                (selectItems)="selectItemsObject($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'dropdown.value' | ddrTranslate}}: {{value15 | json}}</span>
  </div>
</div>`,
    cssCode: `
.background-test-transparent {
    background: turquoise;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DdrButton,
  DdrButtonComponent,
  DdrDropdownMultipleComponent,
  DdrButtonMultipleComponent,
  DdrOrientationDropdown,
  DdrSelectItem,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase',
  templateUrl: './dropdown-multiple-showcase.component.html',
  styleUrl: './dropdown-multiple-showcase.component.scss',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrDropdownMultipleComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name

  public optionsEx1: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];
  public optionsEx2: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];
  public optionsEx3: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];
  public optionsEx4: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx5: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx6: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx7: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx8: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx9: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx10: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx11: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx12: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public optionsEx13: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    }
  ];

  public optionsEx14: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public value1: string[] = [];
  public value2: string[] = ['java', 'angular'];
  public value3: ProgrammingLanguage[] = [];
  public value4: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    },
    {
      name: 'cpp'
    }
  ];

  public value5: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    },
    {
      name: 'cpp'
    }
  ];

  public value6: ProgrammingLanguage[] = [];
  public value7: ProgrammingLanguage[] = [];
  public value8: ProgrammingLanguage[] = [];
  public value9: ProgrammingLanguage[] = [];
  public value10: ProgrammingLanguage[] = [];
  public value11: ProgrammingLanguage[] = [];
  public value12: ProgrammingLanguage[] = [];
  public value13: ProgrammingLanguage[] = [];
  public value14: ProgrammingLanguage[] = [
    {
      name: 'java'
    }
  ];

  public buttonsOrientation: DdrButton[] = [
    {
      text: 'bottom',
      value: 'bottom'
    },
    {
      text: 'top',
      value: 'top'
    }
  ];

  public orientationDropdown: DdrOrientationDropdown = 'bottom'

  selectItems(items: DdrSelectItem<string>[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(items)
    )
  }

  selectItemsObject(items: DdrSelectItem<ProgrammingLanguage>[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(items)
    )
  }

  resetValuesEx5() {
    this.value5 = [];
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('dropdown.multiple.reset.confirm')
    )
  }

  changeOptionsEx13() {
    if (this.optionsEx13[0].label == 'Javascript') {
      this.optionsEx13 = [
        {
          label: 'Java',
          value: {
            name: 'java'
          }
        },
        {
          label: 'Angular',
          value: {
            name: 'angular'
          }
        },
        {
          label: 'NestJS',
          value: {
            name: 'nestjs'
          }
        }
      ]
    } else {
      this.optionsEx13 = [
        {
          label: 'Javascript',
          value: {
            name: 'javascript'
          }
        },
        {
          label: 'C',
          value: {
            name: 'c'
          }
        },
        {
          label: 'C++',
          value: {
            name: 'cpp'
          }
        }
      ]
    }
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('dropdown.multiple.change.options.confirm'),
      JSON.stringify(this.optionsEx13)
    )

  }

}`,
    inputs: [
      {
        item: {
          name: 'options',
          description: 'dropdown.multiple.input.options',
          required: true,
          default: '[]',
          type: 'DdrSelectItem<T>[]'
        }
      },
      {
        item: {
          name: 'showFilter',
          description: 'dropdown.multiple.input.showFilter',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'label',
          description: 'dropdown.multiple.input.label',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'dropdown.multiple.input.inline',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'orientation',
          description: 'dropdown.multiple.input.orientation',
          required: false,
          default: "'bottom'",
          type: 'DdrOrientationDropdown',
          values: "'bottom' | 'top'"
        }
      },
      {
        item: {
          name: 'labelPlaceholderFilter',
          description: 'dropdown.multiple.input.labelplaceholderfilter',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'dropdown.multiple.input.labelnoresults',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'dropdown.multiple.input.disabled',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'dropdown.multiple.input.placeholder',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'required',
          description: 'dropdown.multiple.input.required',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'dropdown.multiple.input.validate',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'translate',
          description: 'dropdown.multiple.input.translate',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'modalOptions',
          description: 'dropdown.multiple.input.modaloptions',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'dropdown.multiple.input.tooltipOrientation',
          required: false,
          default: "'bottom'",
          type: 'DdrOrientatioTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'dropdown.multiple.input.tooltiptext',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'dropdown.multiple.input.comparefn',
          required: false,
          default: '(a: T, b: T) => a === b',
          type: 'Function'
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'dropdown.multiple.input.transparent',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'name',
          description: 'dropdown.multiple.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'selectItems',
          description: 'dropdown.multiple.output.selectitems',
          type: 'DdrSelectItem<T>[]'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'dropdown.multiple.template.itemtemplate'
        }
      },
      {
        item: {
          name: 'templateValid',
          description: 'dropdown.multiple.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'dropdown.multiple.template.templateerrors'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'dropdown.multiple.no.results',
          description: 'dropdown.multiple.translation.no.results'
        }
      }
    ],
    classes: [
      CLASSES['DdrSelectItem'],
      CLASSES['ProgrammingLanguage']
    ],
    styles: [
      {
        item: {
          class: 'ddr-dropdown-multiple',
          description: 'dropdown.multiple.style.dropdown'
        }
      }
    ]
  },
  "ddr-progress-bar": {
    htmlCode: `
<div class="row mt-3 mb-2">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-progress-bar 
          [value]="valueEx1" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx1()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx1()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-progress-bar 
          [value]="valueEx2"
          [label]="valueEx2 + '%'" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx2()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx2()" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-progress-bar 
          [value]="valueEx3"
          [label]="valueEx3 + '%'"
          [striped]="true" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx3()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx3()" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-progress-bar 
          [value]="valueEx4"
          [label]="valueEx4 + '%'"
          [height]="200"
          [striped]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mt-3">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx4()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx4()" />
  </div>
</div>
  
<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mt-3">
    <ddr-progress-bar 
          [value]="valueEx5"
          [label]="valueEx5 + '%'"
          [animated]="true"
          [striped]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mt-3">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx5()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx5()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'progressbar.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mt-3">
    <ddr-progress-bar 
          [value]="valueEx6"
          [label]="valueEx6 + '%'"
          [floatText]="true" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 mt-3">
    <ddr-button
          text="progressbar.increase"
          (action)="increaseEx6()" />
    <ddr-button
          text="progressbar.decrease"
          (action)="decreaseEx6()" />
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrButtonComponent, DdrProgressBarComponent, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'progress-bar-showcase',
  templateUrl: './progress-bar-showcase.component.html',
  styleUrls: ['./progress-bar-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcaseComponent {

  public valueEx1 = 0;
  public valueEx2 = 10;
  public valueEx3 = 20;
  public valueEx4 = 30;
  public valueEx5 = 40;
  public valueEx6 = 50;

  increaseEx1() {
    if (this.valueEx1 + 10 > 100) {
      this.valueEx1 = 100;
    } else {
      this.valueEx1 = this.valueEx1 + 10;
    }
  }

  decreaseEx1() {
    if (this.valueEx1 - 10 < 0) {
      this.valueEx1 = 0;
    } else {
      this.valueEx1 = this.valueEx1 - 10;
    }
  }

  increaseEx2() {
    if (this.valueEx2 + 10 > 100) {
      this.valueEx2 = 100;
    } else {
      this.valueEx2 = this.valueEx2 + 10;
    }
  }

  decreaseEx2() {
    if (this.valueEx2 - 10 < 0) {
      this.valueEx2 = 0;
    } else {
      this.valueEx2 = this.valueEx2 - 10;
    }
  }

  increaseEx3() {
    if (this.valueEx3 + 10 > 100) {
      this.valueEx3 = 100;
    } else {
      this.valueEx3 = this.valueEx3 + 10;
    }
  }

  decreaseEx3() {
    if (this.valueEx3 - 10 < 0) {
      this.valueEx3 = 0;
    } else {
      this.valueEx3 = this.valueEx3 - 10;
    }
  }

  increaseEx4() {
    if (this.valueEx4 + 10 > 100) {
      this.valueEx4 = 100;
    } else {
      this.valueEx4 = this.valueEx4 + 10;
    }
  }

  decreaseEx4() {
    if (this.valueEx4 - 10 < 0) {
      this.valueEx4 = 0;
    } else {
      this.valueEx4 = this.valueEx4 - 10;
    }
  }

  increaseEx5() {
    if (this.valueEx5 + 10 > 100) {
      this.valueEx5 = 100;
    } else {
      this.valueEx5 = this.valueEx5 + 10;
    }
  }

  decreaseEx5() {
    if (this.valueEx5 - 10 < 0) {
      this.valueEx5 = 0;
    } else {
      this.valueEx5 = this.valueEx5 - 10;
    }
  }

  increaseEx6() {
    if (this.valueEx6 + 10 > 100) {
      this.valueEx6 = 100;
    } else {
      this.valueEx6 = this.valueEx6 + 10;
    }
  }

  decreaseEx6() {
    if (this.valueEx6 - 10 < 0) {
      this.valueEx6 = 0;
    } else {
      this.valueEx6 = this.valueEx6 - 10;
    }
  }

}`,
    inputs: [
      {
        item: {
          name: 'value',
          description: 'progressbar.input.value',
          required: true,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'label',
          description: 'progressbar.input.label',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'height',
          description: 'progressbar.input.height',
          required: false,
          default: '16',
          type: 'number'
        }
      },
      {
        item: {
          name: 'striped',
          description: 'progressbar.input.striped',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'animated',
          description: 'progressbar.input.animated',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'floatText',
          description: 'progressbar.input.floattext',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-progress-bar',
          description: 'progressbar.style.progressbar'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text',
          description: 'progressbar.style.float.text'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text--less-50',
          description: 'progressbar.style.float.text.less.50'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text--greather-50',
          description: 'progressbar.style.float.text.greather.50'
        }
      }
    ]
  },
  "ddr-login": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'login.component.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          (doLogin)="login($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [userRequired]="false"
          [userPassword]="false"
          (doLogin)="login($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [labelCreateUser]="'login.component.create.user' | ddrTranslate"
          [showCreateUser]="true"
          (doLogin)="login($event)"
          (registerUser)="registerUser()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [labelForgotenPassword]="'login.component.forgoten.password' | ddrTranslate"
          [showForgotPassword]="true"
          (doLogin)="login($event)"
          (forgotenPassword)="forgotenPassword()" 
          (registerUser)="registerUser()" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [labelCreateUser]="'login.component.create.user' | ddrTranslate"
          [labelForgotenPassword]="'login.component.forgoten.password' | ddrTranslate"
          [showForgotPassword]="true"
          [showCreateUser]="true"
          (doLogin)="login($event)"
          (forgotenPassword)="forgotenPassword()" 
          (registerUser)="registerUser()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelUsername]="'login.component.username' | ddrTranslate"
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPassword]="'login.component.password' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [showHeader]="true" 
          (doLogin)="login($event)">
      
      <div login-header class="text-center">
        <span>{{'login.component.header' | ddrTranslate}}</span>
      </div>

    </ddr-login>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [showLabelUser]="false" 
          [showLabelPassword]="false"
          (doLogin)="login($event)" />
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'login.component.example.8' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-login 
          [labelPlaceholderUsername]="'login.component.placeholder.username' | ddrTranslate"
          [labelPlaceholderPassword]="'login.component.placeholder.password' | ddrTranslate"
          [labelSubmit]="'login.component.submit' | ddrTranslate"
          [showLabelUser]="false" 
          [showLabelPassword]="false"
          [showFooter]="true"
          (doLogin)="login($event)">

      <div login-footer class="text-center">
        <span>{{'login.component.footer' | ddrTranslate}}</span>
      </div>

    </ddr-login>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrAuth,
  DdrToastService,
  DdrLoginComponent,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'login-showcase',
  templateUrl: './login-showcase.component.html',
  styleUrls: ['./login-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrLoginComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class LoginShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  login(auth: DdrAuth) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(auth)
    );
  }

  forgotenPassword() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.forgoten.password')
    )
  }

  registerUser() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('login.click.register.user')
    )
  }
}`,
    inputs: [
      {
        item: {
          name: 'showForgotPassword',
          description: 'login.component.input.showforgotpassword',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showCreateUser',
          description: 'login.component.input.showcreateuser',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showHeader',
          description: 'login.component.input.showheader',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'showFooter',
          description: 'login.component.input.showfooter',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'showLabelUser',
          description: 'login.component.input.showlabeluser',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'showLabelPassword',
          description: 'login.component.input.showlabelpassword',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'userRequired',
          description: 'login.component.input.userrequired',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'userPassword',
          description: 'login.component.input.userpassword',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'labelSubmit',
          description: 'login.component.input.labelsubmit',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelForgotenPassword',
          description: 'login.component.input.labelforgotenpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelCreateUser',
          description: 'login.component.input.labelcreateuser',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelUsername',
          description: 'login.component.input.labelusername',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPlaceholderUsername',
          description: 'login.component.input.labelplaceholderusername',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPassword',
          description: 'login.component.input.labelpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'labelPlaceholderPassword',
          description: 'login.component.input.labelplaceholderpassword',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'doLogin',
          description: 'login.component.output.dologin',
          type: 'DdrAuth'
        }
      },
      {
        item: {
          name: 'forgotenPassword',
          description: 'login.component.output.forgotenpassword',
          type: 'void'
        }
      },
      {
        item: {
          name: 'registerUser',
          description: 'login.component.output.registeruser',
          type: 'void'
        }
      }
    ],
    slots: [
      {
        item: {
          selector: '[login-header]',
          description: 'login.component.slot.login.header'
        }
      },
      {
        item: {
          selector: '[login-footer]',
          description: 'login.component.slot.login.footer'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'login.username',
          description: 'login.component.translation.login.username'
        }
      },
      {
        item: {
          name: 'login.placeholder.username',
          description: 'login.component.translation.login.placeholder.username'
        }
      },
      {
        item: {
          name: 'login.password',
          description: 'login.component.translation.login.password'
        }
      },
      {
        item: {
          name: 'login.placeholder.password',
          description: 'login.component.translation.login.placeholder.password'
        }
      },
      {
        item: {
          name: 'login.submit',
          description: 'login.component.translation.login.submit'
        }
      },
      {
        item: {
          name: 'login.forgot.password',
          description: 'login.component.translation.login.forgot.password'
        }
      },
      {
        item: {
          name: 'login.create.user',
          description: 'login.component.translation.login.create.user'
        }
      }
    ],
    classes: [
      CLASSES['DdrAuth']
    ],
    styles: [
      {
        item: {
          class: 'ddr-login',
          description: 'login.component.style'
        }
      },
      {
        item: {
          class: 'ddr-login__user-input',
          description: 'login.component.style.user.input'
        }
      },
      {
        item: {
          class: 'ddr-login__input-password',
          description: 'login.component.style.input.password'
        }
      },
      {
        item: {
          class: 'ddr-login__submit-button',
          description: 'login.component.style.submit.button'
        }
      },
      {
        item: {
          class: 'ddr-login__submit-button',
          description: 'login.component.style.submit.button'
        }
      }
    ]
  },
  "ddr-loop-number": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    @for (i of 10 | ddrLoopNumber; track i) {
      <div>
        <span>{{i}}</span>
      </div>
    }
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    @for (i of 5 | ddrLoopNumber: {start: -5} ; track i) {
      <div>
        <span>{{i}}</span>
      </div>
    }
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <table class="table table-bordered">
      @for (i of 10 | ddrLoopNumber; track i) {
        <tr>
          @for (j of 10 | ddrLoopNumber; track j) {
            <td> {{i}} {{j}}</td>
          }
        </tr>
      }
    </table>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    @for (i of 10 | ddrLoopNumber:{reverse: true} ; track i) {
      <div>
        <span>{{i}}</span>
      </div>
    }
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    @for (i of 10 | ddrLoopNumber:{step: 2} ; track i) {
      <div>
        <span>{{i}}</span>
      </div>
    }
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'loop.number.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    @for (i of 10 | ddrLoopNumber:{includeLast: true} ; track i) {
      <div>
        <span>{{i}}</span>
      </div>
    }
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrLoopNumberPipe, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'loop-number-showcase',
    templateUrl: './loop-number-showcase.component.html',
    styleUrls: ['./loop-number-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrLoopNumberPipe,
        DdrTranslatePipe
    ]
})
export class LoopNumberShowcaseComponent { }`,
    classes: [
      CLASSES['DdrLoopNumberParams']
    ]
  },
  "ddr-safe": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'safe.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div [innerHTML]="html | ddrSafe"></div>
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'safe.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div [style]="css | ddrSafe:'style'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Exercitationem laborum repudiandae velit error ab magni nobis ut tempora quibusdam ad enim quisquam vitae nulla quam, 
      inventore consequuntur sapiente, eaque mollitia!
    </div>
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'safe.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <img [src]="url | ddrSafe:'url'">
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'safe.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <iframe width="560" height="315" [src]="resourceUrl | ddrSafe:'resourceUrl'" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrSafePipe, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'safe-showcase',
  templateUrl: './safe-showcase.component.html',
  styleUrls: ['./safe-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrSafePipe,
    DdrTranslatePipe
  ]
})
export class SafeHtmlShowcaseComponent {

  public html: string = '<p>Example <b>HTML</b> via <u>code</u></p>';
  public css: string = 'background: linear-gradient(to right, red, yellow)';
  public url: string = 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
  public resourceUrl: string = 'https://www.youtube.com/embed/J0aXUDqGlnU';

}`
  },
  "ddr-nested-property": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx1 | ddrNestedProperty: 'value'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx2 | ddrNestedProperty: 'value'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx3 | ddrNestedProperty: 'value.valueNested'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx4 | ddrNestedProperty: '1'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx5 | ddrNestedProperty: '1.valueNested'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx6 | ddrNestedProperty: 'value.2'}}</div>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'nested.property.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div>{{objEx7 | ddrNestedProperty: 'value.1.valueNested'}}</div>
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrNestedPropertyPipe, DdrTranslatePipe } from 'ddr-ng';

@Component({
  selector: 'nested-property-showcase',
  templateUrl: './nested-property-showcase.component.html',
  styleUrl: './nested-property-showcase.component.scss',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrNestedPropertyPipe,
    DdrTranslatePipe
  ]
})
export class NestedPropertyShowcaseComponent {

  public objEx1: any = {
    value: 'example1'
  }

  public objEx2: any = {}

  public objEx3: any = {
    value: {
      valueNested: 'example3'
    }
  }

  public objEx4: any = [
    'example1',
    'example4'
  ]

  public objEx5: any = [
    {
      valueNested: 'example1'
    },
    {
      valueNested: 'example5'
    }
  ]


  public objEx6: any = {
    value: [
      'example1',
      'example2',
      'example6',
    ]
  }

  public objEx7: any = {
    value: [
      {
        valueNested: 'example1'
      },
      {
        valueNested: 'example7'
      }
    ]
  }

}`
  },
  "ddrNotification": {
    htmlCode: `
<div class="row">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="badge.notification.text"
          ddrNotification 
          [numberNotifications]="5" 
          [limitNotifications]="9" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="badge.notification.text"
          ddrNotification 
          [numberNotifications]="15" 
          [limitNotifications]="9" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="badge.notification.text"
          ddrNotification 
          [numberNotifications]="100" 
          [limitNotifications]="99" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <i class="fs-32 bi bi-house-door-fill"
        ddrNotification 
        [numberNotifications]="15" 
        [limitNotifications]="9">
    </i>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          [text]="showNotifications ? 
            'badge.notification.hide.notifications' : 
            'badge.notification.show.notifications'"
          (action)="toggleNotifications()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <i class="fs-32 bi bi-house-door-fill"
          ddrNotification 
          [numberNotifications]="15" 
          [limitNotifications]="9"
          [showNotifications]="showNotifications">
    </i>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 ">
    <span class="h3">{{'badge.notification.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          icon="bi bi-house-door-fill"
          [floatButton]="true"
          ddrNotification 
          [elementToInsert]="'button'"
          [positionTop]="'0%'"
          [positionRight]="'calc(0% - 10px)'"
          [numberNotifications]="100" 
          [limitNotifications]="99" />
    
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective, DdrButtonComponent, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'badge-notification-showcase',
    templateUrl: './badge-notification-showcase.component.html',
    styleUrls: ['./badge-notification-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrButtonComponent,
        DdrBadgeNotificationDirective,
        DdrTranslatePipe
    ]
})
export class BadgeNotificationShowcaseComponent {

    public showNotifications: boolean = false;

    toggleNotifications(){
        this.showNotifications = !this.showNotifications
    }

}`,
    inputs: [
      {
        item: {
          name: 'showNotifications',
          description: 'badge.notification.input.shownotifications',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'numberNotifications',
          description: 'badge.notification.input.numbernotifications',
          required: false,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'limitNotifications',
          description: 'badge.notification.input.limitnotifications',
          required: false,
          default: '9',
          type: 'number'
        }
      },
      {
        item: {
          name: 'elementToInsert',
          description: 'badge.notification.input.elementtoinsert',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'positionTop',
          description: 'badge.notification.input.positiontop',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'positionRight',
          description: 'badge.notification.input.positionright',
          required: false,
          default: "''",
          type: 'string'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-badge-notification',
          description: 'badge.notification.notification'
        }
      }
    ]
  },
  "ddrClickOutside": {
    htmlCode: `
<ddr-button-multiple
  [buttons]="buttonsModes"
  [showSelectedButton]="true"
  [(ngModel)]="modeClickoutside" />

@switch (modeClickoutside) {
  @case ('standard') {
    <div ddrClickOutside (clickOutside)="clickOutside($event)" class="block">
      <p>{{'clickoutside.standard.click' | ddrTranslate}}</p>
    </div>
  }
  @case ('delay') {
    <div ddrClickOutside [clickOutsideDelay]="5000" (clickOutside)="clickOutside($event)" class="block">
      <p>{{'clickoutside.delay.click' | ddrTranslate}}</p>
    </div>
  }
  @case ('disactivated') {
    <div ddrClickOutside [clickOutsideEnabled]="false" (clickOutside)="clickOutside($event)" class="block">
      <p>{{'clickoutside.disactivated.click' | ddrTranslate}}</p>
    </div>
  }
}`,
    cssCode: `
.block {
  width: 100%;
  height: 100px;
  border: 1px solid #000;
  margin-top: 20px;
  user-select: none;
}`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrClickOutsideDirective,
  DdrButtonComponent,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrButton,
  DdrButtonMultipleComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'click-outside-showcase',
  templateUrl: './click-outside-showcase.component.html',
  styleUrls: ['./click-outside-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrClickOutsideDirective,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ClickOutsideShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttonsModes: DdrButton[] = [
    {
      text: 'clickoutside.standard',
      value: 'standard'
    },
    {
      text: 'clickoutside.delay',
      value: 'delay'
    },
    {
      text: 'clickoutside.disactivated',
      value: 'disactivated'
    },
  ]
  public modeClickoutside: string = 'standard'

  clickOutside($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clickoutside.event.click')
    );
  }

}`,
    inputs: [
      {
        item: {
          name: 'clickOutsideDelay',
          description: 'clickoutside.input.clickoutsidedelay',
          required: false,
          default: 'undefined',
          type: 'number'
        }
      },
      {
        item: {
          name: 'clickOutsideEnabled',
          description: 'clickoutside.input.clickoutsideenabled',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickOutside',
          description: 'clickoutside.output.clickoutside',
          type: 'MouseEvent'
        }
      }
    ]
  },
  "ddrClipboard": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'clipboard.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-textarea 
          [readonly]="true" 
          name="textarea-1"
          [(ngModel)]="valueEx1" />
    
    <ddr-button 
          text="clipboard.copy"  
          ddrClipboard 
          [clipboard]="valueEx1" 
          (action)="copyText()" />
    
    <ddr-textarea
          name="textarea-2" />
  </div>
</div>


<div class="row">
  <div class="col-12">
    <span class="h3">{{'clipboard.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input-group
          type="text"
          icon="bi bi-copy"
          name="example-1"
          ddrClipboard 
          [clipboard]="valueEx2"
          clipboardTrigger="ddr-button"
          [(ngModel)]="valueEx2"
          (action)="copyText()" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrClipboardDirective,
  DdrInputGroupComponent,
  DdrTextareaComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'clipboard-showcase',
  templateUrl: './clipboard-showcase.component.html',
  styleUrls: ['./clipboard-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrClipboardDirective,
    DdrButtonComponent,
    DdrTextareaComponent,
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ClipboardShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public valueEx1: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nesciunt temporibus ex et debitis quisquam doloribus beatae adipisci quo ab fuga provident similique illum, qui illo at inventore dicta esse.'
  public valueEx2: string = ''

  copyText() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clipboard.copy.success'),
    );
  }

}`,
    inputs: [
      {
        item: {
          name: 'clipboard',
          description: 'clipboard.input.clipboard',
          default: 'undefined',
          type: 'string',
          required: true
        }
      },
      {
        item: {
          name: 'clipboardTrigger',
          description: 'clipboard.input.clipboardtrigger',
          default: 'undefined',
          type: 'string',
          required: false
        }
      }
    ]
  },
  "ddrDragDrop": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'drag.drop.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <ddr-button 
          [text]="dragDropEnabled ? 'drag.drop.disabled' : 'drag.drop.active'" 
          (action)="toggleEnabled()" />

    <div class="drag-and-drop" 
          ddrDragDrop 
          [dragDropEnabled]="dragDropEnabled" 
          (dragDropFiles)="loadFiles($event)">
          {{'drag.drop.message' | ddrTranslate}}
    </div>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrToastService, DdrFileHandle, DdrDragDropDirective, DdrButtonComponent, DdrTranslateService, DdrTranslatePipe } from 'ddr-ng'
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'drag-and-drop-showcase',
  templateUrl: './drag-and-drop-showcase.component.html',
  styleUrls: ['./drag-and-drop-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrDragDropDirective,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public dragDropEnabled: boolean = true;

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files)
    );
  }

  toggleEnabled() {
    this.dragDropEnabled = !this.dragDropEnabled;
  }

}`,
    inputs: [
      {
        item: {
          name: 'dragDropEnabled',
          description: 'drag.drop.input.dragdropenabled',
          default: 'true',
          required: false,
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'dragDropFiles',
          description: 'drag.drop.output.dragdropfiles',
          type: 'DdrFileHandle[]'
        }
      }
    ]
  },
  "ddrLoadIframe": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'load.iframe.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <iframe src="https://discoduroderoer.es" ddrLoadIframe (loadIframe)="load()" width="100%" height="500px"></iframe>
  </div>
</div>`,
    tsCode: `
import { Component, inject, OnInit } from '@angular/core';
import { DdrSpinnerService, DdrToastService, DdrLoadIframeDirective, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'load-iframe-showcase',
  templateUrl: './load-iframe-showcase.component.html',
  styleUrls: ['./load-iframe-showcase.component.scss'],
  standalone: true,
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

}`,
    outputs: [
      {
        item: {
          name: 'loadIframe',
          description: 'Evento al cargar el iframe',
          type: 'void'
        }
      }
    ]
  },
  "ddrSkeleton": {
    htmlCode: `
<div class="row mt-3">
  <div class="col-12">
    <ddr-radio
          [options]="options"
          [inline]="true"
          [(ngModel)]="mode"/>

      <ddr-button class="me-2" 
            text="skeleton.load.data" 
            (action)="loadData()" />

      <ddr-input class="me-2" 
            [label]="'skeleton.number.elements' | ddrTranslate" 
            type="number" 
            [min]="1" 
            name="number-elements"
            [(ngModel)]="nElements" />

      <ddr-input class="me-2" 
            [label]="'skeleton.time.load' | ddrTranslate" 
            type="number" 
            name="time-load"
            [(ngModel)]="timeout" />

      <div class="mt-3">
        <ddr-card [showHeader]="false">
          
          <div card-content>
            @if (!load) {
              <div>
                @switch(mode) {
                  @case('circle') {
                    @for (e of nElements | ddrLoopNumber; track e) {
                      <div class="mb-2" ddrSkeleton skeletonWidth="50px" skeletonBorderRadius="50%" skeletonHeight="3rem"></div>
                    }
                  }
                  @case('rectangle') {
                    @for (e of nElements | ddrLoopNumber; track e) {
                      <div class="mb-2" ddrSkeleton skeletonHeight="3rem"></div>
                    }
                  }
                  @case('square') {
                    @for (e of nElements | ddrLoopNumber; track e) {
                      <div class="mb-2" ddrSkeleton skeletonWidth="50px" skeletonHeight="3rem"></div>
                    }
                  }
                  @case('card') {
                    <div>
                      <div class="row mb-3">
                        <div class="col-2 text-center">
                          <div ddrSkeleton skeletonWidth="80px" skeletonBorderRadius="50%"  skeletonHeight="5rem"></div>
                        </div>
                        <div class="col-10">
                          <div>
                            <div class="mb-3" ddrSkeleton skeletonHeight="1rem"></div>
                          </div>
                          <div>
                            <div class="mb-3" ddrSkeleton skeletonHeight="1rem"></div>
                          </div>
                          <div>
                            <div ddrSkeleton skeletonHeight="1rem">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-3">
                        @for (e of nElements | ddrLoopNumber; track e) {
                          <div class="col-12">
                            <div class="mb-3" ddrSkeleton skeletonHeight="2rem"></div>
                          </div>
                        }
                      </div>
                    </div>
                  }
                  @case('list') {
                    <div>
                      @for (e of nElements | ddrLoopNumber; track e) {
                        <div class="mb-3 d-flex flex-nowrap">
                          <div class="flex-grow-0 ">
                            <div ddrSkeleton skeletonWidth="50px" skeletonBorderRadius="50%"  skeletonHeight="3rem"></div>
                          </div>
                          <div class="flex-grow-1">
                            <div class="mb-3" ddrSkeleton skeletonWidth="100%"  skeletonHeight="1rem"></div>
                            <div ddrSkeleton skeletonWidth="100%" skeletonHeight="1rem"></div>
                          </div>
                        </div>
                      }
                    </div>
                  }
                  @case('graphic') {
                    <div class="d-flex flex-nowrap align-items-end">
                      @for (e of nElements | ddrLoopNumber; track e) {
                        <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%"  skeletonHeight="16rem"></div>
                        <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%"  skeletonHeight="3rem"></div>
                        <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%"  skeletonHeight="12rem"></div>
                        <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%"  skeletonHeight="9rem"></div>
                      }
                    </div>
                  }
                }
                
              </div>
            } @else {
              <p>{{'skeleton.data.loaded' | ddrTranslate}}</p>
            }
          </div>
        </ddr-card>
      </div>


  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  DdrButtonComponent, 
  DdrCardComponent, 
  DdrInputComponent, 
  DdrLoopNumberPipe, 
  DdrRadioComponent, 
  DdrSelectItem, 
  DdrSkeletonDirective, 
  DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'skeleton-showcase',
  templateUrl: './skeleton-showcase.component.html',
  styleUrls: ['./skeleton-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrCardComponent,
    DdrButtonComponent,
    DdrInputComponent,
    DdrLoopNumberPipe,
    DdrSkeletonDirective,
    DdrRadioComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class SkeletonShowcaseComponent {

  public mode: string = 'circle';
  public load: boolean = true;
  public timeout: number = 5000;
  public nElements: number = 1;

  public options: DdrSelectItem<string>[] = [
    {
      label: 'skeleton.cirle',
      value: 'circle'
    },
    {
      label: 'skeleton.rectangle',
      value: 'rectangle'
    },
    {
      label: 'skeleton.square',
      value: 'square'
    },
    {
      label: 'skeleton.card',
      value: 'card'
    },
    {
      label: 'skeleton.list',
      value: 'list'
    },
    {
      label: 'skeleton.graphic',
      value: 'graphic'
    }
  ];

  loadData() {
    this.load = false;
    setTimeout(() => {
      this.load = true;
    }, this.timeout);
  }

}`,
    inputs: [
      {
        item: {
          name: 'skeletonWidth',
          description: 'skeleton.input.skeletonwidth',
          default: "'100%'",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'skeletonHeight',
          description: 'skeleton.input.skeletonheight',
          default: "'1rem'",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'skeletonBorderRadius',
          description: 'skeleton.input.skeletonborderradius',
          default: "'0.5rem'",
          required: false,
          type: 'string'
        }
      }
    ]
  },
  "ddrTooltip": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p><span ddrTooltip tooltipText="Lorem ipsum dolor">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Dolor ab expedita vitae, neque libero suscipit voluptates. Dolor necessitatibus saepe pariatur similique sunt, ut et cumque culpa qui dignissimos atque aliquid!</p>
  </div>
</div>


<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p><span ddrTooltip tooltipText="Lorem ipsum dolor" [tooltipUnderline]="true">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Dolor ab expedita vitae, neque libero suscipit voluptates. Dolor necessitatibus saepe pariatur similique sunt, ut et cumque culpa qui dignissimos atque aliquid!</p>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p><span ddrTooltip tooltipText="right" tooltipOrientation="right" [tooltipUnderline]="true">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Tempore commodi aliquid suscipit, laboriosam odio fuga ut mollitia minima quae esse expedita quidem at ipsam consequatur, eius, cupiditate consectetur debitis neque.
    Consequuntur, laborum quaerat non, voluptate itaque alias exercitationem dolore distinctio ratione porro sequi. Nulla quis vel inventore, dolor non cum eligendi voluptate suscipit maxime numquam porro ducimus architecto debitis animi?
    Aperiam corrupti ea pariatur fugiat recusandae aliquam. <span ddrTooltip tooltipText="left" tooltipOrientation="left" [tooltipUnderline]="true">Alias perspiciatis</span> unde beatae, modi quidem, porro eligendi tempora harum fuga deleniti sequi, velit sit dolor reprehenderit aperiam neque veniam vero eveniet pariatur?
    Placeat perspiciatis ratione, fugit doloremque voluptates vero consequatur reiciendis. Tenetur dolorem repellendus facilis sint ea nulla molestias facere, consequatur hic dicta natus minus eligendi rem illo. Veritatis, iste laborum. Cum!
    Totam, vitae porro. <span ddrTooltip tooltipText="bottom" tooltipOrientation="bottom" [tooltipUnderline]="true">Aspernatur ipsum</span>, voluptates unde dicta sint pariatur veritatis et distinctio tempora sunt ut laudantium recusandae ea maxime non repellat beatae enim dolores consequatur vitae quia quidem? Adipisci.
    Maxime perferendis, ad rerum suscipit, obcaecati, nam ipsam commodi iusto itaque debitis porro! Iure, veniam corrupti, voluptas ullam dignissimos impedit possimus dolor inventore sunt tempore illo recusandae similique quam excepturi!
    Asperiores magni possimus nulla facilis. Recusandae inventore corrupti nulla optio tenetur natus aut, cum dolorum deleniti architecto minus velit. Doloribus numquam eum quia similique non tenetur amet minima. Doloribus, eligendi?
    <span ddrTooltip tooltipText="top" tooltipOrientation="top" [tooltipUnderline]="true">Laudantium sapiente</span> voluptas, necessitatibus dicta dolore fugit ex unde quisquam dolor quis distinctio quasi, similique illum libero, ipsam aliquam provident! Necessitatibus accusantium fuga natus molestiae saepe rerum. Voluptatum, aliquam inventore.
    Neque, voluptates. Expedita dolore ab minima, aliquid dolorum qui alias corporis obcaecati tempore doloremque quas ex sed sequi quam, autem illo ullam atque ut illum? Inventore incidunt aperiam dolore doloribus.
    Temporibus nulla quas alias. Atque, obcaecati. Quos ab accusamus quis architecto magni libero explicabo laboriosam nisi. Fuga vero error dolorem nostrum, quam in illo at? Laborum at quod pariatur officiis?</p>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p><span ddrTooltip tooltipText="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor" tooltipOrientation="right" [tooltipUnderline]="true">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Tempore commodi aliquid suscipit, laboriosam odio fuga ut mollitia minima quae esse expedita quidem at ipsam consequatur, eius, cupiditate consectetur debitis neque.
    Consequuntur, laborum quaerat non, voluptate itaque alias exercitationem dolore distinctio ratione porro sequi. Nulla quis vel inventore, dolor non cum eligendi voluptate suscipit maxime numquam porro ducimus architecto debitis animi?
    Aperiam corrupti ea pariatur fugiat recusandae aliquam. Alias perspiciatis unde beatae, modi quidem, porro eligendi tempora harum fuga deleniti sequi, velit sit dolor reprehenderit aperiam neque veniam vero eveniet pariatur?
    Placeat perspiciatis ratione, fugit doloremque voluptates vero consequatur reiciendis. Tenetur dolorem repellendus facilis sint ea nulla molestias facere, consequatur hic dicta natus minus eligendi rem illo. Veritatis, iste laborum. Cum!
    Totam, vitae porro. <span ddrTooltip tooltipText="Aspernatur ipsum Aspernatur ipsum Aspernatur ipsum Aspernatur ipsum" tooltipOrientation="bottom" [tooltipUnderline]="true">Aspernatur ipsum</span>, voluptates unde dicta sint pariatur veritatis et distinctio tempora sunt ut laudantium recusandae ea maxime non repellat beatae enim dolores consequatur vitae quia quidem? Adipisci.
    Maxime perferendis, ad rerum suscipit, obcaecati, nam ipsam commodi iusto itaque debitis porro! Iure, veniam corrupti, voluptas ullam dignissimos impedit possimus dolor inventore sunt tempore illo recusandae similique quam excepturi!
    Asperiores magni possimus nulla facilis. Recusandae inventore corrupti nulla optio tenetur natus aut, cum dolorum deleniti architecto minus velit. Doloribus numquam eum quia similique non tenetur amet minima. Doloribus, eligendi?
    <span ddrTooltip tooltipText="Laudantium sapiente Laudantium sapiente Laudantium sapiente Laudantium sapiente Laudantium sapiente" tooltipOrientation="top" [tooltipUnderline]="true">Laudantium sapiente</span> voluptas, necessitatibus dicta dolore fugit ex unde quisquam dolor quis distinctio quasi, similique illum libero, ipsam aliquam provident! Necessitatibus accusantium fuga natus molestiae saepe rerum. Voluptatum, aliquam inventore.
    Neque, voluptates. Expedita dolore ab minima, aliquid dolorum qui alias corporis obcaecati tempore doloremque quas ex sed sequi quam, <span ddrTooltip tooltipText="autem illo ullam autem illo ullam autem illo ullam" tooltipOrientation="left" [tooltipUnderline]="true">autem illo ullam</span> atque ut illum? Inventore incidunt aperiam dolore doloribus.
    Temporibus nulla quas alias. Atque, obcaecati. Quos ab accusamus quis architecto magni libero explicabo laboriosam nisi. Fuga vero error dolorem nostrum, quam in illo at? Laborum at quod pariatur officiis?</p>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <ddr-button-multiple
      [buttons]="buttonsOrientation"
      [showSelectedButton]="true"
      [(ngModel)]="tooltipOrientation" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12 text-center">

    <i ddrTooltip 
      tooltipText="Lorem ipsum" 
      [tooltipOrientation]="tooltipOrientation" 
      class="bi bi-question-circle">
    </i>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi quae vero sint iure dignissimos inventore, quasi, <span ddrTooltip tooltipText="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor" tooltipWidth="400px" [tooltipUnderline]="true">cum veritatis</span> nulla dolores vel iusto, libero natus pariatur ad quo deleniti necessitatibus.</p>

  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'tooltip.example.7' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">

    <ng-template #tooltipTemplate let-value="value">
      <div>
        <p>{{'tooltip.template' | ddrTranslate}}</p>
        <p>{{value}}</p>
      </div>
    </ng-template>

    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi quae vero sint iure dignissimos inventore, quasi, <span ddrTooltip [tooltipTemplate]="tooltipTemplate" [tooltipTemplateData]="tooltipTemplateData" [tooltipUnderline]="true">cum veritatis</span> nulla dolores vel iusto, libero natus pariatur ad quo deleniti necessitatibus.</p>

  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrButton, DdrButtonMultipleComponent, DdrOrientatioTooltip, DdrTooltipDirective, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'tooltip-showcase',
    templateUrl: './tooltip-showcase.component.html',
    styleUrls: ['./tooltip-showcase.component.scss'],
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrTooltipDirective,
        DdrTranslatePipe,
        DdrButtonMultipleComponent,
        FormsModule
    ]
})
export class TooltipShowcaseComponent {

    public buttonsOrientation: DdrButton[] = [
        {
            icon: 'bi bi-arrow-up',
            value: 'top'
        },
        {
            icon: 'bi bi-arrow-right',
            value: 'right'
        },
        {
            icon: 'bi bi-arrow-down',
            value: 'bottom'
        },
        {
            icon: 'bi bi-arrow-left',
            value: 'left'
        }
    ];

    public tooltipOrientation: DdrOrientatioTooltip = 'top';

    public tooltipTemplateData: any = {
        value: 'data template'
    }
}`,
    inputs: [
      {
        item: {
          name: 'tooltipText',
          description: 'tooltip.input.tooltiptext',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipWidth',
          description: 'tooltip.input.tooltipwidth',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipTemplate',
          description: 'tooltip.input.tooltiptemplate',
          required: false,
          default: 'undefined',
          type: 'TemplateRef<any>'
        }
      },
      {
        item: {
          name: 'tooltipTemplateData',
          description: 'tooltip.input.tooltiptemplatedata',
          required: false,
          default: 'undefined',
          type: 'any'
        }
      },
      {
        item: {
          name: 'tooltipUnderline',
          description: 'tooltip.input.tooltipunderline',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'tooltip.input.tooltiporientation',
          required: false,
          default: "'top'",
          type: 'DdrOrientatioTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-tooltip',
          description: 'tooltip.style'
        }
      },
      {
        item: {
          class: 'ddr-tooltip--top',
          description: 'tooltip.style.top'
        }
      },
      {
        item: {
          class: 'ddr-tooltip--bottom',
          description: 'tooltip.style.bottom'
        }
      },
      {
        item: {
          class: 'ddr-tooltip--left',
          description: 'tooltip.style.left'
        }
      },
      {
        item: {
          class: 'ddr-tooltip--right',
          description: 'tooltip.style.right'
        }
      },
    ]
  },
  "ddrSpinnerService": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'spinner.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.show"
          (action)="showSpinner()"  />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'spinner.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.show"
          (action)="showSpinnerImg()"  />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrSpinnerService,
  DdrTranslatePipe
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'spinner-showcase',
  templateUrl: './spinner-showcase.component.html',
  styleUrls: ['./spinner-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcaseComponent {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService)

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }

  showSpinnerImg() {
    this.ddrSpinnerService.spinnerPathImg = '/img/spinner/spinner.gif';
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
      this.ddrSpinnerService.spinnerPathImg = '';
    }, 5000);
  }

}`,
    styles: [
      {
        item: {
          class: 'ddr-spinner',
          description: 'spinner.style'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay',
          description: 'spinner.style.overlay'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay__spinner',
          description: 'spinner.style.overlay.spinner'
        }
      },
      {
        item: {
          class: 'ddr-spinner__spinner-default',
          description: 'spinner.style.spinner.default'
        }
      }
    ]
  },
  "ddrSpinnerBlock": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'spinner.block.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.block.data.load" 
          (action)="onLoadDataEx1()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [showHeader]="false">
      <div card-content ddrSpinnerBlock [spinnerShow]="!loadDataEx1">
        @if(loadDataEx1){
          <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
      </div>
    </ddr-card>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'spinner.block.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.block.data.load" 
          (action)="onLoadDataEx2()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [showHeader]="false">
      <div card-content ddrSpinnerBlock [spinnerShow]="!loadDataEx2" spinnerPathImg="/img/spinner/spinner.gif">
        @if(loadDataEx2){
          <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
      </div>
    </ddr-card>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <span class="h3">{{'spinner.block.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.block.data.load" 
          (action)="onLoadDataEx3B1()" />
    <ddr-button 
          text="spinner.block.data.load" 
          (action)="onLoadDataEx3B2()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-md-6 col-12">
    <ddr-card [showHeader]="false">
      <div card-content ddrSpinnerBlock [spinnerShow]="!loadDataEx3B1">
        @if(loadDataEx3B1){
          <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
      </div>
    </ddr-card>
  </div>
  <div class="col-md-6 col-12">
    <ddr-card [showHeader]="false">
      <div card-content ddrSpinnerBlock [spinnerShow]="!loadDataEx3B2">
        @if(loadDataEx3B2){
          <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
      </div>
    </ddr-card>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'spinner.block.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
          text="spinner.block.data.load" 
          (action)="onLoadDataEx4()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-card [showHeader]="false">
      <div card-content ddrSpinnerBlock [spinnerShow]="!loadDataEx4" style="height: 500px;">
        @if(loadDataEx4){
          <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
      </div>
    </ddr-card>
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ddrSpinnerBlockDirective, DdrButtonComponent, DdrCardComponent, DdrTranslatePipe } from 'ddr-ng';

@Component({
  selector: 'spinner-block',
  templateUrl: './spinner-block-showcase.component.html',
  styleUrl: './spinner-block-showcase.component.scss',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    ddrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockComponent {

  public loadDataEx1: boolean = true;
  public loadDataEx2: boolean = true;
  public loadDataEx3B1: boolean = true;
  public loadDataEx3B2: boolean = true;
  public loadDataEx4: boolean = true;

  onLoadDataEx1() {
    this.loadDataEx1 = false;
    setTimeout(() => {
      this.loadDataEx1 = true;
    }, 5000);
  }

  onLoadDataEx2() {
    this.loadDataEx2 = false;
    setTimeout(() => {
      this.loadDataEx2 = true;
    }, 5000);
  }

  onLoadDataEx3B1() {
    this.loadDataEx3B1 = false;
    setTimeout(() => {
      this.loadDataEx3B1 = true;
    }, 5000);
  }

  onLoadDataEx3B2() {
    this.loadDataEx3B2 = false;
    setTimeout(() => {
      this.loadDataEx3B2 = true;
    }, 5000);
  }

  onLoadDataEx4() {
    this.loadDataEx4 = false;
    setTimeout(() => {
      this.loadDataEx4 = true;
    }, 5000);
  }

}`,
    inputs: [
      {
        item: {
          name: 'spinnerShow',
          description: 'spinner.block.spinnershow',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'spinnerPathImg',
          description: 'spinner.block.spinnerpathimg',
          type: 'string',
          default: "''",
          required: false
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-spinner',
          description: 'spinner.style'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay-embedded',
          description: 'spinner.style.overlay.embedded'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay-embedded__spinner-embedded',
          description: 'spinner.style.overlay.spinner.embedded'
        }
      },
      {
        item: {
          class: 'ddr-spinner__spinner-default',
          description: 'spinner.style.spinner.default'
        }
      }
    ]
  },
  "ddrToastService": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <ddr-input
          [label]="'toast.maxtoasts' | ddrTranslate"
          type="number"
          [min]="1"
          name="maxtoasts"
          [(ngModel)]="maxToasts" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-input
          [label]="'toast.timeout' | ddrTranslate"
          type="number"
          [min]="1"
          name="timeout"
          [(ngModel)]="toastTimeout" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
      <p>{{'toast.orientation' | ddrTranslate}}</p>
      <ddr-button-multiple
                [buttons]="buttonsOrientation"
                [showSelectedButton]="true"
                [(ngModel)]="toastOrientation"
                (action)="changeOrientation()" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>{{'toast.show.toast' | ddrTranslate}}</p>
    <ddr-button-multiple
          [buttons]="buttons"
          (action)="showToast($event)" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import {
  DdrButton,
  DdrButtonComponent,
  DdrInputComponent,
  DdrButtonMultipleComponent,
  DdrOrientationToast,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toast-showcase',
  templateUrl: './toast-showcase.component.html',
  styleUrls: ['./toast-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    DdrInputComponent,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttonsOrientation: DdrButton[] = [
    {
      icon: 'bi bi-arrow-up-right',
      value: 'top-right'
    },
    {
      icon: 'bi bi-arrow-up-left',
      value: 'top-left'
    },
    {
      icon: 'bi bi-arrow-down-right',
      value: 'bottom-right'
    },
    {
      icon: 'bi bi-arrow-down-left',
      value: 'bottom-left'
    }
  ];

  public toastOrientation: DdrOrientationToast = 'top-right';

  public buttons: DdrButton[] = [
    {
      text: 'toast.info',
      value: 'info'
    },
    {
      text: 'toast.danger',
      value: 'danger'
    },
    {
      text: 'toast.warning',
      value: 'warning'
    },
    {
      text: 'toast.success',
      value: 'success'
    }
  ];

  public maxToasts: number = this.ddrToastService.maxToasts;
  public toastTimeout: number = this.ddrToastService.timeOut

  showToast(button: DdrButton) {

    this.ddrToastService.maxToasts = this.maxToasts;
    this.ddrToastService.timeOut = this.toastTimeout;

    switch (button.value) {
      case 'info':
        this.ddrToastService.addInfoMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'danger':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'warning':
        this.ddrToastService.addWarningMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
      case 'success':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content')
        )
        break;
    }


  }

  changeOrientation() {
    this.ddrToastService.orientation = this.toastOrientation
  }

}`,
    styles: [
      {
        item: {
          class: 'ddr-toast-container',
          description: 'toast.style.container'
        }
      },
      {
        item: {
          class: 'ddr-toast-container--top-right',
          description: 'toast.style.container.top.right'
        }
      },
      {
        item: {
          class: 'ddr-toast-container--top-left',
          description: 'toast.style.container.top.left'
        }
      },
      {
        item: {
          class: 'ddr-toast-container--bottom-right',
          description: 'toast.style.container.bottom.right'
        }
      },
      {
        item: {
          class: 'ddr-toast-container--bottom-left',
          description: 'toast.style.container.bottom.left'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast',
          description: 'toast.style.container.toast'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast--info',
          description: 'toast.style.container.toast.info'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast--warning',
          description: 'toast.style.container.toast.warning'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast--danger',
          description: 'toast.style.container.toast.danger'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast--success',
          description: 'toast.style.container.toast.success'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast__title',
          description: 'toast.style.container.toast.title'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast__title__message',
          description: 'toast.style.container.toast.title.message'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast__title__message',
          description: 'toast.style.container.toast.title.message'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast-title__icon',
          description: 'toast.style.container.toast.title.icon'
        }
      },
      {
        item: {
          class: 'ddr-toast-container__ddr-toast__content',
          description: 'toast.style.container.toast.title.content'
        }
      },
    ]
  },
  "ddrTranslatePipe": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'translate.pipe.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <p>{{'translate.pipe.example' | ddrTranslate}}</p>
  </div>
</div>`,
    tsCode: `
import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-pipe-showcase.component.html',
  styleUrls: ['./translate-pipe-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcaseComponent { }`
  },
  "ddrTranslate": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'translate.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-button 
            text="translate.example" 
            (action)="showToast()" />
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import {
  DdrButtonComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-showcase.component.html',
  styleUrl: './translate-showcase.component.scss',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TranslateShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  showToast() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('translate.example.show')
    )
  }

}`
  },
  "ddr-toggle": {
    htmlCode: `
<div class="row">
  <div class="col-12">
    <span class="h3">{{'toggle.example.1' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          [(ngModel)]="value1" 
          (toggled)="toggleValue($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <div class="col-12">
      <span>{{'toggle.value' | ddrTranslate}}: {{value1}}</span>
    </div>  
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'toggle.example.2' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          [label]="'toggle.label' | ddrTranslate" 
          [(ngModel)]="value2" 
          (toggled)="toggleValue($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'toggle.value' | ddrTranslate}}: {{value2}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'toggle.example.3' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          [label]="'toggle.label' | ddrTranslate" 
          [inline]="true" 
          [(ngModel)]="value3" 
          (toggled)="toggleValue($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'toggle.value' | ddrTranslate}}: {{value3}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'toggle.example.4' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          class="me-2"
          size="small" />
    <ddr-toggle 
          class="me-2"
          size="medium" />
    <ddr-toggle 
          class="me-2"
          size="large" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'toggle.example.5' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          [label]="'toggle.label' | ddrTranslate"
          [tooltipText]="'toggle.tooltip' | ddrTranslate"
          (toggled)="toggleValue($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span class="h3">{{'toggle.example.6' | ddrTranslate}}</span>
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <ddr-toggle 
          [label]="'toggle.label' | ddrTranslate" 
          [(ngModel)]="value6" 
          (toggled)="toggleValue($event)" />
  </div>
</div>

<div class="row mt-3">
  <div class="col-12">
    <span>{{'toggle.value' | ddrTranslate}}: {{value6}}</span>
  </div>
</div>`,
    tsCode: `
import { Component, inject } from '@angular/core';
import { DdrToastService, DdrToggleComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'toggle-showcase',
  templateUrl: './toggle-showcase.component.html',
  styleUrls: ['./toggle-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrToggleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value1: boolean = false;
  public value2: boolean = false;
  public value3: boolean = false;
  public value6: boolean = true;

  toggleValue(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    );
  }
}`,
    inputs: [
      {
        item: {
          name: 'label',
          description: 'toggle.input.label',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'toggle.input.inline',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'toggle.input.tooltiptext',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'toggle.input.tooltiporientation',
          required: false,
          type: 'DdrOrientatioTooltip',
          default: 'false'
        }
      },
      {
        item: {
          name: 'size',
          description: 'toggle.input.size',
          required: false,
          type: 'DdrSize',
          default: "'medium'",
          values: "'small' | 'medium' | 'large'"
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'toggled',
          description: 'toggle.output.toggled',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-toggle',
          description: 'toggle.style'
        }
      },
      {
        item: {
          class: 'ddr-toggle--inline',
          description: 'toggle.style.inline'
        }
      },
      {
        item: {
          class: 'ddr-toggle__label',
          description: 'toggle.style.label'
        }
      },
      {
        item: {
          class: 'ddr-toggle__label--inline',
          description: 'toggle.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button',
          description: 'toggle.style.button'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--on',
          description: 'toggle.style.button.on'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--off',
          description: 'toggle.style.button.off'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--small',
          description: 'toggle.style.button.small'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--medium',
          description: 'toggle.style.button.medium'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--large',
          description: 'toggle.style.button.large'
        }
      },
    ]
  }
}