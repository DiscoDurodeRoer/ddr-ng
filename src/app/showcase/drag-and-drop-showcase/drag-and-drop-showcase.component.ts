import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DragAndDropShowcase1Component } from './showcases/drag-and-drop-showcase-1/drag-and-drop-showcase-1.component';
import { DragAndDropShowcase2Component } from './showcases/drag-and-drop-showcase-2/drag-and-drop-showcase-2.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'drag-and-drop-showcase',
  templateUrl: './drag-and-drop-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DragAndDropShowcase1Component,
    DragAndDropShowcase2Component,
    DdrTranslatePipe,
  ]
})
export class DragAndDropShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<base-showcase 
  component="ddr-drag-drop" 
  type="directive" 
  [showCodeCSS]="true" 
  [showPossibleValues]="false">

  <div description>
    <p>{{'drag.drop.description' | ddrTranslate}}</p>
  </div>

  <ng-template #example>
    <drag-and-drop-showcase-1 />
  </ng-template>

  <ng-template #example>
    <drag-and-drop-showcase-2 />
  </ng-template>

</base-showcase>`,
        tsCode: `import {
  Component,
  inject
} from '@angular/core';
import { DdrDragDropDirective } from 'ddr-ng/directives/drag-and-drop';
import { DdrFileHandle } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'drag-and-drop-showcase-1',
  templateUrl: './drag-and-drop-showcase-1.component.html',
  styleUrl: './drag-and-drop-showcase-1.component.scss',
  imports: [
    DdrDragDropDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcase1Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files),
    );
  }

}
`,
        cssCode: `.drag-and-drop{
    padding: 50px;
    text-align: center;
}`
      },
      {
        htmlCode: `<ddr-button 
    [text]="(dragDropEnabled ? 'drag.drop.disabled' : 'drag.drop.active') | ddrTranslate" 
    (action)="toggleEnabled()" />

<div class="drag-and-drop" 
    ddrDragDrop 
    [dragDropEnabled]="dragDropEnabled()" 
    (dragDropFiles)="loadFiles($event)">
    {{'drag.drop.message' | ddrTranslate}}
</div>`,
        tsCode: `import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrDragDropDirective } from 'ddr-ng/directives/drag-and-drop';
import { DdrFileHandle } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'drag-and-drop-showcase-2',
  templateUrl: './drag-and-drop-showcase-2.component.html',
  styleUrl: './drag-and-drop-showcase-2.component.scss',
  imports: [
    DdrDragDropDirective,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DragAndDropShowcase2Component {

  public ddrToastService: DdrToastService = inject(DdrToastService);
  public ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public dragDropEnabled: WritableSignal<boolean> = signal<boolean>(true);

  loadFiles(files: DdrFileHandle[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(files),
    );
  }

  toggleEnabled() {
    this.dragDropEnabled.update((value) => !value);
  }

}
`,
        cssCode: `.drag-and-drop{
    padding: 50px;
    text-align: center;
}`
      }
    ],
    inputs: [
      {
        item: {
          name: 'dragDropEnabled',
          description: 'drag.drop.input.dragdropenabled',
          default: 'true',
          required: false,
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'dragDropFiles',
          description: 'drag.drop.output.dragdropfiles',
          type: 'DdrFileHandle[]'
        }
      }
    ]
  }
  
}