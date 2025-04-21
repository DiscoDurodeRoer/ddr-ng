import { Component, inject, Input } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass } from '@angular/common';
import { DdrSize } from '../../types/types';

@Component({
    selector: 'ddr-no-data',
    templateUrl: './ddr-no-data.component.html',
    styleUrls: ['./ddr-no-data.component.scss'],
    imports: [
        DdrTranslatePipe,
        NgClass
    ]
})
export class DdrNoDataComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input({ required: true }) icon!: string;
  @Input({ required: true }) text!: string;
  @Input() size: DdrSize = this.constants.SIZE.LARGE;

}
