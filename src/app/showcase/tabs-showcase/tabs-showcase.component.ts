import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { TabsShowcase1Component } from './showcases/tabs-showcase-1/tabs-showcase-1.component';
import { TabsShowcase2Component } from './showcases/tabs-showcase-2/tabs-showcase-2.component';
import { TabsShowcase3Component } from './showcases/tabs-showcase-3/tabs-showcase-3.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    TabsShowcase1Component,
    TabsShowcase2Component,
    TabsShowcase3Component
  ]
})
export class TabsShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `
<ddr-tabs>
    <ddr-tab-item titleTab="tab1">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse
            dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab2">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus
            mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
            Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod
            minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a
            excepturi ut!
            Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae
            quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit
            velit.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab3">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima,
            deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus
            rem quas odio maxime.
            In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet
            explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod
            error?
            Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit,
            ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis
            recusandae!
            Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis
            recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est
            adipisci, quia corrupti?
            Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus
            adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus!
            Pariatur?
            Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit
            excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum
            consequuntur non unde.
            Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam
            distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
            Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae
            consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere
            deleniti necessitatibus.
            Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error,
            corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum
            consequuntur nisi.
            Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae
            necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex
            corporis.
        </ng-template>
    </ddr-tab-item>
</ddr-tabs>
`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent } from 'ddr-ng/components/tabs';

@Component({
  selector: 'tabs-showcase-1',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-1.component.html',
  styleUrl: './tabs-showcase-1.component.scss',
})
export class TabsShowcase1Component {}
`
      },
      {
        htmlCode: `<ddr-tabs>
    <ddr-tab-item titleTab="tab1" icon="bi bi-house-fill">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse
            dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab2" icon="bi bi-person-fill">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus
            mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
            Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod
            minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a
            excepturi ut!
            Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae
            quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit
            velit.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab3" icon="bi bi-bell-fill">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima,
            deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus
            rem quas odio maxime.
            In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet
            explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod
            error?
            Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit,
            ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis
            recusandae!
            Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis
            recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est
            adipisci, quia corrupti?
            Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus
            adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus!
            Pariatur?
            Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit
            excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum
            consequuntur non unde.
            Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam
            distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
            Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae
            consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere
            deleniti necessitatibus.
            Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error,
            corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum
            consequuntur nisi.
            Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae
            necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex
            corporis.
        </ng-template>
    </ddr-tab-item>
</ddr-tabs>
`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent } from 'ddr-ng/components/tabs';

@Component({
  selector: 'tabs-showcase-2',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-2.component.html',
  styleUrl: './tabs-showcase-2.component.scss',
})
export class TabsShowcase2Component { }
`
      },
      {
        htmlCode: `<ddr-tabs (changeTab)="changeTab($event)">
    <ddr-tab-item titleTab="tab1">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ullam, facere suscipit id, veniam ad esse
            dignissimos sed aperiam tempora accusamus! Nam eum velit odit cumque facere voluptate doloribus corrupti.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab2">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime soluta omnis saepe nobis necessitatibus
            mollitia fugit vero id. Ullam earum, in dicta cum nesciunt eligendi ad facere vel aperiam!
            Eius dignissimos voluptates nulla ipsa autem facilis facere nostrum nam tempora. Veritatis praesentium quod
            minima quis laboriosam ab similique, ratione, vel adipisci magnam numquam distinctio accusamus, error a
            excepturi ut!
            Eaque, iste incidunt molestiae aperiam, nisi at, autem nobis eveniet quo delectus esse fuga recusandae
            quibusdam nemo! Dolore voluptatem dolores dolorem numquam fuga! Minima accusantium explicabo in porro sit
            velit.
        </ng-template>
    </ddr-tab-item>
    <ddr-tab-item titleTab="tab3">
        <ng-template #tabContent>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, distinctio nostrum. Quisquam minima,
            deleniti sunt doloremque laborum quibusdam quia sapiente inventore natus voluptate laboriosam nobis ducimus
            rem quas odio maxime.
            In quae praesentium quasi, corporis saepe accusantium debitis rem ab commodi nemo fugiat ex eveniet
            explicabo autem? Corrupti, iure nostrum dolores dicta neque et dignissimos minima accusantium ratione quod
            error?
            Itaque enim inventore optio provident veniam dolore iste corporis in ratione harum voluptas, totam impedit,
            ipsa neque sit asperiores dolorem et dolorum placeat deserunt! Provident voluptatem aliquam deserunt omnis
            recusandae!
            Ex perspiciatis delectus nisi, eaque dignissimos nemo iste quasi reprehenderit cum. Dolorum sit veritatis
            recusandae consectetur a ipsa nostrum laborum fuga in officiis voluptatum nesciunt voluptatibus, est
            adipisci, quia corrupti?
            Cumque accusantium fugit sit inventore aut, repellat facilis vitae debitis, ex alias officia, error ducimus
            adipisci voluptatum. Iste impedit earum eum esse optio excepturi ipsa non adipisci vitae accusamus!
            Pariatur?
            Placeat, sint nam doloremque harum cum similique magnam, vero quae dolores temporibus aut aliquid sit
            excepturi perferendis maiores nemo praesentium rem delectus? Corporis accusamus nemo ullam laborum
            consequuntur non unde.
            Ipsum ab quae ut nihil, vero aut, voluptatibus culpa tenetur omnis exercitationem, animi ullam placeat totam
            distinctio facilis ad voluptas esse. Dolorum maiores suscipit id ad, ab rem? Molestiae, explicabo!
            Id, quisquam temporibus, commodi quidem odit eius consectetur necessitatibus labore nemo amet quam quae
            consequuntur unde fuga? Labore dolore alias sint, maxime ducimus consectetur deserunt dolor veritatis facere
            deleniti necessitatibus.
            Expedita explicabo soluta beatae ad iste libero debitis, facilis id quae aperiam mollitia quas dicta error,
            corporis maxime saepe esse consectetur odio delectus officiis reprehenderit? Quisquam soluta laborum
            consequuntur nisi.
            Voluptate consectetur quo minima quam at labore error earum, repellat doloribus numquam recusandae
            necessitatibus nisi unde neque deleniti delectus, distinctio nihil autem sed? In, nisi. Ad similique odio ex
            corporis.
        </ng-template>
    </ddr-tab-item>
</ddr-tabs>
`,
        tsCode: `import { Component, inject } from '@angular/core';
import {
  DdrTabItemComponent,
  DdrTabsComponent
} from 'ddr-ng/components/tabs';
import {
  DdrTabItemComponent,
  DdrTabsComponent
} from 'ddr-ng/components/tabs';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'tabs-showcase-3',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-3.component.html',
  styleUrl: './tabs-showcase-3.component.scss',
  providers: [DdrToastService],
})
export class TabsShowcase3Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  changeTab(tab: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('tabs.' + (tab + 1)),
    );
  }
}
`
      }
    ],
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
  }
  
}
