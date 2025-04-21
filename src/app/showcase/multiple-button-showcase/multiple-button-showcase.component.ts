import { Component, inject } from '@angular/core';
import { DdrButton, DdrMultipleButtonComponent, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-multiple-button-showcase',
    templateUrl: './multiple-button-showcase.component.html',
    styleUrls: ['./multiple-button-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrMultipleButtonComponent,
        FormsModule
    ]
})
export class MultipleButtonShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  public buttonsEx1: DdrButton[] = [
    {
      text: 'Button1',
      icon: 'bi bi-check',
      value: 'BUTTON_1_EX1'
    },
    {
      text: 'Button2',
      icon: 'bi bi-check',
      value: 'BUTTON_2_EX1'
    },
    {
      text: 'Button3',
      icon: 'bi bi-trash',
      value: 'BUTTON_3_EX1'
    }
  ];
  public buttonsEx2: DdrButton[] = [
    {
      text: '',
      icon: 'bi bi-check',
      value: 'BUTTON_1_EX2'
    },
    {
      text: '',
      icon: 'bi bi-trash',
      value: 'BUTTON_2_EX2'
    }
  ];
  public buttonsEx3: DdrButton[] =[
    {
      text: 'Button1',
      icon: 'bi bi-check',
      value: 'BUTTON_1_EX3'
    }
  ];
  public buttonsEx4: DdrButton[] =[
    {
      text: 'Button1',
      icon: 'bi bi-check',
      value: 'BUTTON_1_EX4'
    },
    {
      text: 'Button2',
      icon: 'bi bi-check',
      value: 'BUTTON_2_EX4'
    },
    {
      text: 'Button3',
      icon: 'bi bi-trash',
      value: 'BUTTON_3_EX4'
    }
  ];

  public valueButton4: string = 'BUTTON_3_EX4';

  actionEx1($event: DdrButton) {
    switch ($event.value) {
      case 'BUTTON_1_EX1':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del primer ejemplo')
        break;
      case 'BUTTON_2_EX1':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el segundo boton del primer ejemplo')
        break;
      case 'BUTTON_3_EX1':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el tercero boton del primer ejemplo')
        break;
    }
  }

  actionEx2($event: DdrButton) {
    switch ($event.value) {
      case 'BUTTON_1_EX2':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del segundo ejemplo')
        break;
      case 'BUTTON_2_EX2':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el segundo boton del segundo ejemplo')
        break;
    }
  }

  actionEx3($event: DdrButton) {
    switch ($event.value) {
      case 'BUTTON_1_EX3':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del tercer ejemplo')
        break;
    }
  }

  actionEx4($event: DdrButton) {
    switch ($event.value) {
      case 'BUTTON_1_EX4':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el primer boton del cuarto ejemplo')
        break;
      case 'BUTTON_2_EX4':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el segundo boton del cuarto ejemplo')
        break;
      case 'BUTTON_3_EX4':
        this.ddrToastService.addSuccessMessage('Éxito', 'Has pulsado el tercero boton del cuarto ejemplo')
        break;
    }
  }

}
