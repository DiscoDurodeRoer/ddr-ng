import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective, DdrButtonComponent, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'badge-notification-showcase',
    templateUrl: './badge-notification-showcase.component.html',
    standalone: true,
    imports: [
        BaseShowcaseComponent,
        DdrButtonComponent,
        DdrBadgeNotificationDirective,
        DdrTranslatePipe
    ]
})
export class BadgeNotificationShowcaseComponent {

    public showNotifications: boolean = false;

    toggleNotifications(){
        this.showNotifications = !this.showNotifications
    }

}
