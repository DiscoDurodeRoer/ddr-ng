import { Component, inject, signal } from '@angular/core';
import {
  DdrToastService,
  DdrInputGroupComponent,
  DdrTranslateService,
  DdrTranslatePipe,
  DdrButtonComponent
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { disabled, form, FormField, max, maxLength, min, minLength, pattern, required } from '@angular/forms/signals';

@Component({
  selector: 'input-group-showcase',
  templateUrl: './input-group-showcase.component.html',
  styleUrl: './input-group-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    DdrInputGroupComponent,
    DdrButtonComponent,
    DdrTranslatePipe,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1

  public value: string = '';

  private inputModelEx1 = signal({
    example1: ''
  })
  public formInputEx1 = form(this.inputModelEx1)

  // Showcase 2

  private inputModelEx2 = signal({
    example2: ''
  })
  public formInputEx2 = form(this.inputModelEx2, (input) => {
    required(input.example2, { message: 'input.value.required' }),
    minLength(input.example2, 8, { message: 'input.minlength.required'})
    maxLength(input.example2, 9, { message: 'input.maxlength.required'})
    pattern(input.example2, /^\d{8}[A-Z]$/, { message: 'input.pattern'})
  })

  // Showcase 4

  private inputModelEx4 = signal({
    example4: ''
  })
  public formInputEx4 = form(this.inputModelEx4, (input) => {
    disabled(input.example4)
  })

  // Showcase 8

  public valueEx8: number = 5;

  private inputModelEx8 = signal({
    example8: 5
  })
  public formInputEx8 = form(this.inputModelEx8, (input) => {
    min(input.example8, 5, { message: 'input.min.value' }),
    max(input.example8, 10, { message: 'input.max.value' })
  })

  // Showcase 11

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
