import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { InputGroupShowcase1Component } from './showcases/input-group-showcase-1/input-group-showcase-1.component';
import { InputGroupShowcase10Component } from './showcases/input-group-showcase-10/input-group-showcase-10.component';
import { InputGroupShowcase11Component } from './showcases/input-group-showcase-11/input-group-showcase-11.component';
import { InputGroupShowcase12Component } from './showcases/input-group-showcase-12/input-group-showcase-12.component';
import { InputGroupShowcase2Component } from './showcases/input-group-showcase-2/input-group-showcase-2.component';
import { InputGroupShowcase3Component } from './showcases/input-group-showcase-3/input-group-showcase-3.component';
import { InputGroupShowcase4Component } from './showcases/input-group-showcase-4/input-group-showcase-4.component';
import { InputGroupShowcase5Component } from './showcases/input-group-showcase-5/input-group-showcase-5.component';
import { InputGroupShowcase6Component } from './showcases/input-group-showcase-6/input-group-showcase-6.component';
import { InputGroupShowcase7Component } from './showcases/input-group-showcase-7/input-group-showcase-7.component';
import { InputGroupShowcase8Component } from './showcases/input-group-showcase-8/input-group-showcase-8.component';
import { InputGroupShowcase9Component } from './showcases/input-group-showcase-9/input-group-showcase-9.component';
import { InputGroupShowcase13Component } from './showcases/input-group-showcase-13/input-group-showcase-13.component';
import { InputGroupShowcase14Component } from './showcases/input-group-showcase-14/input-group-showcase-14.component';
import { InputGroupShowcase15Component } from './showcases/input-group-showcase-15/input-group-showcase-15.component';
import { InputGroupShowcase16Component } from './showcases/input-group-showcase-16/input-group-showcase-16.component';
import { InputGroupShowcase17Component } from './showcases/input-group-showcase-17/input-group-showcase-17.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'input-group-showcase',
  templateUrl: './input-group-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    InputGroupShowcase1Component,
    InputGroupShowcase2Component,
    InputGroupShowcase3Component,
    InputGroupShowcase4Component,
    InputGroupShowcase5Component,
    InputGroupShowcase6Component,
    InputGroupShowcase7Component,
    InputGroupShowcase8Component,
    InputGroupShowcase9Component,
    InputGroupShowcase10Component,
    InputGroupShowcase11Component,
    InputGroupShowcase12Component,
    InputGroupShowcase13Component,
    InputGroupShowcase14Component,
    InputGroupShowcase15Component,
    InputGroupShowcase16Component,
    InputGroupShowcase17Component,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    name="input-group-1"
    [(value)]="value"
    (action)="clickButton($event)" />

<div class="mt-2">
    <span>{{'input.group.value' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-1',
  templateUrl: './input-group-showcase-1.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string> = signal<string>('');

  clickButton(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click'),
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [required]="true"
    [validate]="true"
    name="input-group-2">

        <ng-template #templateValid>
            <span>{{'input.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @for (error of errors(); track error.kind) {
                @switch(error.kind){
                    @case('required'){
                        <span>{{ 'input.group.value.required' | ddrTranslate }}</span>
                    }
                }
            }
        </ng-template>

</ddr-input-group>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-2',
  templateUrl: './input-group-showcase-2.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase2Component {}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    [inline]="true"
    icon="bi bi-send"
    name="input-group-3" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-3',
  templateUrl: './input-group-showcase-3.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase3Component {}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [disabled]="true"
    name="input-group-4"
    [(value)]="value"
    (action)="clickButton($event)" />`,
        tsCode: `import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-4',
  templateUrl: './input-group-showcase-4.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcase4Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string> = signal<string>('disabled');

  clickButton(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [disabledButton]="true"
    name="input-group-5"
    (action)="clickButton($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-5',
  templateUrl: './input-group-showcase-5.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcase5Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [tooltipText]="'input.group.tooltip' | ddrTranslate"
    name="input-group-6" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-6',
  templateUrl: './input-group-showcase-6.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [labelBold]="true"
    name="input-group-7" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-7',
  templateUrl: './input-group-showcase-7.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase7Component {}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [minLength]="5"
    [maxLength]="20"
    [validate]="true"
    name="input-group-8">

        <ng-template #templateValid>
            <span>{{'input.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @for (error of errors(); track error.kind) {
                @switch(error.kind){
                    @case('minLength'){
                         <span>{{ 'input.input.minlength' | ddrTranslate }}</span>
                    }
                    @case('maxLength'){
                        <span>{{ 'input.input.minlength' | ddrTranslate }}</span>
                    }
                }
            }
        </ng-template>

</ddr-input-group>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-8',
  templateUrl: './input-group-showcase-8.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase8Component {}
`,
        name: 'input.group.example.8.1'
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    name="input-group-9"
    (clickInput)="clickInput($event)"
    (keyPressed)="keyPressed($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-9',
  templateUrl: './input-group-showcase-9.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcase9Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.group.keypressed'),
      value,
    );
  }

}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'small' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    size="small"
    name="input-group-small-10" />

<ddr-input-group
    [label]="'medium' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    size="medium"
    name="input-group-medium-10" />

<ddr-input-group
    [label]="'large' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    size="large"
    name="input-group-large-10" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-10',
  templateUrl: './input-group-showcase-10.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase10Component {}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'input.group.focus' | ddrTranslate"
    (action)="focusInputGroup()" />

<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [focus]="focus()"
    name="input-group-11"
    (focusLost)="focusLost()"  />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-11',
  templateUrl: './input-group-showcase-11.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase11Component {

  public focus: WritableSignal<boolean> = signal<boolean>(false);

  focusInputGroup() {
    this.focus.set(true);
  }

  focusLost() {
    this.focus.set(true);
  }
}
`
      },
      {
        htmlCode: `<div class="background-test-transparent p-2">
    <ddr-input-group
        [label]="'input.group.label' | ddrTranslate"
        [placeholder]="'input.group.placeholder' | ddrTranslate"
        icon="bi bi-send"
        [transparent]="true"
    name="input-group-12" />
</div>
`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-12',
  templateUrl: './input-group-showcase-12.component.html',
  styleUrl: './input-group-showcase-12.component.scss',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ]
})
export class InputGroupShowcase12Component {}
`,
        cssCode: `.background-test-transparent {
    background: turquoise;
}`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [(ngModel)]="value"
    name="input-group-13" />

<div class="mt-2">
    <span>{{'input.group.value' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-13',
  templateUrl: './input-group-showcase-13.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class InputGroupShowcase13Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<form [formGroup]="inputForm">
    <ddr-input-group
        [label]="'input.group.label' | ddrTranslate"
        [placeholder]="'input.group.placeholder' | ddrTranslate"
        icon="bi bi-send"
        formControlName="input"
    name="input-group-14" />

    <div class="mt-2">
        <span>{{'input.group.value' | ddrTranslate}}: {{inputForm.value | json}}</span>
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
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-14',
  templateUrl: './input-group-showcase-14.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputGroupShowcase14Component {

  public inputForm = new FormGroup({
    input: new FormControl('')
  })
}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [formField]="inputForm.text" />

<div class="mt-2">
    <span>{{'input.group.value' | ddrTranslate}}: {{inputForm.text().value() | json}}</span>
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
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-15',
  templateUrl: './input-group-showcase-15.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class InputGroupShowcase15Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel);

}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [formField]="inputForm.text" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-16',
  templateUrl: './input-group-showcase-16.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputGroupShowcase16Component {

  private inputModel = signal({
    text: 'disabled',
  });
  public inputForm = form(this.inputModel, (control) => {
    disabled(control.text)
  });

}
`
      },
      {
        htmlCode: `<ddr-input-group
    [label]="'input.group.label' | ddrTranslate"
    [placeholder]="'input.group.placeholder' | ddrTranslate"
    icon="bi bi-send"
    [validate]="true"
    [formField]="inputForm.text">

        <ng-template #templateValid>
            <span>{{'input.ok' | ddrTranslate}}</span>
        </ng-template>

        <ng-template #templateErrors let-errors="errors">
            @for (error of errors(); track error.kind) {
                @switch(error.kind){
                    @case('minLength'){
                        <span>{{ error.message | ddrTranslate }} {{error.minLength}}</span>
                    }
                    @case('maxLength'){
                        <span>{{ error.message | ddrTranslate }} {{error.maxLength}}</span>
                    }
                    @default {
                        <span>{{ error.message | ddrTranslate }}</span>
                    }
                }
            }
        </ng-template>

</ddr-input-group>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  FormField,
  form,
  maxLength,
  minLength,
  required
} from '@angular/forms/signals';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-17',
  templateUrl: './input-group-showcase-17.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputGroupShowcase17Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
    minLength(control.text, 5, { message: 'input.group.minlength.required' })
    maxLength(control.text, 20, { message: 'input.group.maxlength.required' })
  });

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.group.input.label',
          default: 'undefined',
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'icon',
          description: 'input.group.input.icon',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.group.input.name',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.group.input.placeholder',
          default: "''",
          type: 'string',
          required: false
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.group.input.validate',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.group.input.required',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.group.input.readonly',
          default: "false",
          type: 'boolean',
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.group.input.pattern',
          default: "[]",
          type: 'RexExp[]',
          required: false
        }
      },
      {
        item: {
          name: 'maxLength',
          description: 'input.group.input.maxlength',
          default: "null",
          type: "number | null",
          required: false
        }
      },
      {
        item: {
          name: 'minLength',
          description: 'input.group.input.minlength',
          default: "null",
          type: "number | null'",
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.group.input.inline',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.group.input.disabled',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'disabledButton',
          description: 'input.group.input.disabledbutton',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.group.input.tooltiptext',
          default: "undefined",
          type: "string",
          required: false
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.group.input.tooltiporientation',
          default: '"bottom"',
          required: false,
          type: 'DdrOrientationTooltip',
          values: '"top" | "bottom" | "left" | "right"'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.group.input.labelbold',
          default: "false",
          type: "boolean",
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'input.group.input.size',
          default: "'medium'",
          type: "DdrSize",
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'focus',
          description: 'input.group.input.focus',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'input.group.input.transparent',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'autocomplete',
          description: 'input.group.input.autocomplete',
          type: 'DdrAutocompleteType',
          default: "'off'",
          required: false,
          values: "'on' | 'off' | 'username' | 'current-password' | 'new-password' | 'name' | 'given-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'postal-code' | 'country' | 'country-name';"
        }
      },
      {
        item: {
          name: 'dirty',
          description: 'input.group.input.dirty',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'errors',
          description: 'input.group.input.errors',
          default: '[]',
          required: false,
          type: 'WithOptionalFieldTree<ValidationError>[]>'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'input.group.input.value',
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
          description: 'input.group.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'action',
          description: 'input.group.output.action',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.group.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.group.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'focusLost',
          description: 'input.group.output.focuslost',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.group.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.group.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-group',
          description: 'input.group.style'
        }
      },
      {
        item: {
          class: 'ddr-input-group__input',
          description: 'input.group.style.input'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button',
          description: 'input.group.style.button'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button--is-valid',
          description: 'input.group.style.button.is.valid'
        }
      },
      {
        item: {
          class: 'ddr-input-group__button--is-invalid',
          description: 'input.group.style.button.is.invalid'
        }
      },
    ]
  }

}
