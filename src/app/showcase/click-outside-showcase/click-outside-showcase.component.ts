import { Component, inject } from '@angular/core';
import { DdrToastService, DdrClickOutsideDirective, DdrButtonComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-click-outside-showcase',
  templateUrl: './click-outside-showcase.component.html',
  styleUrls: ['./click-outside-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrClickOutsideDirective,
    DdrButtonComponent
  ]
})
export class ClickOutsideShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  
  public showEstandar: boolean = true;
  public showDelay: boolean = false;
  public showDesactivated: boolean = false;
  public actualMode: string = 'estandar';

  clickOutside($event: any) {
    this.ddrToastService.addSuccessMessage('Exito', 'Has clickado fuera del bloque');
    console.log($event);
  }

  openEstandar() {
    this.showEstandar = true;
    this.showDelay = false;
    this.showDesactivated = false;
    this.actualMode = 'estandar';
  }

  openDelay() {
    this.showEstandar = false;
    this.showDelay = true;
    this.showDesactivated = false;
    this.actualMode = 'delay';
  }

  openDesactivated() {
    this.showEstandar = false;
    this.showDelay = false;
    this.showDesactivated = true;
    this.actualMode = 'desactivated';
  }

}
