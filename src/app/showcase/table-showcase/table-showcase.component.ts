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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-1',
    templateUrl: './table-showcase-1.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [allowChangeRows]="false"
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-3',
    templateUrl: './table-showcase-3.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
      [labelNoResults]="'table.empty' | ddrTranslate"
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-5',
    templateUrl: './table-showcase-5.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-6',
    templateUrl: './table-showcase-6.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-7',
    templateUrl: './table-showcase-7.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe,
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
      [labelNoResults]="'table.empty' | ddrTranslate"
      (selectItem)="selectItem($event)" 
      (selectAction)="selectAction($event)" />`,
        tsCode: `import { Component, inject, signal, Signal } from '@angular/core';
  import { DdrTableCol, DdrTableComponent, DdrTableItem } from 'ddr-ng/components/table';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrTranslatePipe, DdrTranslateService } from 'ddr-ng/translate';
  import { DdrAction } from 'ddr-ng/models';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-8',
    templateUrl: './table-showcase-8.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [items]="[]"
      [labelNoResults]="'table.empty' | ddrTranslate" />`,
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
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'table-showcase-9',
    templateUrl: './table-showcase-9.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
      (selectItem)="selectItem($event)" 
      (changePage)="onChangePage($event)"
      (changeRow)="onChangeTotalItemsPerPage($event)"  />`,
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-10',
    templateUrl: './table-showcase-10.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
      [canSort]="true"
      [labelRegisters]="'table.registers' | ddrTranslate"
      [labelRegister]="'table.register' | ddrTranslate"
      [labelToPagination]="'table.to' | ddrTranslate"
      [labelOfPagination]="'table.of' | ddrTranslate"
      (selectItem)="selectItem($event)"
      (sort)="sortItems($event)" />`,
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
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  
  @Component({
    selector: 'table-showcase-11',
    templateUrl: './table-showcase-11.component.html',
    imports: [
      DdrTableComponent,
      DdrTranslatePipe
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
        tooltip: 'table.name.tooltip',
        canSort: true,
      },
      {
        label: 'table.surname',
        property: 'surname',
        tooltip: 'table.surname.tooltip',
        canSort: true,
      },
      {
        label: 'table.age',
        property: 'age',
        tooltip: 'table.age.tooltip',
        canSort: true,
      },
      {
        label: 'table.weight',
        property: 'weight',
        tooltip: 'table.weight.tooltip',
        canSort: true,
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
  
    selectItem(item: DdrTableItem<Person>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('table.select.item'),
        JSON.stringify(item),
      );
    }
  
    sortItems(col: DdrTableCol) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('table.sort'),
        JSON.stringify(col),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrTableCol'],
          CLASSES['DdrTableItem'],
          CLASSES['PersonTable']
        ]
      }
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
          name: 'optionsRowsPagination',
          description: 'table.input.optionsrowspagination',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'showTotal',
          description: 'table.input.showtotal',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'allowChangeRows',
          description: 'table.input.allowchangerows',
          required: false,
          default: '[]',
          type: 'number[]'
        }
      },
      {
        item: {
          name: 'allowChangeRows',
          description: 'table.input.allowchangerows',
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
          name: 'canSort',
          description: 'table.input.cansort',
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
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelRegisters',
          description: 'table.input.labelregisters',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelRegister',
          description: 'table.input.labelregister',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelToPagination',
          description: 'table.input.labeltopagination',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelOfPagination',
          description: 'table.input.labelofpagination',
          required: false,
          default: 'undefined',
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
          name: 'changeRow',
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
          name: 'to',
          description: 'table.translation.to'
        }
      },
      {
        item: {
          name: 'of',
          description: 'table.translation.of'
        }
      },
      {
        item: {
          name: 'register',
          description: 'table.translation.register'
        }
      },
      {
        item: {
          name: 'registers',
          description: 'table.translation.registers'
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
