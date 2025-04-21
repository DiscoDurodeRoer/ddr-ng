import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrSpinnerService {

  public show: boolean = false;

  hideSpinner() {
    this.show = false;
  }

  showSpinner() {
    this.show = true;
  }

}
