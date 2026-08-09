import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { ClickOutsideShowcase1Component } from './showcases/click-outside-showcase-1/click-outside-showcase-1.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'click-outside-showcase',
  templateUrl: './click-outside-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    ClickOutsideShowcase1Component,
    DdrTranslatePipe
  ]
})
export class ClickOutsideShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `
<ddr-button-multiple
  [buttons]="buttonsModes()"
  [showSelectedButton]="true"
  [(value)]="modeClickoutside" />

@switch (modeClickoutside()) {
  @case ('standard') {
    <div class="block" 
        ddrClickOutside 
        (clickOutside)="clickOutside($event)" >
      <p>{{'clickoutside.standard.click' | ddrTranslate}}</p>
    </div>
  }
  @case ('delay') {
    <div class="block" 
        ddrClickOutside 
        [clickOutsideDelay]="5000" 
        (clickOutside)="clickOutside($event)" >
      <p>{{'clickoutside.delay.click' | ddrTranslate}}</p>
    </div>
  }
  @case ('disactivated') {
    <div class="block"
        ddrClickOutside 
        [clickOutsideEnabled]="false" 
        (clickOutside)="clickOutside($event)" >
      <p>{{'clickoutside.disactivated.click' | ddrTranslate}}</p>
    </div>
  }
}`,
        tsCode: `import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrClickOutsideDirective } from 'ddr-ng/directives/click-outside';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  templateUrl: './click-outside-showcase-1.component.html',
  styleUrl: './click-outside-showcase-1.component.scss',
  selector: 'click-outside-showcase-1',
  imports: [
    DdrButtonMultipleComponent,
    DdrClickOutsideDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ClickOutsideShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  public buttonsModes: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'clickoutside.standard',
      value: 'standard',
    },
    {
      text: 'clickoutside.delay',
      value: 'delay',
    },
    {
      text: 'clickoutside.disactivated',
      value: 'disactivated',
    },
  ]);

  public modeClickoutside: WritableSignal<string> = signal<string>('standard');

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clickoutside.event.click'),
    );
  }
}
`,
        cssCode: `.block {
    width: 100%;
    height: 100px;
    border: 1px solid #000;
    margin-top: 20px;
    user-select: none;
}`
      }
    ],
    inputs: [
      {
        item: {
          name: 'clickOutsideDelay',
          description: 'clickoutside.input.clickoutsidedelay',
          required: false,
          default: 'undefined',
          type: 'number | undefined'
        }
      },
      {
        item: {
          name: 'clickOutsideEnabled',
          description: 'clickoutside.input.clickoutsideenabled',
          required: false,
          default: 'false',
          type: 'boolean'
        }
      }
    ],
    outputs: [
      {
        item: {
          name: 'clickOutside',
          description: 'clickoutside.output.clickoutside',
          type: 'MouseEvent'
        }
      }
    ]
  }
  
}