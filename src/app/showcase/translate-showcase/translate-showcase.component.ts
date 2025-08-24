import { Component, inject } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import {
  DdrButtonComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';

@Component({
  selector: 'translate-showcase',
  templateUrl: './translate-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TranslateShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  showToast() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('translate.example.show')
    )
  }

}
