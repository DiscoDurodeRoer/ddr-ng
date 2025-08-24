import { Component, inject } from '@angular/core';
import {
  DdrInputPasswordComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-password-showcase',
  templateUrl: './input-password-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputPasswordShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: string = '';
  public valueEx4: string = 'Disabled';
  public valueEx5: string = 'Read only';

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.password.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.password.keypressed'),
      value
    )
  }

}
