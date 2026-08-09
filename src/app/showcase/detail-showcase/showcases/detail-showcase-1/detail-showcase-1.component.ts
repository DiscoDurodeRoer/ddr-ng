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
import { DdrOrientationDetail } from 'ddr-ng/types';

@Component({
  selector: 'detail-showcase-1',
  templateUrl: './detail-showcase-1.component.html',
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
export class DetailShowcase1Component {

  public readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public orientation: WritableSignal<DdrOrientationDetail> = signal<DdrOrientationDetail>('right');
  public buttonsOrientation: WritableSignal<DdrButton[]> = signal<DdrButton[]>([
    {
      icon: 'bi bi-arrow-up',
      value: 'top',
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'right',
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom',
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'left',
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
