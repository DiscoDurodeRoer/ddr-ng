import { Component, inject } from '@angular/core';
import {
  DdrToastService,
  DdrInputGroupComponent,
  DdrTranslateService,
  DdrTranslatePipe,
  DdrButtonComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-group-showcase',
  templateUrl: './input-group-showcase.component.html',
  styleUrls: ['./input-group-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrInputGroupComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: string = '';
  public valueEx8: number = 5;
  public focusEx11: boolean = false;

  clickButton($ev: MouseEvent) {
    console.log($ev);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click')
    );
  }

  clickInput($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('input.group.keypressed'),
      value
    )
  }

  focusInputGroup() {
    this.focusEx11 = true;
  }

  onFocusLost() {
    this.focusEx11 = false;
  }

}
