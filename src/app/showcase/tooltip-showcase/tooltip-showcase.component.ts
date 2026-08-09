import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TooltipShowcase1Component } from './showcases/tooltip-showcase-1/tooltip-showcase-1.component';
import { TooltipShowcase2Component } from './showcases/tooltip-showcase-2/tooltip-showcase-2.component';
import { TooltipShowcase3Component } from './showcases/tooltip-showcase-3/tooltip-showcase-3.component';
import { TooltipShowcase4Component } from './showcases/tooltip-showcase-4/tooltip-showcase-4.component';
import { TooltipShowcase5Component } from './showcases/tooltip-showcase-5/tooltip-showcase-5.component';
import { TooltipShowcase6Component } from './showcases/tooltip-showcase-6/tooltip-showcase-6.component';
import { TooltipShowcase7Component } from './showcases/tooltip-showcase-7/tooltip-showcase-7.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'tooltip-showcase',
  templateUrl: './tooltip-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TooltipShowcase1Component,
    TooltipShowcase2Component,
    TooltipShowcase3Component,
    TooltipShowcase4Component,
    TooltipShowcase5Component,
    TooltipShowcase6Component,
    TooltipShowcase7Component,
    DdrTranslatePipe
  ],
})
export class TooltipShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<p>
    <span ddrTooltip tooltipText="Lorem ipsum dolor">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit.
    Dolor ab expedita vitae, neque libero suscipit voluptates. Dolor necessitatibus saepe pariatur similique sunt, ut et
    cumque culpa qui dignissimos atque aliquid!
</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-1',
  templateUrl: './tooltip-showcase-1.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase1Component {}
`
      },
      {
        htmlCode: `<p>
    <span ddrTooltip tooltipText="Lorem ipsum dolor" [tooltipUnderline]="true">Lorem ipsum dolor</span> sit amet
    consectetur adipisicing elit. Dolor ab expedita vitae, neque libero suscipit voluptates. Dolor necessitatibus saepe
    pariatur similique sunt, ut et cumque culpa qui dignissimos atque aliquid!
</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-2',
  templateUrl: './tooltip-showcase-2.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase2Component {}
`
      },
      {
        htmlCode: `<p>
    <span ddrTooltip tooltipText="right" tooltipOrientation="right" [tooltipUnderline]="true">Lorem ipsum dolor</span>
    sit amet consectetur adipisicing elit. Tempore commodi aliquid suscipit, laboriosam odio fuga ut mollitia minima
    quae esse expedita quidem at ipsam consequatur, eius, cupiditate consectetur debitis neque.
    Consequuntur, laborum quaerat non, voluptate itaque alias exercitationem dolore distinctio ratione porro sequi.
    Nulla quis vel inventore, dolor non cum eligendi voluptate suscipit maxime numquam porro ducimus architecto debitis
    animi?
    Aperiam corrupti ea pariatur fugiat recusandae aliquam.
    <span ddrTooltip tooltipText="left" tooltipOrientation="left" [tooltipUnderline]="true">Alias perspiciatis</span>
    unde beatae, modi quidem, porro
    eligendi tempora harum fuga deleniti sequi, velit sit dolor reprehenderit aperiam neque veniam vero eveniet
    pariatur?
    Placeat perspiciatis ratione, fugit doloremque voluptates vero consequatur reiciendis. Tenetur dolorem repellendus
    facilis sint ea nulla molestias facere, consequatur hic dicta natus minus eligendi rem illo. Veritatis, iste
    laborum. Cum!
    Totam, vitae porro.
    <span ddrTooltip tooltipText="bottom" tooltipOrientation="bottom" [tooltipUnderline]="true">Aspernatur ipsum</span>,
    voluptates unde dicta sint pariatur veritatis et distinctio
    tempora sunt ut laudantium recusandae ea maxime non repellat beatae enim dolores consequatur vitae quia quidem?
    Adipisci.
    Maxime perferendis, ad rerum suscipit, obcaecati, nam ipsam commodi iusto itaque debitis porro! Iure, veniam
    corrupti, voluptas ullam dignissimos impedit possimus dolor inventore sunt tempore illo recusandae similique quam
    excepturi!
    Asperiores magni possimus nulla facilis. Recusandae inventore corrupti nulla optio tenetur natus aut, cum dolorum
    deleniti architecto minus velit. Doloribus numquam eum quia similique non tenetur amet minima. Doloribus, eligendi?
    <span ddrTooltip tooltipText="top" tooltipOrientation="top" [tooltipUnderline]="true">Laudantium sapiente</span>
    voluptas, necessitatibus dicta dolore fugit ex unde quisquam dolor quis distinctio quasi, similique illum libero,
    ipsam aliquam provident! Necessitatibus accusantium fuga natus molestiae saepe rerum. Voluptatum, aliquam inventore.
    Neque, voluptates. Expedita dolore ab minima, aliquid dolorum qui alias corporis obcaecati tempore doloremque quas
    ex sed sequi quam, autem illo ullam atque ut illum? Inventore incidunt aperiam dolore doloribus.
    Temporibus nulla quas alias. Atque, obcaecati. Quos ab accusamus quis architecto magni libero explicabo laboriosam
    nisi. Fuga vero error dolorem nostrum, quam in illo at? Laborum at quod pariatur officiis?
</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-3',
  templateUrl: './tooltip-showcase-3.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase3Component {}
`
      },
      {
        htmlCode: `<p>
    <span ddrTooltip
        tooltipText="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        tooltipOrientation="right" 
        [tooltipUnderline]="true">Lorem ipsum dolor</span> sit amet consectetur adipisicing
    elit. Tempore commodi aliquid suscipit, laboriosam odio fuga ut mollitia minima quae esse expedita quidem at ipsam
    consequatur, eius, cupiditate consectetur debitis neque.
    Consequuntur, laborum quaerat non, voluptate itaque alias exercitationem dolore distinctio ratione porro sequi.
    Nulla quis vel inventore, dolor non cum eligendi voluptate suscipit maxime numquam porro ducimus architecto debitis
    animi?
    Aperiam corrupti ea pariatur fugiat recusandae aliquam. Alias perspiciatis unde beatae, modi quidem, porro eligendi
    tempora harum fuga deleniti sequi, velit sit dolor reprehenderit aperiam neque veniam vero eveniet pariatur?
    Placeat perspiciatis ratione, fugit doloremque voluptates vero consequatur reiciendis. Tenetur dolorem repellendus
    facilis sint ea nulla molestias facere, consequatur hic dicta natus minus eligendi rem illo. Veritatis, iste
    laborum. Cum!
    Totam, vitae porro. 
    <span ddrTooltip
        tooltipText="Aspernatur ipsum Aspernatur ipsum Aspernatur ipsum Aspernatur ipsum" tooltipOrientation="bottom"
        [tooltipUnderline]="true">Aspernatur ipsum</span>, voluptates unde dicta sint pariatur veritatis et distinctio
    tempora sunt ut laudantium recusandae ea maxime non repellat beatae enim dolores consequatur vitae quia quidem?
    Adipisci.
    Maxime perferendis, ad rerum suscipit, obcaecati, nam ipsam commodi iusto itaque debitis porro! Iure, veniam
    corrupti, voluptas ullam dignissimos impedit possimus dolor inventore sunt tempore illo recusandae similique quam
    excepturi!
    Asperiores magni possimus nulla facilis. Recusandae inventore corrupti nulla optio tenetur natus aut, cum dolorum
    deleniti architecto minus velit. Doloribus numquam eum quia similique non tenetur amet minima. Doloribus, eligendi?
    <span ddrTooltip
        tooltipText="Laudantium sapiente Laudantium sapiente Laudantium sapiente Laudantium sapiente Laudantium sapiente"
        tooltipOrientation="top" [tooltipUnderline]="true">Laudantium sapiente</span> voluptas, necessitatibus dicta
    dolore fugit ex unde quisquam dolor quis distinctio quasi, similique illum libero, ipsam aliquam provident!
    Necessitatibus accusantium fuga natus molestiae saepe rerum. Voluptatum, aliquam inventore.
    Neque, voluptates. Expedita dolore ab minima, aliquid dolorum qui alias corporis obcaecati tempore doloremque quas
    ex sed sequi quam, 
    <span ddrTooltip 
        tooltipText="autem illo ullam autem illo ullam autem illo ullam" tooltipOrientation="left" 
        [tooltipUnderline]="true">autem illo ullam</span> atque ut illum? Inventore incidunt
    aperiam dolore doloribus.
    Temporibus nulla quas alias. Atque, obcaecati. Quos ab accusamus quis architecto magni libero explicabo laboriosam
    nisi. Fuga vero error dolorem nostrum, quam in illo at? Laborum at quod pariatur officiis?
</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-4',
  templateUrl: './tooltip-showcase-4.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-button-multiple
    [buttons]="buttonsOrientation()"
    [showSelectedButton]="true"
    [(value)]="tooltipOrientation" />

<p class="mt-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Dolor ab expedita vitae, neque libero <span ddrTooltip 
        tooltipText="suscipit voluptates"
        [tooltipUnderline]="true"
        [tooltipOrientation]="tooltipOrientation()">suscipit voluptates</span>. Dolor necessitatibus saepe pariatur similique sunt, ut et
    cumque culpa qui dignissimos atque aliquid!
</p>

  `,
        tsCode: `import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrButton } from 'ddr-ng/models';
import { DdrOrientationTooltip } from 'ddr-ng/types';

@Component({
  selector: 'tooltip-showcase-5',
  templateUrl: './tooltip-showcase-5.component.html',
  imports: [
    DdrButtonMultipleComponent,
    DdrTooltipDirective
  ]
})
export class TooltipShowcase5Component {

  public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up',
      value: 'top',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'right',
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom',
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'left',
    },
  ]);

  public tooltipOrientation: WritableSignal<DdrOrientationTooltip> = signal<DdrOrientationTooltip>('top');

}
`
      },
      {
        htmlCode: `<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi quae vero sint iure dignissimos inventore,
    quasi, <span ddrTooltip
        tooltipText="Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor"
        tooltipWidth="400px" [tooltipUnderline]="true">cum veritatis</span> nulla dolores vel iusto, libero natus
    pariatur ad quo deleniti necessitatibus.</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';

@Component({
  selector: 'tooltip-showcase-6',
  templateUrl: './tooltip-showcase-6.component.html',
  imports: [
    DdrTooltipDirective
  ]
})
export class TooltipShowcase6Component { }
`
      },
      {
        htmlCode: `<ng-template #tooltipTemplate let-value="value">
    <div>
        <p>{{'tooltip.template' | ddrTranslate}}</p>
        <p>{{value}}</p>
    </div>
</ng-template>

<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi quae vero sint iure dignissimos inventore,
    quasi, <span ddrTooltip 
        [tooltipTemplate]="tooltipTemplate" 
        [tooltipTemplateData]="tooltipTemplateData"
        [tooltipUnderline]="true">cum veritatis</span> nulla dolores vel iusto, libero natus pariatur ad quo deleniti
    necessitatibus.</p>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTooltipDirective } from 'ddr-ng/directives/tooltip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'tooltip-showcase-7',
  templateUrl: './tooltip-showcase-7.component.html',
  imports: [
    DdrTooltipDirective,
    DdrTranslatePipe
  ]
})
export class TooltipShowcase7Component {

  public tooltipTemplateData: any = {
    value: 'data template',
  };
  
}
`
      }
    ],
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
          type: 'DdrOrientationTooltip',
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
  }

}
