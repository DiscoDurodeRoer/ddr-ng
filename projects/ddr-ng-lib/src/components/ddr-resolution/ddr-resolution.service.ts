import { inject, Injectable } from '@angular/core';
import { DdrConstantsService } from '../../services/ddr-constants.service';

@Injectable({
  providedIn: 'root'
})
export class DdrResolutionService {

  private readonly constants: DdrConstantsService = inject(DdrConstantsService);

  public size!: string;

  setSize(width: number) {

    if (width > this.constants.RESOLUTIONS.MOBILE_MIN && width <= this.constants.RESOLUTIONS.MOBILE_MAX) {
      this.size = this.constants.RESOLUTIONS.MOBILE;
    }else if (width > this.constants.RESOLUTIONS.WEB_MIN && width <= this.constants.RESOLUTIONS.WEB_MAX) {
      this.size = this.constants.RESOLUTIONS.WEB;
    }

  }

}
