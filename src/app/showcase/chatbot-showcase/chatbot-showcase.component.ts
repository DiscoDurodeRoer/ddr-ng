import { Component, inject } from '@angular/core';
import { DdrToastService, DdrChatbotService, DdrMessage, DdrChatbotComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-chatbot-showcase',
    templateUrl: './chatbot-showcase.component.html',
    styleUrls: ['./chatbot-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrChatbotComponent
    ]
})
export class ChatbotShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private chatbotService: DdrChatbotService = inject(DdrChatbotService);

  public messageInitial: DdrMessage[] = [{
    text: '¡Bienvenido! ¿Que necesitas? Ayuda | Contacto',
    date: new Date(),
    robot: true,
    load: true
  }];

  textTyped($event: string) {
    this.ddrToastService.addInfoMessage('Chatbot', 'Texto escrito por el usuario: ' + $event);

    switch ($event.toLowerCase()) {
      case 'ayuda':
        this.chatbotService.addMessage({
          text: 'Revisa la documentación en esta misma página',
          date: new Date(),
          robot: true,
          load: true
        })
        break;
      case 'contacto':
        this.chatbotService.addMessage({
          text: 'Puedes contactar conmigo en este email: manuelfernando.urena@ddr-ng.com',
          date: new Date(),
          robot: true,
          load: true
        })
        break;
      default:
        this.chatbotService.addMessage({
          text: 'Lo siento pero no te he entendido, escribe Ayuda o Contacto',
          date: new Date(),
          robot: true,
          load: true
        })
    }


  }

  openDialog() {
    this.ddrToastService.addInfoMessage('Chatbot', 'Dialogo abierto');
  }

  closeDialog() {
    this.ddrToastService.addInfoMessage('Chatbot', 'Dialogo cerrado');
  }

}
