import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { DdrMessage } from '../../common/ddr-message.model';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-conversation',
  templateUrl: './ddr-conversation.component.html',
  styleUrls: ['./ddr-conversation.component.scss'],
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet
  ]
})
export class DdrConversationComponent {

  @Input({ required: true }) messages: DdrMessage[] = [];
  @Input() canClick: boolean = false;
  
  @Output() clickMessage: EventEmitter<DdrMessage> = new EventEmitter<DdrMessage>();

  @ContentChild("template", { static: false }) template?: TemplateRef<any>;

  onClickMessage(message: DdrMessage) {
    if (this.canClick) {
      this.clickMessage.emit(message);
    }
  }

}
