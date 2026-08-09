import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ButtonSplitShowcase10Component } from './showcases/button-split-showcase-10/button-split-showcase-10.component';
import { ButtonSplitShowcase11Component } from './showcases/button-split-showcase-11/button-split-showcase-11.component';
import { ButtonSplitShowcase12Component } from './showcases/button-split-showcase-12/button-split-showcase-12.component';
import { ButtonSplitShowcase2Component } from './showcases/button-split-showcase-2/button-split-showcase-2.component';
import { ButtonSplitShowcase3Component } from './showcases/button-split-showcase-3/button-split-showcase-3.component';
import { ButtonSplitShowcase4Component } from './showcases/button-split-showcase-4/button-split-showcase-4.component';
import { ButtonSplitShowcase5Component } from './showcases/button-split-showcase-5/button-split-showcase-5.component';
import { ButtonSplitShowcase6Component } from './showcases/button-split-showcase-6/button-split-showcase-6.component';
import { ButtonSplitShowcase7Component } from './showcases/button-split-showcase-7/button-split-showcase-7.component';
import { ButtonSplitShowcase8Component } from './showcases/button-split-showcase-8/button-split-showcase-8.component';
import { ButtonSplitShowcase9Component } from './showcases/button-split-showcase-9/button-split-showcase-9.component';
import { ButtonSplitShowcase1Component } from './showcases/button-split-showcase-1/button-split-showcase-1.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'button-split-showcase',
  templateUrl: './button-split-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    ButtonSplitShowcase1Component,
    ButtonSplitShowcase2Component,
    ButtonSplitShowcase3Component,
    ButtonSplitShowcase4Component,
    ButtonSplitShowcase5Component,
    ButtonSplitShowcase6Component,
    ButtonSplitShowcase7Component,
    ButtonSplitShowcase8Component,
    ButtonSplitShowcase9Component,
    ButtonSplitShowcase10Component,
    ButtonSplitShowcase11Component,
    ButtonSplitShowcase12Component,
  ]
})
export class ButtonSplitShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, signal, Signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-1',
    templateUrl: './button-split-showcase-1.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase1Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [showFirstOnlyIcon]="true"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-2',
    templateUrl: './button-split-showcase-2.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase2Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [transparent]="true"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-3',
    templateUrl: './button-split-showcase-3.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase3Component {
    
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [transparent]="true"
      [border]="false"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-4',
    templateUrl: './button-split-showcase-4.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase4Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [showFirstInOptions]="false"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction, DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-5',
    templateUrl: './button-split-showcase-5.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase5Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `
      },
      {
        htmlCode: `<div class="mt-3">
      <p>{{'small' | ddrTranslate}}</p>
      <ddr-button-split
          [actions]="actions()"
          size="small"
          (selectAction)="selectAction($event)" />
  </div>
  
  <div class="mt-3">
      <p>{{'medium' | ddrTranslate}}</p>
      <ddr-button-split
          [actions]="actions()"
          size="medium"
          (selectAction)="selectAction($event)" />
  </div>
  
  <div class="mt-3">
      <p>{{'large' | ddrTranslate}}</p>
      <ddr-button-split
          [actions]="actions()"
          size="large"
          (selectAction)="selectAction($event)" />
  </div>`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-6',
    templateUrl: './button-split-showcase-6.component.html',
    imports: [
      DdrButtonSplitComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase6Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<div class="mb-3">
      <ddr-button-multiple
          [buttons]="buttons()"
          [(value)]="position"
          [showSelectedButton]="true" />
  </div>
      
  <div >
      <ddr-button-split
          [actions]="actions()"
          [position]="position()"
          (selectAction)="selectAction($event)" />
  </div>`,
        tsCode: `import { Component, inject, Signal, signal, WritableSignal } from '@angular/core';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction, DdrButton } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  import { DdrOrientationButtonSplit } from 'ddr-ng/types';
  
  @Component({
    selector: 'button-split-showcase-7',
    templateUrl: './button-split-showcase-7.component.html',
    imports: [
      DdrButtonSplitComponent,
      DdrButtonMultipleComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase7Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    public buttons: Signal<DdrButton[]> = signal([
      {
        text: 'bottom-right',
        value: 'bottom-right',
      },
      {
        text: 'bottom-left',
        value: 'bottom-left',
      },
      {
        text: 'top-right',
        value: 'top-right',
      },
      {
        text: 'top-left',
        value: 'top-left',
      },
    ]);
  
    public position: WritableSignal<DdrOrientationButtonSplit> = signal('bottom-right');
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction'],
          CLASSES['DdrButton']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [disabled]="true"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-8',
    templateUrl: './button-split-showcase-8.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase8Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService =
      inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      iconShowOptions="bi bi-arrow-down-short"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, signal, Signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-9',
    templateUrl: './button-split-showcase-9.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase9Component { 
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
    
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [showFirst]="false"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-10',
    templateUrl: './button-split-showcase-10.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase10Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      [showOnlyIcon]="true"
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-11',
    templateUrl: './button-split-showcase-11.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase11Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    selectAction(action: DdrAction<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(action),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      },
      {
        htmlCode: `<ddr-button-split
      [actions]="actions()"
      (openActions)="openActions($event)" />`,
        tsCode: `import { Component, inject, signal, Signal } from '@angular/core';
  import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
  import { DdrAction } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslateService } from 'ddr-ng/translate';
  
  @Component({
    selector: 'button-split-showcase-12',
    templateUrl: './button-split-showcase-12.component.html',
    imports: [
      DdrButtonSplitComponent
    ],
    providers: [
      DdrToastService
    ]
  })
  export class ButtonSplitShowcase12Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public actions: Signal<DdrAction<string>[]> = signal([
      {
        label: 'button.split.save',
        value: 'SAVE',
        item: 'save',
        icon: 'bi bi-floppy',
      },
      {
        label: 'button.split.update',
        value: 'UPDATE',
        item: 'update',
        icon: 'bi bi-pencil',
      },
      {
        label: 'button.split.delete',
        value: 'DELETE',
        item: 'delete',
        icon: 'bi bi-trash',
      },
    ]);
  
    openActions(open: boolean) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate(
          open ? 'button.split.open' : 'button.split.close',
        ),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrAction']
        ],
      }
    ],
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
  }

}
