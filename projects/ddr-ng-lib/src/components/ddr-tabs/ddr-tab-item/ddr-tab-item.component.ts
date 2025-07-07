import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-tab-item',
  template: '',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgTemplateOutlet
  ]
})
export class DdrTabItemComponent {

  @Input({ required: true }) titleTab!: string;
  @Input() icon?: string;
  public open: boolean = false;

  @ContentChild('tabContent', {static: false}) tabContentTemplate: TemplateRef<any> | null = null;
  
}
