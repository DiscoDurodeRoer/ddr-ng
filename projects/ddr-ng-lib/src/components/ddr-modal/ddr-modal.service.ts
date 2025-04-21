import { Injectable } from '@angular/core';
import { DdrModalComponent } from './ddr-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DdrModalService {

  private modals: DdrModalComponent[];

  constructor() {
    this.modals = [];
  }

  add(modal: any) {
    if (!this.modals.find(x => x.id === modal.id)) {
      this.modals.push(modal);
    }
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      modal.show = true;
    }
  }

  close(id: string) {
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      modal.show = false;
    }
  }

  isOpen(id: string) {
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      return modal.show;
    }
    return false;
  }

}
