import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DropdownShowcase1Component } from './showcases/dropdown-showcase-1/dropdown-showcase-1.component';
import { DropdownShowcase10Component } from './showcases/dropdown-showcase-10/dropdown-showcase-10.component';
import { DropdownShowcase11Component } from './showcases/dropdown-showcase-11/dropdown-showcase-11.component';
import { DropdownShowcase12Component } from './showcases/dropdown-showcase-12/dropdown-showcase-12.component';
import { DropdownShowcase13Component } from './showcases/dropdown-showcase-13/dropdown-showcase-13.component';
import { DropdownShowcase14Component } from './showcases/dropdown-showcase-14/dropdown-showcase-14.component';
import { DropdownShowcase15Component } from './showcases/dropdown-showcase-15/dropdown-showcase-15.component';
import { DropdownShowcase16Component } from './showcases/dropdown-showcase-16/dropdown-showcase-16.component';
import { DropdownShowcase17Component } from './showcases/dropdown-showcase-17/dropdown-showcase-17.component';
import { DropdownShowcase2Component } from './showcases/dropdown-showcase-2/dropdown-showcase-2.component';
import { DropdownShowcase3Component } from './showcases/dropdown-showcase-3/dropdown-showcase-3.component';
import { DropdownShowcase4Component } from './showcases/dropdown-showcase-4/dropdown-showcase-4.component';
import { DropdownShowcase5Component } from './showcases/dropdown-showcase-5/dropdown-showcase-5.component';
import { DropdownShowcase6Component } from './showcases/dropdown-showcase-6/dropdown-showcase-6.component';
import { DropdownShowcase7Component } from './showcases/dropdown-showcase-7/dropdown-showcase-7.component';
import { DropdownShowcase8Component } from './showcases/dropdown-showcase-8/dropdown-showcase-8.component';
import { DropdownShowcase9Component } from './showcases/dropdown-showcase-9/dropdown-showcase-9.component';
import { DropdownShowcase18Component } from './showcases/dropdown-showcase-18/dropdown-showcase-18.component';
import { DropdownShowcase19Component } from './showcases/dropdown-showcase-19/dropdown-showcase-19.component';
import { DropdownShowcase20Component } from './showcases/dropdown-showcase-20/dropdown-showcase-20.component';
import { DropdownShowcase21Component } from './showcases/dropdown-showcase-21/dropdown-showcase-21.component';
import { DropdownShowcase22Component } from './showcases/dropdown-showcase-22/dropdown-showcase-22.component';
import { DropdownShowcase23Component } from './showcases/dropdown-showcase-23/dropdown-showcase-23.component';
import { DropdownShowcase24Component } from './showcases/dropdown-showcase-24/dropdown-showcase-24.component';
import { DropdownShowcase25Component } from './showcases/dropdown-showcase-25/dropdown-showcase-25.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'dropdown-showcase',
  templateUrl: './dropdown-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DropdownShowcase1Component,
    DropdownShowcase2Component,
    DropdownShowcase3Component,
    DropdownShowcase4Component,
    DropdownShowcase5Component,
    DropdownShowcase6Component,
    DropdownShowcase7Component,
    DropdownShowcase8Component,
    DropdownShowcase9Component,
    DropdownShowcase10Component,
    DropdownShowcase11Component,
    DropdownShowcase12Component,
    DropdownShowcase13Component,
    DropdownShowcase14Component,
    DropdownShowcase15Component,
    DropdownShowcase16Component,
    DropdownShowcase17Component,
    DropdownShowcase18Component,
    DropdownShowcase19Component,
    DropdownShowcase20Component,
    DropdownShowcase21Component,
    DropdownShowcase22Component,
    DropdownShowcase23Component,
    DropdownShowcase24Component,
    DropdownShowcase25Component,
    DdrTranslatePipe,
  ]
})
export class DropdownShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      name="dropdown-1"
      [(value)]="value"
      (selectItem)="selectItem($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-showcase-1',
    templateUrl: './dropdown-showcase-1.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase1Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
      {
        label: 'Java',
        value: 'java',
      },
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'NestJS',
        value: 'nestjs',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
      {
        label: 'C',
        value: 'c',
      },
      {
        label: 'C++',
        value: 'cpp',
      },
    ]);
  
    public value: WritableSignal<string> = signal<string>('');
  
    selectItem(item: DdrSelectItem<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(item),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      name="dropdown-2"
      [(value)]="value"
      (selectItem)="selectItem($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-showcase-2',
    templateUrl: './dropdown-showcase-2.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase2Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
      {
        label: 'Java',
        value: 'java',
      },
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'NestJS',
        value: 'nestjs',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
      {
        label: 'C',
        value: 'c',
      },
      {
        label: 'C++',
        value: 'cpp',
      },
    ]);
  
    public value: WritableSignal<string> = signal<string>('angular');
  
    selectItem(item: DdrSelectItem<string>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(item),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      name="dropdown-3"
      [(value)]="value"
      (selectItem)="selectItem($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-3',
    templateUrl: './dropdown-showcase-3.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase3Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage | null> = signal(null);
  
    selectItem(item: DdrSelectItem<ProgrammingLanguage>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(item),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-4"
      [(value)]="value"
      (selectItem)="selectItem($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-4',
    templateUrl: './dropdown-showcase-4.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase4Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage> = signal({ name: 'angular' });
  
    selectItem(item: DdrSelectItem<ProgrammingLanguage>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(item),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-5"
      [(value)]="value">
  
      <ng-template #itemTemplate let-item="item">
          <span>{{item.label + ' [' + item.value.name + ']'}}</span>
      </ng-template>
  
  </ddr-dropdown>
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-5',
    templateUrl: './dropdown-showcase-5.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownShowcase5Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage> = signal({ name: 'angular' });
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-6" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  
  @Component({
    selector: 'dropdown-showcase-6',
    templateUrl: './dropdown-showcase-6.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ],
  })
  export class DropdownShowcase6Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
       [options]="options()" 
       [label]="'dropdown.label' | ddrTranslate"
       [placeholder]="'dropdown.placeholder' | ddrTranslate" 
       [labelNoResults]="'dropdown.no.items' | ddrTranslate"
       [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
       [inline]="true"
       [compareFn]="compareFn"
       name="dropdown-7" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-showcase-7',
    templateUrl: './dropdown-showcase-7.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ],
  })
  export class DropdownShowcase7Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      [showFilter]="false"
      name="dropdown-8" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-8',
    templateUrl: './dropdown-showcase-8.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ],
  })
  export class DropdownShowcase8Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-button-multiple class="mb-3"
      [buttons]="buttonsOrientation()"
      [showSelectedButton]="true"
      [(value)]="orientationDropdown" />
  
  <ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [orientation]="orientationDropdown()" 
      [compareFn]="compareFn"
      name="dropdown-9" />`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrButton, DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrOrientationDropdown } from 'ddr-ng/types';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  
  @Component({
    selector: 'dropdown-showcase-9',
    templateUrl: './dropdown-showcase-9.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      DdrButtonMultipleComponent
    ],
  })
  export class DropdownShowcase9Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public buttonsOrientation: Signal<DdrButton[]> = signal<DdrButton[]>([
      {
        text: 'bottom',
        value: 'bottom',
      },
      {
        text: 'top',
        value: 'top',
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public orientationDropdown: WritableSignal<DdrOrientationDropdown> = signal<DdrOrientationDropdown>('bottom');
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      name="dropdown-10"
      [(value)]="value" />
  
  <ddr-button 
      [text]="'dropdown.reset.value' | ddrTranslate" 
      (action)="resetValue()" />
  <ddr-button 
      [text]="'dropdown.remove.options' | ddrTranslate" 
      (action)="removeOptions()" />
  <ddr-button 
      [text]="'dropdown.reset.options' | ddrTranslate" 
      (action)="resetOptions()" />`,
        tsCode: `import {
    Component,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrButtonComponent } from 'ddr-ng/components/button';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-10',
    templateUrl: './dropdown-showcase-10.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      DdrButtonComponent
    ],
  })
  export class DropdownShowcase10Component {
  
    public options: WritableSignal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage | null> = signal(null);
  
    removeOptions() {
      this.options.set([]);
    }
  
    resetOptions() {
      this.options.set([
        {
          label: 'Java',
          value: {
            name: 'java',
          },
        },
        {
          label: 'Angular',
          value: {
            name: 'angular',
          },
        },
        {
          label: 'NestJS',
          value: {
            name: 'nestjs',
          },
        },
        {
          label: 'Javascript',
          value: {
            name: 'javascript',
          },
        },
        {
          label: 'C',
          value: {
            name: 'c',
          },
        },
        {
          label: 'C++',
          value: {
            name: 'cpp',
          },
        },
      ]);
    }
  
    resetValue() {
      this.value.set(null);
    }
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [disabled]="true"
      name="dropdown-11" />`,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrToastService } from 'ddr-ng/toast';
  
  @Component({
    selector: 'dropdown-showcase-11',
    templateUrl: './dropdown-showcase-11.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase11Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [allowDeselect]="true"
      name="dropdown-12"
      [(value)]="value" 
      (selectItem)="selectItem($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    inject,
    signal,
    Signal,
    WritableSignal
  } from '@angular/core';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { DdrToastService } from 'ddr-ng/toast';
  import { JsonPipe } from '@angular/common';
  
  @Component({
    selector: 'dropdown-showcase-12',
    templateUrl: './dropdown-showcase-12.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownShowcase12Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage> = signal({ name: 'angular' });
  
    selectItem(item: DdrSelectItem<ProgrammingLanguage>) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(item),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [modalOptions]="true"
      name="dropdown-13" />
  `,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-13',
    templateUrl: './dropdown-showcase-13.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownShowcase13Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [closeOnSelect]="false"
      name="dropdown-14"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-14',
    templateUrl: './dropdown-showcase-14.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
  })
  export class DropdownShowcase14Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage> = signal<ProgrammingLanguage>({ name: 'angular' });
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [tooltipText]="'dropdown.tooltip' | ddrTranslate"
      name="dropdown-15" />`,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  
  @Component({
    selector: 'dropdown-showcase-15',
    templateUrl: './dropdown-showcase-15.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownShowcase15Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [label]="'dropdown.label' | ddrTranslate"
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [validate]="true"
      [required]="true"
      [allowDeselect]="true"
      name="dropdown-16" >
  
      <ng-template #templateValid>
          <span>{{'dropdown.ok' | ddrTranslate}}</span>
      </ng-template>
  
      <ng-template #templateErrors let-errors="errors">
          @for (error of errors(); track error.kind) {
              @switch(error.kind){
                  @case('required'){
                      <span>{{ 'dropdown.value.required' | ddrTranslate }}</span>
                  }
              }
          }
      </ng-template>
  
  </ddr-dropdown>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  
  @Component({
    selector: 'dropdown-showcase-16',
    templateUrl: './dropdown-showcase-16.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownShowcase16Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<div class="background-test-transparent p-2">
      <ddr-dropdown 
          [options]="options()" 
          [label]="'dropdown.label' | ddrTranslate"
          [placeholder]="'dropdown.placeholder' | ddrTranslate" 
          [labelNoResults]="'dropdown.no.items' | ddrTranslate"
          [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
          [compareFn]="compareFn"
          [transparent]="true"
          name="dropdown-17" />
  </div>
  `,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  
  @Component({
    selector: 'dropdown-showcase-17',
    templateUrl: './dropdown-showcase-17.component.html',
    styleUrl: './dropdown-showcase-17.component.scss',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownShowcase17Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
  }
  `,
        cssCode: `.background-test-transparent {
      background: turquoise;
  }`,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [(ngModel)]="value"
      name="dropdown-18" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { FormsModule } from '@angular/forms';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-18',
    templateUrl: './dropdown-showcase-18.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class DropdownShowcase18Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public value: WritableSignal<ProgrammingLanguage | null> = signal(null);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<form [formGroup]="dropdownForm">
      <ddr-dropdown 
          [options]="options()" 
          [placeholder]="'dropdown.placeholder' | ddrTranslate" 
          [labelNoResults]="'dropdown.no.items' | ddrTranslate"
          [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
          [compareFn]="compareFn"
          formControlName="dropdown"
          name="dropdown-19" />
  
      <div class="mt-2">
          <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.value | json}}</span>
      </div>
  </form>
  `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    FormControl,
    FormGroup,
    ReactiveFormsModule
  } from '@angular/forms';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-19',
    templateUrl: './dropdown-showcase-19.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class DropdownShowcase19Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    public dropdownForm = new FormGroup({
      dropdown: new FormControl(null)
    })
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [formField]="dropdownForm.language" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.language().value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import {
    form,
    FormField
  } from '@angular/forms/signals';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-showcase-20',
    templateUrl: './dropdown-showcase-20.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownShowcase20Component {
  
    public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
      {
        label: 'Java',
        value: 'java',
      },
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'NestJS',
        value: 'nestjs',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
      {
        label: 'C',
        value: 'c',
      },
      {
        label: 'C++',
        value: 'cpp',
      },
    ]);
  
    private dropdownModel = signal({
      language: ''
    });
    public dropdownForm = form(this.dropdownModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [formField]="dropdownForm.language" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.language().value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    form,
    FormField
  } from '@angular/forms/signals';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-showcase-21',
    templateUrl: './dropdown-showcase-21.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownShowcase21Component {
  
    public options: Signal<DdrSelectItem<string>[]> = signal<DdrSelectItem<string>[]>([
      {
        label: 'Java',
        value: 'java',
      },
      {
        label: 'Angular',
        value: 'angular',
      },
      {
        label: 'NestJS',
        value: 'nestjs',
      },
      {
        label: 'Javascript',
        value: 'javascript',
      },
      {
        label: 'C',
        value: 'c',
      },
      {
        label: 'C++',
        value: 'cpp',
      },
    ]);
  
    private dropdownModel = signal({
      language: 'angular'
    });
    public dropdownForm = form(this.dropdownModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [formField]="dropdownForm.language" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.language().value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import {
    form,
    FormField
  } from '@angular/forms/signals';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-22',
    templateUrl: './dropdown-showcase-22.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      FormField,
      JsonPipe
    ]
  })
  export class DropdownShowcase22Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    private dropdownModel = signal({
      language: null
    });
    public dropdownForm = form(this.dropdownModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="dropdownForm.language" />
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.language().value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    FormField,
    form
  } from '@angular/forms/signals';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-23',
    templateUrl: './dropdown-showcase-23.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      FormField,
      JsonPipe
    ]
  })
  export class DropdownShowcase23Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    private dropdownModel = signal({
      language: {
        name: 'angular'
      }
    });
    public dropdownForm = form(this.dropdownModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="dropdownForm.language" />`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    disabled,
    form,
    FormField
  } from '@angular/forms/signals';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-24',
    templateUrl: './dropdown-showcase-24.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      FormField
    ]
  })
  export class DropdownShowcase24Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    private dropdownModel = signal({
      language: { name: 'angular' }
    });
    public dropdownForm = form(this.dropdownModel, (control) => {
      disabled(control.language)
    });
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown 
      [options]="options()" 
      [placeholder]="'dropdown.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.filter.placeholder' | ddrTranslate"
      [allowDeselect]="true"   
      [validate]="true" 
      [compareFn]="compareFn"
      [formField]="dropdownForm.language">
  
      <ng-template #templateValid>
          <span>{{'dropdown.ok' | ddrTranslate}}</span>
      </ng-template>
  
      <ng-template #templateErrors let-errors="errors">
          @for (error of errors(); track error.kind) {
              <span>{{ error.message | ddrTranslate }}</span>
          }
      </ng-template>
      
  </ddr-dropdown>
  
  <div class="mt-2">
      <span>{{'dropdown.value' | ddrTranslate}}: {{dropdownForm.language().value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    form, FormField,
    required
  } from '@angular/forms/signals';
  import { DdrDropdownComponent } from 'ddr-ng/components/dropdown';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-showcase-25',
    templateUrl: './dropdown-showcase-25.component.html',
    imports: [
      DdrDropdownComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownShowcase25Component {
  
    public options: Signal<DdrSelectItem<ProgrammingLanguage>[]> = signal<DdrSelectItem<ProgrammingLanguage>[]>([
      {
        label: 'Java',
        value: {
          name: 'java',
        },
      },
      {
        label: 'Angular',
        value: {
          name: 'angular',
        },
      },
      {
        label: 'NestJS',
        value: {
          name: 'nestjs',
        },
      },
      {
        label: 'Javascript',
        value: {
          name: 'javascript',
        },
      },
      {
        label: 'C',
        value: {
          name: 'c',
        },
      },
      {
        label: 'C++',
        value: {
          name: 'cpp',
        },
      },
    ]);
  
    public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name;
  
    private dropdownModel = signal({
      language: null
    });
    public dropdownForm = form(this.dropdownModel, (control) => {
      required(control.language, { message: 'dropdown.value.required' })
    });
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      }
    ],
    inputs: [
      {
        item: {
          name: 'options',
          description: 'dropdown.input.options',
          required: true,
          type: 'DdrSelectItem<T>',
          default: '[]'
        }
      },
      {
        item: {
          name: 'showFilter',
          description: 'dropdown.input.showfilter',
          required: false,
          type: 'boolean',
          default: 'true'
        }
      },
      {
        item: {
          name: 'label',
          description: 'dropdown.input.label',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'dropdown.input.inline',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'dropdown.input.validate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'orientation',
          description: 'dropdown.input.orientation',
          required: false,
          type: 'DdrOrientationDropdown',
          default: 'bottom',
          values: "'bottom' | 'top'"
        }
      },
      {
        item: {
          name: 'labelPlaceholderFilter',
          description: 'dropdown.input.labelplaceholderfilter',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'dropdown.input.labelNoResults',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'dropdown.input.disabled',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'dropdown.input.placeholder',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'required',
          description: 'dropdown.input.required',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'translate',
          description: 'dropdown.input.translate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'modalOptions',
          description: 'dropdown.input.modaloptions',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'dropdown.input.tooltipOrientation',
          required: false,
          type: 'DdrOrientationTooltip',
          default: "'bottom'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'dropdown.input.tooltiptext',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'closeOnSelect',
          description: 'dropdown.input.closeonselect',
          required: false,
          type: 'boolean',
          default: "true"
        }
      },
      {
        item: {
          name: 'allowDeselect',
          description: 'dropdown.input.allowdeselect',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'dropdown.input.comparefn',
          required: false,
          type: 'Function',
          default: "(a: T, b: T) => a === b"
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'dropdown.input.transparent',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'name',
          description: 'dropdown.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'textInput',
          description: 'dropdown.input.textinput',
          required: false,
          type: 'string | undefined',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'size',
          description: 'dropdown.input.size',
          default: '"medium"',
          required: false,
          type: 'DdrSize',
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'errors',
          description: 'dropdown.input.errors',
          default: '[]',
          required: false,
          type: 'WithOptionalFieldTree<ValidationError>[]'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'dropdown.value.input',
          default: 'null',
          required: false,
          type: 'T | null'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'selectItem',
          description: 'dropdown.output.selectitem',
          type: 'DdrSelectItem<T>'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'dropdown.template.itemtemplate'
        }
      },
      {
        item: {
          name: 'templateValid',
          description: 'dropdown.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'dropdown.template.templateerrors'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'dropdown.no.results',
          description: 'dropdown.translation.no.results'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-dropdown',
          description: 'dropdown.style.dropdown'
        }
      },
      {
        item: {
          class: 'ddr-dropdown--selectionable',
          description: 'dropdown.style.selectionable'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items',
          description: 'dropdown.style.panel.items'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--top',
          description: 'dropdown.style.panel.items.top'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--modal',
          description: 'dropdown.style.panel.items.modal'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--search',
          description: 'dropdown.style.panel.items.search'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--search--input',
          description: 'dropdown.style.panel.items.search.input'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--no-results',
          description: 'dropdown.style.panel.items.no.results'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items--no-results--no-filter',
          description: 'dropdown.style.panel.items.no.results.no.filter'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__with-filter',
          description: 'dropdown.style.panel.items.with.filter'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__item',
          description: 'dropdown.style.panel.items.item'
        }
      },
      {
        item: {
          class: 'ddr-dropdown__panel-items__item--active',
          description: 'dropdown.style.panel.items.item.active'
        }
      }
    ]
  }

}
