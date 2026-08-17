import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { TextareaShowcase1Component } from './showcases/textarea-showcase-1/textarea-showcase-1.component';
import { TextareaShowcase2Component } from './showcases/textarea-showcase-2/textarea-showcase-2.component';
import { TextareaShowcase3Component } from './showcases/textarea-showcase-3/textarea-showcase-3.component';
import { TextareaShowcase4Component } from './showcases/textarea-showcase-4/textarea-showcase-4.component';
import { TextareaShowcase5Component } from './showcases/textarea-showcase-5/textarea-showcase-5.component';
import { TextareaShowcase6Component } from './showcases/textarea-showcase-6/textarea-showcase-6.component';
import { TextareaShowcase7Component } from './showcases/textarea-showcase-7/textarea-showcase-7.component';
import { TextareaShowcase8Component } from './showcases/textarea-showcase-8/textarea-showcase-8.component';
import { TextareaShowcase9Component } from './showcases/textarea-showcase-9/textarea-showcase-9.component';
import { TextareaShowcase10Component } from './showcases/textarea-showcase-10/textarea-showcase-10.component';
import { TextareaShowcase11Component } from './showcases/textarea-showcase-11/textarea-showcase-11.component';
import { TextareaShowcase12Component } from './showcases/textarea-showcase-12/textarea-showcase-12.component';
import { TextareaShowcase13Component } from './showcases/textarea-showcase-13/textarea-showcase-13.component';
import { TextareaShowcase14Component } from './showcases/textarea-showcase-14/textarea-showcase-14.component';
import { TextareaShowcase15Component } from './showcases/textarea-showcase-15/textarea-showcase-15.component';
import { TextareaShowcase16Component } from './showcases/textarea-showcase-16/textarea-showcase-16.component';
import { TextareaShowcase17Component } from './showcases/textarea-showcase-17/textarea-showcase-17.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'textarea-showcase',
  templateUrl: './textarea-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    TextareaShowcase1Component,
    TextareaShowcase2Component,
    TextareaShowcase3Component,
    TextareaShowcase4Component,
    TextareaShowcase5Component,
    TextareaShowcase6Component,
    TextareaShowcase7Component,
    TextareaShowcase8Component,
    TextareaShowcase9Component,
    TextareaShowcase10Component,
    TextareaShowcase11Component,
    TextareaShowcase12Component,
    TextareaShowcase13Component,
    TextareaShowcase14Component,
    TextareaShowcase15Component,
    TextareaShowcase16Component,
    TextareaShowcase17Component,
    DdrTranslatePipe,
  ]
})
export class TextareaShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    name="textarea-1"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'textarea.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-1',
  templateUrl: './textarea-showcase-1.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase1Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    name="textarea-2"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'textarea.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-2',
  templateUrl: './textarea-showcase-2.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase2Component {

  public value: WritableSignal<string> = signal<string>('Lorem ipsum dolor sit amet consectetur adipisicing elit.');

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [minLength]="3"
    [maxLength]="10" 
    [required]="true" 
    [validate]="true"
    name="textarea-3">

    <ng-template #templateValid>
        <span>{{'textarea.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('required'){
                    <span class="me-2">{{ 'textarea.value.required' | ddrTranslate }}</span>
                }
                @case('minLength'){
                    <span class="me-2">{{ 'textarea.minlength.required' | ddrTranslate }}: {{ error.minLength }}</span>
                }
                @case('maxLength'){
                    <span class="me-2">{{ 'textarea.maxlength.required' | ddrTranslate }}: {{ error.maxLength }}</span>
                }
            }
        }
    </ng-template>
</ddr-textarea>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-3',
  templateUrl: './textarea-showcase-3.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase3Component {}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [inline]="true"
    name="textarea-4" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-4',
  templateUrl: './textarea-showcase-4.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [rows]="15"
    [cols]="30"
    name="textarea-5" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-5',
  templateUrl: './textarea-showcase-5.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase5Component {}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [tooltipText]="'textarea.tooltip' | ddrTranslate"
    name="textarea-6" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-6',
  templateUrl: './textarea-showcase-6.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [labelBold]="true"
    name="textarea-7" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-7',
  templateUrl: './textarea-showcase-7.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase7Component {}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    name="textarea-8"
    (clickTextarea)="clickTextarea($event)"
    (keyPressed)="keyPressed($event)"
    (blur)="blur()" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-8',
  templateUrl: './textarea-showcase-8.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TextareaShowcase8Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickTextarea($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('textarea.keypressed'),
      value,
    );
  }

  blur() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.blur'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [disabled]="true"
    name="textarea-9"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-9',
  templateUrl: './textarea-showcase-9.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase9Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [readonly]="true"
    name="textarea-10"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-10',
  templateUrl: './textarea-showcase-10.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe
  ]
})
export class TextareaShowcase10Component {

  public value: WritableSignal<string> = signal<string>('readonly');

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    name="textarea-11"
    [(ngModel)]="value" />

<div class="mt-2">
    <span>{{'textarea.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-11',
  templateUrl: './textarea-showcase-11.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class TextareaShowcase11Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<form [formGroup]="textareaForm">
    <ddr-textarea 
        [label]="'textarea.label' | ddrTranslate" 
        [placeholder]="'textarea.placeholder' | ddrTranslate"
        formControlName="textarea"
        name="textarea-12" />

    <div class="mt-2">
        <span>{{'textarea.value' | ddrTranslate}}: {{textareaForm.value | json}}</span>
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
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-12',
  templateUrl: './textarea-showcase-12.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class TextareaShowcase12Component {

  public textareaForm = new FormGroup({
    textarea: new FormControl('')
  })

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [formField]="textareaForm.textarea" />

<div class="mt-2">
    <span>{{'textarea.value' | ddrTranslate}}: {{textareaForm.textarea().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-13',
  templateUrl: './textarea-showcase-13.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase13Component {

  private textareaModel = signal({
    textarea: '',
  });
  public textareaForm = form(this.textareaModel);

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [formField]="textareaForm.textarea" />

<div class="mt-2">
    <span>{{'textarea.value' | ddrTranslate}}: {{textareaForm.textarea().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-14',
  templateUrl: './textarea-showcase-14.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class TextareaShowcase14Component {

  private textareaModel = signal({
    textarea: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  });
  public textareaForm = form(this.textareaModel);

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [validate]="true"
    [formField]="textareaForm.textarea">

    <ng-template #templateValid>
    <span>{{'textarea.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
    @for (error of errors(); track error.kind) {
        @switch(error.kind){
            @case('minLength'){
                <span class="me-2">{{ error.message | ddrTranslate }} {{ error.minLength }}</span>
            }
            @case('maxLength'){
                <span class="me-2">{{ error.message | ddrTranslate }} {{ error.maxLength }}</span>
            }
            @default {
                <span>{{ error.message | ddrTranslate }}</span>
            }
        }
        }
    </ng-template>
</ddr-textarea>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  required,
  minLength,
  maxLength,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-15',
  templateUrl: './textarea-showcase-15.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase15Component {

  private textareaModel = signal({
    textarea: ''
  });
  public textareaForm = form(this.textareaModel, (control) => {
    required(control.textarea, { message: 'textarea.value.required' });
    minLength(control.textarea, 3, { message: 'textarea.minlength.required' });
    maxLength(control.textarea, 10, { message: 'textarea.maxlength.required' });
  });

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [formField]="textareaForm.textarea" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-16',
  templateUrl: './textarea-showcase-16.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase16Component {

  private textareaModel = signal({
    textarea: 'disabled'
  });
  public textareaForm = form(this.textareaModel, (control) => {
    disabled(control.textarea)
  });

}
`
      },
      {
        htmlCode: `<ddr-textarea 
    [label]="'textarea.label' | ddrTranslate" 
    [placeholder]="'textarea.placeholder' | ddrTranslate"
    [formField]="textareaForm.textarea" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrTextareaComponent } from 'ddr-ng/components/textarea';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'textarea-showcase-17',
  templateUrl: './textarea-showcase-17.component.html',
  imports: [
    DdrTextareaComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class TextareaShowcase17Component {

  private textareaModel = signal({
    textarea: 'readonly'
  });
  public textareaForm = form(this.textareaModel, (control) => {
    readonly(control.textarea)
  });

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'placeholder',
          description: 'textarea.input.placeholder',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'label',
          description: 'textarea.input.label',
          required: false,
          default: "undefined",
          type: 'string'
        }
      },
      {
        item: {
          name: 'name',
          description: 'textarea.input.name',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'textarea.input.disabled',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'textarea.input.readonly',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'required',
          description: 'textarea.input.required',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'maxLength',
          description: 'textarea.input.maxlength',
          required: false,
          default: "null",
          type: 'number | null'
        }
      },
      {
        item: {
          name: 'minLength',
          description: 'textarea.input.minlength',
          required: false,
          default: "null",
          type: 'number | null'
        }
      },
      {
        item: {
          name: 'validate',
          description: 'textarea.input.validate',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'textarea.input.inline',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'rows',
          description: 'textarea.input.rows',
          required: false,
          default: "1",
          type: 'number'
        }
      },
      {
        item: {
          name: 'cols',
          description: 'textarea.input.cols',
          required: false,
          default: "10",
          type: 'number'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'textarea.input.labelbold',
          required: false,
          default: "false",
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'textarea.input.tooltiptext',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'textarea.input.tooltipOrientation',
          default: "'bottom'",
          required: false,
          type: 'DdrOrientationTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'dirty',
          description: 'textare.input.dirty',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'errors',
          description: 'textarea.input.errors',
          default: '[]',
          required: false,
          type: 'WithOptionalFieldTree<ValidationError>[]'
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'textarea.input.aria.label',
          default: 'string | undefined',
          required: false,
          type: 'string | undefined'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'textarea.input.value',
          default: '""',
          required: false,
          type: 'string'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickTextarea',
          description: 'textarea.output.clicktextarea',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'textarea.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'blur',
          description: 'textarea.output.blur',
          type: 'void'
        }
      },
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'textarea.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'textarea.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-textarea',
          description: 'textarea.style'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label',
          description: 'textarea.style.label'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label--inline',
          description: 'textarea.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-textarea__label--inline',
          description: 'textarea.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-textarea__textarea',
          description: 'textarea.style.textarea'
        }
      },
      {
        item: {
          class: 'ddr-textarea__textarea--inline',
          description: 'textarea.style.textarea.inline'
        }
      },
    ]
  }

}
