import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewEncapsulation } from '@angular/core';
import { DdrStepComponent } from './ddr-step/ddr-step.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrToastComponent } from '../ddr-toast/ddr-toast.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-steps',
  templateUrl: './ddr-steps.component.html',
  styleUrls: ['./ddr-steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    DdrToastComponent,
    NgClass,
    NgTemplateOutlet
  ]
})
export class DdrStepsComponent implements OnInit, AfterViewInit {

  @Input() openAll: boolean = false;
  @Input() vertical: boolean = false;
  @Input() canJumpStep: boolean = false;
  @Input() showButtons: boolean = true;
  @Input() leaveValidateVerticalOpened: boolean = false;
  @Input() validateIcon: boolean = false;
  @Input() labelNext?: string;
  @Input() labelPrevious?: string;

  @Output() changeStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() lastStep: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ContentChildren(DdrStepComponent) steps!: QueryList<DdrStepComponent>;

  private currentStep: number = 1;

  ngOnInit(): void {
    if (!this.showButtons) {
      this.canJumpStep = true;
    }
  }

  ngAfterViewInit() {
    const steps = this.steps.toArray();
    if (steps.length > 0) {
      for (let index = 0; index < steps.length; index++) {
        const step = steps[index];
        if (((this.openAll && this.vertical) || (this.validateIcon && step.canGoNext)) || index == 0) {
          step.open = true;
        }
        step.step = index + 1;
        step.firstStep = step.step == 1;
        step.lastStep = step.step == steps.length;
      }
      this.currentStep = 1;
    }
    if (this.openAll && this.vertical) {
      this.canJumpStep = false;
    }
  }

  goToStep(step: DdrStepComponent) {
    if (this.canJumpStep && this.currentStep != step.step) {
      if (!this.vertical || ((this.vertical && !this.leaveValidateVerticalOpened) || !this.steps.toArray()[this.currentStep - 1].canGoNext)) {
        this.steps.toArray()[this.currentStep - 1].open = false;
      }
      this.steps.toArray()[step.step - 1].open = true;
      this.currentStep = step.step;
      this.changeStep.emit(this.currentStep);
      if (this.steps.length == this.currentStep) {
        this.lastStep.emit(true);
      }
    }
  }

  previous(step: DdrStepComponent) {
    const index = step.step - 2;
    step.open = false;
    this.steps.toArray()[index].open = true;
    this.currentStep = step.step - 1;
    this.changeStep.emit(this.currentStep);
    if (this.steps.length == this.currentStep) {
      this.lastStep.emit(true);
    }
  }

  next(step: DdrStepComponent) {
    const index = step.step;
    step.open = false;
    this.steps.toArray()[index].open = true;
    this.currentStep = step.step + 1;
    this.changeStep.emit(this.currentStep);
    if (this.steps.length == this.currentStep) {
      this.lastStep.emit(true);
    }
  }

}
