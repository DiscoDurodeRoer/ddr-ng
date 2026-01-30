import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  input,
  output
} from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrModalService } from './ddr-modal.service';
import { FormsModule } from '@angular/forms';
import { DdrButtonComponent } from '../ddr-button/ddr-button.component';
import { DdrClickOutsideDirective } from '../../directives/ddr-click-outside.directive';

import { DdrSize } from '../../types/types';

@Component({
  selector: 'ddr-modal',
  templateUrl: './ddr-modal.component.html',
  styleUrls: ['./ddr-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    DdrButtonComponent,
    DdrClickOutsideDirective
]
})
export class DdrModalComponent implements OnInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly element: ElementRef = inject(ElementRef)
  public readonly changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly id = input.required<string>();
  readonly type = input<string>();
  readonly labelConfirm = input<string>();
  readonly labelClose = input<string>();
  readonly clickOutsideEnabled = input<boolean>(true);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly sizeButton = input<DdrSize>(this.constants.SIZE.SMALL);

  readonly close = output<MouseEvent>();
  readonly accept = output<MouseEvent>();
  readonly clickOutside = output<MouseEvent>();

  public show: boolean = false;

  ngOnInit() {
    this.ddrModalService.add(this);
  }

  openModal() {
    setTimeout(() => {
      this.show = true;
      this.changeDetectorRef.detectChanges();
    });
  }

  closeModal() {
    setTimeout(() => {
      this.show = false;
      this.changeDetectorRef.detectChanges();
    });
  }

  onConfirm($event?: any) {
    this.accept.emit($event);
    this.ddrModalService.close(this.id());
    this.changeDetectorRef.detectChanges();
  }

  onClose($event?: any) {
    this.close.emit($event);
    this.ddrModalService.close(this.id());
    this.changeDetectorRef.detectChanges();
  }

  onClickOutside($event?: any) {
    this.ddrModalService.close(this.id());
    this.clickOutside.emit($event);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    this.ddrModalService.remove(this.id());
    this.changeDetectorRef.detectChanges();
  }
}
