import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DdrToastService, DdrBadgePillComponent } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-badge-showcase',
  templateUrl: './badge-showcase.component.html',
  styleUrls: ['./badge-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrBadgePillComponent
  ]
})
export class BadgeShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  clickBadge($event: any){
    this.ddrToastService.addSuccessMessage("Exito", "Click en el badge");
    console.log($event);    
  }

}
