
import { Component, TemplateRef, ViewEncapsulation, input, contentChild } from '@angular/core';

@Component({
  selector: 'ddr-tab-item',
  template: '',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: []
})
export class DdrTabItemComponent {

  readonly titleTab = input.required<string>();
  readonly icon = input<string>();
  public open: boolean = false;

  readonly tabContentTemplate = contentChild<TemplateRef<any> | null>('tabContent');
  
}
