import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, EventEmitter, forwardRef, inject, Input, OnDestroy, OnInit, Output, QueryList, ViewEncapsulation } from '@angular/core';
import { DdrStepComponent } from './ddr-step/ddr-step.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrToastComponent } from '../ddr-toast/ddr-toast.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgTemplateOutlet } from '@angular/common';
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
    DdrToastComponent,
    NgClass,
    NgTemplateOutlet,
    DdrControlValueAccessor
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrStepsComponent),
      multi: true,
    },
  ]
})
export class DdrStepsComponent extends DdrControlValueAccessor implements OnInit, AfterViewInit, OnDestroy {

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() openAll: boolean = false;
  @Input() vertical: boolean = false;
  @Input() canJumpStep: boolean = false;
  @Input() showButtons: boolean = true;
  @Input() leaveValidateVerticalOpened: boolean = false;
  @Input() validateIcon: boolean = false;
  @Input() labelNext?: string;
  @Input() labelPrevious?: string;

  @Output() changeStep: EventEmitter<number> = new EventEmitter<number>();
  @Output() lastStep: EventEmitter<void> = new EventEmitter<void>();

  @ContentChildren(DdrStepComponent) steps!: QueryList<DdrStepComponent>;
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    if (!this.showButtons) {
      this.canJumpStep = true;
    }

    this.subscription = this.changeValue.subscribe(v => {

      if (this.steps && !this.openAll && !this.leaveValidateVerticalOpened) {
        const steps = this.steps.toArray();
        for (let index = 0; index < steps.length; index++) {
          const step = steps[index];
          step.open = false;
        }
        this.steps.toArray()[v - 1].open = true;
      }
    })
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
      this.value = 1;
    }
    if (this.openAll && this.vertical) {
      this.canJumpStep = false;
    }

    this.changeDetectorRef.detectChanges();
  }

  goToStep(step: DdrStepComponent) {
    if (this.canJumpStep && this.value != step.step) {
      if (!this.vertical || ((this.vertical && !this.leaveValidateVerticalOpened) || !this.steps.toArray()[this.value - 1].canGoNext)) {
        this.steps.toArray()[this.value - 1].open = false;
      }
      this.steps.toArray()[step.step - 1].open = true;
      this.value = step.step;
      this.changeStep.emit(this.value);
      if (this.steps.length == this.value) {
        this.lastStep.emit();
      }
    }
  }

  previous(step: DdrStepComponent) {
    const index = step.step - 2;
    step.open = false;
    this.steps.toArray()[index].open = true;
    this.value = step.step - 1;
    this.changeStep.emit(this.value);
    if (this.steps.length == this.value) {
      this.lastStep.emit();
    }
  }

  next(step: DdrStepComponent) {
    const index = step.step;
    step.open = false;
    this.steps.toArray()[index].open = true;
    this.value = step.step + 1;
    this.changeStep.emit(this.value);
    if (this.steps.length == this.value) {
      this.lastStep.emit();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
