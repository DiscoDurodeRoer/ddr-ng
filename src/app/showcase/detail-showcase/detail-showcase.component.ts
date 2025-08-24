import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrDetailComponent,
  DdrButtonComponent,
  DdrOrientatioDetail,
  DdrDetailService,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrButton,
  DdrButtonMultipleComponent,
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'detail-showcase',
  templateUrl: './detail-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrDetailComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ShowcaseDdrDetailComponent {

  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrDetailService: DdrDetailService = inject(DdrDetailService);

  public orientation: DdrOrientatioDetail = 'right'
  public buttonsOrientation: DdrButton[] = [
    {
      icon: 'bi bi-arrow-up',
      value: 'top'
    },
    {
      icon: 'bi bi-arrow-left',
      value: 'right'
    },
    {
      icon: 'bi bi-arrow-down',
      value: 'bottom'
    },
    {
      icon: 'bi bi-arrow-right',
      value: 'left'
    }
  ];

  public readonly ID_DETAIL: string = 'example-detail'

  openDetail() {
    this.ddrDetailService.open(this.ID_DETAIL)
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      this.ddrTranslateService.getTranslate("detail.opening")
    );
  }

  closeDetail() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      this.ddrTranslateService.getTranslate("detail.closing")
    );
  }

}
