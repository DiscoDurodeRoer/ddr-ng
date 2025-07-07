import { AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DdrControlValueAccessor } from '../ddr-ngmodel-base/ddr-control-value-accessor-base.component';
import { DdrSelectItem } from '../../common/ddr-select-item.model';
import { DdrCheckboxComponent } from '../ddr-checkbox/ddr-checkbox.component';

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
      useExisting: forwardRef(() => DdrCheckboxBinaryComponent),
      multi: true,
    },
  ]
})
export class DdrCheckboxBinaryComponent extends DdrControlValueAccessor implements OnInit, AfterViewInit {

  @Input() disabled: boolean = false;
  @Input({ required: false }) label?: string;

  @Output() clickCheck: EventEmitter<boolean> = new EventEmitter<boolean>();

  public options: DdrSelectItem<boolean>[] = [];

  ngOnInit(): void {

    this.options = [
      {
        label: this.label || '',
        value: this.value || false
      }
    ]
  }

  ngAfterViewInit(): void {
    this.changeValue.subscribe((value: boolean) => {
      if (typeof value == 'boolean') {
        this.value = value;
        this.options[0].selected = value;
      }
    })
  }

  onClick(selected: any[]) {
    this.value = selected.length != 0;
    this.clickCheck.emit(this.value);
  }
}
