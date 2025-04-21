import { Component, inject } from '@angular/core';
import { DdrConversationComponent, DdrMessage, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-conversation-showcase',
    templateUrl: './conversation-showcase.component.html',
    styleUrls: ['./conversation-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrConversationComponent
    ]
})
export class ConversationShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);

  public messages: DdrMessage[] = [
    {
      text: 'Mensaje 1',
      robot: true,
      load: true,
      icon: 'bi bi-headset'
    },
    {
      text: 'Mensaje 2',
      robot: false,
      load: true,
      icon: 'bi bi-person'
    },
    {
      text: 'Mensaje 3',
      robot: true,
      load: true,
      icon: 'bi bi-headset'
    }
  ];

  clickMessage($event: any) {
    this.ddrToastService.addSuccessMessage('Click en un mensaje', JSON.stringify($event))
  }

}
