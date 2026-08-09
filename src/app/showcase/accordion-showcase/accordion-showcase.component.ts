import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { AccordionShowcase1Component } from './showcases/accordion-showcase-1/accordion-showcase-1.component';
import { AccordionShowcase2Component } from './showcases/accordion-showcase-2/accordion-showcase-2.component';
import { AccordionShowcase3Component } from './showcases/accordion-showcase-3/accordion-showcase-3.component';
import { AccordionShowcase4Component } from './showcases/accordion-showcase-4/accordion-showcase-4.component';
import { AccordionShowcase5Component } from './showcases/accordion-showcase-5/accordion-showcase-5.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'accordion-showcase',
  templateUrl: './accordion-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    AccordionShowcase1Component,
    AccordionShowcase2Component,
    AccordionShowcase3Component,
    AccordionShowcase4Component,
    AccordionShowcase5Component
  ],
})
export class AccordionShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-accordion 
    [titleAccordion]="'accordion.title' | ddrTranslate">
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
</ddr-accordion>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-1',
  templateUrl: './accordion-showcase-1.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase1Component {}
`
      },
      {
        htmlCode: `<ddr-accordion 
    [titleAccordion]="'accordion.title' | ddrTranslate" 
    [open]="true">
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
</ddr-accordion>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-2',
  templateUrl: './accordion-showcase-2.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase2Component {}
`
      },
      {
        htmlCode: `<ddr-accordion 
    [titleAccordion]="'accordion.title' | ddrTranslate" 
    [shadow]="false" 
    [border]="false">
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
</ddr-accordion>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-3',
  templateUrl: './accordion-showcase-3.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase3Component {}
`
      },
      {
        htmlCode: `<ddr-accordion 
    [titleAccordion]="'accordion.title' | ddrTranslate" 
    [slim]="true">
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
</ddr-accordion>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-4',
  templateUrl: './accordion-showcase-4.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ]
})
export class AccordionShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-accordion 
    [titleAccordion]="'accordion.title' | ddrTranslate" 
    (clickOpen)="onClickOpen($event)">
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
</ddr-accordion>`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrAccordionComponent } from 'ddr-ng/components/accordion';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'accordion-showcase-5',
  templateUrl: './accordion-showcase-5.component.html',
  imports: [
    DdrAccordionComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class AccordionShowcase5Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  onClickOpen(state: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      'clickOpen: ' + state,
    );
  }

}
`
      },
    ],
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
          name: "open",
          description: "accordion.input.open",
          type: "boolean",
          required: false,
          default: "false"
        }
      },
      {
        item: {
          name: "shadow",
          description: "accordion.input.shadow",
          type: "boolean",
          required: true,
          default: "true"
        }
      },
      {
        item: {
          name: "border",
          description: "accordion.input.border",
          type: "boolean",
          required: true,
          default: "true"
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
  }
}
