import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ToastShowcase1Component } from './showcases/toast-showcase-1/toast-showcase-1.component';
import { ToastShowcase2Component } from './showcases/toast-showcase-2/toast-showcase-2.component';
import { ToastShowcase3Component } from './showcases/toast-showcase-3/toast-showcase-3.component';
import { ToastShowcase4Component } from './showcases/toast-showcase-4/toast-showcase-4.component';
import { ToastShowcase5Component } from './showcases/toast-showcase-5/toast-showcase-5.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'toast-showcase',
  templateUrl: './toast-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ToastShowcase1Component,
    ToastShowcase2Component,
    ToastShowcase3Component,
    ToastShowcase4Component,
    ToastShowcase5Component,
    DdrTranslatePipe
  ]
})
export class ToastShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button
    [text]="'toast.show.toast' | ddrTranslate"
    (action)="showToast()" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-1',
  templateUrl: './toast-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }
}
`
      },
      {
        htmlCode: `
<ddr-button-multiple
    [buttons]="buttons()"
    [showSelectedButton]="true"
    [(value)]="buttonSelected" />

<div class="mt-2">
    <ddr-button
        [text]="'toast.show.toast' | ddrTranslate"
        (action)="showToast()" />
</div>
`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-2',
  templateUrl: './toast-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase2Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttons: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'toast.info',
      value: 'info',
    },
    {
      text: 'toast.danger',
      value: 'danger',
    },
    {
      text: 'toast.warning',
      value: 'warning',
    },
    {
      text: 'toast.success',
      value: 'success',
    },
  ]);

  public buttonSelected: WritableSignal<string> = signal<string>('info');

  showToast() {

    switch (this.buttonSelected()) {
      case 'info':
        this.ddrToastService.addInfoMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'danger':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'warning':
        this.ddrToastService.addWarningMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
      case 'success':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('toast.title'),
          this.ddrTranslateService.getTranslate('toast.content'),
        );
        break;
    }
  }

}
`
      },
      {
        htmlCode: `<div>
    <p>{{'toast.orientation' | ddrTranslate}}</p>
    <ddr-button-multiple
        [buttons]="buttonsOrientation()"
        [showSelectedButton]="true"
        [(value)]="toastOrientation" />
</div>
    
<div class="mt-2">
    <ddr-button
        [text]="'toast.show.toast' | ddrTranslate"
        (action)="showToast()" />
</div>
`,
        tsCode: `import {
  Component,
  effect,
  inject,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrOrientationToast } from 'ddr-ng/types';

@Component({
  selector: 'toast-showcase-3',
  templateUrl: './toast-showcase-3.component.html',
  imports: [
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase3Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  constructor() {
    effect(() => this.ddrToastService.orientation = this.toastOrientation())
  }

  public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up-right',
      value: 'top-right',
    },
    {
      icon: 'bi bi-arrow-up-left',
      value: 'top-left',
    },
    {
      icon: 'bi bi-arrow-down-right',
      value: 'bottom-right',
    },
    {
      icon: 'bi bi-arrow-down-left',
      value: 'bottom-left',
    },
  ]);

  public toastOrientation: WritableSignal<DdrOrientationToast> = signal('top-right');

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'toast.timeout' | ddrTranslate"
    [min]="1"
    name="input-4"
    [(value)]="toastTimeout" />

<ddr-button
    [text]="'toast.show.toast' | ddrTranslate"
    (action)="showToast()" />`,
        tsCode: `import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-4',
  templateUrl: './toast-showcase-4.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase4Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public toastTimeout: WritableSignal<number> = signal<number>(this.ddrToastService.timeOut);

  constructor() {
    effect(() => this.ddrToastService.timeOut = this.toastTimeout())
  }

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'toast.maxtoasts' | ddrTranslate"
    [min]="1"
    name="input-5"
    [(value)]="maxToasts" />

<ddr-button
    [text]="'toast.show.toast' | ddrTranslate"
    (action)="showToast()" />`,
        tsCode: `import {
  Component,
  effect,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-5',
  templateUrl: './toast-showcase-5.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase5Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public maxToasts: WritableSignal<number> = signal<number>(this.ddrToastService.maxToasts);

  constructor() {
    effect(() => this.ddrToastService.maxToasts = this.maxToasts())
  }

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }

}
`
      }
    ],
    service: {
      name: 'DdrToastService',
      methods: [
        {
          item: {
            name: 'addInfoMessage',
            description: 'toast.method.addinfomessage'
          }
        },
        {
          item: {
            name: 'addWarningMessage',
            description: 'toast.method.addwarningmessage'
          }
        },
        {
          item: {
            name: 'addErrorMessage',
            description: 'toast.method.adderrormessage'
          }
        },
        {
          item: {
            name: 'addsuccessmessage',
            description: 'toast.method.addsuccessmessage'
          }
        },
      ]
    },
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
  }

}
