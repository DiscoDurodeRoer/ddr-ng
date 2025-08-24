import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DdrToastService, DdrBadgePillComponent, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'badge-showcase',
  templateUrl: './badge-showcase.component.html',
  styleUrls: ['./badge-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    BaseShowcaseComponent,
    DdrBadgePillComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class BadgeShowcaseComponent {

  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  clickBadge($event: MouseEvent) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate("success"),
      "Click");
    console.log($event);
  }

}
