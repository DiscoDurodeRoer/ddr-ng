import { Component, inject, input, InputSignal } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-no-data',
  templateUrl: './ddr-no-data.component.html',
  styleUrls: ['./ddr-no-data.component.scss'],
  imports: [
    DdrTranslatePipe
  ]
})
export class DdrNoDataComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly icon: InputSignal<string> = input.required<string>();
  readonly text: InputSignal<string> = input.required<string>();
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.LARGE);

}
