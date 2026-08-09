import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ChipShowcase1Component } from './showcases/chip-showcase-1/chip-showcase-1.component';
import { ChipShowcase2Component } from './showcases/chip-showcase-2/chip-showcase-2.component';
import { ChipShowcase3Component } from './showcases/chip-showcase-3/chip-showcase-3.component';
import { ChipShowcase4Component } from './showcases/chip-showcase-4/chip-showcase-4.component';
import { ChipShowcase5Component } from './showcases/chip-showcase-5/chip-showcase-5.component';
import { ChipShowcase6Component } from './showcases/chip-showcase-6/chip-showcase-6.component';
import { ChipShowcase7Component } from './showcases/chip-showcase-7/chip-showcase-7.component';
import { ChipShowcase8Component } from './showcases/chip-showcase-8/chip-showcase-8.component';
import { ChipShowcase9Component } from './showcases/chip-showcase-9/chip-showcase-9.component';
import { ChipShowcase10Component } from './showcases/chip-showcase-10/chip-showcase-10.component';
import { ChipShowcase11Component } from './showcases/chip-showcase-11/chip-showcase-11.component';
import { ChipShowcase12Component } from './showcases/chip-showcase-12/chip-showcase-12.component';
import { ChipShowcase13Component } from './showcases/chip-showcase-13/chip-showcase-13.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'chip-showcase',
  templateUrl: './chip-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ChipShowcase1Component,
    ChipShowcase2Component,
    ChipShowcase3Component,
    ChipShowcase4Component,
    ChipShowcase5Component,
    ChipShowcase6Component,
    ChipShowcase7Component,
    ChipShowcase8Component,
    ChipShowcase9Component,
    ChipShowcase10Component,
    ChipShowcase11Component,
    ChipShowcase12Component,
    ChipShowcase13Component,
    DdrTranslatePipe
  ]
})
export class ChipShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>
<ddr-chip  
    [label]="'chip.example' | ddrTranslate"
    name="chip-1"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-1',
  templateUrl: './chip-showcase-1.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase1Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-2"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-2',
  templateUrl: './chip-showcase-2.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase2Component {

  public value: WritableSignal<string[]> = signal<string[]>(['item 1', 'item 2']);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    separator=","
    name="chip-3"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-3',
  templateUrl: './chip-showcase-3.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase3Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.comma' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    [maxValues]="5"
    name="chip-4"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-4',
  templateUrl: './chip-showcase-4.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase4Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    [canDelete]="false"
    name="chip-5"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-5',
  templateUrl: './chip-showcase-5.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class ChipShowcase5Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-6"
    (insertValue)="insertValue($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-6',
  templateUrl: './chip-showcase-6.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [DdrToastService]
})
export class ChipShowcase6Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  insertValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.insert.element'),
      item,
    );
  }

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-7"
    (removeValue)="removeValue($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-7',
  templateUrl: './chip-showcase-7.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase7Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  removeValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.remove.element'),
      item,
    );
  }
}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-8"
    [(value)]="value"
    (clickValue)="clickValue($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-8',
  templateUrl: './chip-showcase-8.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase8Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string[]> = signal<string[]>(['item 1', 'item 2']);

  clickValue(item: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.selected.element'),
      item,
    );
  }
}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-9"
    (getValues)="getValues($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-9',
  templateUrl: './chip-showcase-9.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcase9Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  getValues(items: string[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('chip.elements'),
      JSON.stringify(items),
    );
  }
}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    name="chip-10"
    [(ngModel)]="value" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-10',
  templateUrl: './chip-showcase-10.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class ChipShowcase10Component {

  public value: WritableSignal<string[]> = signal<string[]>([]);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<form [formGroup]="chipForm">
    <ddr-chip 
        [label]="'chip.example' | ddrTranslate"
        name="chip-11"
        formControlName="items" />

    <div class="mt-2">
        <span>{{'chip.elements' | ddrTranslate}}: {{chipForm.value | json}}</span>
    </div>
</form>
`,
        tsCode: `import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-11',
  templateUrl: './chip-showcase-11.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class ChipShowcase11Component {

  public chipForm: FormGroup = new FormGroup({
    items: new FormControl(['item1', 'item2'])
  })

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    [formField]="formChip.items" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{formChip.items().value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-12',
  templateUrl: './chip-showcase-12.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class ChipShowcase12Component {

  private chipModel = signal({
    items: []
  });
  public formChip = form(this.chipModel);

}
`
      },
      {
        htmlCode: `<p class="mt-2">{{'chip.enter' | ddrTranslate}}</p>

<ddr-chip 
    [label]="'chip.example' | ddrTranslate"
    [formField]="formChip.items" />

<div class="mt-2">
    <span>{{'chip.elements' | ddrTranslate}}: {{formChip.items().value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrChipComponent } from 'ddr-ng/components/chip';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'chip-showcase-13',
  templateUrl: './chip-showcase-13.component.html',
  imports: [
    DdrChipComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class ChipShowcase13Component {

  private chipModel = signal({
    items: ['item 1', 'item 2']
  });
  public formChip = form(this.chipModel);

}
`
      },
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'chip.input.value',
          default: '[]',
          required: false,
          type: 'string[]'
        }
      }
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'chip.input.label',
          required: false,
          type: 'string',
          default: 'undefined',
        }
      },
      {
        item: {
          name: 'maxValues',
          description: 'chip.input.maxvalues',
          required: false,
          type: 'number',
          default: '0'
        }
      },
      {
        item: {
          name: 'separator',
          description: 'chip.input.separator',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'name',
          description: 'chip.input.name',
          required: false,
          type: 'string',
          default: 'undefined',
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'chip.input.readonly',
          required: false,
          type: 'boolean',
          default: 'false',
        }
      },
      {
        item: {
          name: 'canDelete',
          description: 'chip.input.candelete',
          required: false,
          type: 'boolean',
          default: 'true',
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'insertValue',
          description: 'chip.output.insertvalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'removeValue',
          description: 'chip.output.removevalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'clickValue',
          description: 'chip.output.clickvalue',
          type: 'string'
        }
      },
      {
        item: {
          name: 'getValues',
          description: 'chip.output.getvalues',
          type: 'string[]'
        }
      },
    ],
    styles: [
      {
        item: {
          class: 'ddr-chip',
          description: 'chip.style.chip'
        }
      },
      {
        item: {
          class: 'ddr-chip__label',
          description: 'chip.style.label'
        }
      },
      {
        item: {
          class: 'ddr-chip__container',
          description: 'chip.style.container'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__values',
          description: 'chip.style.container.values'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__input',
          description: 'chip.style.container.input'
        }
      },
      {
        item: {
          class: 'ddr-chip__container__input',
          description: 'chip.style.container.input'
        }
      },
    ]
  }

}
