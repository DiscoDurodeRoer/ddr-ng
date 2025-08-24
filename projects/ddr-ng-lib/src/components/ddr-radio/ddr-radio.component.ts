import { Component, forwardRef, Input, OnInit, Output, ViewEncapsulation, EventEmitter, booleanAttribute, OnDestroy } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'ddr-radio',
  templateUrl: './ddr-radio.component.html',
  styleUrls: ['./ddr-radio.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    FormsModule,
    DdrControlValueAccessor,
    DdrTranslatePipe,
    NgClass
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DdrRadioComponent),
      multi: true,
    },
  ]
})
export class DdrRadioComponent<T> extends DdrControlValueAccessor implements OnInit, OnDestroy {

  @Input({ required: true }) options: DdrSelectItem<T>[] = [];
  @Input() inline: boolean = false;

  @Output() clickRadio: EventEmitter<T> = new EventEmitter<T>();

  private subscription: Subscription = new Subscription();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options.forEach(op => op.selected = false);
    this.subscription = this.changeValue.subscribe((value: T) => {
      const optionFound = this.options.find(s => JSON.stringify(value) == JSON.stringify(s.value));
      if (optionFound) {
        optionFound.selected = true;
        this.value = value;
      }
    });
  }

  onclickRadio($event?: DdrSelectItem<T>) {
    if ($event && this.value != $event.value) {
      this.options.map(option => option.selected = false)
      $event.selected = true;
      this.value = $event.value;
      this.clickRadio.emit(this.value);
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
