import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { StepsShowcase1Component } from './showcases/steps-showcase-1/steps-showcase-1.component';
import { StepsShowcase2Component } from './showcases/steps-showcase-2/steps-showcase-2.component';
import { StepsShowcase3Component } from './showcases/steps-showcase-3/steps-showcase-3.component';
import { StepsShowcase4Component } from './showcases/steps-showcase-4/steps-showcase-4.component';
import { StepsShowcase5Component } from './showcases/steps-showcase-5/steps-showcase-5.component';
import { StepsShowcase6Component } from './showcases/steps-showcase-6/steps-showcase-6.component';
import { StepsShowcase7Component } from './showcases/steps-showcase-7/steps-showcase-7.component';
import { StepsShowcase8Component } from './showcases/steps-showcase-8/steps-showcase-8.component';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';
import { StepsShowcase10Component } from './showcases/steps-showcase-10/steps-showcase-10.component';
import { StepsShowcase11Component } from './showcases/steps-showcase-11/steps-showcase-11.component';
import { StepsShowcase12Component } from './showcases/steps-showcase-12/steps-showcase-12.component';
import { StepsShowcase9Component } from './showcases/steps-showcase-9/steps-showcase-9.component';
import { StepsShowcase13Component } from './showcases/steps-showcase-13/steps-showcase-13.component';

@Component({
  selector: 'steps-showcase',
  templateUrl: './steps-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    StepsShowcase1Component,
    StepsShowcase2Component,
    StepsShowcase3Component,
    StepsShowcase4Component,
    StepsShowcase5Component,
    StepsShowcase6Component,
    StepsShowcase7Component,
    StepsShowcase8Component,
    StepsShowcase9Component,
    StepsShowcase10Component,
    StepsShowcase11Component,
    StepsShowcase12Component,
    StepsShowcase13Component,
    DdrTranslatePipe
  ],
})
export class StepsShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import { Component } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-1',
    templateUrl: './steps-showcase-1.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ]
  })
  export class StepsShowcase1Component { }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="!!person().name">
          <ng-template #stepContent>
              <ddr-input 
                  [label]="'step.name' | ddrTranslate" 
                  name="input-2"
                  [(value)]="person().name" />
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="!!person().age">
          <ng-template #stepContent>
              <ddr-input-number 
                  [label]="'step.age' | ddrTranslate" 
                  name="input-number-2"
                  [(value)]="person().age" />
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import { DdrInputComponent } from 'ddr-ng/components/input';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
  
  @Component({
    selector: 'steps-showcase-2',
    templateUrl: './steps-showcase-2.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrInputComponent,
      DdrInputNumberComponent,
      DdrTranslatePipe
    ],
  })
  export class StepsShowcase2Component {
    public person: Signal<Person> = signal<Person>({
      name: '',
      age: 0,
    });
  }
  `,
        classes: [
          CLASSES['PersonStep']
        ]
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import { Component } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-3',
    templateUrl: './steps-showcase-3.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ],
  })
  export class StepsShowcase3Component { }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [vertical]="true"
      [canJumpStep]="true">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
      
      <ddr-step [titleStep]="'step.3' | ddrTranslate" [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.3' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import { Component } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-4',
    templateUrl: './steps-showcase-4.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ]
  })
  export class StepsShowcase4Component { }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true"
      (changeStep)="changeStep($event)">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import { Component, inject } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-5',
    templateUrl: './steps-showcase-5.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class StepsShowcase5Component {
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    changeStep(step: number) {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('step.' + step),
      );
    }
  }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [canJumpStep]="true"
      (lastStep)="lastStep()">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
      
  </ddr-steps>`,
        tsCode: `import { Component, inject } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-6',
    templateUrl: './steps-showcase-6.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class StepsShowcase6Component {
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    lastStep() {
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('step.last'),
      );
    }
  }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [showButtons]="false">
  
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.1' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="true">
          <ng-template #stepContent>
              <p>{{'step.2' | ddrTranslate}}</p>
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import { Component } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'steps-showcase-7',
    templateUrl: './steps-showcase-7.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrTranslatePipe
    ]
  })
  export class StepsShowcase7Component { }
  `
      },
      {
        htmlCode: `<ddr-steps 
      [labelNext]="'steps.next' | ddrTranslate" 
      [labelPrevious]="'steps.previous' | ddrTranslate"
      [validateIcon]="true">
      
      <ddr-step 
          [titleStep]="'step.1' | ddrTranslate" 
          [canGoNext]="!!person().name">
          <ng-template #stepContent>
              <ddr-input 
                  [label]="'step.name' | ddrTranslate" 
                  name="input-8"
                  [(value)]="person().name" />
          </ng-template>
      </ddr-step>
  
      <ddr-step 
          [titleStep]="'step.2' | ddrTranslate" 
          [canGoNext]="!!person().age">
          <ng-template #stepContent>
              <ddr-input-number 
                  [label]="'step.age' | ddrTranslate" 
                  name="input-number-8"
                  [(value)]="person().age" />
          </ng-template>
      </ddr-step>
  
  </ddr-steps>`,
        tsCode: `import {
    Component,
    Signal,
    signal
  } from '@angular/core';
  import {
    DdrStepComponent,
    DdrStepsComponent
  } from 'ddr-ng/components/steps';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  import { Person } from './bean/person';
  import { DdrInputComponent } from 'ddr-ng/components/input';
  import { DdrInputNumberComponent } from 'ddr-ng/components/input-number';
  
  @Component({
    selector: 'steps-showcase-8',
    templateUrl: './steps-showcase-8.component.html',
    imports: [
      DdrStepsComponent,
      DdrStepComponent,
      DdrInputComponent,
      DdrInputNumberComponent,
      DdrTranslatePipe
    ]
  })
  export class StepsShowcase8Component {
    public person: Signal<Person> = signal<Person>({
      name: '',
      age: 0,
    });
  }
  `,
        classes: [
          CLASSES['PersonStep']
        ]
      },
      {
        htmlCode: `<ddr-steps 
    [labelNext]="'steps.next' | ddrTranslate" 
    [labelPrevious]="'steps.previous' | ddrTranslate"
    [vertical]="true"
    [openAll]="true">

    <ddr-step 
        [titleStep]="'step.1' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

    <ddr-step 
        [titleStep]="'step.2' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

</ddr-steps>`,
        tsCode: `import { Component } from '@angular/core';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-9',
  templateUrl: './steps-showcase-9.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe
  ]
})
export class StepsShowcase9Component { }
`
      },
      {
        htmlCode: `<ddr-steps 
    [labelNext]="'steps.next' | ddrTranslate" 
    [labelPrevious]="'steps.previous' | ddrTranslate"
    [(ngModel)]="value">

    <ddr-step 
        [titleStep]="'step.1' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

    <ddr-step 
        [titleStep]="'step.2' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

</ddr-steps>

<div class="mt-2">
    <span>{{'step.value' | ddrTranslate}}: {{value()}}</span>
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-10',
  templateUrl: './steps-showcase-10.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    FormsModule
  ],
})
export class StepsShowcase10Component {

  public value: WritableSignal<number> = signal<number>(2);

}
`
      },
      {
        htmlCode: `<form [formGroup]="stepForm">
    <ddr-steps 
        [labelNext]="'steps.next' | ddrTranslate" 
        [labelPrevious]="'steps.previous' | ddrTranslate"
        formControlName="step">

        <ddr-step 
            [titleStep]="'step.1' | ddrTranslate" 
            [canGoNext]="true">
            <ng-template #stepContent>
                <p>{{'step.1' | ddrTranslate}}</p>
            </ng-template>
        </ddr-step>

        <ddr-step 
            [titleStep]="'step.2' | ddrTranslate" 
            [canGoNext]="true">
            <ng-template #stepContent>
                <p>{{'step.2' | ddrTranslate}}</p>
            </ng-template>
        </ddr-step>

    </ddr-steps>

    <div class="mt-2">
        <span>{{'step.value' | ddrTranslate}} {{stepForm.value | json}}</span>
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
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-11',
  templateUrl: './steps-showcase-11.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    JsonPipe,
    ReactiveFormsModule
  ]
})
export class StepsShowcase11Component {

  public stepForm = new FormGroup({
    step: new FormControl(2)
  })
}
`
      },
      {
        htmlCode: `<ddr-steps 
    [labelNext]="'steps.next' | ddrTranslate" 
    [labelPrevious]="'steps.previous' | ddrTranslate"
    [formField]="stepForm.step">

    <ddr-step 
        [titleStep]="'step.1' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

    <ddr-step 
        [titleStep]="'step.2' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

</ddr-steps>

<div class="mt-2">
    <span>{{'step.value' | ddrTranslate}}: {{stepForm.step().value() | json}}</span>
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
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-12',
  templateUrl: './steps-showcase-12.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ]
})
export class StepsShowcase12Component {

  private stepModel = signal({
    step: 2
  })
  public stepForm = form(this.stepModel);

}
`
      },
      {
        htmlCode: `<ddr-steps 
    [labelNext]="'steps.next' | ddrTranslate" 
    [labelPrevious]="'steps.previous' | ddrTranslate"
    [formField]="stepForm.step">

    <ddr-step 
        [titleStep]="'step.1' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.1' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

    <ddr-step 
        [titleStep]="'step.2' | ddrTranslate" 
        [canGoNext]="true">
        <ng-template #stepContent>
            <p>{{'step.2' | ddrTranslate}}</p>
        </ng-template>
    </ddr-step>

</ddr-steps>

<div class="mt-2">
    <span>{{'step.value' | ddrTranslate}}: {{stepForm.step().value() | json}}</span>
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
import {
  DdrStepComponent,
  DdrStepsComponent
} from 'ddr-ng/components/steps';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'steps-showcase-13',
  templateUrl: './steps-showcase-13.component.html',
  imports: [
    DdrStepsComponent,
    DdrStepComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ],
})
export class StepsShowcase13Component {

  private stepModel = signal({
    step: 2
  })
  public stepForm = form(this.stepModel)

}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'vertical',
          component: 'ddr-steps',
          description: 'steps.input.vertical',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'canJumpStep',
          component: 'ddr-steps',
          description: 'steps.input.canjumpstep',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'labelNext',
          component: 'ddr-steps',
          description: 'steps.input.labelnext',
          type: 'string',
          default: 'undefined',
          required: false
        }
      },
      {
        item: {
          name: 'labelPrevious',
          component: 'ddr-steps',
          description: 'steps.input.labelprevious',
          type: 'string',
          default: 'undefined',
          required: false
        }
      },
      {
        item: {
          name: 'showButtons',
          component: 'ddr-steps',
          description: 'steps.input.showbuttons',
          type: 'boolean',
          default: 'true',
          required: false
        }
      },
      {
        item: {
          name: 'validateIcon',
          component: 'ddr-steps',
          description: 'steps.input.validateicon',
          type: 'boolean',
          default: 'false',
          required: false
        }
      },
      {
        item: {
          name: 'openAll',
          description: 'steps.input.openall',
          component: 'ddr-steps',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'titleStep',
          component: 'ddr-step',
          description: 'steps.input.titlestep',
          type: 'string',
          default: 'undefined',
          required: true
        }
      },
      {
        item: {
          name: 'canGoNext',
          component: 'ddr-step',
          description: 'steps.input.cangonext',
          type: 'boolean',
          default: 'false',
          required: false
        }
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'steps.input.value',
          default: '1',
          required: false,
          type: 'number'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'changeStep',
          component: 'ddr-steps',
          description: 'steps.output.changestep',
          type: 'number'
        }
      },
      {
        item: {
          name: 'lastStep',
          component: 'ddr-steps',
          description: 'steps.output.laststep',
          type: 'void'
        }
      }
    ],
    templates: [
      {
        item: {
          name: 'stepContent',
          component: 'ddr-step',
          description: 'steps.templates.stepcontent'
        }
      }
    ],
    translations: [
      {
        item: {
          name: 'next',
          description: 'steps.translation.next'
        }
      },
      {
        item: {
          name: 'previous',
          description: 'steps.translation.previous'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-steps',
          description: 'steps.style.steps'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal',
          description: 'steps.style.horizontal'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step',
          description: 'steps.style.horizontal.info.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step--hover',
          description: 'steps.style.horizontal.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step',
          description: 'steps.style.horizontal.step.number'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step--open',
          description: 'steps.style.horizontal.step.open'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__number-step--closed',
          description: 'steps.style.horizontal.step.closed'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__info-step__title-step',
          description: 'steps.style.horizontal.title.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__horizontal__line',
          description: 'steps.style.horizontal.line'
        }
      },
      {
        item: {
          class: 'ddr-steps__template',
          description: 'steps.style.template'
        }
      },
      {
        item: {
          class: 'ddr-steps__template__content',
          description: 'steps.style.template.content'
        }
      },
      {
        item: {
          class: 'ddr-steps__template__content',
          description: 'steps.style.template.content'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step',
          description: 'steps.style.vertical.info.step'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step--hover',
          description: 'steps.style.vertical.info.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step--hover',
          description: 'steps.style.vertical.info.step.hover'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step',
          description: 'steps.style.vertical.info.step.number'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step--open',
          description: 'steps.style.vertical.info.step.number.open'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__number-step--closed',
          description: 'steps.style.vertical.info.step.number.closed'
        }
      },
      {
        item: {
          class: 'ddr-steps__vertical__info-step__title-step',
          description: 'steps.style.vertical.info.step.number.title.step'
        }
      }
    ]
  }
}
