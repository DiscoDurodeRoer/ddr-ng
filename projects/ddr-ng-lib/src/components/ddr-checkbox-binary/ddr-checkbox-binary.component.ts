import { AfterViewInit, Component, forwardRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation, input, output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrCheckboxComponent } from '../ddr-checkbox/ddr-checkbox.component';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-checkbox-binary',
  templateUrl: './ddr-checkbox-binary.component.html',
  styleUrl: './ddr-checkbox-binary.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrCheckboxComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrCheckboxBinaryComponent,
      multi: true,
    },
  ]
})
export class DdrCheckboxBinaryComponent extends DdrControlValueAccessor implements OnChanges, AfterViewInit, OnDestroy {

  readonly disabled = input<boolean>(false);
  readonly label = input<string>();

  readonly clickCheck = output<boolean>();

  public options: DdrSelectItem<boolean>[] = [
    {
      label: this.label() || '',
      value: this.value || false
    }
  ];
  private subscription: Subscription = new Subscription();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['label']) {
      this.options = [
        {
          label: this.label() || '',
          value: this.value || false
        }
      ]
    }
  }

  ngAfterViewInit(): void {
    this.subscription = this.changeValue.subscribe({
      next: (value: boolean) => {
        if (typeof value == 'boolean') {
          this.value = value;
          this.options[0].selected = value;
        }
      }
    })
  }

  onClick(selected: any[]) {
    this.value = selected.length != 0;
    this.clickCheck.emit(this.value);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
