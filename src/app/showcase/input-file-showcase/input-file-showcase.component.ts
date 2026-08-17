import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { InputFileShowcase1Component } from './showcases/input-file-showcase-1/input-file-showcase-1.component';
import { InputFileShowcase2Component } from './showcases/input-file-showcase-2/input-file-showcase-2.component';
import { InputFileShowcase3Component } from './showcases/input-file-showcase-3/input-file-showcase-3.component';
import { InputFileShowcase4Component } from './showcases/input-file-showcase-4/input-file-showcase-4.component';
import { InputFileShowcase5Component } from './showcases/input-file-showcase-5/input-file-showcase-5.component';
import { InputFileShowcase6Component } from './showcases/input-file-showcase-6/input-file-showcase-6.component';
import { InputFileShowcase7Component } from './showcases/input-file-showcase-7/input-file-showcase-7.component'; import { InputFileShowcase10Component } from './showcases/input-file-showcase-10/input-file-showcase-10.component';
import { InputFileShowcase11Component } from './showcases/input-file-showcase-11/input-file-showcase-11.component';
import { InputFileShowcase8Component } from './showcases/input-file-showcase-8/input-file-showcase-8.component';
import { InputFileShowcase9Component } from './showcases/input-file-showcase-9/input-file-showcase-9.component';
import { CLASSES, Documentation } from '../base-showcase/bean/documentation';
;

@Component({
  selector: 'input-file-showcase',
  templateUrl: './input-file-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    InputFileShowcase1Component,
    InputFileShowcase2Component,
    InputFileShowcase3Component,
    InputFileShowcase4Component,
    InputFileShowcase5Component,
    InputFileShowcase6Component,
    InputFileShowcase7Component,
    InputFileShowcase8Component,
    InputFileShowcase9Component,
    InputFileShowcase10Component,
    InputFileShowcase11Component,
    DdrTranslatePipe
  ]
})
export class InputFileShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      name="input-file-1"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-1',
    templateUrl: './input-file-showcase-1.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase1Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [multiple]="true"
      name="input-file-2"
      (filesSelected)="filesSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-2',
    templateUrl: './input-file-showcase-2.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase2Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    filesSelected(files: DdrFileHandle[]) {
      console.log(files);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.files'),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      accept=".pdf, .txt"
      name="input-file-3"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-3',
    templateUrl: './input-file-showcase-3.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase3Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [disabled]="true"
      name="input-file-4"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-4',
    templateUrl: './input-file-showcase-4.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase4Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [inline]="true"
      name="input-file-5"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-5',
    templateUrl: './input-file-showcase-5.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase5Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [tooltipText]="'input.file.tooltip' | ddrTranslate"
      name="input-file-6"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-6',
    templateUrl: './input-file-showcase-6.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase6Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [labelBold]="true"
      name="input-file-7"
      (fileSelected)="fileSelected($event)" />`,
        tsCode: `import {
    Component,
    inject
  } from '@angular/core';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrFileHandle } from 'ddr-ng/models';
  import { DdrToastService } from 'ddr-ng/toast';
  import {
    DdrTranslatePipe,
    DdrTranslateService
  } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-7',
    templateUrl: './input-file-showcase-7.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe
    ],
    providers: [
      DdrToastService
    ]
  })
  export class InputFileShowcase7Component {
  
    private readonly ddrToastService: DdrToastService = inject(DdrToastService);
    private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  
    fileSelected(file: DdrFileHandle) {
      console.log(file);
      this.ddrToastService.addSuccessMessage(
        this.ddrTranslateService.getTranslate('success'),
        this.ddrTranslateService.getTranslate('input.file.upload.file'),
      );
    }
  
  }
  `,
        classes: [
          CLASSES['DdrFileHandle']
        ]
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      name="input-file-8"
      [(ngModel)]="value" />
  
  <div class="mt-2">
      <span class="d-block">{{'input.file.name' | ddrTranslate}}: {{value().length ? value()[0].name : ''}}</span>
      <span class="d-block">{{'input.file.type' | ddrTranslate}}: {{value().length ? value()[0].type : ''}}</span>
  </div>`,
        tsCode: `import {
    Component,
    signal,
    WritableSignal
  } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-8',
    templateUrl: './input-file-showcase-8.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe,
      FormsModule
    ]
  })
  export class InputFileShowcase8Component {
  
    public value: WritableSignal<File[]> = signal<File[]>([]);
  
  }
  `
      },
      {
        htmlCode: `<form [formGroup]="fileForm">
      <ddr-input-file 
          [label]="'input.file' | ddrTranslate"
          formControlName="file"
          name="input-file-9" />
  
      <div class="mt-2">
          <span class="d-block">{{'input.file.name' | ddrTranslate}}: {{controlFile?.length ? controlFile[0].name : ''}}</span>
          <span class="d-block">{{'input.file.type' | ddrTranslate}}: {{controlFile?.length ? controlFile[0].type : ''}}</span>
      </div>
  </form>
  `,
        tsCode: `import { Component } from '@angular/core';
  import {
    FormControl,
    FormGroup,
    ReactiveFormsModule
  } from '@angular/forms';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-9',
    templateUrl: './input-file-showcase-9.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe,
      ReactiveFormsModule
    ]
  })
  export class InputFileShowcase9Component {
  
    public fileForm = new FormGroup({
      file: new FormControl<File[]>([])
    })
  
    get controlFile() {
      return this.fileForm.get('file')?.value
    }
  
  }
  `
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [formField]="inputFileForm.file" />
  
  <div class="mt-2">
      <span class="d-block">{{'input.file.name' | ddrTranslate}}: {{fileSelected() ? fileSelected()?.name : ''}}</span>
      <span class="d-block">{{'input.file.type' | ddrTranslate}}: {{fileSelected() ? fileSelected()?.type : ''}}</span>
  </div>`,
        tsCode: `import {
    Component,
    computed,
    Signal,
    signal
  } from '@angular/core';
  import { form, FormField } from '@angular/forms/signals';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-10',
    templateUrl: './input-file-showcase-10.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe,
      FormField
    ]
  })
  export class InputFileShowcase10Component {
  
    public fileSelected: Signal<File | null> = computed(() => this.inputFileForm.file().value().length ? this.inputFileForm.file().value()[0] : null)
  
    private inputFileModel = signal({
      file: [],
    });
    public inputFileForm = form(this.inputFileModel);
  
  }
  `
      },
      {
        htmlCode: `<ddr-input-file 
      [label]="'input.file' | ddrTranslate"
      [formField]="inputFileForm.file" />`,
        tsCode: `import {
    Component,
    signal
  } from '@angular/core';
  import {
    disabled,
    form,
    FormField
  } from '@angular/forms/signals';
  import { DdrInputFileComponent } from 'ddr-ng/components/input-file';
  import { DdrTranslatePipe } from 'ddr-ng/translate';
  
  @Component({
    selector: 'input-file-showcase-11',
    templateUrl: './input-file-showcase-11.component.html',
    imports: [
      DdrInputFileComponent,
      DdrTranslatePipe,
      FormField
    ]
  })
  export class InputFileShowcase11Component {
  
    private inputFileModel = signal({
      file: [],
    });
    public inputFileForm = form(this.inputFileModel, (control) => {
      disabled(control.file)
    });
  
  }
  `
      }
    ],
    inputsOutputs: [
      {
        item: {
          name: 'value',
          description: 'input.file.input.value',
          default: '[]',
          required: false,
          type: 'File[]'
        }
      }
    ],
    inputs: [
      {
        item: {
          name: 'label',
          description: 'input.file.input.label',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'name',
          description: 'input.file.input.name',
          default: "''",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'inline',
          description: 'input.file.input.inline',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'disabled',
          description: 'input.file.input.disabled',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'labelBold',
          description: 'input.file.input.labelbold',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'required',
          description: 'input.file.input.required',
          default: 'false',
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'tooltipText',
          description: 'input.file.input.tooltiptext',
          default: 'undefined',
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'tooltipOrientation',
          description: 'input.file.input.tooltipOrientation',
          default: "'bottom'",
          required: false,
          type: 'DdrOrientationTooltip',
          values: "'top' | 'bottom' | 'left' | 'right'"
        }
      },
      {
        item: {
          name: 'multiple',
          description: 'input.file.input.multiple',
          default: "false",
          required: false,
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'accept',
          description: 'input.file.input.accept',
          default: "'*'",
          required: false,
          type: 'string'
        }
      },
      {
        item: {
          name: 'ariaLabel',
          description: 'input.file.input.aria.label',
          default: "undefined",
          required: false,
          type: 'string | undefined'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'fileSelected',
          description: 'input.file.output.fileselected',
          type: 'DdrFileHandle'
        }
      },
      {
        item: {
          name: 'filesSelected',
          description: 'input.file.output.filesselected',
          type: 'DdrFileHandle[]'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-input-file',
          description: 'input.file.style.file'
        }
      }
    ]
  }

}
