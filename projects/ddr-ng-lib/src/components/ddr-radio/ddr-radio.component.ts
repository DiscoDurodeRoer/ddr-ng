import { Component, OnInit, ViewEncapsulation, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, inject, input, output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-radio',
  templateUrl: './ddr-radio.component.html',
  styleUrls: ['./ddr-radio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    DdrTranslatePipe
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrRadioComponent,
      multi: true,
    },
  ]
})
export class DdrRadioComponent<T> extends DdrControlValueAccessor implements OnInit, OnDestroy {

  readonly options = input.required<DdrSelectItem<T>[]>();
  readonly inline = input<boolean>(false);

  readonly clickRadio = output<T>();

  private subscription: Subscription = new Subscription();
  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options().forEach(op => op.selected = false);
    this.subscription = this.changeValue.subscribe({
      next: (value: T) => {
        const optionFound = this.options().find(s => JSON.stringify(value) == JSON.stringify(s.value));
        if (optionFound) {
          optionFound.selected = true;
          this.value = value;
          this.changeDetectorRef.detectChanges();
        }
      }
    });
  }

  onclickRadio($event?: DdrSelectItem<T>) {
    if ($event && this.value != $event.value) {
      this.options().map(option => option.selected = false)
      $event.selected = true;
      this.value = $event.value;
      this.clickRadio.emit(this.value);
      this.changeDetectorRef.detectChanges();
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
