import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DropdownMultipleShowcase1Component } from './showcases/dropdown-multiple-showcase-1/dropdown-multiple-showcase-1.component';
import { DropdownMultipleShowcase10Component } from './showcases/dropdown-multiple-showcase-10/dropdown-multiple-showcase-10.component';
import { DropdownMultipleShowcase11Component } from './showcases/dropdown-multiple-showcase-11/dropdown-multiple-showcase-11.component';
import { DropdownMultipleShowcase12Component } from './showcases/dropdown-multiple-showcase-12/dropdown-multiple-showcase-12.component';
import { DropdownMultipleShowcase13Component } from './showcases/dropdown-multiple-showcase-13/dropdown-multiple-showcase-13.component';
import { DropdownMultipleShowcase14Component } from './showcases/dropdown-multiple-showcase-14/dropdown-multiple-showcase-14.component';
import { DropdownMultipleShowcase15Component } from './showcases/dropdown-multiple-showcase-15/dropdown-multiple-showcase-15.component';
import { DropdownMultipleShowcase2Component } from './showcases/dropdown-multiple-showcase-2/dropdown-multiple-showcase-2.component';
import { DropdownMultipleShowcase3Component } from './showcases/dropdown-multiple-showcase-3/dropdown-multiple-showcase-3.component';
import { DropdownMultipleShowcase4Component } from './showcases/dropdown-multiple-showcase-4/dropdown-multiple-showcase-4.component';
import { DropdownMultipleShowcase5Component } from './showcases/dropdown-multiple-showcase-5/dropdown-multiple-showcase-5.component';
import { DropdownMultipleShowcase6Component } from './showcases/dropdown-multiple-showcase-6/dropdown-multiple-showcase-6.component';
import { DropdownMultipleShowcase7Component } from './showcases/dropdown-multiple-showcase-7/dropdown-multiple-showcase-7.component';
import { DropdownMultipleShowcase8Component } from './showcases/dropdown-multiple-showcase-8/dropdown-multiple-showcase-8.component';
import { DropdownMultipleShowcase9Component } from './showcases/dropdown-multiple-showcase-9/dropdown-multiple-showcase-9.component';
import { DropdownMultipleShowcase18Component } from './showcases/dropdown-multiple-showcase-18/dropdown-multiple-showcase-18.component';
import { DropdownMultipleShowcase19Component } from './showcases/dropdown-multiple-showcase-19/dropdown-multiple-showcase-19.component';
import { DropdownMultipleShowcase20Component } from './showcases/dropdown-multiple-showcase-20/dropdown-multiple-showcase-20.component';
import { DropdownMultipleShowcase21Component } from './showcases/dropdown-multiple-showcase-21/dropdown-multiple-showcase-21.component';
import { DropdownMultipleShowcase22Component } from './showcases/dropdown-multiple-showcase-22/dropdown-multiple-showcase-22.component';
import { DropdownMultipleShowcase23Component } from './showcases/dropdown-multiple-showcase-23/dropdown-multiple-showcase-23.component';
import { DropdownMultipleShowcase16Component } from './showcases/dropdown-multiple-showcase-16/dropdown-multiple-showcase-16.component';
import { DropdownMultipleShowcase17Component } from './showcases/dropdown-multiple-showcase-17/dropdown-multiple-showcase-17.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'dropdown-multiple-showcase',
  templateUrl: './dropdown-multiple-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DropdownMultipleShowcase1Component,
    DropdownMultipleShowcase2Component,
    DropdownMultipleShowcase3Component,
    DropdownMultipleShowcase4Component,
    DropdownMultipleShowcase5Component,
    DropdownMultipleShowcase6Component,
    DropdownMultipleShowcase7Component,
    DropdownMultipleShowcase8Component,
    DropdownMultipleShowcase9Component,
    DropdownMultipleShowcase10Component,
    DropdownMultipleShowcase11Component,
    DropdownMultipleShowcase12Component,
    DropdownMultipleShowcase13Component,
    DropdownMultipleShowcase14Component,
    DropdownMultipleShowcase15Component,
    DropdownMultipleShowcase16Component,
    DropdownMultipleShowcase17Component,
    DropdownMultipleShowcase18Component,
    DropdownMultipleShowcase19Component,
    DropdownMultipleShowcase20Component,
    DropdownMultipleShowcase21Component,
    DropdownMultipleShowcase22Component,
    DropdownMultipleShowcase23Component,
    DdrTranslatePipe
  ]
})
export class DropdownMultipleShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      name="dropdown-multiple-1"
      [(value)]="value" 
      (selectItems)="selectItems($event)" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-multiple-showcase-1',
    templateUrl: './dropdown-multiple-showcase-1.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownMultipleShowcase1Component {
  
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
  
    public value: WritableSignal<string[]> = signal<string[]>([]);
  
    selectItems(items: DdrSelectItem<string>[]) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        JSON.stringify(items),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      name="dropdown-multiple-2"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-multiple-showcase-2',
    templateUrl: './dropdown-multiple-showcase-2.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase2Component {
  
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
  
    public value: WritableSignal<string[]> = signal<string[]>(['java', 'angular']);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-multiple-3"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-3',
    templateUrl: './dropdown-multiple-showcase-3.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase3Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) =>
      a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-multiple-4"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
          `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-4',
    templateUrl: './dropdown-multiple-showcase-4.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase4Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) =>
      a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java',
      },
      {
        name: 'angular',
      },
      {
        name: 'cpp',
      },
    ]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-multiple-5"
      [(value)]="value" />
  
  <ddr-button 
      [text]="'dropdown.multiple.reset' | ddrTranslate" 
      (action)="resetValues()" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
      `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrButtonComponent } from 'ddr-ng/components/button';
  import { DdrToastService } from 'ddr-ng/toast';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-5',
    templateUrl: './dropdown-multiple-showcase-5.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      DdrButtonComponent,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownMultipleShowcase5Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) =>
      a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java',
      },
      {
        name: 'angular',
      },
      {
        name: 'cpp',
      },
    ]);
  
    resetValues() {
      this.value.set([]);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('dropdown.multiple.reset.confirm'),
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
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [disabled]="true"
      [compareFn]="compareFn"
      name="dropdown-multiple-6" />
      `,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-6',
    templateUrl: './dropdown-multiple-showcase-6.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownMultipleShowcase6Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [modalOptions]="true"
      [compareFn]="compareFn"
      name="dropdown-multiple-7"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
          `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-7',
    templateUrl: './dropdown-multiple-showcase-7.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase7Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) =>
      a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java',
      },
      {
        name: 'angular',
      },
      {
        name: 'cpp',
      },
    ]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [showFilter]="false"
      [compareFn]="compareFn"
      name="dropdown-multiple-8"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
      `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-8',
    templateUrl: './dropdown-multiple-showcase-8.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase8Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java',
      },
      {
        name: 'angular',
      },
      {
        name: 'cpp',
      },
    ]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [label]="'dropdown.multiple.label' | ddrTranslate" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-multiple-9" />
  `,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-9',
    templateUrl: './dropdown-multiple-showcase-9.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownMultipleShowcase9Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [label]="'dropdown.multiple.label' | ddrTranslate" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [tooltipText]="'dropdown.multiple.tooltip' | ddrTranslate"
      [compareFn]="compareFn"
      name="dropdown-multiple-10" />
      `,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-10',
    templateUrl: './dropdown-multiple-showcase-10.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownMultipleShowcase10Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `
  <ddr-button-multiple class="mb-3"
      [buttons]="buttonsOrientation()"
      [showSelectedButton]="true"
      [(value)]="orientationDropdown" />
  
  <ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [orientation]="orientationDropdown()"
      [compareFn]="compareFn"
      name="dropdown-multiple-11"
      [(value)]="value" />
      
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import {
    DdrButton,
    DdrSelectItem
  } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrOrientationDropdown } from 'ddr-ng/types';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
  
  @Component({
    selector: 'dropdown-multiple-showcase-11',
    templateUrl: './dropdown-multiple-showcase-11.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrButtonMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase11Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([]);
  
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
  
    public orientationDropdown: WritableSignal<DdrOrientationDropdown> = signal<DdrOrientationDropdown>('bottom');
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      name="dropdown-multiple-12">
  
          <ng-template #itemTemplate let-item="item">
              <span>{{item.value | json}}</span>
          </ng-template>
  
  </ddr-dropdown-multiple>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-12',
    templateUrl: './dropdown-multiple-showcase-12.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class DropdownMultipleShowcase12Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [(value)]="value"
      [compareFn]="compareFn"
      name="dropdown-multiple-13"/>
  
  <ddr-button 
      [text]="'dropdown.multiple.change.options' | ddrTranslate" 
      (action)="changeOptions()" />`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { DdrButtonComponent } from 'ddr-ng/components/button';
  
  @Component({
    selector: 'dropdown-multiple-showcase-13',
    templateUrl: './dropdown-multiple-showcase-13.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrButtonComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class DropdownMultipleShowcase13Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java',
      },
      {
        name: 'angular',
      },
      {
        name: 'cpp',
      },
    ]);
  
    changeOptions() {
      if (this.options()[0].label == 'Javascript') {
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
        ]);
      } else {
        this.options.set([
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
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate(
          'dropdown.multiple.change.options.confirm',
        ),
        JSON.stringify(this.options()),
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
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      [required]="true"
      [validate]="true"
      name="dropdown-multiple-14" >
  
          <ng-template #templateValid>
              <span>{{'dropdown.multiple.ok' | ddrTranslate}}</span>
          </ng-template>
  
          <ng-template #templateErrors let-errors="errors">
              @for (error of errors(); track error.kind) {
                  @switch(error.kind){
                      @case('required'){
                          <span>{{ 'dropdown.multiple.value.required' | ddrTranslate }}</span>
                      }
                  }
              }
          </ng-template>
  
  </ddr-dropdown-multiple>`,
        tsCode: `import {
    Component,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-14',
    templateUrl: './dropdown-multiple-showcase-14.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownMultipleShowcase14Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<div class="background-test-transparent p-2">
      <ddr-dropdown-multiple
          [options]="options()" 
          [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
          [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
          [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
          [compareFn]="compareFn"
          [transparent]="true"
          name="dropdown-multiple-15" />
  </div>
  `,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-15',
    templateUrl: './dropdown-multiple-showcase-15.component.html',
    styleUrl: './dropdown-multiple-showcase-15.component.scss',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe
    ]
  })
  export class DropdownMultipleShowcase15Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
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
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [(ngModel)]="value"
      name="dropdown-multiple-16"  />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-16',
    templateUrl: './dropdown-multiple-showcase-16.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class DropdownMultipleShowcase16Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<form [formGroup]="dropdownMultipleForm">
      <ddr-dropdown-multiple 
          [options]="options()" 
          [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
          [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
          [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
          [compareFn]="compareFn"
          formControlName="dropdownMultiple" 
          name="dropdown-multiple-17" />
  
      <div class="mt-2">
          <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{dropdownMultipleForm.value | json}}</span>
      </div>
  </form>
  `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import {
    FormControl,
    FormGroup,
    ReactiveFormsModule
  } from '@angular/forms';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-17',
    templateUrl: './dropdown-multiple-showcase-17.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class DropdownMultipleShowcase17Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public dropdownMultipleForm = new FormGroup({
      dropdownMultiple: new FormControl([])
    })
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [formField]="dropdownMultipleForm.languages"  />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{dropdownMultipleForm.languages().value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { form, FormField } from '@angular/forms/signals';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  
  @Component({
    selector: 'dropdown-multiple-showcase-18',
    templateUrl: './dropdown-multiple-showcase-18.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase18Component {
  
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
  
    private dropdownMultipleModel = signal({
      languages: []
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [formField]="dropdownMultipleForm.languages"  />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{dropdownMultipleForm.languages().value() | json}}</span>
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
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'dropdown-multiple-showcase-19',
    templateUrl: './dropdown-multiple-showcase-19.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase19Component {
  
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
  
    private dropdownMultipleModel = signal({
      languages: ['java', 'angular']
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [formField]="dropdownMultipleForm.languages"  />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{dropdownMultipleForm.languages().value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    signal,
    Signal
  } from '@angular/core';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import {
    form,
    FormField
  } from '@angular/forms/signals';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-20',
    templateUrl: './dropdown-multiple-showcase-20.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase20Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private dropdownMultipleModel = signal({
      languages: []
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="dropdownMultipleForm.languages"  />
  
  <div class="mt-2">
      <span>{{'dropdown.multiple.value' | ddrTranslate}}: {{dropdownMultipleForm.languages().value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    form,
    FormField
  } from '@angular/forms/signals';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-21',
    templateUrl: './dropdown-multiple-showcase-21.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase21Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private dropdownMultipleModel = signal({
      languages: [
        {
          name: 'java'
        },
        {
          name: 'angular'
        }
      ]
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple 
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate"
      [formField]="dropdownMultipleForm.languages"  />`,
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
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-22',
    templateUrl: './dropdown-multiple-showcase-22.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase22Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private dropdownMultipleModel = signal({
      languages: []
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel, (control) => {
      disabled(control.languages)
    });
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-dropdown-multiple
      [options]="options()" 
      [placeholder]="'dropdown.multiple.placeholder' | ddrTranslate" 
      [label]="'dropdown.multiple.label' | ddrTranslate" 
      [labelNoResults]="'dropdown.multiple.no.items' | ddrTranslate"
      [labelPlaceholderFilter]="'dropdown.multiple.filter.placeholder' | ddrTranslate" 
      [compareFn]="compareFn"
      [validate]="true"
      [formField]="dropdownMultipleForm.languages" >
  
          <ng-template #templateValid>
              <span>{{'dropdown.multiple.ok' | ddrTranslate}}</span>
          </ng-template>
  
          <ng-template #templateErrors let-errors="errors">
              @for (error of errors(); track error.kind) {
                  @switch(error.kind){
                      @case('required'){
                          <span>{{ 'dropdown.multiple.value.required' | ddrTranslate }}</span>
                      }
                  }
              }
          </ng-template>
  
  </ddr-dropdown-multiple>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    form,
    FormField,
    required
  } from '@angular/forms/signals';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrDropdownMultipleComponent } from 'ddr-ng/components/dropdown-multiple';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'dropdown-multiple-showcase-23',
    templateUrl: './dropdown-multiple-showcase-23.component.html',
    imports: [
      DdrDropdownMultipleComponent,
      DdrTranslatePipe,
      FormField
    ]
  })
  export class DropdownMultipleShowcase23Component {
  
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
  
    compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private dropdownMultipleModel = signal({
      languages: []
    });
    public dropdownMultipleForm = form(this.dropdownMultipleModel, (control) => {
      required(control.languages)
    });
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'dropdown.multiple.input.value',
          default: '[]',
          required: false,
          type: 'T[]'
        }
      }
    ],
    inputs: [
      {
        item: {
          name: 'options',
          description: 'dropdown.multiple.input.options',
          required: true,
          default: '[]',
          type: 'DdrSelectItem<T>[]'
        }
      },
      {
        item: {
          name: 'showFilter',
          description: 'dropdown.multiple.input.showFilter',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'label',
          description: 'dropdown.multiple.input.label',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'dropdown.multiple.input.inline',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'orientation',
          description: 'dropdown.multiple.input.orientation',
          required: false,
          default: "'bottom'",
          type: 'DdrOrientationDropdown',
          values: "'bottom' | 'top'"
        }
      },
      {
        item: {
          name: 'labelPlaceholderFilter',
          description: 'dropdown.multiple.input.labelplaceholderfilter',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelNoResults',
          description: 'dropdown.multiple.input.labelnoresults',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'dropdown.multiple.input.disabled',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'dropdown.multiple.input.placeholder',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'required',
          description: 'dropdown.multiple.input.required',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'dropdown.multiple.input.validate',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'translate',
          description: 'dropdown.multiple.input.translate',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'modalOptions',
          description: 'dropdown.multiple.input.modaloptions',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'dropdown.multiple.input.tooltipOrientation',
          required: false,
          default: "'bottom'",
          type: 'DdrOrientationTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'dropdown.multiple.input.tooltiptext',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'dropdown.multiple.input.comparefn',
          required: false,
          default: '(a: T, b: T) => a === b',
          type: 'Function'
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'dropdown.multiple.input.transparent',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'name',
          description: 'dropdown.multiple.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'dropdown.multiple.input.aria.label',
          required: false,
          type: 'string | undefined',
          default: "undefined"
        }
      },
    ],
    outputs: [
      {
        item: {
          name: 'selectItems',
          description: 'dropdown.multiple.output.selectitems',
          type: 'DdrSelectItem<T>[]'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'itemTemplate',
          description: 'dropdown.multiple.template.itemtemplate'
        }
      },
      {
        item: {
          name: 'templateValid',
          description: 'dropdown.multiple.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'dropdown.multiple.template.templateerrors'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'dropdown.multiple.no.results',
          description: 'dropdown.multiple.translation.no.results'
        }
      }
    ],
    // classes: [
    //   CLASSES['DdrSelectItem'],
    //   CLASSES['ProgrammingLanguage']
    // ],
    styles: [
      {
        item: {
          class: 'ddr-dropdown-multiple',
          description: 'dropdown.multiple.style.dropdown'
        }
      }
    ]
  }

}
