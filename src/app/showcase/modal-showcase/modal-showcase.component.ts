import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ModalShowcase1Component } from './showcases/modal-showcase-1/modal-showcase-1.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ModalShowcase2Component } from './showcases/modal-showcase-2/modal-showcase-2.component';
import { ModalShowcase3Component } from './showcases/modal-showcase-3/modal-showcase-3.component';
import { ModalShowcase4Component } from './showcases/modal-showcase-4/modal-showcase-4.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'modal-showcase',
  templateUrl: './modal-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    ModalShowcase1Component,
    ModalShowcase2Component,
    ModalShowcase3Component,
    ModalShowcase4Component
  ]
})
export class ModalShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div class="row mt-3">
    <div class="col-12">
        <p>{{'modal.size' | ddrTranslate}}:</p>
        <ddr-button-multiple 
            [buttons]="buttonsSize()" 
            [showSelectedButton]="true" 
            [(value)]="size" />
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
    [id]="ID_MODAL()" 
    [labelConfirm]="'modal.confirm' | ddrTranslate"
    [labelClose]="'modal.close' | ddrTranslate" 
    [size]="size()" 
    (close)="closeModal()" 
    (accept)="closeModal()">
    <span class="h1" modal-title>Lorem</span>

    <span modal-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        reiciendis, recusandae enim, accusamus illo dicta obcaecati, nam ab
        voluptatum asperiores tenetur error. Similique doloribus at possimus
        fuga excepturi veritatis distinctio!
    </span>
</ddr-modal>`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrModalComponent,
  DdrModalService
} from 'ddr-ng/modal';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'modal-showcase-1',
  templateUrl: './modal-showcase-1.component.html',
  imports: [
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ],
})
export class ModalShowcase1Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public size: WritableSignal<DdrSize> = signal<DdrSize>('medium');
  public buttonsSize: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'small',
      value: 'small',
    },
    {
      text: 'medium',
      value: 'medium',
    },
    {
      text: 'large',
      value: 'large',
    },
  ]);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }
}
`
      },
      {
        htmlCode: `<div class="row mt-3">
    <div class="col-12">
        <p>{{'modal.size.button' | ddrTranslate}}:</p>
        <ddr-button-multiple 
            [buttons]="buttonsSizeButton()" 
            [showSelectedButton]="true" 
            [(value)]="sizeButton" />
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
    [id]="ID_MODAL()"
    type="info"
    [labelConfirm]="'modal.confirm' | ddrTranslate"
    [labelClose]="'modal.close' | ddrTranslate" 
    [sizeButton]="sizeButton()"
    (close)="closeModal()" 
    (accept)="closeModal()">
    <span class="h1" modal-title>Lorem</span>

    <span modal-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        reiciendis, recusandae enim, accusamus illo dicta obcaecati, nam ab
        voluptatum asperiores tenetur error. Similique doloribus at possimus
        fuga excepturi veritatis distinctio!
    </span>
</ddr-modal>`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrModalComponent,
  DdrModalService
} from 'ddr-ng/modal';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'modal-showcase-2',
  templateUrl: './modal-showcase-2.component.html',
  imports: [
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ],
})
export class ModalShowcase2Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public sizeButton: WritableSignal<DdrSize> = signal<DdrSize>('small');
  public buttonsSizeButton: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'small',
      value: 'small',
    },
    {
      text: 'medium',
      value: 'medium',
    },
    {
      text: 'large',
      value: 'large',
    },
  ]);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
`
      },
      {
        htmlCode: `<div class="row mt-3">
    <div class="col-12">
        <p>{{'modal.type' | ddrTranslate}}:</p>
        <ddr-button-multiple 
            [buttons]="buttonsType()" 
            [showSelectedButton]="true" 
            [(value)]="type" />
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
    [id]="ID_MODAL()" 
    [type]="type()" 
    [labelConfirm]="'modal.confirm' | ddrTranslate"
    [labelClose]="'modal.close' | ddrTranslate" 
    (close)="closeModal()" 
    (accept)="closeModal()">
    <span class="h1" modal-title>Lorem</span>

    <span modal-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        reiciendis, recusandae enim, accusamus illo dicta obcaecati, nam ab
        voluptatum asperiores tenetur error. Similique doloribus at possimus
        fuga excepturi veritatis distinctio!
    </span>
</ddr-modal>`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrModalType } from 'ddr-ng/types';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrModalComponent,
  DdrModalService
} from 'ddr-ng/modal';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'modal-showcase-3',
  templateUrl: './modal-showcase-3.component.html',
  imports: [
    DdrModalComponent,
    DdrButtonMultipleComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcase3Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public type: WritableSignal<DdrModalType> = signal<DdrModalType>('info');
  public buttonsType: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'info',
      value: 'info',
    },
    {
      text: 'confirm',
      value: 'confirm',
    },
    {
      text: 'no-buttons',
      value: 'no-buttons',
    },
  ]);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
`
      },
      {
        htmlCode: `<div class="row mt-3">
    <div class="col-12">
        <p>clickOutside:</p>
        <ddr-toggle size="small" [(value)]="clickOutsideEnabled" />
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
    [id]="ID_MODAL()"
    type="info"
    [labelConfirm]="'modal.confirm' | ddrTranslate"
    [labelClose]="'modal.close' | ddrTranslate" 
    [clickOutsideEnabled]="clickOutsideEnabled()" 
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
        tsCode: `import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrModalComponent, DdrModalService } from 'ddr-ng/modal';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'modal-showcase-4',
  templateUrl: './modal-showcase-4.component.html',
  imports: [
    DdrModalComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    DdrToggleComponent
  ],
  providers: [
    DdrModalService,
    DdrToastService
  ]
})
export class ModalShowcase4Component {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public clickOutsideEnabled: WritableSignal<boolean> = signal<boolean>(true);

  public readonly ID_MODAL: Signal<string> = signal<string>('modal-example')

  closeModal() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.closed'),
    );
  }

  openModal() {
    this.ddrModalService.open(this.ID_MODAL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.open'),
    );
  }

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('modal.clickoutside'),
    );
  }
}
`
      },
    ],
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
  }

}
