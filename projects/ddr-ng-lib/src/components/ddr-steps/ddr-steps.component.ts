import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, inject, OnDestroy, OnInit, ViewEncapsulation, input, output, contentChildren } from '@angular/core';
import { DdrStepComponent } from './ddr-step/ddr-step.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';

import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-steps',
  templateUrl: './ddr-steps.component.html',
  styleUrls: ['./ddr-steps.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    NgTemplateOutlet,
    ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrStepsComponent,
      multi: true,
    },
  ]
})
export class DdrStepsComponent extends DdrControlValueAccessor implements OnInit, AfterViewInit, OnDestroy {

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly openAll = input<boolean>(false);
  readonly vertical = input<boolean>(false);
  readonly canJumpStep = input<boolean>(false);
  readonly showButtons = input<boolean>(true);
  readonly leaveValidateVerticalOpened = input<boolean>(false);
  readonly validateIcon = input<boolean>(false);
  readonly labelNext = input<string>();
  readonly labelPrevious = input<string>();

  readonly changeStep = output<number>();
  readonly lastStep = output<void>();

  readonly steps = contentChildren(DdrStepComponent);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (!this.showButtons()) {
      this.canJumpStep = true;
    }

    this.subscription = this.changeValue.subscribe({
      next: (indexTab: number) => {

        const stepsValue = this.steps();
        if (stepsValue && !this.openAll() && !this.leaveValidateVerticalOpened()) {
          const steps = stepsValue;
          for (let index = 0; index < steps.length; index++) {
            const step = steps[index];
            step.open = false;
          }
          stepsValue[indexTab - 1].open = true;
        }
      }
    })
  }

  ngAfterViewInit() {
    const steps = this.steps;
    if (steps.length > 0) {
      for (let index = 0; index < steps.length; index++) {
        const step = steps[index];
        if (((this.openAll() && this.vertical()) || (this.validateIcon() && step.canGoNext())) || index == 0) {
          step.open = true;
        }
        step.step = index + 1;
        step.firstStep = step.step == 1;
        step.lastStep = step.step == steps.length;
      }
      this.value = 1;
    }
    if (this.openAll() && this.vertical()) {
      this.canJumpStep = false;
    }

    this.changeDetectorRef.detectChanges();
  }

  goToStep(step: DdrStepComponent) {
    if (this.canJumpStep() && this.value != step.step) {
      const vertical = this.vertical();
      if (!vertical || ((vertical && !this.leaveValidateVerticalOpened()) || !this.steps[this.value - 1].canGoNext())) {
        this.steps[this.value - 1].open = false;
      }
      this.steps[step.step - 1].open = true;
      this.value = step.step;
      this.changeStep.emit(this.value);
      if (this.steps().length == this.value) {
        // TODO: The 'emit' function requires a mandatory void argument
        this.lastStep.emit();
      }
    }
  }

  previous(step: DdrStepComponent) {
    const index = step.step - 2;
    step.open = false;
    this.steps[index].open = true;
    this.value = step.step - 1;
    this.changeStep.emit(this.value);
    if (this.steps().length == this.value) {
      // TODO: The 'emit' function requires a mandatory void argument
      this.lastStep.emit();
    }
  }

  next(step: DdrStepComponent) {
    const index = step.step;
    step.open = false;
    this.steps[index].open = true;
    this.value = step.step + 1;
    this.changeStep.emit(this.value);
    if (this.steps().length == this.value) {
      // TODO: The 'emit' function requires a mandatory void argument
      this.lastStep.emit();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
