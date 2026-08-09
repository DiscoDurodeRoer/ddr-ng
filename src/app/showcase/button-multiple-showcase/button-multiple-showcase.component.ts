import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ButtonMultipleShowcase1Component } from './showcases/button-multiple-showcase-1/button-multiple-showcase-1.component';
import { ButtonMultipleShowcase2Component } from './showcases/button-multiple-showcase-2/button-multiple-showcase-2.component';
import { ButtonMultipleShowcase3Component } from './showcases/button-multiple-showcase-3/button-multiple-showcase-3.component';
import { ButtonMultipleShowcase4Component } from './showcases/button-multiple-showcase-4/button-multiple-showcase-4.component';
import { ButtonMultipleShowcase5Component } from './showcases/button-multiple-showcase-5/button-multiple-showcase-5.component';
import { ButtonMultipleShowcase6Component } from './showcases/button-multiple-showcase-6/button-multiple-showcase-6.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'button-multiple-showcase',
  templateUrl: './button-multiple-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ButtonMultipleShowcase1Component,
    ButtonMultipleShowcase2Component,
    ButtonMultipleShowcase3Component,
    ButtonMultipleShowcase4Component,
    ButtonMultipleShowcase5Component,
    ButtonMultipleShowcase6Component,
    DdrTranslatePipe,
  ]
})
export class ButtonMultipleShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button-multiple
      [buttons]="buttons"
      (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-1',
    templateUrl: './button-multiple-showcase-1.component.html',
    imports: [
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase1Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public buttons: DdrButton[] = [
      {
        text: 'button.multiple.1',
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
      {
        text: 'button.multiple.2',
        icon: 'bi bi-x',
        value: 'BUTTON_2',
      },
      {
        text: 'button.multiple.3',
        icon: 'bi bi-trash',
        value: 'BUTTON_3',
      },
    ];
  
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ],
      },
      {
        htmlCode: `<ddr-button-multiple
      [buttons]="buttons"
      (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-2',
    templateUrl: './button-multiple-showcase-2.component.html',
    imports: [
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase2Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public buttons: DdrButton[] = [
      {
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
      {
        icon: 'bi bi-x',
        value: 'BUTTON_2',
      },
      {
        icon: 'bi bi-trash',
        value: 'BUTTON_3',
      },
    ];
  
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ]
      },
      {
        htmlCode: `<ddr-button-multiple
      [buttons]="buttons"
      (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-3',
    templateUrl: './button-multiple-showcase-3.component.html',
    imports: [
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase3Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public buttons: DdrButton[] = [
      {
        text: 'button.multiple.1',
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
    ];
  
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ]
      },
      {
        htmlCode: `<ddr-button-multiple
      [buttons]="buttons"
      [showSelectedButton]="true"
      [(value)]="valueButton"
      (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-4',
    templateUrl: './button-multiple-showcase-4.component.html',
    imports: [
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase4Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService)
  
    public buttons: DdrButton[] = [
      {
        text: 'button.multiple.1',
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
      {
        text: 'button.multiple.2',
        icon: 'bi bi-x',
        value: 'BUTTON_2',
      },
      {
        text: 'button.multiple.3',
        icon: 'bi bi-trash',
        value: 'BUTTON_3',
      },
    ]
  
    public valueButton: WritableSignal<string> = signal('BUTTON_3');
    
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ]
      },
      {
        htmlCode: `<div class="mt-3">
      <p>{{'small' | ddrTranslate}}</p>
      <ddr-button-multiple
          [buttons]="buttons"
          size="small"
          (action)="clickButton($event)" />
  </div>
  
  <div class="mt-3">
      <p>{{'medium' | ddrTranslate}}</p>
      <ddr-button-multiple
          [buttons]="buttons"
          size="medium"
          (action)="clickButton($event)" />
  </div>
  
  <div class="mt-3">
      <p>{{'large' | ddrTranslate}}</p>
      <ddr-button-multiple
          [buttons]="buttons"
          size="large"
          (action)="clickButton($event)" />
  </div>`,
        tsCode: `import { Component, inject } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-5',
    templateUrl: './button-multiple-showcase-5.component.html',
    imports: [
      DdrButtonMultipleComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase5Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public buttons: DdrButton[] = [
      {
        text: 'button.multiple.1',
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
      {
        text: 'button.multiple.2',
        icon: 'bi bi-x',
        value: 'BUTTON_2',
      },
      {
        text: 'button.multiple.3',
        icon: 'bi bi-trash',
        value: 'BUTTON_3',
      },
    ];
  
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ]
      },
      {
        htmlCode: `<ddr-button-multiple
      [buttons]="buttons"
      [transparent]="true"
      (action)="clickButton($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-multiple-showcase-6',
    templateUrl: './button-multiple-showcase-6.component.html',
    imports: [
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonMultipleShowcase6Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public buttons: DdrButton[] = [
      {
        text: 'button.multiple.1',
        icon: 'bi bi-check',
        value: 'BUTTON_1',
      },
      {
        text: 'button.multiple.2',
        icon: 'bi bi-x',
        value: 'BUTTON_2',
      },
      {
        text: 'button.multiple.3',
        icon: 'bi bi-trash',
        value: 'BUTTON_3',
      },
    ];
  
    clickButton(button: DdrButton) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(button),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrButton']
        ]
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'button.multiple.input.value',
          required: false,
          default: '""',
          type: 'string'
        }
      }
    ],
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
      }
    ]
  }

}
