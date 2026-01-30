
import { Component, TemplateRef, input, contentChild } from '@angular/core';

@Component({
  selector: 'ddr-step',
  template: '',
  standalone: true,
  imports: []
})
export class DdrStepComponent {

  readonly titleStep = input.required<string>();
  readonly canGoNext = input<boolean>(false);

  public step: number = 1;
  public open: boolean = false;
  public firstStep: boolean = false;
  public lastStep: boolean = false;

  readonly stepContentTemplate = contentChild.required<TemplateRef<any> | null>('stepContent');

}
