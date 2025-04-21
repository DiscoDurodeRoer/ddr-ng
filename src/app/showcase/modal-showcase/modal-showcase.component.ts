import { Component, inject } from '@angular/core';
import { DdrToastService, DdrModalComponent, DdrButtonComponent, DdrModalService, DdrSize } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
    selector: 'app-modal-showcase',
    templateUrl: './modal-showcase.component.html',
    styleUrls: ['./modal-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrModalComponent,
        DdrButtonComponent
    ],
    providers: [
        DdrModalService
    ]
})
export class ModalShowcaseComponent {

  private readonly ddrModalService: DdrModalService = inject(DdrModalService);
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  
  public clickOutsideEnabled: boolean = true;
  public size: DdrSize = 'medium'
  
  openModalInfo() {
    this.ddrModalService.open('modal-info');
    this.ddrToastService.addSuccessMessage("Exito", "Modal info abierto");
  }

  openModalConf() {
    this.ddrModalService.open('modal-confirm');
    this.ddrToastService.addSuccessMessage("Exito", "Modal confirm abierto");
  }

  openModalNoButtons(){
    this.ddrModalService.open('modal-no-buttons');
    this.ddrToastService.addSuccessMessage("Exito", "Modal no buttons abierto");
  }

  closeModalInfo(){
    this.ddrToastService.addSuccessMessage("Exito", "Cerrado el modal de info");
    this.ddrModalService.close('modal-info');
  }

  closeModalConf(){
    this.ddrToastService.addSuccessMessage("Exito", "Cerrado el modal de conf");
    this.ddrModalService.close('modal-confirm');
  }

  closeModalNoButtons(){
    this.ddrToastService.addSuccessMessage("Exito", "Cerrado el modal no buttons");
    this.ddrModalService.close('modal-no-buttons');
  }

  changeClickOutside(){
    this.clickOutsideEnabled = !this.clickOutsideEnabled;
  }

  clickOutside($event: any) {
    console.log($event);
    this.ddrToastService.addSuccessMessage("Exito", "Click fuera del modal");
  }

  changeSize(size: DdrSize){
    this.size = size
  }
}
