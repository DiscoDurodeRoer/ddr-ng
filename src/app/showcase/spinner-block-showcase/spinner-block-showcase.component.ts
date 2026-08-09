import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { SpinnerBlockShowcase1Component } from './showcases/spinner-block-showcase-1/spinner-block-showcase-1.component';
import { SpinnerBlockShowcase2Component } from './showcases/spinner-block-showcase-2/spinner-block-showcase-2.component';
import { SpinnerBlockShowcase3Component } from './showcases/spinner-block-showcase-3/spinner-block-showcase-3.component';
import { SpinnerBlockShowcase4Component } from './showcases/spinner-block-showcase-4/spinner-block-showcase-4.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'spinner-block',
  templateUrl: './spinner-block-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    SpinnerBlockShowcase1Component,
    SpinnerBlockShowcase2Component,
    SpinnerBlockShowcase3Component,
    SpinnerBlockShowcase4Component,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: ` <ddr-button 
    [text]="'spinner.block.data.load' | ddrTranslate" 
    (action)="onLoadData()" />

<ddr-card [showHeader]="false">
    <div card-content 
        ddrSpinnerBlock 
        [spinnerShow]="!loadData()">
        @if(loadData()){
            <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
        }
    </div>
</ddr-card>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSpinnerBlockDirective } from 'ddr-ng/spinner';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'spinner-block-showcase-1',
  templateUrl: './spinner-block-showcase-1.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase1Component {

  public loadData: WritableSignal<boolean> = signal<boolean>(true);

  onLoadData() {
    this.loadData.set(false);
    setTimeout(() => {
      this.loadData.set(true);
    }, 5000);
  }
}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'spinner.block.data.load' | ddrTranslate" 
    (action)="onLoadData()" />

<ddr-card [showHeader]="false">
    <div card-content 
        ddrSpinnerBlock 
        [spinnerShow]="!loadData()" 
        spinnerPathImg="/img/spinner/spinner.gif">
    @if(loadData()){
        <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
    }
    </div>
</ddr-card>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSpinnerBlockDirective } from 'ddr-ng/spinner';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'spinner-block-showcase-2',
  templateUrl: './spinner-block-showcase-2.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase2Component {

  public loadData: WritableSignal<boolean> = signal<boolean>(true);

  onLoadData() {
    this.loadData.set(false);
    setTimeout(() => {
      this.loadData.set(true);
    }, 5000);
  }

}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'spinner.block.data.load' | ddrTranslate" 
    (action)="onLoadDataBlock1()" />
<ddr-button 
    [text]="'spinner.block.data.load' | ddrTranslate" 
    (action)="onLoadDataBlock2()" />

<ddr-card [showHeader]="false">
    <div card-content 
        ddrSpinnerBlock 
        [spinnerShow]="!loadDataBlock1()">
            @if(loadDataBlock1()){
                <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
            }
    </div>
</ddr-card>

<ddr-card [showHeader]="false">
    <div card-content 
        ddrSpinnerBlock 
        [spinnerShow]="!loadDataBlock2()">
            @if(loadDataBlock2()){
                <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
            }
    </div>
</ddr-card>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSpinnerBlockDirective } from 'ddr-ng/spinner';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'spinner-block-showcase-3',
  templateUrl: './spinner-block-showcase-3.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase3Component {

  public loadDataBlock1: WritableSignal<boolean> = signal<boolean>(true);
  public loadDataBlock2: WritableSignal<boolean> = signal<boolean>(true);

  onLoadDataBlock1() {
    this.loadDataBlock1.set(false);
    setTimeout(() => {
      this.loadDataBlock1.set(true);
    }, 5000);
  }

  onLoadDataBlock2() {
    this.loadDataBlock2.set(false);
    setTimeout(() => {
      this.loadDataBlock2.set(true);
    }, 5000);
  }
}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'spinner.block.data.load' | ddrTranslate" 
    (action)="onLoadData()" />

<ddr-card [showHeader]="false">
    <div card-content 
        ddrSpinnerBlock 
        [spinnerShow]="!loadData()" 
        style="height: 500px;">
            @if(loadData()){
                <span>{{'spinner.block.data.loaded' | ddrTranslate}}</span>
            }
    </div>
</ddr-card>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrSpinnerBlockDirective } from 'ddr-ng/spinner';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'spinner-block-showcase-4',
  templateUrl: './spinner-block-showcase-4.component.html',
  imports: [
    DdrSpinnerBlockDirective,
    DdrCardComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class SpinnerBlockShowcase4Component {

  public loadData: WritableSignal<boolean> = signal<boolean>(true);

  onLoadData() {
    this.loadData.set(false);
    setTimeout(() => {
      this.loadData.set(true);
    }, 5000);
  }

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'spinnerShow',
          description: 'spinner.block.spinnershow',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'spinnerPathImg',
          description: 'spinner.block.spinnerpathimg',
          type: 'string',
          default: "''",
          required: false
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-spinner',
          description: 'spinner.style'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay-embedded',
          description: 'spinner.style.overlay.embedded'
        }
      },
      {
        item: {
          class: 'ddr-spinner--overlay-embedded__spinner-embedded',
          description: 'spinner.style.overlay.spinner.embedded'
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