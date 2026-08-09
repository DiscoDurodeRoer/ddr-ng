import { Service, signal, WritableSignal } from '@angular/core';
import { DdrDetailComponent } from '../ddr-detail.component';

@Service()
export class DdrDetailService {

  private details: WritableSignal<DdrDetailComponent[]> = signal<DdrDetailComponent[]>([]);

  add(detail: DdrDetailComponent) {
    const id = detail.id();
    if (!this.getDetail(id)) {
      this.details.update((value: DdrDetailComponent[]) => [...value, detail]);
    } else {
      console.warn(`Detail with ID ${id} is already registered`);
    }
  }

  remove(id: string) {
    this.details.update((value: DdrDetailComponent[]) => value.filter(detail => detail.id() !== id));
  }

  open(id: string) {
    const detail = this.getDetail(id);
    if (detail) {
      detail.show.set(true);
    }
  }

  close(id: string) {
    const detail = this.getDetail(id);
    if (detail) {
      detail.show.set(false);
    }
  }

  private getDetail(id: string) {
    return this.details().find(detail => detail.id() === id);
  }

}
