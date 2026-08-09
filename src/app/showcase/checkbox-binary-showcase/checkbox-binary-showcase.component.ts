import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { CheckboxBinaryShowcase1Component } from './showcases/checkbox-binary-showcase-1/checkbox-binary-showcase-1.component';
import { CheckboxBinaryShowcase2Component } from './showcases/checkbox-binary-showcase-2/checkbox-binary-showcase-2.component';
import { CheckboxBinaryShowcase3Component } from './showcases/checkbox-binary-showcase-3/checkbox-binary-showcase-3.component';
import { CheckboxBinaryShowcase4Component } from './showcases/checkbox-binary-showcase-4/checkbox-binary-showcase-4.component';
import { CheckboxBinaryShowcase5Component } from './showcases/checkbox-binary-showcase-5/checkbox-binary-showcase-5.component';
import { CheckboxBinaryShowcase6Component } from './showcases/checkbox-binary-showcase-6/checkbox-binary-showcase-6.component';
import { CheckboxBinaryShowcase7Component } from './showcases/checkbox-binary-showcase-7/checkbox-binary-showcase-7.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'checkbox-binary-showcase',
  templateUrl: './checkbox-binary-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    CheckboxBinaryShowcase1Component,
    CheckboxBinaryShowcase2Component,
    CheckboxBinaryShowcase3Component,
    CheckboxBinaryShowcase4Component,
    CheckboxBinaryShowcase5Component,
    CheckboxBinaryShowcase6Component,
    CheckboxBinaryShowcase7Component,
    DdrTranslatePipe
  ]
})
export class CheckboxBinaryShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    [(value)]="value" />

<div class="mt-2">
    <span>{{'checkbox.binary.value' | ddrTranslate}}: {{value()}}</span>
</div>
    `,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-1',
  templateUrl: './checkbox-binary-showcase-1.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ]
})
export class CheckboxBinaryShowcase1Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
`
      },
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    [disabled]="true" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-2',
  templateUrl: './checkbox-binary-showcase-2.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ],
})
export class CheckboxBinaryShowcase2Component {}
`
      },
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    (clickCheck)="clickCheck($event)" />`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-3',
  templateUrl: './checkbox-binary-showcase-3.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxBinaryShowcase3Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickCheck(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + '',
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    [(ngModel)]="value" />

<div class="mt-2">
    <span>{{'checkbox.binary.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-4',
  templateUrl: './checkbox-binary-showcase-4.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class CheckboxBinaryShowcase4Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
`
      },
      {
        htmlCode: `<form [formGroup]="checkboxForm">
    <ddr-checkbox-binary 
        [label]="'checkbox.binary.label' | ddrTranslate"
        formControlName="checkbox" />

    <div class="mt-2">
        <span>{{'checkbox.binary.value' | ddrTranslate}}: {{checkboxForm.value | json}}</span>
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
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-5',
  templateUrl: './checkbox-binary-showcase-5.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class CheckboxBinaryShowcase5Component {

  public checkboxForm: FormGroup = new FormGroup({
    checkbox: new FormControl(true)
  })

}
`
      },
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    [formField]="checkboxForm.checkbox" />

<div class="mt-2">
    <span>{{'checkbox.binary.value' | ddrTranslate}}: {{checkboxForm.checkbox().value()}}</span>
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
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-6',
  templateUrl: './checkbox-binary-showcase-6.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class CheckboxBinaryShowcase6Component {

  private checkboxModel = signal({
    checkbox: true,
  });
  public checkboxForm = form(this.checkboxModel);
  
}
`
      },
      {
        htmlCode: `<ddr-checkbox-binary 
    [label]="'checkbox.binary.label' | ddrTranslate"
    [formField]="checkboxForm.checkbox" />`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  disabled,
  form,
  FormField
} from '@angular/forms/signals';
import { DdrCheckboxBinaryComponent } from 'ddr-ng/components/checkbox-binary';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'checkbox-binary-showcase-7',
  templateUrl: './checkbox-binary-showcase-7.component.html',
  imports: [
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class CheckboxBinaryShowcase7Component {

  private checkboxModel = signal({
    checkbox: true,
  });
  public checkboxForm = form(this.checkboxModel, (control) => {
    disabled(control.checkbox);
  });
}
`
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'checkbox.binary.input.value',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      }
    ],
    inputs: [
      {
        item: {
          name: 'disabled',
          description: 'checkbox.binary.input.disabled',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'label',
          description: 'checkbox.binary.input.label',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickCheck',
          description: 'checkbox.binary.output.clickcheck',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-checkbox-binary',
          description: 'checkbox.binary.style.binary'
        }
      }
    ]
  }

}
