import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { BadgeNotificationShowcase1Component } from './showcases/badge-notification-showcase-1/badge-notification-showcase-1.component';
import { BadgeNotificationShowcase2Component } from './showcases/badge-notification-showcase-2/badge-notification-showcase-2.component';
import { BadgeNotificationShowcase3Component } from './showcases/badge-notification-showcase-3/badge-notification-showcase-3.component';
import { BadgeNotificationShowcase4Component } from './showcases/badge-notification-showcase-4/badge-notification-showcase-4.component';
import { BadgeNotificationShowcase5Component } from './showcases/badge-notification-showcase-5/badge-notification-showcase-5.component';
import { BadgeNotificationShowcase6Component } from './showcases/badge-notification-showcase-6/badge-notification-showcase-6.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'badge-notification-showcase',
  templateUrl: './badge-notification-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    BadgeNotificationShowcase1Component,
    BadgeNotificationShowcase2Component,
    BadgeNotificationShowcase3Component,
    BadgeNotificationShowcase4Component,
    BadgeNotificationShowcase5Component,
    BadgeNotificationShowcase6Component,
    DdrTranslatePipe,
  ],
})
export class BadgeNotificationShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<ddr-button 
    [text]="'badge.notification.text' | ddrTranslate"
    ddrNotification 
    [numberNotifications]="5" 
    [limitNotifications]="9" />`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'badge.notification.text' | ddrTranslate"
    ddrNotification 
    [numberNotifications]="15" 
    [limitNotifications]="9" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'badge-notification-showcase-2',
  templateUrl: './badge-notification-showcase-2.component.html',
  imports: [
    DdrButtonComponent,
    DdrBadgeNotificationDirective,
    DdrTranslatePipe
  ],
})
export class BadgeNotificationShowcase2Component { }
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="'badge.notification.text' | ddrTranslate"
    ddrNotification 
    [numberNotifications]="100" 
    [limitNotifications]="99" />`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'badge-notification-showcase-3',
  templateUrl: './badge-notification-showcase-3.component.html',
  imports: [
    DdrButtonComponent,
    DdrBadgeNotificationDirective,
    DdrTranslatePipe
  ]
})
export class BadgeNotificationShowcase3Component { }
`
      },
      {
        htmlCode: `<i class="fs-2 bi bi-house-door-fill"
    ddrNotification 
    [numberNotifications]="15" 
    [limitNotifications]="9">
</i>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrBadgeNotificationDirective } from 'ddr-ng/badge-notification';

@Component({
  selector: 'badge-notification-showcase-4',
  templateUrl: './badge-notification-showcase-4.component.html',
  imports: [
    DdrBadgeNotificationDirective
  ]
})
export class BadgeNotificationShowcase4Component {}
`
      },
      {
        htmlCode: `<ddr-button 
    [text]="(showNotifications() ? 'badge.notification.hide.notifications' :  'badge.notification.show.notifications') | ddrTranslate"
    (action)="toggleNotifications()" />

<i class="fs-2 bi bi-house-door-fill"
    ddrNotification 
    [numberNotifications]="15" 
    [limitNotifications]="9"
    [showNotifications]="showNotifications()">`,
        tsCode: `import {
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
`
      },
      {
        htmlCode: `<ddr-button 
    icon="bi bi-house-door-fill"
    [floatButton]="true"
    ddrNotification 
    [elementToInsert]="'button'"
    [positionTop]="'0%'"
    [positionRight]="'calc(0% - 10px)'"
    [numberNotifications]="100" 
    [limitNotifications]="99" />`,
        tsCode: `import { Component } from '@angular/core';
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
`
      }
    ],
    inputs: [
      {
        item: {
          name: 'showNotifications',
          description: 'badge.notification.input.shownotifications',
          required: false,
          default: 'true',
          type: 'boolean'
        }
      },
      {
        item: {
          name: 'numberNotifications',
          description: 'badge.notification.input.numbernotifications',
          required: false,
          default: '0',
          type: 'number'
        }
      },
      {
        item: {
          name: 'limitNotifications',
          description: 'badge.notification.input.limitnotifications',
          required: false,
          default: '9',
          type: 'number'
        }
      },
      {
        item: {
          name: 'elementToInsert',
          description: 'badge.notification.input.elementtoinsert',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'positionTop',
          description: 'badge.notification.input.positiontop',
          required: false,
          default: "''",
          type: 'string'
        }
      },
      {
        item: {
          name: 'positionRight',
          description: 'badge.notification.input.positionright',
          required: false,
          default: "''",
          type: 'string'
        }
      }
    ],
    styles: [
      {
        item: {
          class: 'ddr-badge-notification',
          description: 'badge.notification.notification'
        }
      }
    ]
  }
}
