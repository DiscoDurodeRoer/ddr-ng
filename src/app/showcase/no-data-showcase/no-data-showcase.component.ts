import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { NoDataShowcase1Component } from './showcases/no-data-showcase-1/no-data-showcase-1.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'no-data-showcase',
  templateUrl: './no-data-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    NoDataShowcase1Component
  ],
})
export class NoDataShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div class="mb-2">
    <p>{{'no.data.size' | ddrTranslate}}: </p>
    <ddr-button-multiple
        [buttons]="buttonsSize()"
        [showSelectedButton]="true"
        [(value)]="size" />
</div>

<div class="mb-2">
    <ddr-no-data 
        icon="bi bi-database-fill-x"
        [text]="'no.data.text' | ddrTranslate"
        [size]="size()" />
</div>`,
        tsCode: `import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrNoDataComponent } from 'ddr-ng/components/no-data';
import { DdrButton } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'no-data-showcase-1',
  templateUrl: './no-data-showcase-1.component.html',
  imports: [
    DdrNoDataComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class NoDataShowcase1Component {
  public size: WritableSignal<DdrSize> = signal<DdrSize>('large');
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
}
`
      }
    ],
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
  }

}
