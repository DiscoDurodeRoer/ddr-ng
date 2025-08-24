import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrClipboardDirective,
  DdrInputGroupComponent,
  DdrTextareaComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'clipboard-showcase',
  templateUrl: './clipboard-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrClipboardDirective,
    DdrButtonComponent,
    DdrTextareaComponent,
    DdrInputGroupComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ClipboardShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public valueEx1: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis nesciunt temporibus ex et debitis quisquam doloribus beatae adipisci quo ab fuga provident similique illum, qui illo at inventore dicta esse.'
  public valueEx2: string = ''

  copyText() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clipboard.copy.success'),
    );
  }

}
