import { Component, forwardRef, OnInit, ViewEncapsulation, OnDestroy, input, output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';

import { Subscription } from 'rxjs';

@Component({
  selector: 'ddr-checkbox',
  templateUrl: './ddr-checkbox.component.html',
  styleUrls: ['./ddr-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrTranslatePipe
],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DdrCheckboxComponent,
      multi: true,
    },
  ]
})
export class DdrCheckboxComponent<T> extends DdrControlValueAccessor implements OnInit, OnDestroy {

  readonly options = input.required<DdrSelectItem<T>[]>();

  readonly disabled = input<boolean>(false);
  readonly inline = input<boolean>(false);

  readonly clickCheck = output<T[]>();

  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subscription = this.changeValue.subscribe({
      next: (value: T[]) => {
        if (value instanceof Array) {
          const options = this.options().filter(s => value.find(v => JSON.stringify(v) == JSON.stringify(s.value)));
          options.forEach(op => op.selected = true);
        }
      }
    })
  }

  onClickCheck($event: MouseEvent, option: DdrSelectItem<T>) {
    $event?.stopPropagation();
    if (!this.disabled()) {
      const optionFound = this.options().find(op => JSON.stringify(op.value) == JSON.stringify(option.value));
      if (optionFound) {
        optionFound.selected = !option.selected
        this.value = this.options().filter(s => s.selected).map(s => s.value);
        this.clickCheck.emit(this.value);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
