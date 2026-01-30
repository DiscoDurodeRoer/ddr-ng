
import { Component, inject, signal, ViewEncapsulation, WritableSignal } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrBadgePillComponent } from '../ddr-badge-pill/ddr-badge-pill.component';

@Component({
  selector: 'ddr-badge-notification',
  templateUrl: './ddr-badge-notification.component.html',
  styleUrls: ['./ddr-badge-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrBadgePillComponent
    ]
})
export class DdrBadgeNotificationComponent {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  public numberNotifications: WritableSignal<number> = signal<number>(0);
  public limitNotifications: WritableSignal<number> = signal<number>(9);
  public textNotification: WritableSignal<string> = signal<string>('');
  public showNotifications: WritableSignal<boolean> = signal<boolean>(true);

}
