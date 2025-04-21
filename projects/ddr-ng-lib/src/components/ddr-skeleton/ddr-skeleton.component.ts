import { Component, inject, Input } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrLoopNumberPipe } from '../../pipes/ddr-loop-number/ddr-loop-number.pipe';
import { DdrSkeletonDirective } from '../../directives/ddr-skeleton.directive';
import { DdrSkeletonMode } from '../../types/types';

@Component({
    selector: 'ddr-skeleton',
    templateUrl: './ddr-skeleton.component.html',
    styleUrls: ['./ddr-skeleton.component.scss'],
    imports: [
        DdrLoopNumberPipe,
        DdrSkeletonDirective
    ]
})
export class DdrSkeletonComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  @Input({ required: true }) mode!: DdrSkeletonMode;
  @Input() nElements: number = 1;

}
