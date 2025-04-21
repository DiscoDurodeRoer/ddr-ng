import { Component, inject } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-tabs-showcase',
  templateUrl: './tabs-showcase.component.html',
  styleUrls: ['./tabs-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTabsComponent,
    DdrTabItemComponent
  ]
})
export class TabsShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  tabIndex($event: number){
    this.ddrToastService.addSuccessMessage('Cambio de tab', 'Tab cambiado: ' + $event)
  }

}
