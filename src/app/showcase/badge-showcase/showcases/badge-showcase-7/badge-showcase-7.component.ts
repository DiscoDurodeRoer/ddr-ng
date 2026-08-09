import { Component, inject } from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'badge-showcase-7',
  templateUrl: './badge-showcase-7.component.html',
  imports: [
    DdrBadgePillComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class BadgeShowcase7Component {

  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  clickBadge(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      'Click',
    );
  }

}

