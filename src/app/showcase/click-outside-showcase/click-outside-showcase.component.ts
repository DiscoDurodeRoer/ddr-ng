import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrClickOutsideDirective,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrButton,
  DdrButtonMultipleComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'click-outside-showcase',
  templateUrl: './click-outside-showcase.component.html',
  styleUrls: ['./click-outside-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrClickOutsideDirective,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ClickOutsideShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public buttonsModes: DdrButton[] = [
    {
      text: 'clickoutside.standard',
      value: 'standard'
    },
    {
      text: 'clickoutside.delay',
      value: 'delay'
    },
    {
      text: 'clickoutside.disactivated',
      value: 'disactivated'
    },
  ]
  public modeClickoutside: string = 'standard'

  clickOutside($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clickoutside.event.click')
    );
  }

}
