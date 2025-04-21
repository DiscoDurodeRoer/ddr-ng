import { Component, inject } from '@angular/core';
import { DdrToastService, DdrButtonComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-button-showcase',
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
  standalone: true,
  imports: [
    DdrButtonComponent,
    BaseShowcaseComponent
  ]
})
export class ButtonShowcaseComponent {
  
  public readonly ddrToastService: DdrToastService = inject(DdrToastService);

  click($event: any) {
    this.ddrToastService.addSuccessMessage('Exito', 'click en el boton');
  }

  submitForm() {
    this.ddrToastService.addSuccessMessage('Exito', 'accion submit en el form');
  }
}
