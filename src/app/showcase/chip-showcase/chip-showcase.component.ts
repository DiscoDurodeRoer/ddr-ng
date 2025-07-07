import { Component, inject } from '@angular/core';
import { DdrChipComponent, DdrToastService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chip-showcase',
  templateUrl: './chip-showcase.component.html',
  styleUrls: ['./chip-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrChipComponent,
    JsonPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class ChipShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  public values = ["ejemplo1", "ejemplo2"]

  getValues($event: string[]) {
    this.ddrToastService.addSuccessMessage('Elementos', JSON.stringify($event));
  }

  clickValue($event: any) {
    this.ddrToastService.addSuccessMessage('Elemento seleccionado', $event);
  }

}
