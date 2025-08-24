import { Component, inject } from '@angular/core';
import {
  DdrButtonComponent,
  DdrInputComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-showcase',
  templateUrl: './input-showcase.component.html',
  styleUrls: ['./input-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public valueEx1: string = '';
  public valueEx7: string = 'Disabled';
  public valueEx8: string = 'Read only';
  public valueEx9: number = 5;
  public focusEx14: boolean = false;

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.keypressed'),
      value
    )
  }

  focusInput() {
    this.focusEx14 = true;
  }

  onFocusLost() {
    this.focusEx14 = false;
  }

}
