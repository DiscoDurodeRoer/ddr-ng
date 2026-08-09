import {
  Component,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'badge-notification-showcase-5',
  templateUrl: './badge-notification-showcase-5.component.html',
  imports: [
    DdrButtonComponent,
    DdrBadgeNotificationDirective,
    DdrTranslatePipe
  ]
})
export class BadgeNotificationShowcase5Component {

  public showNotifications: WritableSignal<boolean> = signal<boolean>(false);

  toggleNotifications() {
    this.showNotifications.update((value) => !value);
  }

}
