import { Component } from '@angular/core';
import { DdrBadgeNotificationComponent, DdrBadgeNotificationDirective, DdrButtonComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-badge-notification-showcase',
    templateUrl: './badge-notification-showcase.component.html',
    styleUrls: ['./badge-notification-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrButtonComponent,
        DdrBadgeNotificationDirective
    ]
})
export class BadgeNotificationShowcaseComponent {

}
