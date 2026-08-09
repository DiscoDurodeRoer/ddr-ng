import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { SkeletonShowcase1Component } from './showcases/skeleton-showcase-1/skeleton-showcase-1.component';
import { SkeletonShowcase2Component } from './showcases/skeleton-showcase-2/skeleton-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'skeleton-showcase',
  templateUrl: './skeleton-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    SkeletonShowcase1Component,
    SkeletonShowcase2Component,
    DdrTranslatePipe,
  ],
})
export class SkeletonShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-radio 
    [options]="options()" 
    [inline]="true" 
    [(value)]="mode" />

<div class="mt-3 mb-3">
    <ddr-button 
        [text]="'skeleton.load.data' | ddrTranslate" 
        (action)="loadData()" />
</div>

<ddr-card [showHeader]="false">

    <div card-content>
        @if (!load()) {
            <div>
                @switch(mode()) {
                    @case('circle') {
                        <div class="mb-2" ddrSkeleton skeletonWidth="50px"  skeletonBorderRadius="50%" skeletonHeight="3rem">
                        </div>
                    }
                    @case('rectangle') {
                        <div class="mb-2" ddrSkeleton skeletonHeight="3rem">
                        </div>
                    }
                    @case('square') {
                        <div class="mb-2" ddrSkeleton skeletonWidth="50px"  skeletonHeight="3rem">
                        </div>
                    }
                    @case('card') {
                        <div>
                            <div class="row mb-3">
                                <div class="col-2 text-center">
                                    <div ddrSkeleton skeletonWidth="80px" skeletonBorderRadius="50%" skeletonHeight="5rem"></div>
                                </div>
                                <div class="col-10">
                                    <div>
                                        <div class="mb-3" ddrSkeleton skeletonHeight="1rem"></div>
                                    </div>
                                    <div>
                                        <div class="mb-3" ddrSkeleton skeletonHeight="1rem"></div>
                                    </div>
                                    <div>
                                        <div ddrSkeleton skeletonHeight="1rem"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-12">
                                    <div class="mb-3" ddrSkeleton skeletonHeight="2rem"></div>
                                </div>
                            </div>
                        </div>
                    }
                    @case('list') {
                        <div>
                            <div class="mb-3 d-flex flex-nowrap">
                                <div class="flex-grow-0 ">
                                    <div ddrSkeleton skeletonWidth="50px" skeletonBorderRadius="50%" skeletonHeight="3rem"></div>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="mb-3" ddrSkeleton  skeletonWidth="100%" skeletonHeight="1rem"></div>
                                    <div ddrSkeleton skeletonWidth="100%"  skeletonHeight="1rem"></div>
                                </div>
                            </div>
                        </div>
                    }
                    @case('graphic') {
                        <div class="d-flex flex-nowrap align-items-end">
                            <div class="ms-1 flex-grow-1" ddrSkeleton  skeletonWidth="10%" skeletonHeight="16rem"></div>
                            <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%" skeletonHeight="3rem"></div>
                            <div class="ms-1 flex-grow-1" ddrSkeleton  skeletonWidth="10%" skeletonHeight="12rem"></div>
                            <div class="ms-1 flex-grow-1" ddrSkeleton  skeletonWidth="10%" skeletonHeight="9rem"></div>
                        </div>
                    }
                }
            </div>
        } @else {
            <p>{{'skeleton.data.loaded' | ddrTranslate}}</p>
        }
    </div>
</ddr-card>`,
        tsCode: `import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSkeletonDirective } from 'ddr-ng/directives/skeleton';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'skeleton-showcase-1',
  templateUrl: './skeleton-showcase-1.component.html',
  imports: [
    DdrRadioComponent,
    DdrSkeletonDirective,
    DdrButtonComponent,
    DdrCardComponent,
    DdrTranslatePipe
  ]
})
export class SkeletonShowcase1Component {

  public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'skeleton.cirle',
      value: 'circle',
    },
    {
      label: 'skeleton.rectangle',
      value: 'rectangle',
    },
    {
      label: 'skeleton.square',
      value: 'square',
    },
    {
      label: 'skeleton.card',
      value: 'card',
    },
    {
      label: 'skeleton.list',
      value: 'list',
    },
    {
      label: 'skeleton.graphic',
      value: 'graphic',
    },
  ]);

  public mode: WritableSignal<string> = signal<string>('circle');
  public load: WritableSignal<boolean> = signal<boolean>(true);

  loadData() {
    this.load.set(false);
    setTimeout(() => {
      this.load.set(true);
    }, 10000);
  }

}
`
      },
      {
        htmlCode: `<ddr-radio
    [options]="options()"
    [inline]="true"
    [(value)]="mode"/>

<div class="mt-3 mb-3">
    <ddr-button
        [text]="'skeleton.load.data' | ddrTranslate" 
        (action)="loadData()" />
</div>
      
<ddr-input-number 
    [label]="'skeleton.number.elements' | ddrTranslate" 
    [min]="1" 
    name="number-elements"
    [(value)]="nElements" />


<div class="mt-3">
    <ddr-card [showHeader]="false">
        
        <div card-content>
        @if (!load()) {
            <div>
                @switch(mode()) {
                    @case('circle') {
                        @for (e of nElements() | ddrLoopNumber; track e) {
                            <div class="mb-2" ddrSkeleton skeletonWidth="50px" skeletonBorderRadius="50%" skeletonHeight="3rem"></div>
                        }
                    }
                    @case('rectangle') {
                        @for (e of nElements() | ddrLoopNumber; track e) {
                            <div class="mb-2" ddrSkeleton skeletonHeight="3rem"></div>
                        }
                    }
                    @case('square') {
                        @for (e of nElements() | ddrLoopNumber; track e) {
                            <div class="mb-2" ddrSkeleton skeletonWidth="50px" skeletonHeight="3rem"></div>
                        }
                    }
                    @case('card') {
                        <div>
                            <div class="row mb-3">
                                <div class="col-2 text-center">
                                    <div ddrSkeleton skeletonWidth="80px" skeletonBorderRadius="50%" skeletonHeight="5rem"></div>
                                </div>
                                <div class="col-10">
                                    <div>
                                        <div class="mb-3" ddrSkeleton  skeletonHeight="1rem"></div>
                                    </div>
                                    <div>
                                        <div class="mb-3" ddrSkeleton  skeletonHeight="1rem"></div>
                                    </div>
                                    <div>
                                        <div ddrSkeleton skeletonHeight="1rem"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                @for (e of nElements() | ddrLoopNumber; track e) {
                                    <div class="col-12">
                                        <div class="mb-3" ddrSkeleton skeletonHeight="2rem"></div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                    @case('list') {
                        <div>
                            @for (e of nElements() | ddrLoopNumber; track e) {
                            <div class="mb-3 d-flex flex-nowrap">
                                <div class="flex-grow-0 ">
                                    <div ddrSkeleton skeletonWidth="50px"  skeletonBorderRadius="50%"   skeletonHeight="3rem"></div>
                                </div>
                                <div class="flex-grow-1">
                                    <div class="mb-3" ddrSkeleton  skeletonWidth="100%" skeletonHeight="1rem"></div>
                                    <div ddrSkeleton skeletonWidth="100%" skeletonHeight="1rem"></div>
                                </div>
                            </div>
                            }
                        </div>
                    }
                    @case('graphic') {
                        <div class="d-flex flex-nowrap align-items-end">
                            @for (e of nElements() | ddrLoopNumber; track e) {
                                <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%" skeletonHeight="16rem"></div>
                                <div class="ms-1 flex-grow-1" ddrSkeleton skeletonWidth="10%" skeletonHeight="3rem"></div>
                                <div class="ms-1 flex-grow-1" ddrSkeleton  skeletonWidth="10%" skeletonHeight="12rem"></div>
                                <div class="ms-1 flex-grow-1" ddrSkeleton  skeletonWidth="10%" skeletonHeight="9rem">
                                </div>
                            }
                        </div>
                    }
                }
            </div>
        } @else {
            <p>{{'skeleton.data.loaded' | ddrTranslate}}</p>
        }
        </div>
    </ddr-card>
</div>
`,
        tsCode: `import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrRadioComponent } from 'ddr-ng/components/radio';
import { DdrSkeletonDirective } from 'ddr-ng/directives/skeleton';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrLoopNumberPipe } from 'ddr-ng/pipes/ddr-loop-number';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrSelectItem } from 'ddr-ng/models';

@Component({
  selector: 'skeleton-showcase-2',
  templateUrl: './skeleton-showcase-2.component.html',
  imports: [
    DdrRadioComponent,
    DdrInputNumberComponent,
    DdrCardComponent,
    DdrButtonComponent,
    DdrSkeletonDirective,
    DdrLoopNumberPipe,
    DdrTranslatePipe
  ]
})
export class SkeletonShowcase2Component {

  public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
    {
      label: 'skeleton.cirle',
      value: 'circle',
    },
    {
      label: 'skeleton.rectangle',
      value: 'rectangle',
    },
    {
      label: 'skeleton.square',
      value: 'square',
    },
    {
      label: 'skeleton.card',
      value: 'card',
    },
    {
      label: 'skeleton.list',
      value: 'list',
    },
    {
      label: 'skeleton.graphic',
      value: 'graphic',
    },
  ]);

  public mode: WritableSignal<string> = signal<string>('circle');
  public load: WritableSignal<boolean> = signal<boolean>(true);
  public nElements: WritableSignal<number> = signal<number>(1);

  loadData() {
    this.load.set(false);
    setTimeout(() => {
      this.load.set(true);
    }, 10000);
  }
}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'skeletonWidth',
          description: 'skeleton.input.skeletonwidth',
          default: "'100%'",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'skeletonHeight',
          description: 'skeleton.input.skeletonheight',
          default: "'1rem'",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'skeletonBorderRadius',
          description: 'skeleton.input.skeletonborderradius',
          default: "'0.5rem'",
          required: false,
          type: 'string'
        }
      }
    ]
  }

}
