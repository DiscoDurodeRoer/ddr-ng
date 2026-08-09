import { Component, inject } from '@angular/core';
import {
  DdrTabItemComponent,
  DdrTabsComponent
} from 'ddr-ng/components/tabs';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';

@Component({
  selector: 'tabs-showcase-3',
  imports: [
    DdrTabsComponent,
    DdrTabItemComponent
  ],
  templateUrl: './tabs-showcase-3.component.html',
  styleUrl: './tabs-showcase-3.component.scss',
  providers: [DdrToastService],
})
export class TabsShowcase3Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  changeTab(tab: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('tabs.' + (tab + 1)),
    );
  }


}
