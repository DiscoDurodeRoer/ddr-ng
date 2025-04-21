import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ddr-step',
  templateUrl: 'ddr-step.component.html',
  styleUrls: [],
  standalone: true
})
export class DdrStepComponent {

  @Input({ required: true }) titleStep!: string;
  @Input() canGoNext: any = true;

  public step: number = 1;
  public open: boolean = false;
  public firstStep: boolean = false;
  public lastStep: boolean = false;

  @ViewChild('contentTemplate', {static: false}) contentTemplate!: TemplateRef<any> | null;

}
