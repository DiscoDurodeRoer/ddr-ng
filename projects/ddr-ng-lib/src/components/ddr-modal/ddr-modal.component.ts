import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrModalService } from './ddr-modal.service';
import { FormsModule } from '@angular/forms';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';
import { NgClass } from '@angular/common';
import { DdrSize } from '../../types/types';

@Component({
    selector: 'ddr-modal',
    templateUrl: './ddr-modal.component.html',
    styleUrls: ['./ddr-modal.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        FormsModule,
        DdrButtonComponent,
        DdrClickOutsideDirective,
        NgClass
    ]
})
export class DdrModalComponent implements OnInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly ddrModal: DdrModalService = inject(DdrModalService);
  public readonly element: ElementRef = inject(ElementRef)

  @Input({ required: true }) id!: string;
  @Input() type?: string;
  @Input() labelConfirm?: string;
  @Input() labelClose?: string;
  @Input() clickOutsideEnabled: boolean = true;
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;

  @Output() close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();;
  @Output() accept: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() clickOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public show: boolean = false;

  ngOnInit() {
    if (!this.id) {
      console.error("Modal must have id");
      return;
    }
    this.ddrModal.add(this);
    this.show = false;
  }

  onConfirm($event?: any) {
    this.accept.emit($event);
    this.ddrModal.close(this.id);
  }

  onClose($event?: any) {
    this.close.emit($event);
    this.ddrModal.close(this.id);
  }

  onclickOutside($event?: any) {
    this.ddrModal.close(this.id);
    this.clickOutside.emit($event);
  }

  ngOnDestroy(): void {
    this.ddrModal.remove(this.id);
  }
}
