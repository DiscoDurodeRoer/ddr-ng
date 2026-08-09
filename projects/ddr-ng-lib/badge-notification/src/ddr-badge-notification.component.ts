import {
  Component,
  inject,
  signal,
  ViewEncapsulation,
  WritableSignal,
} from '@angular/core';
import { DdrBadgePillComponent } from 'ddr-ng/components/badge-pill';
import { DdrConstantsService } from 'ddr-ng/constants';

@Component({
  selector: 'ddr-badge-notification',
  templateUrl: './ddr-badge-notification.component.html',
  styleUrl: './ddr-badge-notification.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrBadgePillComponent],
})
export class DdrBadgeNotificationComponent {
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  public numberNotifications: WritableSignal<number> = signal<number>(0);
  public limitNotifications: WritableSignal<number> = signal<number>(9);
  public textNotification: WritableSignal<string> = signal<string>('');
  public showNotifications: WritableSignal<boolean> = signal<boolean>(true);
}
