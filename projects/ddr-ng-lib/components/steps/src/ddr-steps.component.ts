import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  input,
  output,
  contentChildren,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal,
  effect,
  ModelSignal,
  model,
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { NgTemplateOutlet } from '@angular/common';
import { FormValueControl } from '@angular/forms/signals';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrStepComponent } from './components/ddr-step/ddr-step.component';

@Component({
  selector: 'ddr-steps',
  templateUrl: './ddr-steps.component.html',
  styleUrl: './ddr-steps.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrButtonComponent, DdrTranslatePipe, NgTemplateOutlet],
})
export class DdrStepsComponent implements FormValueControl<number>, AfterViewInit {
  readonly steps = contentChildren(DdrStepComponent);

  readonly openAll: InputSignal<boolean> = input<boolean>(false);
  readonly vertical: InputSignal<boolean> = input<boolean>(false);
  readonly canJumpStep: InputSignal<boolean> = input<boolean>(false);
  readonly showButtons: InputSignal<boolean> = input<boolean>(true);
  readonly validateIcon: InputSignal<boolean> = input<boolean>(false);
  readonly labelNext: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelPrevious: InputSignal<string | undefined> = input<string | undefined>();

  public value: ModelSignal<number> = model<number>(1);

  readonly changeStep: OutputEmitterRef<number> = output<number>();
  readonly lastStep: OutputEmitterRef<void> = output<void>();

  public canJump: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    effect(() => this.canJump.set(
      (this.canJumpStep() || !this.showButtons()) &&
      !(this.openAll() && this.vertical())
    ));
    effect(() => {
      if (
        this.steps() &&
        !this.openAll() &&
        this.value()
      ) {
        for (const step of this.steps()) {
          step.open.set(step.step() == this.value());
        }
      }
    });
  }

  ngAfterViewInit() {
    for (let index = 0; index < this.steps().length; index++) {
      const step = this.steps()[index];
      if (
        (this.openAll() && this.vertical()) ||
        (this.validateIcon() && step.canGoNext()) ||
        (index + 1) == this.value()
      ) {
        step.open.set(true);
      }
      step.step.set(index + 1);
      step.firstStep.set(step.step() == 1);
      step.lastStep.set(step.step() == this.steps().length);
    }
  }

  goToStep(step: DdrStepComponent) {
    if (this.canJump() && this.value() != step.step()) {
      if (
        !this.vertical() ||
        !this.steps()[this.value() - 1].canGoNext()
      ) {
        this.steps()[this.value() - 1].open.set(false);
      }
      this.value.set(step.step());
      this.changeStep.emit(this.value());
      if (this.steps().length == this.value()) {
        this.lastStep.emit();
      }
    }
  }

  previous(step: DdrStepComponent) {
    this.value.set(step.step() - 1);
    this.changeStep.emit(this.value());
    if (this.steps().length == this.value()) {
      this.lastStep.emit();
    }
  }

  next(step: DdrStepComponent) {
    this.value.set(step.step() + 1);
    this.changeStep.emit(this.value());
    if (this.steps().length == this.value()) {
      this.lastStep.emit();
    }
  }
}
