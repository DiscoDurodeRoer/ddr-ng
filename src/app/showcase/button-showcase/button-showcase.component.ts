import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ButtonShowcase1Component } from './showcases/button-showcase-1/button-showcase-1.component';
import { ButtonShowcase10Component } from './showcases/button-showcase-10/button-showcase-10.component';
import { ButtonShowcase11Component } from './showcases/button-showcase-11/button-showcase-11.component';
import { ButtonShowcase12Component } from './showcases/button-showcase-12/button-showcase-12.component';
import { ButtonShowcase2Component } from './showcases/button-showcase-2/button-showcase-2.component';
import { ButtonShowcase3Component } from './showcases/button-showcase-3/button-showcase-3.component';
import { ButtonShowcase4Component } from './showcases/button-showcase-4/button-showcase-4.component';
import { ButtonShowcase5Component } from './showcases/button-showcase-5/button-showcase-5.component';
import { ButtonShowcase6Component } from './showcases/button-showcase-6/button-showcase-6.component';
import { ButtonShowcase7Component } from './showcases/button-showcase-7/button-showcase-7.component';
import { ButtonShowcase8Component } from './showcases/button-showcase-8/button-showcase-8.component';
import { ButtonShowcase9Component } from './showcases/button-showcase-9/button-showcase-9.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'button-showcase',
  templateUrl: './button-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ButtonShowcase1Component,
    ButtonShowcase2Component,
    ButtonShowcase3Component,
    ButtonShowcase4Component,
    ButtonShowcase5Component,
    ButtonShowcase6Component,
    ButtonShowcase7Component,
    ButtonShowcase8Component,
    ButtonShowcase9Component,
    ButtonShowcase10Component,
    ButtonShowcase11Component,
    ButtonShowcase12Component,
    DdrTranslatePipe
  ]
})
export class ButtonShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button
    [text]="'button.text' | ddrTranslate"
    [border]="false"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-1',
  templateUrl: './button-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase1Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    icon="bi bi-person"
    [text]="'button.text' | ddrTranslate"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-2',
  templateUrl: './button-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase2Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    class="me-1"
    mode="save"
    [text]="'button.text' | ddrTranslate"
    (action)="clickButton($event)" />
    
<ddr-button
    mode="danger"
    [text]="'button.text' | ddrTranslate"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-3',
  templateUrl: './button-showcase-3.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase3Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    [text]="'button.text' | ddrTranslate"
    [disabled]="true"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-4',
  templateUrl: './button-showcase-4.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase4Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    [floatButton]="true"
    position="bottom-right"
    icon="bi bi-person"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-5',
  templateUrl: './button-showcase-5.component.html',
  imports: [
    DdrButtonComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase5Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }

}
`
      },
      {
        htmlCode: `<form (submit)="submitForm($event)">
    <ddr-button
        type="submit"
        [text]="'button.text' | ddrTranslate" />
</form>`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-6',
  templateUrl: './button-showcase-6.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase6Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  submitForm(event: Event) {
    event.preventDefault();
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.form.submit'),
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-button
     [block]="true"
     [text]="'button.text' | ddrTranslate"
     (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-7',
  templateUrl: './button-showcase-7.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase7Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<div class="mt-3">
    <p>{{'small' | ddrTranslate}}</p>
    <ddr-button
        class="me-1"
        size="small"
        [text]="'button.text' | ddrTranslate"
        (action)="clickButton($event)" />
</div>

<div class="mt-3">
    <p>{{'medium' | ddrTranslate}}</p>
    <ddr-button
        class="me-1"
        size="medium"
        [text]="'button.text' | ddrTranslate"
        (action)="clickButton($event)" />
</div>

<div class="mt-3">
    <p>{{'large' | ddrTranslate}}</p>
    <ddr-button
        class="me-1"
        size="large"
        [text]="'button.text' | ddrTranslate"
        (action)="clickButton($event)" />
</div>
`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-8',
  templateUrl: './button-showcase-8.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase8Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    [text]="'button.text' | ddrTranslate"
    [tooltipText]="'button.tooltip' | ddrTranslate"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-9',
  templateUrl: './button-showcase-9.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase9Component {
  
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    [transparent]="true"
    [text]="'button.text' | ddrTranslate"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-10',
  templateUrl: './button-showcase-10.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase10Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    icon="bi bi-person"
    [text]="'button.text' | ddrTranslate"
    iconPosition="right"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-11',
  templateUrl: './button-showcase-11.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase11Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-button
    img="img/button/star.png"
    [text]="'button.text' | ddrTranslate"
    (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-12',
  templateUrl: './button-showcase-12.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase12Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
`
      },
    ],
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
          type: 'DdrOrientationTooltip',
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
  }

}
