import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { SpinnerShowcase1Component } from './showcases/spinner-showcase-1/spinner-showcase-1.component';
import { SpinnerShowcase2Component } from './showcases/spinner-showcase-2/spinner-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'spinner-showcase',
  templateUrl: './spinner-showcase.component.html',
  styleUrl: './spinner-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    SpinnerShowcase1Component,
    SpinnerShowcase2Component,
    DdrTranslatePipe
  ]
})
export class SpinnerShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button 
    [text]="'spinner.show' | ddrTranslate"
    (action)="showSpinner()" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSpinnerService } from 'ddr-ng/spinner'
import { DdrTranslatePipe } from 'ddr-ng/translate'

@Component({
  selector: 'spinner-showcase-1',
  templateUrl: './spinner-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcase1Component {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService);

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }
}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'spinner.show' | ddrTranslate"
    (action)="showSpinner()"  />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSpinnerService } from 'ddr-ng/spinner'
import { DdrTranslatePipe } from 'ddr-ng/translate'

@Component({
  selector: 'spinner-showcase-2',
  templateUrl: './spinner-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrSpinnerService
  ]
})
export class SpinnerShowcase2Component {

  private readonly ddrSpinnerService: DdrSpinnerService = inject(DdrSpinnerService);

  constructor() {
    this.ddrSpinnerService.changeSpinnerPath('/img/spinner/spinner.gif');
  }

  showSpinner() {
    this.ddrSpinnerService.showSpinner();

    setTimeout(() => {
      this.ddrSpinnerService.hideSpinner();
    }, 5000);
  }
}
`
      },
    ],
    service: {
      name: 'DdrSpinnerService',
      methods: [
        {
          item: {
            name: 'showSpinner',
            description: 'spinner.method.showspinner'
          }
        },
        {
          item: {
            name: 'hideSpinner',
            description: 'spinner.method.hidespinner'
          }
        },
        {
          item: {
            name: 'changeSpinnerPath',
            description: 'spinner.method.changespinnerpath'
          }
        }
      ]
    },
    styles: [
      {
        item: {
          class: 'ddr-spinner',
          description: 'spinner.style'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay',
          description: 'spinner.style.overlay'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay__spinner',
          description: 'spinner.style.overlay.spinner'
        }
      },
      {
        item: {
          class: 'ddr-spinner__spinner-default',
          description: 'spinner.style.spinner.default'
        }
      }
    ]
  }

}
