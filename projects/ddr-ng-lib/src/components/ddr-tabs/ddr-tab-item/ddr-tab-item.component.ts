import { Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-tab-item',
  templateUrl: './ddr-tab-item.component.html',
  styleUrls: ['./ddr-tab-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class DdrTabItemComponent {

  @Input({ required: true }) titleTab!: string;
  @Input() icon?: string;
  public selected: boolean = false;

  @ViewChild('contentTemplate', {static: false}) contentTemplate?: TemplateRef<any>;
  
}
