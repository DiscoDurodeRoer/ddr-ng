import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ddr-step',
  template: '',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ]
})
export class DdrStepComponent {

  @Input({ required: true }) titleStep!: string;
  @Input() canGoNext: boolean = false;

  public step: number = 1;
  public open: boolean = false;
  public firstStep: boolean = false;
  public lastStep: boolean = false;

  @ContentChild('stepContent', {static: false}) stepContentTemplate!: TemplateRef<any> | null;

}
