import {
  AfterViewInit,
  ChangeDetectorRef,
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
  standalone: true,
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
  public readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly element: ElementRef = inject(ElementRef)
  private readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input({ required: true }) id!: string;
  @Input() type?: string;
  @Input() labelConfirm?: string;
  @Input() labelClose?: string;
  @Input() clickOutsideEnabled: boolean = true;
  @Input() size: DdrSize = this.constants.SIZE.MEDIUM;
  @Input() sizeButton: DdrSize = this.constants.SIZE.SMALL;

  @Output() close: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() accept: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
  @Output() clickOutside: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public show: boolean = false;

  ngOnInit() {
    this.ddrModalService.add(this);
  }

  openModal() {
    setTimeout(() => {
      this.show = true;
    });
  }

  closeModal() {
    setTimeout(() => {
      this.show = false;
    });
  }

  onConfirm($event?: any) {
    this.accept.emit($event);
    this.ddrModalService.close(this.id);
    this.changeDetectorRef.detectChanges();
  }

  onClose($event?: any) {
    this.close.emit($event);
    this.ddrModalService.close(this.id);
    this.changeDetectorRef.detectChanges();
  }

  onClickOutside($event?: any) {
    this.ddrModalService.close(this.id);
    this.clickOutside.emit($event);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.ddrModalService.remove(this.id);
    this.changeDetectorRef.detectChanges();
  }
}
