import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TableShowcase1Component } from './showcases/table-showcase-1/table-showcase-1.component';
import { TableShowcase10Component } from './showcases/table-showcase-10/table-showcase-10.component';
import { TableShowcase11Component } from './showcases/table-showcase-11/table-showcase-11.component';
import { TableShowcase2Component } from './showcases/table-showcase-2/table-showcase-2.component';
import { TableShowcase3Component } from './showcases/table-showcase-3/table-showcase-3.component';
import { TableShowcase4Component } from './showcases/table-showcase-4/table-showcase-4.component';
import { TableShowcase5Component } from './showcases/table-showcase-5/table-showcase-5.component';
import { TableShowcase6Component } from './showcases/table-showcase-6/table-showcase-6.component';
import { TableShowcase7Component } from './showcases/table-showcase-7/table-showcase-7.component';
import { TableShowcase8Component } from './showcases/table-showcase-8/table-showcase-8.component';
import { TableShowcase9Component } from './showcases/table-showcase-9/table-showcase-9.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';
import { TableShowcase12Component } from './showcases/table-showcase-12/table-showcase-12.component';
import { TableShowcase13Component } from './showcases/table-showcase-13/table-showcase-13.component';
import { TableShowcase14Component } from './showcases/table-showcase-14/table-showcase-14.component';
import { TableShowcase15Component } from './showcases/table-showcase-15/table-showcase-15.component';

@Component({
  selector: 'table-showcase',
  templateUrl: './table-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TableShowcase1Component,
    TableShowcase2Component,
    TableShowcase3Component,
    TableShowcase4Component,
    TableShowcase5Component,
    TableShowcase6Component,
    TableShowcase7Component,
    TableShowcase8Component,
    TableShowcase9Component,
    TableShowcase10Component,
    TableShowcase11Component,
    TableShowcase12Component,
    TableShowcase13Component,
    TableShowcase14Component,
    TableShowcase15Component,
    DdrTranslatePipe,
  ]
})
export class TableShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    (selectItem)="selectItem($event)" />`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-1',
  templateUrl: './table-showcase-1.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    [showPagination]="false"
    [allowChangePageSize]="false"
    (selectItem)="selectItem($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-2',
  templateUrl: './table-showcase-2.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase2Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    [canSelectItems]="false"
    (selectItem)="selectItem($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-3',
  templateUrl: './table-showcase-3.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase3Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    [showBorder]="false"
    (selectItem)="selectItem($event)" />`,
        tsCode: `import { Component, inject, Signal, signal } from '@angular/core';
  import {
    DdrTableCol,
    DdrTableComponent,
    DdrTableItem
  } from 'ddr-ng/components/table';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-4',
    templateUrl: './table-showcase-4.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class TableShowcase4Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
      {
        label: 'table.name',
        property: 'name',
        tooltip: 'table.name.tooltip',
      },
      {
        label: 'table.surname',
        property: 'surname',
        tooltip: 'table.surname.tooltip',
      },
      {
        label: 'table.age',
        property: 'age',
        tooltip: 'table.age.tooltip',
      },
      {
        label: 'table.weight',
        property: 'weight',
        tooltip: 'table.weight.tooltip',
      },
    ]);
  
    public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Fernando',
          surname: 'Ureña',
          age: 35,
          weight: 78,
        },
      },
      {
        item: {
          name: 'Manuel',
          surname: 'Gómez',
          age: 30,
          weight: 72,
        },
      },
    ]);
  
    selectItem(item: DdrTableItem<Person>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('table.select.item'),
        JSON.stringify(item),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [multiple]="true"
    (selectItem)="selectItem($event)" 
    (selectMultipleItem)="selectMultipleItem($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-5',
  templateUrl: './table-showcase-5.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase5Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

  selectMultipleItem(items: Person[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.multiple.select.item'),
      JSON.stringify(items),
    );
  }
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    (selectItem)="selectItem($event)">
        <ng-template #templateCell let-item="item" let-col="col">
            {{ item[col.property] }}
        </ng-template>
</ddr-table>`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-6',
  templateUrl: './table-showcase-6.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase6Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    (selectItem)="selectItem($event)" >
    <ng-template #templateCell let-item="item" let-col="col">
        {{ item | ddrNestedProperty: col.property }}
    </ng-template>
</ddr-table>`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-7',
  templateUrl: './table-showcase-7.component.html',
  imports: [
    DdrTableComponent,
    DdrNestedPropertyPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase7Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
    {
      label: 'table.documentation',
      property: 'documentation.nif',
      tooltip: 'table.documentation.nif',
    }
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B',
        },
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A',
        },
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B',
        },
      },
    },
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [showActions]="true"
    (selectItem)="selectItem($event)" 
    (selectAction)="selectAction($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrAction } from 'ddr-ng/models';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-8',
  templateUrl: './table-showcase-8.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase8Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public actions: Signal<DdrAction<Person>[]> = signal<DdrAction<Person>[]>([
    {
      label: 'table.action.save',
      value: 'SAVE',
      icon: 'bi bi-floppy',
    },
    {
      label: 'table.action.update',
      value: 'UPDATE',
      icon: 'bi bi-arrow-clockwise',
    },
    {
      label: 'table.action.delete',
      value: 'DELETE',
      icon: 'bi bi-trash',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

  selectAction(action: DdrAction<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.action'),
      JSON.stringify(action),
    );
  }

}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['DdrAction'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="[]" />`,
        tsCode: `import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTableCol,
  DdrTableComponent
} from 'ddr-ng/components/table';

@Component({
  selector: 'table-showcase-9',
  templateUrl: './table-showcase-9.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase9Component {

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [showActions]="true" 
    (selectItem)="selectItem($event)" 
    (changePage)="onChangePage($event)"
    (changePageSize)="onChangeTotalItemsPerPage($event)"  />`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import { DdrAction } from 'ddr-ng/models';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-10',
  templateUrl: './table-showcase-10.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase10Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public actions: Signal<DdrAction<Person>[]> = signal<DdrAction<Person>[]>([
    {
      label: 'table.action.save',
      value: 'SAVE',
      icon: 'bi bi-floppy',
    },
    {
      label: 'table.action.update',
      value: 'UPDATE',
      icon: 'bi bi-arrow-clockwise',
    },
    {
      label: 'table.action.delete',
      value: 'DELETE',
      icon: 'bi bi-trash',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.page') +
      ' :' +
      page.toString(),
    );
  }

  onChangeTotalItemsPerPage(rows: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.rows') +
      ' :' +
      rows.toString(),
    );
  }
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['DdrAction'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [allowSort]="true"
    (sort)="sortItems($event)" />`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-11',
  templateUrl: './table-showcase-11.component.html',
  imports: [
    DdrTableComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase11Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
  ]);

  public itemsOri: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      const valueA = String(a.item[cols[0].property as keyof Person]);
      const valueB = String(b.item[cols[0].property as keyof Person]);

      const result = valueA.localeCompare(valueB);

      return cols[0].modeSort === 'DESC' ? -result : result;
    });

    this.items.set(items);
  }
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [allowSort]="true"
    (sort)="sortItems($event)" />`,
        tsCode: `import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem,
} from 'ddr-ng/components/table';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'table-showcase-12',
  templateUrl: './table-showcase-12.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase12Component implements OnInit {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
      modeSort: 'ASC'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
  ]);

  public itemsOri: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  ngOnInit(): void {
    this.sortItems([this.cols()[0]]);
  }

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      const valueA = String(a.item[cols[0].property as keyof Person]);
      const valueB = String(b.item[cols[0].property as keyof Person]);

      const result = valueA.localeCompare(valueB);

      return cols[0].modeSort === 'DESC' ? -result : result;
    });

    this.items.set(items);
  }
  
}
`,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [allowSort]="true"
    (sort)="sortItems($event)" />`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'table-showcase-13',
  templateUrl: './table-showcase-13.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase13Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
      sortable: false
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
      sortable: false
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
  ]);

  public itemsOri: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      for (const col of cols) {
        const valueA = String(a.item[col.property as keyof Person]);
        const valueB = String(b.item[col.property as keyof Person]);

        const result = valueA.localeCompare(valueB);

        if (result !== 0) {
          return col.modeSort === 'DESC' ? -result : result;
        }
      }

      return 0;
    });

    this.items.set(items);
  }

}
`,      
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()" 
    [allowSort]="true"
    [multipleSort]="true"
    (sort)="sortItems($event)" />`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';

import { DdrTableCol, DdrTableComponent, DdrTableItem } from 'ddr-ng/components/table';
import { Person } from './bean/person';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'table-showcase-14',
  templateUrl: './table-showcase-14.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase14Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
  ]);

  public itemsOri: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 35,
        weight: 80,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'López',
        age: 28,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 30,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 35,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'García',
        age: 28,
        weight: 65,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 35,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Pérez',
        age: 30,
        weight: 80,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'López',
        age: 32,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 82,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'García',
        age: 28,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 30,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Pérez',
        age: 35,
        weight: 80,
      },
    },
  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      for (const col of cols) {
        const valueA = String(a.item[col.property as keyof Person]);
        const valueB = String(b.item[col.property as keyof Person]);

        const result = valueA.localeCompare(valueB);

        if (result !== 0) {
          return col.modeSort === 'DESC' ? -result : result;
        }
      }

      return 0;
    });

    this.items.set(items);
  }

}
`,      
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
      {
        htmlCode: `<ddr-table 
    [cols]="cols()" 
    [items]="items()"
    [canSelectItems]="false"
    [pageSize]="25" />`,
        tsCode: `import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-15',
  templateUrl: './table-showcase-15.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase15Component {

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
    },
  ]);

}
`,      
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      },
    ],
    inputs: [
      {
        item: {
          name: 'cols',
          description: 'table.input.cols',
          required: true,
          default: '[]',
          type: 'DdrTableCol[]'
        }
      },
      {
        item: {
          name: 'items',
          description: 'table.input.items',
          required: false,
          default: '[]',
          type: 'DdrTableItem<T>[]'
        }
      },
      {
        item: {
          name: 'showPagination',
          description: 'table.input.showpagination',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'optionsPageSizePagination',
          description: 'table.input.optionsrowspagination',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'showSummary',
          description: 'table.input.showsummary',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'allowChangePageSize',
          description: 'table.input.allowChangePageSize',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'multiple',
          description: 'table.input.multiple',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showActions',
          description: 'table.input.showactions',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'totalItems',
          description: 'table.input.totalitems',
          required: false,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'allowSort',
          description: 'table.input.cansort',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'multipleSort',
          description: 'table.input.multiplesort',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showBorder',
          description: 'table.input.showborder',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'showFooter',
          description: 'table.input.showfooter',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },

      {
        item: {
          name: 'canSelectItems',
          description: 'table.input.canselectitems',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'startPageZero',
          description: 'table.input.startpagezero',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'page',
          description: 'table.input.page',
          required: false,
          default: '1',
          type: 'number'
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'table.input.labelnoresults',
          required: false,
          default: 'table.no.results',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelRegistersPagination',
          description: 'table.input.labelregisterspagination',
          required: false,
          default: 'paginator.items',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelOfPagination',
          description: 'table.input.labelofpagination',
          required: false,
          default: 'paginator.of',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelPageSizePagination',
          description: 'table.input.labelpagesizepagination',
          required: false,
          default: 'paginator.pagesize',
          type: 'string'
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'selectItem',
          description: 'table.output.selectitem',
          type: 'DdrTableItem<T>'
        }
      },
      {
        item: {
          name: 'selectMultipleItem',
          description: 'table.output.selectmultipleitem',
          type: 'T[]'
        }
      },
      {
        item: {
          name: 'selectAction',
          description: 'table.output.selectaction',
          type: 'DdrAction<T>'
        }
      },
      {
        item: {
          name: 'changePage',
          description: 'table.output.changepage',
          type: 'DdrAction<T>'
        }
      },
      {
        item: {
          name: 'changePageSize',
          description: 'table.output.changerow',
          type: 'number'
        }
      },
      {
        item: {
          name: 'sort',
          description: 'table.output.sort',
          type: 'DdrTableCol'
        }
      },
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'table.template.itemtemplate'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'table.no.results',
          description: 'table.translation.no.results'
        }
      },
      {
        item: {
          name: 'paginator.of',
          description: 'table.translation.of'
        }
      },
      {
        item: {
          name: 'paginator.items',
          description: 'table.translation.items'
        }
      },
      {
        item: {
          name: 'paginator.pagesize',
          description: 'table.translation.pagesize'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-table',
          description: 'table.style.table'
        }
      },
      {
        item: {
          class: 'ddr-table__table',
          description: 'table.style.table.table'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-row',
          description: 'table.style.header.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-row--checkbox',
          description: 'table.style.header.row.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell',
          description: 'table.style.header.cell'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell--tooltip',
          description: 'table.style.header.cell.tooltip'
        }
      },
      {
        item: {
          class: 'ddr-table__table--header-cell--sort',
          description: 'table.style.header.cell.sort'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row',
          description: 'table.style.body.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--border',
          description: 'table.style.border'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--hoveable',
          description: 'table.style.body.row.hoveable'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--checkbox',
          description: 'table.style.body.row.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell',
          description: 'table.style.body.cell'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell--title-mobile',
          description: 'table.style.body.cell.title.mobile'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-cell--text-mobile',
          description: 'table.style.body.cell.text.mobile'
        }
      },
      {
        item: {
          class: 'ddr-table__table--body-row--actions',
          description: 'table.style.body.row.actions'
        }
      },
      {
        item: {
          class: 'ddr-table__table--foot-row',
          description: 'table.style.foot.row'
        }
      },
      {
        item: {
          class: 'ddr-table__table--foot-cell',
          description: 'table.style.foot.cell'
        }
      }
    ]
  }

}
