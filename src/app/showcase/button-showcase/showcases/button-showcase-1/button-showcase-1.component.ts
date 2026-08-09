import { Component, inject } from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import { 
  DdrTranslatePipe, 
  DdrTranslateService 
} from 'ddr-ng/translate';

@Component({
  selector: 'button-showcase-1',
  templateUrl: './button-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ButtonShowcase1Component {

  public readonly ddrToastService: DdrToastService = inject(DdrToastService);
  public readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  clickButton($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('button.click'),
    );
  }
}
