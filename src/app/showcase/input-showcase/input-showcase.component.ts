import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { InputShowcase1Component } from './showcases/input-showcase-1/input-showcase-1.component';
import { InputShowcase12Component } from './showcases/input-showcase-12/input-showcase-12.component';
import { InputShowcase10Component } from './showcases/input-showcase-10/input-showcase-10.component';
import { InputShowcase11Component } from './showcases/input-showcase-11/input-showcase-11.component';
import { InputShowcase2Component } from './showcases/input-showcase-2/input-showcase-2.component';
import { InputShowcase3Component } from './showcases/input-showcase-3/input-showcase-3.component';
import { InputShowcase4Component } from './showcases/input-showcase-4/input-showcase-4.component';
import { InputShowcase5Component } from './showcases/input-showcase-5/input-showcase-5.component';
import { InputShowcase6Component } from './showcases/input-showcase-6/input-showcase-6.component';
import { InputShowcase7Component } from './showcases/input-showcase-7/input-showcase-7.component';
import { InputShowcase8Component } from './showcases/input-showcase-8/input-showcase-8.component';
import { InputShowcase9Component } from './showcases/input-showcase-9/input-showcase-9.component';
import { InputShowcase13Component } from './showcases/input-showcase-13/input-showcase-13.component';
import { InputShowcase14Component } from './showcases/input-showcase-14/input-showcase-14.component';
import { InputShowcase15Component } from './showcases/input-showcase-15/input-showcase-15.component';
import { InputShowcase16Component } from './showcases/input-showcase-16/input-showcase-16.component';
import { InputShowcase17Component } from './showcases/input-showcase-17/input-showcase-17.component';
import { InputShowcase18Component } from './showcases/input-showcase-18/input-showcase-18.component';
import { InputShowcase19Component } from './showcases/input-showcase-19/input-showcase-19.component';
import { InputShowcase20Component } from './showcases/input-showcase-20/input-showcase-20.component';
import { InputShowcase21Component } from './showcases/input-showcase-21/input-showcase-21.component';
import { InputShowcase22Component } from './showcases/input-showcase-22/input-showcase-22.component';
import { InputShowcase23Component } from './showcases/input-showcase-23/input-showcase-23.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'input-showcase',
  templateUrl: './input-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    InputShowcase1Component,
    InputShowcase2Component,
    InputShowcase3Component,
    InputShowcase4Component,
    InputShowcase5Component,
    InputShowcase6Component,
    InputShowcase7Component,
    InputShowcase8Component,
    InputShowcase9Component,
    InputShowcase10Component,
    InputShowcase11Component,
    InputShowcase12Component,
    InputShowcase13Component,
    InputShowcase14Component,
    InputShowcase15Component,
    InputShowcase16Component,
    InputShowcase17Component,
    InputShowcase18Component,
    InputShowcase19Component,
    InputShowcase20Component,
    InputShowcase21Component,
    InputShowcase22Component,
    InputShowcase23Component,
    DdrTranslatePipe,
  ]
})
export class InputShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    name="input-1"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'input.value' | ddrTranslate}}: {{value() | json}}</span>
</div>
`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-1',
  templateUrl: './input-showcase-1.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    JsonPipe
  ]
})
export class InputShowcase1Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [inline]="true"
    name="input-2" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-2',
  templateUrl: './input-showcase-2.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase2Component {}
`
      },
      {
        htmlCode: `<form (submit)="submitForm($event)">
    <ddr-input 
        [label]="'input.label' | ddrTranslate" 
        [placeholder]="'input.placeholder' | ddrTranslate" 
        [required]="true"
        name="input-3" />
    <ddr-button
        type="submit"
        [text]="'button.text' | ddrTranslate" />
</form>
`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-3',
  templateUrl: './input-showcase-3.component.html',
  imports: [
    DdrInputComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase3Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  submitForm(event: Event) {
    event.preventDefault();
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.form.submit'),
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    [border]="false"
    name="input-4" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-4',
  templateUrl: './input-showcase-4.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate"
    [placeholder]="'input.placeholder' | ddrTranslate"
    [required]="true" 
    [validate]="true"
    name="input-5"
    (hasErrors)="hasErrors($event)" >

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('required'){
                    <span>{{ 'input.value.required' | ddrTranslate }}</span>
                }
            }
        }
    </ng-template>
</ddr-input>`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrInputError } from 'ddr-ng/types';

@Component({
  selector: 'input-showcase-5',
  templateUrl: './input-showcase-5.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase5Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  hasErrors(inputError: DdrInputError) {
    switch (inputError) {
      case 'valid':
        this.ddrToastService.addSuccessMessage(
          this.ddrTranslateService.getTranslate('success'),
          this.ddrTranslateService.getTranslate('input.has.errors')
        );
        break;
      case 'error':
        this.ddrToastService.addErrorMessage(
          this.ddrTranslateService.getTranslate('error'),
          this.ddrTranslateService.getTranslate('input.has.not.errors')
        );
        break;
    }
  }

}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    [required]="true" 
    [inline]="true"
    [validate]="true"
    name="input-6" >

    <ng-template #templateValid>
    <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('required'){
                    <span>{{ 'input.value.required' | ddrTranslate }}</span>
                }
            }
        }
    </ng-template>
</ddr-input>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-6',
  templateUrl: './input-showcase-6.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase6Component {}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [disabled]="true"
    name="input-7"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-7',
  templateUrl: './input-showcase-7.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase7Component {

  public value: WritableSignal<string> = signal<string>('disabled');

}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [readonly]="true"
    name="input-8"
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-8',
  templateUrl: './input-showcase-8.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase8Component {

  public value: WritableSignal<string> = signal<string>('readonly');

}
`
      },
      {
        htmlCode: `<ddr-input
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [minLength]="3" 
    [maxLength]="10"
    [validate]="true"
    name="input-9"
    [(value)]="value">

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
    @for (error of errors(); track error.kind) {
        @switch(error.kind){
            @case('minLength'){
                <span class="me-2">{{ 'input.minlength.required' | ddrTranslate }}: {{ error.minLength }}</span>
            }
            @case('maxLength'){
                <span class="me-2">{{ 'input.maxlength.required' | ddrTranslate }}: {{ error.maxLength }}</span>
            }
        }
        }
    </ng-template>

</ddr-input>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-9',
  templateUrl: './input-showcase-9.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase9Component {

  public value: WritableSignal<string> = signal<string>('');

}
`,
        name: 'input.example.9.1'
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    [labelBold]="true"
    name="input-10" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-10',
  templateUrl: './input-showcase-10.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase10Component {}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    [tooltipText]="'input.tooltip' | ddrTranslate" 
    name="input-11"/>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-11',
  templateUrl: './input-showcase-11.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase11Component {}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    name="input-12"
    (clickInput)="clickInput($event)"
    (keyPressed)="keyPressed($event)" />`,
        tsCode: `import { Component, inject } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-12',
  templateUrl: './input-showcase-12.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcase12Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickInput(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.event.click'),
    );
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.keypressed'),
      value,
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'small' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    size="small"
    name="input-13-small" />

<ddr-input 
    [label]="'medium' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    size="medium"
    name="input-13-medium />

<ddr-input 
    [label]="'large' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate" 
    size="large"
    name="input-13-large" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-13',
  templateUrl: './input-showcase-13.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase13Component {}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'input.focus' | ddrTranslate"
    (action)="focusInput()" />

<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [focus]="focus()"
    name="input-14"
    (focusLost)="focusLost()" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-14',
  templateUrl: './input-showcase-14.component.html',
  imports: [
    DdrInputComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase14Component {

  public focus: WritableSignal<boolean> = signal<boolean>(false);

  focusInput() {
    this.focus.set(true);
  }

  focusLost() {
    this.focus.set(false);
  }
}
`
      },
      {
        htmlCode: `<div class="background-test-transparent p-2">
    <ddr-input 
        [label]="'input.label' | ddrTranslate" 
        [placeholder]="'input.placeholder' | ddrTranslate"
        [transparent]="true"
        [border]="true"
        name="input-15" />
</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-15',
  templateUrl: './input-showcase-15.component.html',
  styleUrl: './input-showcase-15.component.scss',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase15Component {}
`,
        cssCode: `.background-test-transparent {
    background: turquoise;
}`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder.email' | ddrTranslate"
    [validate]="true"
    [required]="true"
    [pattern]="pattern()"
    name="input-16">

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            @switch(error.kind){
                @case('required'){
                    <span>{{ 'input.value.required' | ddrTranslate }}</span>
                }
                @case('pattern'){
                    <span>{{ 'input.pattern' | ddrTranslate }}</span>
                }
            }
        }
    </ng-template>
</ddr-input>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-16',
  templateUrl: './input-showcase-16.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe
  ]
})
export class InputShowcase16Component {

  public pattern = signal<RegExp[]>([
    /^[A-Za-z0-9._%+\\-]+@[A-Za-z0-9.\\-]+\.[A-Za-z]{2,}$/
  ]);
}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [(ngModel)]="value"
    name="input-17" />

<div class="mt-2">
    <span>{{'input.value' | ddrTranslate}}: {{value() | json}}</span>
</div>`,
        tsCode: `import { JsonPipe } from '@angular/common';
import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-17',
  templateUrl: './input-showcase-17.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ]
})
export class InputShowcase17Component {

  public value: WritableSignal<string> = signal<string>('');

}
`
      },
      {
        htmlCode: `<form [formGroup]="inputForm">
    <ddr-input 
        [label]="'input.label' | ddrTranslate" 
        [placeholder]="'input.placeholder' | ddrTranslate"
        formControlName="input"
        name="input-18" />

    <div class="mt-2">
        <span>{{'input.value' | ddrTranslate}}: {{inputForm.value | json}}</span>
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
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-18',
  templateUrl: './input-showcase-18.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class InputShowcase18Component {

  public inputForm = new FormGroup({
    input: new FormControl('')
  })

}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [formField]="inputForm.text" />

<div class="mt-2">
    <span>{{'input.value' | ddrTranslate}}: {{inputForm.text().value() | json}}</span>
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
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-19',
  templateUrl: './input-showcase-19.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField,
    JsonPipe
  ]
})
export class InputShowcase19Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel);

}
`
      },
      {
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
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
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-20',
  templateUrl: './input-showcase-20.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase20Component {

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
        htmlCode: `<ddr-input 
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder' | ddrTranslate"
    [formField]="inputForm.text" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  readonly
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-21',
  templateUrl: './input-showcase-21.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase21Component {

  private inputModel = signal({
    text: 'readonly',
  });
  public inputForm = form(this.inputModel, (control) => {
    readonly(control.text)
  });

}
`
      },
      {
        htmlCode: `<ddr-input
      [label]="'input.label' | ddrTranslate" 
      [placeholder]="'input.placeholder' | ddrTranslate"
      [formField]="inputForm.text"
      [tooltipText]="'input.tooltip.password' | ddrTranslate"
      [validate]="true">

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
    @for (error of errors(); track error.kind) {
        @switch(error.kind){
            @case('minLength'){
                <span class="me-2">{{ error.message | ddrTranslate }}: {{ error.minLength }}</span>
            }
            @case('maxLength'){
                <span class="me-2">{{ error.message | ddrTranslate }}: {{ error.maxLength }}</span>
            }
            @default {
                <span class="me-2">{{ error.message | ddrTranslate}}</span>
            }
        }
        }
    </ng-template>

</ddr-input>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField,
  maxLength,
  minLength,
  pattern,
  required
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-22',
  templateUrl: './input-showcase-22.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ],
})
export class InputShowcase22Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
    minLength(control.text, 8, { message: 'input.minlength.required' }),
    maxLength(control.text, 20, { message: 'input.maxlength.required' }),
    pattern(control.text, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-]).*$/, { message: 'input.pattern'})
  });

}
`
      },
      {
        htmlCode: `<ddr-input
    [label]="'input.label' | ddrTranslate" 
    [placeholder]="'input.placeholder.email' | ddrTranslate"
    [formField]="inputForm.text"
    [validate]="true">

    <ng-template #templateValid>
        <span>{{'input.ok' | ddrTranslate}}</span>
    </ng-template>

    <ng-template #templateErrors let-errors="errors">
        @for (error of errors(); track error.kind) {
            <span class="me-2">{{ error.message | ddrTranslate}}</span>
        }
    </ng-template>

</ddr-input>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  email,
  form,
  FormField,
  required
} from '@angular/forms/signals';
import { DdrInputComponent } from 'ddr-ng/components/input';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'input-showcase-23',
  templateUrl: './input-showcase-23.component.html',
  imports: [
    DdrInputComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class InputShowcase23Component {

  private inputModel = signal({
    text: '',
  });
  public inputForm = form(this.inputModel, (control) => {
    required(control.text, { message: 'input.value.required' }),
      email(control.text, { message: 'input.email.error' })
  });

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'name',
          description: 'input.input.name',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'placeholder',
          description: 'input.input.placeholder',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'label',
          description: 'input.input.label',
          type: 'string',
          default: "undefined",
          required: false
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.input.disabled',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'readonly',
          description: 'input.input.readonly',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'maxLength',
          description: 'input.input.maxlength',
          type: 'number | null',
          default: "null",
          required: false
        }
      },
      {
        item: {
          name: 'minLength',
          description: 'input.input.minlength',
          type: 'number | null',
          default: "null",
          required: false
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.input.required',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'validate',
          description: 'input.input.validate',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.input.inline',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'border',
          description: 'input.input.border',
          type: 'boolean',
          default: "true",
          required: false
        }
      },
      {
        item: {
          name: 'pattern',
          description: 'input.input.pattern',
          type: 'RegExp[]',
          default: "[]",
          required: false
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.input.labelbold',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'size',
          description: 'input.input.size',
          type: 'DdrSize',
          default: "'medium'",
          required: false,
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.input.tooltiptext',
          type: 'string',
          default: "''",
          required: false
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.input.tooltipOrientation',
          type: 'DdrOrientationTooltip',
          default: "'bottom'",
          required: false,
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'focus',
          description: 'input.input.focus',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'transparent',
          description: 'input.input.transparent',
          type: 'boolean',
          default: "false",
          required: false
        }
      },
      {
        item: {
          name: 'autocomplete',
          description: 'input.input.autocomplete',
          type: 'DdrAutocompleteType',
          default: "'off'",
          required: false,
          values: "'on' | 'off' | 'username' | 'current-password' | 'new-password' | 'name' | 'given-name' | 'family-name' | 'email' | 'tel' | 'street-address' | 'address-line1' | 'address-line2' | 'postal-code' | 'country' | 'country-name';"
        }
      },
      {
        item: {
          name: 'dirty',
          description: 'input.input.dirty',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
       {
        item: {
          name: 'hidden',
          description: 'input.input.hidden',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'errors',
          description: 'input.input.errors',
          required: false,
          type: 'WithOptionalFieldTree<ValidationError>[]',
          default: '[]'
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'input.input.value',
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
          description: 'input.output.haserrors',
          type: 'DdrInputError'
        }
      },
      {
        item: {
          name: 'clickInput',
          description: 'input.output.clickinput',
          type: 'MouseEvent'
        }
      },
      {
        item: {
          name: 'keyPressed',
          description: 'input.output.keypressed',
          type: 'string'
        }
      },
      {
        item: {
          name: 'focusLost',
          description: 'input.output.focuslost',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'templateValid',
          description: 'input.template.templatevalid'
        }
      },
      {
        item: {
          name: 'templateErrors',
          description: 'input.template.templateerrors'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input',
          description: 'input.styles.input'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container',
          description: 'input.styles.container'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container--inline',
          description: 'input.styles.container.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label',
          description: 'input.styles.container.label'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label--inline',
          description: 'input.styles.container.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__label--transparent',
          description: 'input.styles.container.label.transparent'
        }
      },

      {
        item: {
          class: 'ddr-input__input-container__input',
          description: 'input.styles.container.input'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--border',
          description: 'input.styles.container.input.border'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--without-border',
          description: 'input.styles.container.input.without.border'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--small',
          description: 'input.styles.container.input.small'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--medium',
          description: 'input.styles.container.input.medium'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--large',
          description: 'input.styles.container.input.large'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--inline',
          description: 'input.styles.container.input.inline'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--disabled',
          description: 'input.styles.container.input.disabled'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--transparent',
          description: 'input.styles.container.input.transparent'
        }
      },
      {
        item: {
          class: 'ddr-input__input-container__input--border-transparent',
          description: 'input.styles.container.input.border.transparent'
        }
      },
    ]
  }

}
