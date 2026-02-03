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
  output,
  InputSignal,
  OutputEmitterRef,
  WritableSignal,
  signal
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
  styleUrl: './ddr-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
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

  readonly id: InputSignal<string> = input.required<string>();
  readonly type: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelConfirm: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelClose: InputSignal<string | undefined> = input<string | undefined>();
  readonly clickOutsideEnabled: InputSignal<boolean> = input<boolean>(true);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly sizeButton: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.SMALL);

  readonly close: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly accept: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly clickOutside: OutputEmitterRef<MouseEvent> = output<MouseEvent>();

  public show: WritableSignal<boolean> = signal<boolean>(false);

  ngOnInit() {
    this.ddrModalService.add(this);
  }

  openModal() {
    this.show.set(true);
  }

  closeModal() {
    this.show.set(false);
  }

  onConfirm($event?: any) {
    this.accept.emit($event);
    this.ddrModalService.close(this.id());
  }

  onClose($event?: any) {
    this.close.emit($event);
    this.ddrModalService.close(this.id());
  }

  onClickOutside($event?: any) {
    this.ddrModalService.close(this.id());
    this.clickOutside.emit($event);
  }

  ngOnDestroy(): void {
    this.ddrModalService.remove(this.id());
  }
}
