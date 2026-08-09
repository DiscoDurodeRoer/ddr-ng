import {
  Component,
  inject,
  input,
  InputSignal,
} from '@angular/core';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'ddr-no-data',
  templateUrl: './ddr-no-data.component.html',
  styleUrl: './ddr-no-data.component.scss'
})
export class DdrNoDataComponent {
  
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly icon: InputSignal<string> = input.required<string>();
  readonly text: InputSignal<string> = input.required<string>();
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.LARGE);
}
