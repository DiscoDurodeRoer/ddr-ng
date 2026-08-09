import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import {
  DdrDetailComponent,
  DdrDetailService
} from 'ddr-ng/components/detail';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { DdrPositionDetail } from 'ddr-ng/types';

@Component({
  selector: 'detail-showcase-2',
  templateUrl: './detail-showcase-2.component.html',
  imports: [
    DdrDetailComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService,
    DdrDetailService
  ]
})
export class DetailShowcase2Component {

  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public position: WritableSignal<DdrPositionDetail> = signal<DdrPositionDetail>('right');
  public buttonsPosition: WritableSignal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-left',
      value: 'left',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'right',
    },
  ]);

  public readonly ID_DETAIL: Signal<string> = signal<string>('example-detail');

  openDetail() {
    this.ddrDetailService.open(this.ID_DETAIL());
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.opening'),
    );
  }

  closeDetail() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('detail.closing'),
    );
  }
}
