import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { PaginatorPipeShowcase1Component } from './showcases/paginator-pipe-showcase-1/paginator-pipe-showcase-1.component';
import { PaginatorPipeShowcase2Component } from './showcases/paginator-pipe-showcase-2/paginator-pipe-showcase-2.component';
import { PaginatorPipeShowcase3Component } from './showcases/paginator-pipe-showcase-3/paginator-pipe-showcase-3.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'app-paginator-pipe-showcase',
  templateUrl: './paginator-pipe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTranslatePipe,
    PaginatorPipeShowcase1Component,
    PaginatorPipeShowcase2Component,
    PaginatorPipeShowcase3Component
  ]
})
export class PaginatorPipeShowcaseComponent {

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
  selector: 'paginator-pipe-showcase-1',
  templateUrl: './paginator-pipe-showcase-1.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorPipeShowcase1Component {

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
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrPaginatorComponent,
  DdrPaginatorPipe
} from 'ddr-ng/paginator';

@Component({
  selector: 'paginator-pipe-showcase-2',
  templateUrl: './paginator-pipe-showcase-2.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorPipeShowcase2Component {

  public page: WritableSignal<number> = signal<number>(1);
  public pageSize: WritableSignal<number> = signal<number>(10);

  public data: WritableSignal<any[]> = signal<any[]>([]);

}
`
      },
      {
        htmlCode: `<ul>
    @for(item of data() | ddrPaginator: page() : pageSize(): true; track item){
        <li>{{item}}</li>
    }
</ul>

<ddr-paginator
    [(page)]="page"
    [startZero]="true"
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
  selector: 'paginator-pipe-showcase-3',
  templateUrl: './paginator-pipe-showcase-3.component.html',
  imports: [
    DdrPaginatorComponent,
    DdrPaginatorPipe
  ]
})
export class PaginatorPipeShowcase3Component {

  public page: WritableSignal<number> = signal<number>(0);
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
      }
    ],
    params: [
      {
        item: {
          name: 'items',
          description: 'paginator.pipe.params.items',
          required: true,
          type: 'any[] | null | undefined'
        }
      },
      {
        item: {
          name: 'page',
          description: 'paginator.pipe.params.page',
          required: true,
          type: 'number'
        }
      },
      {
        item: {
          name: 'pageSize',
          description: 'paginator.pipe.params.pagesize',
          required: true,
          type: 'number'
        }
      },
      {
        item: {
          name: 'startZero',
          description: 'paginator.pipe.params.startzero',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      }
    ]
  }

}
