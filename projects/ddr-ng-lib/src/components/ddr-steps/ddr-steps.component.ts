import { AfterViewInit, Component, OnInit, ViewEncapsulation, input, output, contentChildren, InputSignal, OutputEmitterRef, WritableSignal, signal, effect, ModelSignal, model } from '@angular/core';
import { DdrStepComponent } from './ddr-step/ddr-step.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-steps',
  templateUrl: './ddr-steps.component.html',
  styleUrl: './ddr-steps.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe,
    NgTemplateOutlet,
  ]
})
export class DdrStepsComponent implements FormValueControl<number>, OnInit, AfterViewInit {

  readonly steps = contentChildren(DdrStepComponent);

  readonly openAll: InputSignal<boolean> = input<boolean>(false);
  readonly vertical: InputSignal<boolean> = input<boolean>(false);
  readonly canJumpStep: InputSignal<boolean> = input<boolean>(false);
  readonly showButtons: InputSignal<boolean> = input<boolean>(true);
  readonly leaveValidateVerticalOpened: InputSignal<boolean> = input<boolean>(false);
  readonly validateIcon: InputSignal<boolean> = input<boolean>(false);
  readonly labelNext: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelPrevious: InputSignal<string | undefined> = input<string | undefined>();

  readonly changeStep: OutputEmitterRef<number> = output<number>();
  readonly lastStep: OutputEmitterRef<void> = output<void>();

  public canJump: WritableSignal<boolean> = signal<boolean>(false);

  public value: ModelSignal<number> = model<number>(1);

  constructor() {
    effect(() => this.canJump.set(this.canJumpStep()))
    effect(() => {
      const stepsValue = this.steps();
      if (stepsValue && !this.openAll() && !this.leaveValidateVerticalOpened()) {
        const steps = stepsValue;
        for (let index = 0; index < steps.length; index++) {
          const step = steps[index];
          step.open.set(false);
        }
        stepsValue[this.value() - 1].open.set(true);
      }
    })
  }

  ngOnInit(): void {
    if (!this.showButtons()) {
      this.canJump.set(true);
    }
  }

  ngAfterViewInit() {
    if (this.steps().length > 0) {
      for (let index = 0; index < this.steps().length; index++) {
        const step = this.steps()[index];
        if (((this.openAll() && this.vertical()) || (this.validateIcon() && step.canGoNext())) || index == 0) {
          step.open.set(true);
        }
        step.step.set(index + 1);
        step.firstStep.set(step.step() == 1);
        step.lastStep.set(step.step() == this.steps().length);
      }
      this.value.set(1);
    }
    if (this.openAll() && this.vertical()) {
      this.canJump.set(false);
    }
  }

  goToStep(step: DdrStepComponent) {
    if (this.canJumpStep() && this.value != step.step) {
      const vertical = this.vertical();
      if (!vertical || ((vertical && !this.leaveValidateVerticalOpened()) || !this.steps()[this.value() - 1].canGoNext())) {
        this.steps()[this.value() - 1].open.set(false);
      }
      this.steps()[step.step() - 1].open.set(true);
      this.value.set(step.step());
      this.changeStep.emit(this.value());
      if (this.steps().length == this.value()) {
        this.lastStep.emit();
      }
    }
  }

  previous(step: DdrStepComponent) {
    const index = step.step() - 2;
    step.open.set(false);
    this.steps()[index].open.set(true);
    this.value.set(step.step() - 1);
    this.changeStep.emit(this.value());
    if (this.steps().length == this.value()) {
      this.lastStep.emit();
    }
  }

  next(step: DdrStepComponent) {
    const index = step.step();
    step.open.set(false);
    this.steps()[index].open.set(true);
    this.value.set(step.step() + 1);
    this.changeStep.emit(this.value());
    if (this.steps().length == this.value()) {
      this.lastStep.emit();
    }
  }

}
