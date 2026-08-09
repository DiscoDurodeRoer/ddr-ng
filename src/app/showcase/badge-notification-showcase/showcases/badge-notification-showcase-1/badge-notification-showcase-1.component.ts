import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'badge-notification-showcase-1',
  templateUrl: './badge-notification-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrBadgeNotificationDirective,
    DdrTranslatePipe
  ]
})
export class BadgeNotificationShowcase1Component {}
