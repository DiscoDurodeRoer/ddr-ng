import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DetailShowcase1Component } from './showcases/detail-showcase-1/detail-showcase-1.component';
import { DetailShowcase2Component } from './showcases/detail-showcase-2/detail-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'detail-showcase',
  templateUrl: './detail-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    DetailShowcase1Component,
    DetailShowcase2Component
  ]
})
export class ShowcaseDdrDetailComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div class="mb-2">
  <p>{{'detail.orientation' | ddrTranslate}}: </p>
  <ddr-button-multiple
    [buttons]="buttonsOrientation()"
    [showSelectedButton]="true"
    [(value)]="orientation" />
</div>

<div class="mb-2">
  <ddr-button 
    [text]="'detail.open' | ddrTranslate" 
    size="medium"
    (action)="openDetail()"/>
</div>

<ddr-detail 
  [id]="ID_DETAIL()" 
  [orientation]="orientation()" 
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
  DdrDetailComponent,
  DdrDetailService
} from 'ddr-ng/components/detail';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrOrientationDetail } from 'ddr-ng/types';

@Component({
  selector: 'detail-showcase-1',
  templateUrl: './detail-showcase-1.component.html',
  imports: [
    DdrDetailComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService,
    DdrDetailService
  ]
})
export class DetailShowcase1Component {

  public readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public orientation: WritableSignal<DdrOrientationDetail> = signal<DdrOrientationDetail>('right');
  public buttonsOrientation: WritableSignal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up',
      value: 'top',
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'right',
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'left',
    },
  ]);

  public readonly ID_DETAIL: Signal<string> = signal<string>('example-detail');

  openDetail() {
    this.ddrDetailService.open(this.ID_DETAIL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.opening'),
    );
  }

  closeDetail() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.closing'),
    );
  }
}
`
      },
      {
        htmlCode: `<div class="mb-2">
  <p>{{'detail.position' | ddrTranslate}}: </p>
  <ddr-button-multiple
    [buttons]="buttonsPosition()"
    [showSelectedButton]="true"
    [(value)]="position" />
</div>

<div class="mb-2">
  <ddr-button 
    [text]="'detail.open' | ddrTranslate" 
    size="medium"
    (action)="openDetail()"/>
</div>

<ddr-detail 
  [id]="ID_DETAIL()" 
  [position]="position()"
  [orientation]="position()"
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
  DdrDetailComponent,
  DdrDetailService
} from 'ddr-ng/components/detail';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrPositionDetail } from 'ddr-ng/types';

@Component({
  selector: 'detail-showcase-2',
  templateUrl: './detail-showcase-2.component.html',
  imports: [
    DdrDetailComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService,
    DdrDetailService
  ]
})
export class DetailShowcase2Component {

  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public position: WritableSignal<DdrPositionDetail> = signal<DdrPositionDetail>('right');
  public buttonsPosition: WritableSignal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-left',
      value: 'left',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'right',
    },
  ]);

  public readonly ID_DETAIL: Signal<string> = signal<string>('example-detail');

  openDetail() {
    this.ddrDetailService.open(this.ID_DETAIL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.opening'),
    );
  }

  closeDetail() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.closing'),
    );
  }
}
`
      }
    ],
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
          type: 'DdrOrientationDetail',
          required: false,
          default: "'right'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'position',
          description: 'detail.input.position',
          type: 'DdrPositionDetail',
          required: false,
          default: "'right'",
          values: "'left' | 'right'"
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
          class: 'ddr-detail--left',
          description: 'detail.styles.detail.left'
        }
      },
      {
        item: {
          class: 'ddr-detail--right',
          description: 'detail.styles.detail.right'
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
  }

}
