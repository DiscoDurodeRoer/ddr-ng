import { Component, inject } from '@angular/core';
import {
  DdrCheckboxBinaryComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'checkbox-binary-showcase',
  templateUrl: './checkbox-binary-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxBinaryShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: boolean = true;

  clickCheck(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    )
  }

}