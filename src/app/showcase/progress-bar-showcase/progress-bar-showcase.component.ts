import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ProgressBarShowcase1Component } from './showcases/progress-bar-showcase-1/progress-bar-showcase-1.component';
import { ProgressBarShowcase2Component } from './showcases/progress-bar-showcase-2/progress-bar-showcase-2.component';
import { ProgressBarShowcase3Component } from './showcases/progress-bar-showcase-3/progress-bar-showcase-3.component';
import { ProgressBarShowcase4Component } from './showcases/progress-bar-showcase-4/progress-bar-showcase-4.component';
import { ProgressBarShowcase5Component } from './showcases/progress-bar-showcase-5/progress-bar-showcase-5.component';
import { ProgressBarShowcase6Component } from './showcases/progress-bar-showcase-6/progress-bar-showcase-6.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'progress-bar-showcase',
  templateUrl: './progress-bar-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ProgressBarShowcase1Component,
    ProgressBarShowcase2Component,
    ProgressBarShowcase3Component,
    ProgressBarShowcase4Component,
    ProgressBarShowcase5Component,
    ProgressBarShowcase6Component,
    DdrTranslatePipe,
  ],
})
export class ProgressBarShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>
`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-1',
  templateUrl: './progress-bar-showcase-1.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase1Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      },
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()"
    [label]="value() + '%'" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>
   `,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-2',
  templateUrl: './progress-bar-showcase-2.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase2Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      },
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()"
    [label]="value() + '%'"
    [striped]="true" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-3',
  templateUrl: './progress-bar-showcase-3.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase3Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      },
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()"
    [label]="value() + '%'"
    [height]="200"
    [striped]="true" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-4',
  templateUrl: './progress-bar-showcase-4.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase4Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      },
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()"
    [label]="value() + '%'"
    [animated]="true"
    [striped]="true" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-5',
  templateUrl: './progress-bar-showcase-5.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase5Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      },
      {
        htmlCode: `<ddr-progress-bar 
    [value]="value()"
    [label]="value() + '%'"
    [floatText]="true" />

<div class="mt-2">
    <ddr-button
        [text]="'progressbar.increase' | ddrTranslate"
        (action)="increase()" />
    <ddr-button
        [text]="'progressbar.decrease' | ddrTranslate"
        (action)="decrease()" />
</div>`,
        tsCode: `import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrProgressBarComponent } from 'ddr-ng/components/progress-bar';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'progress-bar-showcase-6',
  templateUrl: './progress-bar-showcase-6.component.html',
  imports: [
    DdrProgressBarComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ]
})
export class ProgressBarShowcase6Component {
  public value: WritableSignal<number> = signal<number>(0);

  increase() {
    if (this.value() + 10 > 100) {
      this.value.set(100);
    } else {
      this.value.update((value: number) => value + 10);
    }
  }

  decrease() {
    if (this.value() - 10 < 0) {
      this.value.set(0);
    } else {
      this.value.update((value: number) => value - 10);
    }
  }
}
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'value',
          description: 'progressbar.input.value',
          required: true,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'label',
          description: 'progressbar.input.label',
          required: false,
          default: 'undefined',
          type: 'string'
        }
      },
      {
        item: {
          name: 'height',
          description: 'progressbar.input.height',
          required: false,
          default: '16',
          type: 'number'
        }
      },
      {
        item: {
          name: 'striped',
          description: 'progressbar.input.striped',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'animated',
          description: 'progressbar.input.animated',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'floatText',
          description: 'progressbar.input.floattext',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-progress-bar',
          description: 'progressbar.style.progressbar'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text',
          description: 'progressbar.style.float.text'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text--less-50',
          description: 'progressbar.style.float.text.less.50'
        }
      },
      {
        item: {
          class: 'ddr-progress-bar__float-text--greather-50',
          description: 'progressbar.style.float.text.greather.50'
        }
      }
    ]
  }

}
