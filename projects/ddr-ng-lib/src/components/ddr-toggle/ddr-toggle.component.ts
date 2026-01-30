import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, inject, OnDestroy, OnInit, ViewEncapsulation, input, output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTooltipDirective } from '../../directives/ddr-tooltip.directive';

import { DdrOrientatioTooltip, DdrSize } from '../../types/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ddr-toggle',
  templateUrl: './ddr-toggle.component.html',
  styleUrls: ['./ddr-toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DdrTooltipDirective
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrToggleComponent,
      multi: true,
    },
  ]
})
export class DdrToggleComponent extends DdrControlValueAccessor implements OnInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly label = input<string>();
  readonly inline = input<boolean>(false);
  readonly tooltipText = input<string>();
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);

  readonly toggled = output<boolean>();

  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.changeValue.subscribe({
      next: (value: boolean) => {
        this.value = value;
        this.changeDetectorRef.detectChanges();
      }
    })
    this.value = false;
    this.changeDetectorRef.detectChanges();
  }

  onClick() {
    this.value = !this.value;
    this.toggled.emit(this.value);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
