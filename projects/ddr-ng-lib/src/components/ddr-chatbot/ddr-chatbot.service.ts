import { Injectable } from '@angular/core';
import { DdrMessage } from '../../common/ddr-message.model';

@Injectable()
export class DdrChatbotService {

  private idAutomeric: number = 1;
  private closeDialog: boolean = true;
  public messages: DdrMessage[] = [];
  public messagesNoRead = 0;

  addMessage(message: DdrMessage) {
    message.id = this.idAutomeric++;
    this.messages.push(message);
    if(this.closeDialog){
      this.messagesNoRead++;
    }
    return message;
  }

  updateMessage(id: number, message: DdrMessage) {
    const index = this.messages.findIndex(m => m.id == id);
    if(index != -1){
      this.messages[index] = message;
    }
  }

  clearMessages() {
    this.messages = [];
  }

}
