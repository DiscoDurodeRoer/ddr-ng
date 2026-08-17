import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { InputPasswordShowcase1Component } from './showcases/input-password-showcase-1/input-password-showcase-1.component';
import { InputPasswordShowcase2Component } from './showcases/input-password-showcase-2/input-password-showcase-2.component';
import { InputPasswordShowcase3Component } from './showcases/input-password-showcase-3/input-password-showcase-3.component';
import { InputPasswordShowcase4Component } from './showcases/input-password-showcase-4/input-password-showcase-4.component';
import { InputPasswordShowcase5Component } from './showcases/input-password-showcase-5/input-password-showcase-5.component';
import { InputPasswordShowcase6Component } from './showcases/input-password-showcase-6/input-password-showcase-6.component';
import { InputPasswordShowcase7Component } from './showcases/input-password-showcase-7/input-password-showcase-7.component';
import { InputPasswordShowcase8Component } from './showcases/input-password-showcase-8/input-password-showcase-8.component';
import { InputPasswordShowcase9Component } from './showcases/input-password-showcase-9/input-password-showcase-9.component';
import { InputPasswordShowcase10Component } from './showcases/input-password-showcase-10/input-password-showcase-10.component';
import { InputPasswordShowcase11Component } from './showcases/input-password-showcase-11/input-password-showcase-11.component';
import { InputPasswordShowcase13Component } from './showcases/input-password-showcase-13/input-password-showcase-13.component';
import { InputPasswordShowcase14Component } from './showcases/input-password-showcase-14/input-password-showcase-14.component';
import { InputPasswordShowcase15Component } from './showcases/input-password-showcase-15/input-password-showcase-15.component';
import { InputPasswordShowcase12Component } from './showcases/input-password-showcase-12/input-password-showcase-12.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'input-password-showcase',
  templateUrl: './input-password-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    InputPasswordShowcase1Component,
    InputPasswordShowcase2Component,
    InputPasswordShowcase3Component,
    InputPasswordShowcase4Component,
    InputPasswordShowcase5Component,
    InputPasswordShowcase6Component,
    InputPasswordShowcase7Component,
    InputPasswordShowcase8Component,
    InputPasswordShowcase9Component,
    InputPasswordShowcase10Component,
    InputPasswordShowcase11Component,
    InputPasswordShowcase12Component,
    InputPasswordShowcase13Component,
    InputPasswordShowcase14Component,
    InputPasswordShowcase15Component,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    name="input-password-1"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'input.password.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-1',
  templateUrl: './input-password-showcase-1.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase1Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [required]="true"
    [minLength]="3"
    [maxLength]="10"
    [validate]="true"
    name="input-password-2">

    <ng-template #templateValid>
        <span>{{'input.password.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('required'){
                    <span>{{ 'input.password.required' | ddrTranslate }}</span>
                }
                @case('minLength'){
                    <span class="me-2">{{'input.minlength.required' | ddrTranslate}} {{ error.minLength }}</span>
                }
                @case('maxLength'){
                    <span class="me-2">{{'input.maxlength.required' | ddrTranslate}} {{ error.maxLength }}</span>
                }
            }
        }
    </ng-template>

</ddr-input-password>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-2',
  templateUrl: './input-password-showcase-2.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase2Component {}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [inline]="true"
    name="input-password-3" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-3',
  templateUrl: './input-password-showcase-3.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase3Component {}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [disabled]="true"
    name="input-password-4"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-4',
  templateUrl: './input-password-showcase-4.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase4Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [readonly]="true"
    name="input-password-5"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-5',
  templateUrl: './input-password-showcase-5.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase5Component {

  public value: WritableSignal<string> = signal<string>('readonly');

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [showPassword]="true"
    name="input-password-6" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-6',
  templateUrl: './input-password-showcase-6.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [tooltipText]="'input.password.tooltip' | ddrTranslate"
    name="input-password-7" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-7',
  templateUrl: './input-password-showcase-7.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase7Component {}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [labelBold]="true"
    name="input-password-8" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-8',
  templateUrl: './input-password-showcase-8.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ]
})
export class InputPasswordShowcase8Component {}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    name="input-password-9"
    (clickInput)="clickInput($event)"
    (keyPressed)="keyPressed($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-9',
  templateUrl: './input-password-showcase-9.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputPasswordShowcase9Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.password.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.password.keypressed'),
      value,
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    name="input-password-10"
    [(ngModel)]="value" />

<div class="col-12">
    <span>{{'input.password.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-10',
  templateUrl: './input-password-showcase-10.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class InputPasswordShowcase10Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<form [formGroup]="inputPasswordForm">
    <ddr-input-password
        [label]="'input.password.label' | ddrTranslate"
        [placeholder]="'input.password.placeholder' | ddrTranslate"
        name="input-password-11"
        formControlName="password" />

    <div class="col-12">
        <span>{{'input.password.value' | ddrTranslate}}: {{inputPasswordForm.value | json}}</span>
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
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-11',
  templateUrl: './input-password-showcase-11.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputPasswordShowcase11Component {

  public inputPasswordForm = new FormGroup({
    password: new FormControl('')
  })

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [formField]="inputPasswordForm.password" />

<div class="col-12">
    <span>{{'input.password.value' | ddrTranslate}}: {{inputPasswordForm.password().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-12',
  templateUrl: './input-password-showcase-12.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase12Component {

  private inputPasswordModel = signal({
    password: '',
  });
  public inputPasswordForm = form(this.inputPasswordModel);

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [formField]="inputPasswordForm.password" />

<div class="mt-2">
    <span>{{'input.password.value' | ddrTranslate}}: {{inputPasswordForm.password().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-13',
  templateUrl: './input-password-showcase-13.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase13Component {

  private inputPasswordModel = signal({
    password: 'disabled',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    disabled(control.password)
  });

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [formField]="inputPasswordForm.password" />

<div class="mt-2">
    <span>{{'input.password.value' | ddrTranslate}}: {{inputPasswordForm.password().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-14',
  templateUrl: './input-password-showcase-14.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputPasswordShowcase14Component {

  private inputPasswordModel = signal({
    password: 'readonly',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    readonly(control.password)
  });

}
`
      },
      {
        htmlCode: `<ddr-input-password
    [label]="'input.password.label' | ddrTranslate"
    [placeholder]="'input.password.placeholder' | ddrTranslate"
    [validate]="true"
    [formField]="inputPasswordForm.password" >

    <ng-template #templateValid>
        <span>{{'input.password.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('minLength'){
                    <span class="me-2">{{'input.minlength.required' | ddrTranslate}} {{ error.minLength }}</span>
                }
                @case('maxLength'){
                    <span class="me-2">{{'input.maxlength.required' | ddrTranslate}} {{ error.maxLength }}</span>
                }
                @default{
                    <span class="me-2">{{ error.message | ddrTranslate }}</span>
                }
            }
        }
    </ng-template>

</ddr-input-password>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  required,
  minLength,
  maxLength,
  pattern,
  FormField
} from '@angular/forms/signals';
import { DdrInputPasswordComponent } from 'ddr-ng/components/input-password';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-password-showcase-15',
  templateUrl: './input-password-showcase-15.component.html',
  imports: [
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputPasswordShowcase15Component {

  private inputPasswordModel = signal({
    password: '',
  });
  public inputPasswordForm = form(this.inputPasswordModel, (control) => {
    required(control.password, { message: 'input.value.required' }),
      minLength(control.password, 8, { message: 'input.minlength.required' }),
      maxLength(control.password, 20, { message: 'input.maxlength.required' })
      pattern(control.password, 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-]).*$/, 
        { message: 'input.pattern' }
      )
  });

}
`
      },
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.password.input.label',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.password.input.required',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.password.input.validate',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.password.input.name',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.password.input.placeholder',
          required: false,
          type: 'string',
          default: "''"
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.password.input.readonly',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.password.input.disabled',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.password.input.inline',
          required: false,
          type: 'boolean',
          default: "false"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.password.input.tooltiptext',
          required: false,
          type: 'string',
          default: "undefined"
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.password.input.tooltiporientation',
          required: false,
          type: 'DdrOrientationTooltip',
          default: "'bottom'",
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.password.input.labelbold',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'showPassword',
          description: 'input.password.input.showpassword',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.password.input.pattern',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'maxLength',
          description: 'input.password.input.maxlength',
          default: "null",
          type: "number | null",
          required: false
        }
      },
      {
        item: {
          name: 'minLength',
          description: 'input.password.input.minlength',
          default: "null",
          type: "number | null'",
          required: false
        }
      },
      {
        item: {
          name: 'errors',
          description: 'input.password.input.errors',
          default: '[]',
          required: false,
          type: 'WithOptionalFieldTree<ValidationError>[]>'
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'input.password.input.aria.label',
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
          description: 'input.password.input.value',
          default: '""',
          required: false,
          type: 'string'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'hasErrors',
          description: 'input.password.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.password.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.password.output.keypressed',
          type: 'string'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.password.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.password.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-password',
          description: 'input.password.input'
        }
      }
    ]
  }

}
