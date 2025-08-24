import { Component, inject } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTabsComponent,
    DdrTabItemComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TabsShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  changeTab(tab: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('tabs.' + (tab + 1))
    )
  }

}
