import { Injectable } from '@angular/core';
import { DdrDetailComponent } from './ddr-detail.component';

@Injectable({
  providedIn: 'root'
})
export class DdrDetailService {

  private details: DdrDetailComponent[] = [];

  add(detail: DdrDetailComponent) {
    const id = detail.id();
    if (!this.getDetail(id)) {
      this.details.push(detail);
    } else {
      console.warn(`Detail with ID ${id} is already registered`);
    }
  }

  remove(id: string) {
    this.details = this.details.filter(detail => detail.id() !== id);
  }

  open(id: string) {
    const detail = this.getDetail(id);
    if (detail) {
      detail.show = true;
    }
  }

  close(id: string) {
    const detail = this.getDetail(id);
    if (detail) {
      detail.show = false;
    }
  }

  private getDetail(id: string) {
    return this.details.find(detail => detail.id() === id);
  }

}
