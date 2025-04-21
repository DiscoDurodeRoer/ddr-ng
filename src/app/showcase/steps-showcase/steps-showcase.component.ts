import { Component, inject } from '@angular/core';
import { DdrInputComponent, DdrStepComponent, DdrStepsComponent, DdrToastService } from '@ddr-ng';
import { Animal } from './animal';
import { FormsModule } from '@angular/forms';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-steps-showcase',
  templateUrl: './steps-showcase.component.html',
  styleUrls: ['./steps-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    FormsModule,
    DdrStepsComponent,
    DdrStepComponent,
    DdrInputComponent
  ]
})
export class StepsShowcaseComponent {

  public ddrToastService: DdrToastService = inject(DdrToastService);

  public animalEx2: Animal = {
    name: '',
    paws: 0,
    type: ''
  };
  public animalEx8: Animal = {
    name: '',
    paws: 0,
    type: ''
  };

  changeStep($event: any){
    this.ddrToastService.addSuccessMessage('Exito', 'Cambio al paso: ' + $event);
  }

}
