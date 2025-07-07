import { Component, inject } from '@angular/core';
import { DdrTabItemComponent, DdrTabsComponent, DdrToastService, DdrToggleComponent } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-toggle-showcase',
    templateUrl: './toggle-showcase.component.html',
    styleUrls: ['./toggle-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrToggleComponent,
        FormsModule
    ],
    providers: [
      DdrToastService
    ]
})
export class ToggleShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);

  value1: boolean = false;
  value2: boolean = false;
  value3: boolean = false;
  value4: boolean = false;

  example1($event: any) {
    this.ddrToastService.addSuccessMessage("Cambio toogle 1", "El toggle cambio a " + $event);
    console.log($event);
  }

  example2($event: any) {
    this.ddrToastService.addSuccessMessage("Cambio toogle 2", "El toggle cambio a " + $event);
    console.log($event);
  }

  example3($event: any) {
    this.ddrToastService.addSuccessMessage("Cambio toogle 3", "El toggle cambio a " + $event);
    console.log($event);
  }

  example4($event: any) {
    this.ddrToastService.addSuccessMessage("Cambio toogle 4", "El toggle cambio a " + $event);
    console.log($event);
  }
}
