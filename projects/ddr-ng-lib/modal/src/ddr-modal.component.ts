import {
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
  signal,
} from '@angular/core';
import { DdrModalService } from './services/ddr-modal.service';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrClickOutsideDirective } from 'ddr-ng/directives/click-outside';
import { DdrSize } from 'ddr-ng/types';

@Component({
  selector: 'ddr-modal',
  templateUrl: './ddr-modal.component.html',
  styleUrl: './ddr-modal.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrButtonComponent,
    DdrClickOutsideDirective
  ],
})
export class DdrModalComponent implements OnInit, OnDestroy {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService);
  public readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly element: ElementRef = inject(ElementRef);

  readonly id: InputSignal<string> = input.required<string>();
  readonly type: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelConfirm: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelClose: InputSignal<string | undefined> = input<string | undefined>();
  readonly clickOutsideEnabled: InputSignal<boolean> = input<boolean>(true);
  readonly size: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly sizeButton: InputSignal<DdrSize> = input<DdrSize>(this.constants.SIZE.SMALL);

  readonly close: OutputEmitterRef<void> = output<void>();
  // readonly closeModal: OutputEmitterRef<void> = output<void>();
  readonly accept: OutputEmitterRef<void> = output<void>();
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
    this.close.emit();
  }

  onConfirm() {
    this.accept.emit();
    this.ddrModalService.close(this.id());
  }

  onClose() {
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
