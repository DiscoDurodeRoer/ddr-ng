import { Component, inject } from '@angular/core';
import { DdrToastService, DdrDetailComponent, DdrButtonComponent, DdrOrientation } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-showcase-detail',
  templateUrl: './detail-showcase.component.html',
  styleUrls: ['./detail-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrDetailComponent,
    DdrButtonComponent
  ]
})
export class ShowcaseDdrDetailComponent {

  public readonly toastService: DdrToastService = inject(DdrToastService);

  public showDetail: boolean = false;
  public orientation: DdrOrientation = 'left'

  openDetail() {
    this.showDetail = true;
    this.toastService.addInfoMessage("Exito", "Abriendo el detalle");
  }

  closeDetail() {
    this.showDetail = false;
    this.toastService.addInfoMessage("Exito", "Cerrando el detalle");
  }

  changeOrientation(orientation: DdrOrientation){
    this.orientation = orientation;
  }

}
