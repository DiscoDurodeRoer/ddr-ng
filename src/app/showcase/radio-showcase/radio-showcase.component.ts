import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { RadioShowcase1Component } from './showcases/radio-showcase-1/radio-showcase-1.component';
import { RadioShowcase2Component } from './showcases/radio-showcase-2/radio-showcase-2.component';
import { RadioShowcase3Component } from './showcases/radio-showcase-3/radio-showcase-3.component';
import { RadioShowcase4Component } from './showcases/radio-showcase-4/radio-showcase-4.component';
import { RadioShowcase5Component } from './showcases/radio-showcase-5/radio-showcase-5.component';
import { RadioShowcase6Component } from './showcases/radio-showcase-6/radio-showcase-6.component';
import { RadioShowcase10Component } from './showcases/radio-showcase-10/radio-showcase-10.component';
import { RadioShowcase11Component } from './showcases/radio-showcase-11/radio-showcase-11.component';
import { RadioShowcase12Component } from './showcases/radio-showcase-12/radio-showcase-12.component';
import { RadioShowcase7Component } from './showcases/radio-showcase-7/radio-showcase-7.component';
import { RadioShowcase8Component } from './showcases/radio-showcase-8/radio-showcase-8.component';
import { RadioShowcase9Component } from './showcases/radio-showcase-9/radio-showcase-9.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'radio-showcase',
  templateUrl: './radio-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    RadioShowcase1Component,
    RadioShowcase2Component,
    RadioShowcase3Component,
    RadioShowcase4Component,
    RadioShowcase5Component,
    RadioShowcase6Component,
    RadioShowcase7Component,
    RadioShowcase8Component,
    RadioShowcase9Component,
    RadioShowcase10Component,
    RadioShowcase11Component,
    RadioShowcase12Component,
    DdrTranslatePipe
  ]
})
export class RadioShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [(value)]="value"
      (clickRadio)="clickRadio($event)" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-1',
    templateUrl: './radio-showcase-1.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class RadioShowcase1Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
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
  
    public clickRadio(value: string) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        value,
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [(value)]="value" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-2',
    templateUrl: './radio-showcase-2.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class RadioShowcase2Component {
  
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
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(value)]="value"
      (clickRadio)="clickRadio($event)" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'radio-showcase-3',
    templateUrl: './radio-showcase-3.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class RadioShowcase3Component {
  
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
  
    public value: WritableSignal<ProgrammingLanguage | null> = signal<ProgrammingLanguage | null>(null);
  
    public clickRadio(value: ProgrammingLanguage) {
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
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(value)]="value"
      (clickRadio)="clickRadio($event)" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    inject,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  import { DdrToastService } from 'ddr-ng/toast';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { JsonPipe } from '@angular/common';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'radio-showcase-4',
    templateUrl: './radio-showcase-4.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class RadioShowcase4Component {
  
    private ddrToastService: DdrToastService = inject(DdrToastService);
    private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;
  
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
  
    public value: WritableSignal<ProgrammingLanguage> = signal<ProgrammingLanguage>({ name: 'angular' });
  
    public clickRadio(value: ProgrammingLanguage) {
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
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [inline]="true"
      [compareFn]="compareFn"
      [(value)]="value"/>
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>`,
        tsCode: `import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'radio-showcase-5',
    templateUrl: './radio-showcase-5.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe
    ]
  })
  export class RadioShowcase5Component {
  
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
  
    public value: WritableSignal<ProgrammingLanguage | null> = signal<ProgrammingLanguage | null>(null);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [(ngModel)]="value" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-6',
    templateUrl: './radio-showcase-6.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class RadioShowcase6Component {
  
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
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [compareFn]="compareFn"
      [(ngModel)]="value" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'radio-showcase-7',
    templateUrl: './radio-showcase-7.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormsModule
    ]
  })
  export class RadioShowcase7Component {
  
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
  
    public value: WritableSignal<ProgrammingLanguage> = signal<ProgrammingLanguage>({
      name: 'angular'
    });
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<form [formGroup]="radioForm">
      <ddr-radio
          [options]="options()"
          [label]="'radio.label' | ddrTranslate"
          formControlName="language" />
  
      <div class="mt-2">
          <span>{{'radio.value' | ddrTranslate}}: {{radioForm.value | json}}</span>
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
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-8',
    templateUrl: './radio-showcase-8.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class RadioShowcase8Component {
  
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
  
    public radioForm = new FormGroup({
      language: new FormControl('')
    })
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
        ]
      },
      {
        htmlCode: `<form [formGroup]="radioForm">
      <ddr-radio
          [options]="options()"
          [label]="'radio.label' | ddrTranslate"
          [compareFn]="compareFn"
          formControlName="language" />
  
      <div class="mt-2">
          <span>{{'radio.value' | ddrTranslate}}: {{radioForm.value | json}}</span>
      </div>    
  </form>
  `,
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
  import { ProgrammingLanguage } from './bean/programming-language';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { JsonPipe } from '@angular/common';
  
  @Component({
    selector: 'radio-showcase-9',
    templateUrl: './radio-showcase-9.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      ReactiveFormsModule
    ]
  })
  export class RadioShowcase9Component {
  
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
  
    public radioForm = new FormGroup({
      language: new FormControl({ name: 'angular' })
    })
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [formField]="radioForm.language" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{radioForm.language().value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { form, FormField } from '@angular/forms/signals';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-10',
    templateUrl: './radio-showcase-10.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class RadioShowcase10Component {
  
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
  
    private radioModel = signal({
      language: '',
    });
    public radioForm = form(this.radioModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [formField]="radioForm.language" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{radioForm.language().value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal,
    WritableSignal
  } from '@angular/core';
  import { form, FormField } from '@angular/forms/signals';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'radio-showcase-11',
    templateUrl: './radio-showcase-11.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class RadioShowcase11Component {
  
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
  
    private radioModel = signal({
      language: 'angular'
    });
    public radioForm = form(this.radioModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem']
        ]
      },
      {
        htmlCode: `<ddr-radio
      [options]="options()"
      [label]="'radio.label' | ddrTranslate"
      [compareFn]="compareFn"
      [formField]="radioForm.language" />
  
  <div class="mt-2">
      <span>{{'radio.value' | ddrTranslate}}: {{radioForm.language().value() | json}}</span>
  </div>    `,
        tsCode: `import { JsonPipe } from '@angular/common';
  import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { form, FormField } from '@angular/forms/signals';
  import { DdrRadioComponent } from 'ddr-ng/components/radio';
  import { DdrSelectItem } from 'ddr-ng/models';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { ProgrammingLanguage } from './bean/programming-language';
  
  @Component({
    selector: 'radio-showcase-12',
    templateUrl: './radio-showcase-12.component.html',
    imports: [
      DdrRadioComponent,
      DdrTranslatePipe,
      JsonPipe,
      FormField
    ]
  })
  export class RadioShowcase12Component {
  
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
  
    private radioModel = signal({
      language: { name: 'angular' }
    });
    public radioForm = form(this.radioModel);
  
  }
  `,
        classes: [
          CLASSES['DdrSelectItem'],
          CLASSES['ProgrammingLanguage']
        ]
      },
    ],
    inputs: [
      {
        item: {
          name: 'options',
          description: 'radio.input.options',
          default: '[]',
          required: true,
          type: 'DdrSelectItem<T>'
        }
      },
      {
        item: {
          name: 'label',
          description: 'radio.input.label',
          default: '""',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'radio.input.inline',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'compareFn',
          description: 'radio.input.comparefn',
          default: '(a: T, b: T) => a === b',
          type: 'Function',
          required: false
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'radio.input.value',
          default: 'null',
          required: false,
          type: 'T | null'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickRadio',
          description: 'radio.output.clickradio',
          type: 'T'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-radio',
          description: 'radio.style'
        }
      },
      {
        item: {
          class: 'ddr-radio__label',
          description: 'radio.style.label'
        }
      },
      {
        item: {
          class: 'ddr-radio__label--inline',
          description: 'radio.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-radio__container',
          description: 'radio.style.container'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input',
          description: 'radio.style.container.input'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--active',
          description: 'radio.style.container.input.active'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--active',
          description: 'radio.style.container.input.active'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--desactive',
          description: 'radio.style.container.input.desactive'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--input--desactive',
          description: 'radio.style.container.input.desactive'
        }
      },
      {
        item: {
          class: 'ddr-radio__container--label',
          description: 'radio.style.container.label'
        }
      }
    ]
  }

}
