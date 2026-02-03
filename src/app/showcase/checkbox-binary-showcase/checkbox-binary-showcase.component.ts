import { Component, inject, signal } from '@angular/core';
import {
  DdrCheckboxBinaryComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { disabled, Field, form } from '@angular/forms/signals';

@Component({
  selector: 'checkbox-binary-showcase',
  templateUrl: './checkbox-binary-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxBinaryComponent,
    DdrTranslatePipe,
    Field
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxBinaryShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: boolean = true;

  private checkboxModelEx1 = signal({
    example1: true
  })
  public checkboxEx1 = form(this.checkboxModelEx1)

  private checkboxModelEx2 = signal({
    example2: false
  })
  public checkboxEx2 = form(this.checkboxModelEx2, (checkbox) => {
    disabled(checkbox.example2)
  })

  clickCheck(value: boolean) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value + ''
    )
  }

}