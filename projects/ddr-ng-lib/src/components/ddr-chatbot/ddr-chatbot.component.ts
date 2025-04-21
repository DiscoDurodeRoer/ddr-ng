import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { DdrMessage } from '../../common/ddr-message.model';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrResolutionService } from '../ddr-resolution/ddr-resolution.service';
import { DdrChatbotService } from './ddr-chatbot.service';
import { FormsModule } from '@angular/forms';
import { DdrCardComponent } from '../ddr-card/ddr-card.component';
import { DdrBadgeNotificationComponent } from '../ddr-badge-notification/ddr-badge-notification.component';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DatePipe, NgClass } from '@angular/common';
import { DdrBadgeNotificationDirective } from '../ddr-badge-notification/ddr-badge-notification.directive';

@Component({
    selector: 'ddr-chatbot',
    templateUrl: './ddr-chatbot.component.html',
    styleUrls: ['./ddr-chatbot.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        DdrButtonComponent,
        DdrCardComponent,
        DdrBadgeNotificationComponent,
        DdrBadgeNotificationDirective,
        DdrInputGroupComponent,
        NgClass,
        DatePipe
    ],
    providers: [
        DdrChatbotService
    ],
    animations: [
        trigger('overlayAnimation', [
            state('void', style({
                opacity: 0
            })),
            state('visible', style({
                opacity: 1
            })),
            transition('void => visible', animate('500ms ease-out')),
            transition('visible => void', animate('195ms ease-in'))
        ])
    ]
})
export class DdrChatbotComponent implements OnInit, OnChanges, OnDestroy {

  public readonly resolutionService: DdrResolutionService = inject(DdrResolutionService)
  public readonly constants: DdrConstantsService = inject(DdrConstantsService)
  public readonly chatbotservice: DdrChatbotService = inject(DdrChatbotService)
  
  @Input() titleChat: string = 'chatbot';
  @Input() icon: string = 'bi bi-robot';
  @Input() messageInitial: DdrMessage[] = [];
  @Input() userTextDisable: boolean = false;
  @Input() placeholder: string = '';
  @Input() openStart: boolean = false;
  @Input() expandDialogStart: boolean = false;

  @Output() textTyped: EventEmitter<string> = new EventEmitter<string>();
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  public showDialog: boolean = false;
  public expandDialog: boolean = false;
  public messageText: string = '';

  ngOnInit() {
    this.showDialog = this.openStart;
    this.expandDialog = this.expandDialogStart;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['messageInitial']) {
        this.chatbotservice.clearMessages();
        for (const messageInitial of changes['messageInitial'].currentValue) {
          this.chatbotservice.addMessage(messageInitial);
        }
      }
    }
  }

  openCloseDialog() {
    this.showDialog = !this.showDialog;

    if (this.showDialog) {
      this.open.emit(true);
      this.chatbotservice.messagesNoRead = 0;
    } else {
      this.close.emit(true);
    }
  }

  expandContractDialog() {
    this.expandDialog = !this.expandDialog;
  }

  sendMessage() {

    if (this.messageText) {

      this.chatbotservice.addMessage({
        text: this.messageText,
        robot: false,
        date: new Date(),
        load: true
      })

      this.textTyped.emit(this.messageText);

      this.messageText = '';

    }

  }

  ngOnDestroy(): void {
    this.chatbotservice.clearMessages();
  }

}
