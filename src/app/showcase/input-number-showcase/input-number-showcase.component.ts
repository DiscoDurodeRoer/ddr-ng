import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { InputNumberShowcase1Component } from './showcases/input-number-showcase-1/input-number-showcase-1.component';
import { InputNumberShowcase2Component } from './showcases/input-number-showcase-2/input-number-showcase-2.component';
import { InputNumberShowcase3Component } from './showcases/input-number-showcase-3/input-number-showcase-3.component';
import { InputNumberShowcase4Component } from './showcases/input-number-showcase-4/input-number-showcase-4.component';
import { InputNumberShowcase5Component } from './showcases/input-number-showcase-5/input-number-showcase-5.component';
import { InputNumberShowcase6Component } from './showcases/input-number-showcase-6/input-number-showcase-6.component';
import { InputNumberShowcase7Component } from './showcases/input-number-showcase-7/input-number-showcase-7.component';
import { InputNumberShowcase8Component } from './showcases/input-number-showcase-8/input-number-showcase-8.component';
import { InputNumberShowcase9Component } from './showcases/input-number-showcase-9/input-number-showcase-9.component';
import { InputNumberShowcase10Component } from './showcases/input-number-showcase-10/input-number-showcase-10.component';
import { InputNumberShowcase11Component } from './showcases/input-number-showcase-11/input-number-showcase-11.component';
import { InputNumberShowcase12Component } from './showcases/input-number-showcase-12/input-number-showcase-12.component';
import { InputNumberShowcase13Component } from './showcases/input-number-showcase-13/input-number-showcase-13.component';
import { InputNumberShowcase14Component } from './showcases/input-number-showcase-14/input-number-showcase-14.component';
import { InputNumberShowcase15Component } from './showcases/input-number-showcase-15/input-number-showcase-15.component';
import { InputNumberShowcase16Component } from './showcases/input-number-showcase-16/input-number-showcase-16.component';
import { InputNumberShowcase17Component } from './showcases/input-number-showcase-17/input-number-showcase-17.component';
import { InputNumberShowcase18Component } from './showcases/input-number-showcase-18/input-number-showcase-18.component';
import { InputNumberShowcase19Component } from './showcases/input-number-showcase-19/input-number-showcase-19.component';
import { InputNumberShowcase20Component } from './showcases/input-number-showcase-20/input-number-showcase-20.component';
import { InputNumberShowcase21Component } from './showcases/input-number-showcase-21/input-number-showcase-21.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'app-input-number-showcase',
  templateUrl: './input-number-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    InputNumberShowcase1Component,
    InputNumberShowcase2Component,
    InputNumberShowcase3Component,
    InputNumberShowcase4Component,
    InputNumberShowcase5Component,
    InputNumberShowcase6Component,
    InputNumberShowcase7Component,
    InputNumberShowcase8Component,
    InputNumberShowcase9Component,
    InputNumberShowcase10Component,
    InputNumberShowcase11Component,
    InputNumberShowcase12Component,
    InputNumberShowcase13Component,
    InputNumberShowcase14Component,
    InputNumberShowcase15Component,
    InputNumberShowcase16Component,
    InputNumberShowcase17Component,
    InputNumberShowcase18Component,
    InputNumberShowcase19Component,
    InputNumberShowcase20Component,
    InputNumberShowcase21Component,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    name="input-number-1"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-1',
  templateUrl: './input-number-showcase-1.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase1Component {

  public value: WritableSignal<number> = signal<number>(0);

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [inline]="true"
    name="input-number-2"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-2',
  templateUrl: './input-number-showcase-2.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ],
})
export class InputNumberShowcase2Component {

  public value: WritableSignal<number> = signal<number>(0);

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [disabled]="true"
    name="input-number-3" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-3',
  templateUrl: './input-number-showcase-3.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase3Component { }`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [readonly]="true"
    name="input-number-4" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-4',
  templateUrl: './input-number-showcase-4.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [border]="false"
    name="input-number-5" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-5',
  templateUrl: './input-number-showcase-5.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase5Component { }
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [min]="5"
    [max]="10"
    [validate]="true"
    name="input-number-6"
    [(value)]="value">

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('min'){
                    <span>{{ 'input.number.min' | ddrTranslate }}</span>
                }
                @case('max'){
                    <span>{{ 'input.number.max' | ddrTranslate }}</span>
                }
            }
        }
    </ng-template>

</ddr-input-number>

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-6',
  templateUrl: './input-number-showcase-6.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase6Component {
  public value: WritableSignal<number> = signal<number>(0);
}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [labelBold]="true"
    name="input-number-7" />
`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-7',
  templateUrl: './input-number-showcase-7.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase7Component { }
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate"
    [tooltipText]="'input.number.tooltip' | ddrTranslate"
    name="input-number-8" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-8',
  templateUrl: './input-number-showcase-8.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase8Component { }
`
      },
      {
        htmlCode: `<ddr-input-number 
    [label]="'small' | ddrTranslate" 
    size="small"
    name="input-number-small-9" />

<ddr-input-number 
    [label]="'medium' | ddrTranslate" 
    size="medium"
    name="input-number-medium-9" />

<ddr-input-number 
    [label]="'large' | ddrTranslate" 
    size="large"
    name="input-number-large-9" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-9',
  templateUrl: './input-number-showcase-9.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase9Component {}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    name="input-number-10"
    (clickInput)="clickInput($event)"
    (keyPressed)="keyPressed($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-10',
  templateUrl: './input-number-showcase-10.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputNumberShowcase10Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.number.event.click'),
    );
  }

  keyPressed(value: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.number.keypressed'),
      value.toString(),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [allowNegative]="false"
    name="input-number-11" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-11',
  templateUrl: './input-number-showcase-11.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase11Component {}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [allowDecimals]="false"
    name="input-number-12" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-12',
  templateUrl: './input-number-showcase-12.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase12Component {}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [step]="5" 
    name="input-number-13"
    [(value)]="value" />


<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-13',
  templateUrl: './input-number-showcase-13.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase13Component {

  public value: WritableSignal<number> = signal<number>(0);

}
`
      },
      {
        htmlCode: `<div class="background-test-transparent p-2">
    <ddr-input-number
        [label]="'input.label' | ddrTranslate" 
        [transparent]="true"
        [border]="true"
        name="input-number-14" />
</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-14',
  templateUrl: './input-number-showcase-14.component.html',
  styleUrl: './input-number-showcase-14.component.scss',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe
  ]
})
export class InputNumberShowcase14Component {}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    name="input-number-15"
    [(ngModel)]="value" />

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-15',
  templateUrl: './input-number-showcase-15.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class InputNumberShowcase15Component {

  public value: WritableSignal<number> = signal<number>(0);

}
`
      },
      {
        htmlCode: `<form [formGroup]="inputNumberForm">
    <ddr-input-number
        [label]="'input.number.label' | ddrTranslate" 
        formControlName="input"
        name="input-number-16" />

    <div class="mt-2">
        <span>{{'input.number.value' | ddrTranslate}}: {{inputNumberForm.value | json}}</span>
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
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-16',
  templateUrl: './input-number-showcase-16.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputNumberShowcase16Component {

  public inputNumberForm = new FormGroup({
    input: new FormControl(0)
  })

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [formField]="inputNumberForm.number" />

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{inputNumberForm.number().value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-17',
  templateUrl: './input-number-showcase-17.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase17Component {

  private inputNumberModel = signal({
    number: 0,
  });
  public inputNumberForm = form(this.inputNumberModel);

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [formField]="inputNumberForm.number" />

<div class="mt-2">
    <span>{{'input.number.value' | ddrTranslate}}: {{inputNumberForm.number().value()}}</span>
</div>
`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-18',
  templateUrl: './input-number-showcase-18.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase18Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel);

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [formField]="inputNumberForm.number" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-19',
  templateUrl: './input-number-showcase-19.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase19Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    disabled(control.number)
  });

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [formField]="inputNumberForm.number" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-20',
  templateUrl: './input-number-showcase-20.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase20Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    readonly(control.number)
  });

}
`
      },
      {
        htmlCode: `<ddr-input-number
    [label]="'input.number.label' | ddrTranslate" 
    [validate]="true"
    [formField]="inputNumberForm.number" >

        <ng-template #templateValid>
            <span>{{'input.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @for (error of errors(); track error.kind) {
                @switch(error.kind){
                    @case('max'){
                        <span>{{ error.message | ddrTranslate }} {{error.max}}</span>
                    }
                    @case('min'){
                        <span>{{ error.message | ddrTranslate }} {{error.min}}</span>
                    }
                }
            }
        </ng-template>

</ddr-input-number>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  max,
  min
} from '@angular/forms/signals';
import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-number-showcase-21',
  templateUrl: './input-number-showcase-21.component.html',
  imports: [
    DdrInputNumberComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputNumberShowcase21Component {

  private inputNumberModel = signal({
    number: 10,
  });
  public inputNumberForm = form(this.inputNumberModel, (control) => {
    min(control.number, 5, { message: 'input.number.min' }),
      max(control.number, 20, { message: 'input.number.max' })
  });

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.number.input.label',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.number.input.readonly',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.number.input.validate',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.number.input.inline',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'border',
          description: 'input.number.input.border',
          default: 'false',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'size',
          description: 'input.number.input.size',
          default: "'medium'",
          required: false,
          type: 'DdrSize',
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.number.input.tooltiporientation',
          default: "'bottom'",
          required: false,
          type: 'DdrOrientationTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.number.input.tooltiptext',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.number.input.labelbold',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'focus',
          description: 'input.number.input.focus',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'input.number.input.transparent',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'autocomplete',
          description: 'input.number.input.autocomplete',
          default: "'off'",
          required: false,
          type: 'DdrAutocompleteType',
          values: "'on' | 'off' | 'username' | 'current-password' | 'new-password' | 'name' | 'given-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'postal-code' | 'country' | 'country-name';"
        }
      },
      {
        item: {
          name: 'errors',
          description: 'input.number.input.errors',
          default: '[]',
          required: false,
          type: 'ValidationError[]'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.number.input.disabled',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'dirty',
          description: 'input.number.input.dirty',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'hidden',
          description: 'input.number.input.hidden',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'min',
          description: 'input.number.input.min',
          default: 'undefined',
          required: false,
          type: 'number'
        }
      },
      {
        item: {
          name: 'max',
          description: 'input.number.input.max',
          default: 'undefined',
          required: false,
          type: 'number'
        }
      },
      {
        item: {
          name: 'allowNegative',
          description: 'input.number.input.allownegative',
          default: 'true',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'allowDecimals',
          description: 'input.number.input.allowdecimals',
          default: 'true',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'step',
          description: 'input.number.input.step',
          default: '1',
          required: false,
          type: 'number'
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'input.number.input.aria.label',
          default: 'undefined',
          required: false,
          type: 'string | undefined'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'input.number.input.value',
          default: '0',
          required: false,
          type: 'number'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'hasErrors',
          description: 'input.number.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.number.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.number.output.keypressed',
          type: 'number'
        }
      },
      {
        item: {
          name: 'focusLost',
          description: 'input.number.output.focuslost',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.number.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.number.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-number',
          description: 'input.number.styles.container'
        }
      },
      {
        item: {
          class: 'ddr-input-number__input',
          description: 'input.number.styles.input'
        }
      }
    ]
  }

}
