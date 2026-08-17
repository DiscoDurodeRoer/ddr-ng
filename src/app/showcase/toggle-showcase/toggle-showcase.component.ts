import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ToggleShowcase1Component } from './showcases/toggle-showcase-1/toggle-showcase-1.component';
import { ToggleShowcase2Component } from './showcases/toggle-showcase-2/toggle-showcase-2.component';
import { ToggleShowcase3Component } from './showcases/toggle-showcase-3/toggle-showcase-3.component';
import { ToggleShowcase4Component } from './showcases/toggle-showcase-4/toggle-showcase-4.component';
import { ToggleShowcase5Component } from './showcases/toggle-showcase-5/toggle-showcase-5.component';
import { ToggleShowcase6Component } from './showcases/toggle-showcase-6/toggle-showcase-6.component';
import { ToggleShowcase10Component } from './showcases/toggle-showcase-10/toggle-showcase-10.component';
import { ToggleShowcase7Component } from './showcases/toggle-showcase-7/toggle-showcase-7.component';
import { ToggleShowcase8Component } from './showcases/toggle-showcase-8/toggle-showcase-8.component';
import { ToggleShowcase9Component } from './showcases/toggle-showcase-9/toggle-showcase-9.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'toggle-showcase',
  templateUrl: './toggle-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ToggleShowcase1Component,
    ToggleShowcase2Component,
    ToggleShowcase3Component,
    ToggleShowcase4Component,
    ToggleShowcase5Component,
    ToggleShowcase6Component,
    ToggleShowcase7Component,
    ToggleShowcase8Component,
    ToggleShowcase9Component,
    ToggleShowcase10Component,
    DdrTranslatePipe
  ]
})
export class ToggleShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-toggle 
    [(value)]="value" 
    (toggled)="toggleValue($event)" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-1',
  templateUrl: './toggle-showcase-1.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<boolean> = signal<boolean>(false);

  toggleValue(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + '',
    );
  }
}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [label]="'toggle.label' | ddrTranslate" 
    [(value)]="value" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-2',
  templateUrl: './toggle-showcase-2.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase2Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [label]="'toggle.label' | ddrTranslate" 
    [inline]="true" 
    [(value)]="value" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-3',
  templateUrl: './toggle-showcase-3.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase3Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
`
      },
      {
        htmlCode: `<div class="mb-2">
    <ddr-toggle 
        [label]="'small' | ddrTranslate"
        class="me-2"
        size="small" />
</div>

<div class="mb-2">
    <ddr-toggle 
        [label]="'medium' | ddrTranslate"
        class="me-2"
        size="medium" />
</div>

<div class="mb-2">
    <ddr-toggle 
        [label]="'large' | ddrTranslate"
        class="me-2"
        size="large" />
</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-4',
  templateUrl: './toggle-showcase-4.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [label]="'toggle.label' | ddrTranslate"
    [tooltipText]="'toggle.tooltip' | ddrTranslate" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-5',
  templateUrl: './toggle-showcase-5.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase5Component {}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [label]="'toggle.label' | ddrTranslate" 
    [(value)]="value" />`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-6',
  templateUrl: './toggle-showcase-6.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe
  ]
})
export class ToggleShowcase6Component {

  public value: WritableSignal<boolean> = signal<boolean>(true);

}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [(ngModel)]="value" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-7',
  templateUrl: './toggle-showcase-7.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormsModule
  ]
})
export class ToggleShowcase7Component {

  public value: WritableSignal<boolean> = signal<boolean>(false);

}
`
      },
      {
        htmlCode: `<form [formGroup]="toggleForm">
    <ddr-toggle 
        formControlName="toggle" />

    <div class="mt-2">
        <span>{{'toggle.value' | ddrTranslate}}: {{toggleForm.value | json}}</span>
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
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-8',
  templateUrl: './toggle-showcase-8.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class ToggleShowcase8Component {

  public toggleForm = new FormGroup({
    toggle: new FormControl(false)
  })

}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [formField]="toggleForm.toggle" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{toggleForm.toggle().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-9',
  templateUrl: './toggle-showcase-9.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class ToggleShowcase9Component {

  private toggleModel = signal({
    toggle: false,
  });
  public toggleForm = form(this.toggleModel);

}
`
      },
      {
        htmlCode: `<ddr-toggle 
    [formField]="toggleForm.toggle" />

<div class="mt-2">
    <span>{{'toggle.value' | ddrTranslate}}: {{toggleForm.toggle().value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal
} from '@angular/core';
import {
  form,
  FormField
} from '@angular/forms/signals';
import { DdrToggleComponent } from 'ddr-ng/components/toggle';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'toggle-showcase-10',
  templateUrl: './toggle-showcase-10.component.html',
  imports: [
    DdrToggleComponent,
    DdrTranslatePipe,
    FormField
  ]
})
export class ToggleShowcase10Component {

  private toggleModel = signal({
    toggle: true
  });
  public toggleForm = form(this.toggleModel);

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'toggle.input.label',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'toggle.input.inline',
          required: false,
          type: 'boolean',
          default: 'false'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'toggle.input.tooltiptext',
          required: false,
          type: 'string',
          default: 'undefined'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'toggle.input.tooltiporientation',
          required: false,
          type: 'DdrOrientationTooltip',
          default: 'false'
        }
      },
      {
        item: {
          name: 'size',
          description: 'toggle.input.size',
          required: false,
          type: 'DdrSize',
          default: "'medium'",
          values: "'small' | 'medium' | 'large'"
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'toggle.input.aria.label',
          required: false,
          type: 'string | undefined',
          default: "undefined"
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'toggle.input.value',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'toggled',
          description: 'toggle.output.toggled',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-toggle',
          description: 'toggle.style'
        }
      },
      {
        item: {
          class: 'ddr-toggle--inline',
          description: 'toggle.style.inline'
        }
      },
      {
        item: {
          class: 'ddr-toggle__label',
          description: 'toggle.style.label'
        }
      },
      {
        item: {
          class: 'ddr-toggle__label--inline',
          description: 'toggle.style.label.inline'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button',
          description: 'toggle.style.button'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--on',
          description: 'toggle.style.button.on'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--off',
          description: 'toggle.style.button.off'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--small',
          description: 'toggle.style.button.small'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--medium',
          description: 'toggle.style.button.medium'
        }
      },
      {
        item: {
          class: 'ddr-toggle__button--large',
          description: 'toggle.style.button.large'
        }
      },
    ]
  }

}
