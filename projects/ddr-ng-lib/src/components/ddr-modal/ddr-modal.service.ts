import { Injectable, signal, WritableSignal } from '@angular/core';
import { DdrModalComponent } from './ddr-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DdrModalService {

  private modals: WritableSignal<DdrModalComponent[]> = signal([]);

  add(modal: DdrModalComponent) {
    const id = modal.id();
    if (!this.getModal(id)) {
      this.modals.update((value: DdrModalComponent[]) => [...value, modal]);
    } else {
      console.warn(`Modal with ID ${id} is already registered`);
    }
  }

  remove(id: string) {
    this.modals.update((value: DdrModalComponent[]) => value.filter(modal => modal.id() !== id));
  }

  open(id: string) {
    const modal = this.getModal(id);
    if (modal) {
      modal.openModal();
    }
  }

  close(id: string) {
    const modal = this.getModal(id);
    if (modal) {
      modal.closeModal();
    }
  }

  private getModal(id: string) {
    return this.modals().find(modal => modal.id() === id);
  }

}
