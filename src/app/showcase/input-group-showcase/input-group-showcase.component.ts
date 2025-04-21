import { Component, inject } from '@angular/core';
import { DdrToastService, DdrInputGroupComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-group-showcase',
  templateUrl: './input-group-showcase.component.html',
  styleUrls: ['./input-group-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputGroupComponent,
    FormsModule
  ]
})
export class InputGroupShowcaseComponent {

  public toastService: DdrToastService = inject(DdrToastService);

  public value1 = '';
  public value2 = '';
  public value3 = '';

  click($ev: any) {
    console.log($ev);
    this.toastService.addSuccessMessage('Exito', 'click en el boton del input');
  }
}
