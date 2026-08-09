import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { CheckboxShowcase1Component } from './showcases/checkbox-showcase-1/checkbox-showcase-1.component';
import { CheckboxShowcase10Component } from './showcases/checkbox-showcase-10/checkbox-showcase-10.component';
import { CheckboxShowcase11Component } from './showcases/checkbox-showcase-11/checkbox-showcase-11.component';
import { CheckboxShowcase12Component } from './showcases/checkbox-showcase-12/checkbox-showcase-12.component';
import { CheckboxShowcase13Component } from './showcases/checkbox-showcase-13/checkbox-showcase-13.component';
import { CheckboxShowcase14Component } from './showcases/checkbox-showcase-14/checkbox-showcase-14.component';
import { CheckboxShowcase2Component } from './showcases/checkbox-showcase-2/checkbox-showcase-2.component';
import { CheckboxShowcase3Component } from './showcases/checkbox-showcase-3/checkbox-showcase-3.component';
import { CheckboxShowcase4Component } from './showcases/checkbox-showcase-4/checkbox-showcase-4.component';
import { CheckboxShowcase5Component } from './showcases/checkbox-showcase-5/checkbox-showcase-5.component';
import { CheckboxShowcase6Component } from './showcases/checkbox-showcase-6/checkbox-showcase-6.component';
import { CheckboxShowcase7Component } from './showcases/checkbox-showcase-7/checkbox-showcase-7.component';
import { CheckboxShowcase8Component } from './showcases/checkbox-showcase-8/checkbox-showcase-8.component';
import { CheckboxShowcase9Component } from './showcases/checkbox-showcase-9/checkbox-showcase-9.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';


@Component({
  selector: 'checkbox-showcase',
  templateUrl: './checkbox-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    CheckboxShowcase1Component,
    CheckboxShowcase2Component,
    CheckboxShowcase3Component,
    CheckboxShowcase4Component,
    CheckboxShowcase5Component,
    CheckboxShowcase6Component,
    CheckboxShowcase7Component,
    CheckboxShowcase8Component,
    CheckboxShowcase9Component,
    CheckboxShowcase10Component,
    CheckboxShowcase11Component,
    CheckboxShowcase12Component,
    CheckboxShowcase13Component,
    CheckboxShowcase14Component,
    DdrTranslatePipe,
  ]
})
export class CheckboxShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'checkbox-showcase-1',
    templateUrl: './checkbox-showcase-1.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class CheckboxShowcase1Component {
  
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
  
    public value: WritableSignal<string[]> = signal([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'checkbox-showcase-2',
    templateUrl: './checkbox-showcase-2.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class CheckboxShowcase2Component {
  
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
  
    public value: WritableSignal<string[]> = signal<string[]>(['java', 'c']);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { JsonPipe } from '@angular/common';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-3',
    templateUrl: './checkbox-showcase-3.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class CheckboxShowcase3Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
      `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-4',
    templateUrl: './checkbox-showcase-4.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class CheckboxShowcase4Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal([
      {
        name: 'java',
      },
      {
        name: 'nestjs',
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
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [inline]="true"
      [compareFn]="compareFn"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>
      `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-5',
    templateUrl: './checkbox-showcase-5.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class CheckboxShowcase5Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [disabled]="true"
      [compareFn]="compareFn"
      [(value)]="value" />`,
        tsCode: `import {
  Component,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { ProgrammingLanguage } from './bean/programming-language';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-showcase-6',
  templateUrl: './checkbox-showcase-6.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe
  ]
})
export class CheckboxShowcase6Component {

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

  public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

  public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
    {
      name: 'java',
    },
    {
      name: 'angular',
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
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      (clickCheck)="clickCheck($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  Signal
} from '@angular/core';
import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
import { DdrSelectItem } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase-7',
  templateUrl: './checkbox-showcase-7.component.html',
  imports: [
    DdrCheckboxComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxShowcase7Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

  clickCheck(value: ProgrammingLanguage[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(value),
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
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(ngModel)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    signal,
    Signal,
    WritableSignal
  } from '@angular/core';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { FormsModule } from '@angular/forms';
  
  @Component({
    selector: 'checkbox-showcase-8',
    templateUrl: './checkbox-showcase-8.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class CheckboxShowcase8Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(ngModel)]="value" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-9',
    templateUrl: './checkbox-showcase-9.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class CheckboxShowcase9Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public value: WritableSignal<ProgrammingLanguage[]> = signal<ProgrammingLanguage[]>([
      {
        name: 'java'
      },
      {
        name: 'angular'
      }
    ]);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<form [formGroup]="checkboxForm">
      <ddr-checkbox
          [options]="options()"
          [label]="'checkbox.label' | ddrTranslate"
          [compareFn]="compareFn"
          formControlName="checkbox" />
  
      <div class="mt-2">
          <span>{{'checkbox.value' | ddrTranslate}}: {{checkboxForm.value | json}}</span>
      </div>
  
  </form>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    FormGroup,
    FormControl,
    ReactiveFormsModule
  } from '@angular/forms';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-10',
    templateUrl: './checkbox-showcase-10.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class CheckboxShowcase10Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public checkboxForm: FormGroup = new FormGroup({
      checkbox: new FormControl([])
    })
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<form [formGroup]="checkboxForm">
      <ddr-checkbox
          [options]="options()"
          [label]="'checkbox.label' | ddrTranslate"
          [compareFn]="compareFn"
          formControlName="checkbox" />
  
      <div class="mt-2">
          <span>{{'checkbox.value' | ddrTranslate}}: {{checkboxForm.value | json}}</span>
      </div>
  
  </form>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    FormGroup,
    FormControl,
    ReactiveFormsModule
  } from '@angular/forms';
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-11',
    templateUrl: './checkbox-showcase-11.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class CheckboxShowcase11Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    public checkboxForm: FormGroup = new FormGroup({
      checkbox: new FormControl([
        {
          name: 'java'
        },
        {
          name: 'angular'
        }
      ])
    })
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [formField]="formCheckbox.languages" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{formCheckbox.languages().value() | json}}</span>
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
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'checkbox-showcase-12',
    templateUrl: './checkbox-showcase-12.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class CheckboxShowcase12Component {
  
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
  
    private checkboxModel = signal({
      languages: []
    });
    public formCheckbox = form(this.checkboxModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="formCheckbox.languages" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{formCheckbox.languages().value() | json}}</span>
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
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-13',
    templateUrl: './checkbox-showcase-13.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class CheckboxShowcase13Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private checkboxModel = signal({
      languages: []
    });
    public formCheckbox = form(this.checkboxModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-checkbox
      [options]="options()"
      [label]="'checkbox.label' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="formCheckbox.languages" />
  
  <div class="mt-2">
      <span>{{'checkbox.value' | ddrTranslate}}: {{formCheckbox.languages().value() | json}}</span>
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
  import { DdrCheckboxComponent } from 'ddr-ng/components/checkbox';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'checkbox-showcase-14',
    templateUrl: './checkbox-showcase-14.component.html',
    imports: [
      DdrCheckboxComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class CheckboxShowcase14Component {
  
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
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
    private checkboxModel = signal({
      languages: [
        {
          name: 'angular',
        },
        {
          name: 'javascript',
        }
      ]
    });
    public formCheckbox = form(this.checkboxModel);
  
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
          description: 'checkbox.input.value',
          required: false,
          default: '[]',
          type: 'T[]'
        }
      }
    ],
    inputs: [
      {
        item: {
          name: 'options',
          description: 'checkbox.input.options',
          default: '[]',
          type: 'DdrSelectItem<T>[]',
          required: true
        }
      },
      {
        item: {
          name: 'label',
          description: 'checkbox.input.label',
          default: '""',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'checkbox.input.disabled',
          default: 'false',
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'checkbox.input.inline',
          default: 'false',
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'checkbox.input.comparefn',
          default: '(a: T, b: T) => a === b',
          type: 'Function',
          required: false
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickCheck',
          description: 'checkbox.output.clickcheck',
          type: 'T[]'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-checkbox',
          description: 'checkbox.style.checkbox'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__label',
          description: 'checkbox.style.label'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__label--inline',
          description: 'checkbox.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container',
          description: 'checkbox.style.container'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input',
          description: 'checkbox.style.input'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--active',
          description: 'checkbox.style.input.active'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--desactive',
          description: 'checkbox.style.input.desactive'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--input--disabled',
          description: 'checkbox.style.input.disabled'
        }
      },
      {
        item: {
          class: 'ddr-checkbox__container--label',
          description: 'checkbox.style.container.label'
        }
      }
    ]
  }

}
