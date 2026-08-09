import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';
import { DdrButtonComponent } from 'ddr-ng/components/button';

@Component({
  selector: 'badge-notification-showcase-6',
  templateUrl: './badge-notification-showcase-6.component.html',
  imports: [
    DdrButtonComponent,
    DdrBadgeNotificationDirective
  ]
})
export class BadgeNotificationShowcase6Component { }
