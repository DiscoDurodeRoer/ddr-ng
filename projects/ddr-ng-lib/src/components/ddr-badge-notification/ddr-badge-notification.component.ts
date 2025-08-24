
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrBadgeNotificationDirective } from './ddr-badge-notification.directive';
import { DdrBadgePillComponent } from '../ddr-badge-pill/ddr-badge-pill.component';

@Component({
  selector: 'ddr-badge-notification',
  templateUrl: './ddr-badge-notification.component.html',
  styleUrls: ['./ddr-badge-notification.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrBadgePillComponent,
    DdrBadgeNotificationDirective
  ]
})
export class DdrBadgeNotificationComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  public numberNotifications: number = 0;
  public limitNotifications: number = 9;
  public textNotification: string = '';
  public showNotifications: boolean = true;

}
