import { Component } from '@angular/core';
import { Documentation } from '../base-showcase/bean/documentation';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { PaginatorShowcase1Component } from './showcases/paginator-showcase-1/paginator-showcase-1.component';
import { PaginatorShowcase2Component } from './showcases/paginator-showcase-2/paginator-showcase-2.component';
import { PaginatorShowcase3Component } from './showcases/paginator-showcase-3/paginator-showcase-3.component';
import { PaginatorShowcase4Component } from './showcases/paginator-showcase-4/paginator-showcase-4.component';
import { PaginatorShowcase5Component } from './showcases/paginator-showcase-5/paginator-showcase-5.component';
import { PaginatorShowcase6Component } from './showcases/paginator-showcase-6/paginator-showcase-6.component';
import { PaginatorShowcase7Component } from './showcases/paginator-showcase-7/paginator-showcase-7.component';
import { PaginatorShowcase10Component } from './showcases/paginator-showcase-10/paginator-showcase-10.component';
import { PaginatorShowcase11Component } from './showcases/paginator-showcase-11/paginator-showcase-11.component';
import { PaginatorShowcase8Component } from './showcases/paginator-showcase-8/paginator-showcase-8.component';
import { PaginatorShowcase9Component } from './showcases/paginator-showcase-9/paginator-showcase-9.component';
import { PaginatorShowcase12Component } from './showcases/paginator-showcase-12/paginator-showcase-12.component';
import { PaginatorShowcase13Component } from './showcases/paginator-showcase-13/paginator-showcase-13.component';
import { PaginatorShowcase14Component } from './showcases/paginator-showcase-14/paginator-showcase-14.component';

@Component({
  selector: 'app-paginator-showcase',
  templateUrl: './paginator-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    PaginatorShowcase1Component,
    PaginatorShowcase2Component,
    PaginatorShowcase3Component,
    PaginatorShowcase4Component,
    PaginatorShowcase5Component,
    PaginatorShowcase6Component,
    PaginatorShowcase7Component,
    PaginatorShowcase8Component,
    PaginatorShowcase9Component,
    PaginatorShowcase10Component,
    PaginatorShowcase11Component,
    PaginatorShowcase12Component,
    PaginatorShowcase13Component,
    PaginatorShowcase14Component,
  ]
})
export class PaginatorShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-1',
  templateUrl: './paginator-showcase-1.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ],
})
export class PaginatorShowcase1Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      data.push(i);
    }
    return data;
  })

}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-2',
  templateUrl: './paginator-showcase-2.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ],
})
export class PaginatorShowcase2Component {


  public page: WritableSignal<number> = signal<number>(20);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [visiblePages]="10"
    [totalItems]="data().length"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-3',
  templateUrl: './paginator-showcase-3.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase3Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<div class="row mt-3 mb-3">
    <div class="col-12">
        <p>{{'paginator.size' | ddrTranslate}}:</p>
        <ddr-button-multiple 
            [buttons]="buttonsSize()" 
            [showSelectedButton]="true" 
            [(value)]="size" />
    </div>
</div>

<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [size]="size()"
    [totalItems]="data().length"
/>`,
        tsCode: `import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrSize } from 'ddr-ng';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButtonSelectable } from 'ddr-ng/models';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-4',
  templateUrl: './paginator-showcase-4.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class PaginatorShowcase4Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public size: WritableSignal<DdrSize> = signal<DdrSize>('medium');

  public buttonsSize: Signal<DdrButtonSelectable[]> = signal<DdrButtonSelectable[]>([
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

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [showNavigation]="true"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-5',
  templateUrl: './paginator-showcase-5.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase5Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [showNavigation]="true"
    navigationDisplay="icon"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-6',
  templateUrl: './paginator-showcase-6.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase6Component {

  public page: WritableSignal<number> = signal<number>(20);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [showNavigation]="true"
    navigationDisplay="text"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-7',
  templateUrl: './paginator-showcase-7.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase7Component {

  public page: WritableSignal<number> = signal<number>(20);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [showNavigation]="true"
    (changePage)="onChangePage($event)"
    (previous)="onPrevious($event)"
    (next)="onNext($event)"
/>`,
        tsCode: `import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-8',
  templateUrl: './paginator-showcase-8.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class PaginatorShowcase8Component {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private ddrToastService: DdrToastService = inject(DdrToastService);

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  });

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.change.page', { page }),
    )
  }

  onPrevious(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.previous.page', { page }),
    )
  }

  onNext(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.next.page', { page }),
    )
  }
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize() : true; track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [startZero]="true"
    (changePage)="onChangePage($event)"
/>`,
        tsCode: `import {
  Component,
  computed,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-9',
  templateUrl: './paginator-showcase-9.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class PaginatorShowcase9Component {

  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private ddrToastService: DdrToastService = inject(DdrToastService);

  public page: WritableSignal<number> = signal<number>(0);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('paginator.change.page', { page }),
    )
  }

}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [pageSize]="pageSize()"
    [totalItems]="data().length"
    [showSummary]="true"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-10',
  templateUrl: './paginator-showcase-10.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase10Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [(pageSize)]="pageSize"
    [totalItems]="data().length"
    [showSummary]="true"
    [allowChangePageSize]="true"
    [pageSizeValues]="pageSizeOptions()"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-11',
  templateUrl: './paginator-showcase-11.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase11Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [(pageSize)]="pageSize"
    [totalItems]="data().length"
    [showSummary]="true"
    [allowChangePageSize]="true"
    [pageSizeValues]="pageSizeOptions()"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-12',
  templateUrl: './paginator-showcase-12.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase12Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(50);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 30; i++) {
      data.push(i);
    }
    return data;
  })
}
`
      },
      {
        htmlCode: `<div class="row mt-3 mb-3">
    <div class="col-12">
        <p>{{'paginator.alignment' | ddrTranslate}}:</p>
        <ddr-button-multiple 
            [buttons]="buttonsAlignment()" 
            [showSelectedButton]="true" 
            [(value)]="alignment" />
    </div>
</div>

<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [(pageSize)]="pageSize"
    [totalItems]="data().length"
    [showSummary]="true"    
    [allowChangePageSize]="true"
    [pageSizeValues]="pageSizeOptions()"
    [alignment]="alignment()"
/>`,
        tsCode: `import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrPaginatorAlignment } from 'ddr-ng';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrButtonSelectable } from 'ddr-ng/models';
import { DdrPaginatorComponent, DdrPaginatorPipe } from 'ddr-ng/paginator';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'paginator-showcase-13',
  templateUrl: './paginator-showcase-13.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ]
})
export class PaginatorShowcase13Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])
  public alignment: WritableSignal<DdrPaginatorAlignment> = signal<DdrPaginatorAlignment>('center');

  public buttonsAlignment: Signal<DdrButtonSelectable[]> = signal<DdrButtonSelectable[]>([
    {
      text: 'left',
      value: 'left',
    },
    {
      text: 'center',
      value: 'center',
    },
    {
      text: 'right',
      value: 'right',
    },
  ]);

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })

}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(); track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [(pageSize)]="pageSize"
    [totalItems]="data().length"
    [showSummary]="true"    
    [allowChangePageSize]="true"
    [pageSizeValues]="pageSizeOptions()"
    [showGoToPage]="true"
/>`,
        tsCode: `import {
  Component,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-showcase-14',
  templateUrl: './paginator-showcase-14.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorShowcase14Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);
  public pageSizeOptions: WritableSignal<number[]> = signal<number[]>([10, 25, 50])

  public data = computed(() => {
    const data = [];
    for (let i = 1; i <= 500; i++) {
      data.push(i);
    }
    return data;
  })

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'totalItems',
          description: 'paginator.input.totalitems',
          type: 'number',
          default: '0',
          required: false
        }
      },
      {
        item: {
          name: 'visiblePages',
          description: 'paginator.input.visiblepages',
          type: 'number',
          default: '5',
          required: false
        }
      },
      {
        item: {
          name: 'startZero',
          description: 'paginator.input.startzero',
          default: 'false',
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'showNavigation',
          description: 'paginator.input.shownavigation',
          required: false,
          type: 'boolean',
          default: 'false',
        }
      },
      {
        item: {
          name: 'navigationDisplay',
          description: 'paginator.input.navigationdisplay',
          required: false,
          type: 'DdrPaginatorNavigationDisplay',
          default: 'both',
          values: "'icon' | 'text' | 'both'"
        }
      },
      {
        item: {
          name: 'size',
          description: 'paginator.input.size',
          required: false,
          type: 'DdrSize',
          default: 'medium',
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'showSummary',
          description: 'paginator.input.showsummary',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'allowChangePageSize',
          description: 'paginator.input.allowchangepagesize',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'showGoToPage',
          description: 'paginator.input.showgotopage',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'pageSizeValues',
          description: 'paginator.input.pagesizevalues',
          default: '[]',
          required: false,
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'alignment',
          description: 'paginator.input.alignment',
          required: false,
          type: 'DdrPaginatorAlignment',
          default: 'left',
          values: "'center' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'labelPrevious',
          description: 'paginator.input.labelprevious',
          required: false,
          default: 'paginator.previous',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelNext',
          description: 'paginator.input.labelnext',
          required: false,
          default: 'paginator.next',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelOf',
          description: 'paginator.input.labelof',
          required: false,
          default: 'paginator.of',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelPageSize',
          description: 'paginator.input.labelpagesize',
          required: false,
          default: 'paginator.pagesize',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelGoToPage',
          description: 'paginator.input.labelgotopage',
          required: false,
          default: 'paginator.go.to.page',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelButtonGoToPage',
          description: 'paginator.input.labelbuttongotopage',
          required: false,
          default: 'paginator.button.go.to.page',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelItems',
          description: 'paginator.input.labelitems',
          required: false,
          default: 'paginator.items',
          type: 'string'
        }
      },
      {
        item: {
          name: 'pageSizeName',
          description: 'paginator.input.pagesizename',
          required: false,
          type: 'string',
          default: 'page-size'
        }
      },
      {
        item: {
          name: 'goToPageName',
          description: 'paginator.input.gotopagename',
          required: false,
          type: 'string',
          default: 'go-to-page'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'page',
          description: 'paginator.input.page',
          required: true,
          type: 'number',
          default: ''
        }
      },
      {
        item: {
          name: 'pageSize',
          description: 'paginator.input.pagesize',
          required: true,
          type: 'number',
          default: ''
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'changePage',
          description: 'paginator.output.changepage',
          type: 'number'
        }
      },
      {
        item: {
          name: 'previous',
          description: 'paginator.output.previous',
          type: 'number'
        }
      },
      {
        item: {
          name: 'next',
          description: 'paginator.output.next',
          type: 'number'
        }
      },
      {
        item: {
          name: 'changePageSize',
          description: 'paginator.output.changepagesize',
          type: 'number'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'paginator.previous',
          description: 'paginator.translation.labelprevious'
        }
      },
      {
        item: {
          name: 'paginator.next',
          description: 'paginator.translation.labelnext'
        }
      },
      {
        item: {
          name: 'paginator.of',
          description: 'paginator.translation.labelof'
        }
      },
      {
        item: {
          name: 'paginator.pagesize',
          description: 'paginator.translation.labelpagesize'
        }
      },
      {
        item: {
          name: 'paginator.go.to.page',
          description: 'paginator.translation.labelgotopage'
        }
      },
      {
        item: {
          name: 'paginator.button.go.to.page',
          description: 'paginator.translation.labelbuttongotopage'
        }
      },
      {
        item: {
          name: 'paginator.items',
          description: 'paginator.translation.labelitems'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-paginator',
          description: 'paginator.styles.container'
        }
      },
      {
        item: {
          class: 'ddr-paginator--center',
          description: 'paginator.styles.center'
        }
      },
      {
        item: {
          class: 'ddr-paginator--left',
          description: 'paginator.styles.left'
        }
      },
      {
        item: {
          class: 'ddr-paginator--right',
          description: 'paginator.styles.right'
        }
      },
      {
        item: {
          class: 'ddr-paginator__summary',
          description: 'paginator.styles.summary'
        }
      },
      {
        item: {
          class: 'ddr-paginator__buttons',
          description: 'paginator.styles.buttons'
        }
      },
      {
        item: {
          class: 'ddr-paginator__gotopage',
          description: 'paginator.styles.gotopage'
        }
      },
      {
        item: {
          class: 'ddr-paginator__pagesize',
          description: 'paginator.styles.pagesize'
        }
      },
    ]
  }
}
