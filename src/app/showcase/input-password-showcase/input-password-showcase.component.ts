import { Component, inject, signal } from '@angular/core';
import {
  DdrInputPasswordComponent,
  DdrToastService,
  DdrTranslatePipe, 
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { disabled, Field, form, maxLength, minLength, pattern, readonly, required } from '@angular/forms/signals';

@Component({
  selector: 'input-password-showcase',
  templateUrl: './input-password-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrInputPasswordComponent,
    DdrTranslatePipe,
    Field
  ],
  providers: [
    DdrToastService
  ]
})
export class InputPasswordShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1

  public value: string = '';

  private inputPasswordModelEx1 = signal({
    example1: ''
  })
  public formInputPasswordEx1 = form(this.inputPasswordModelEx1)

  // Showcase 2

  private inputPasswordModelEx2 = signal({
    example2: ''
  })
  public formInputPasswordEx2 = form(this.inputPasswordModelEx2, (input) => {
    required(input.example2, { message: 'input.value.required' }),
    minLength(input.example2, 8, { message: 'input.minlength.required'})
    maxLength(input.example2, 9, { message: 'input.maxlength.required'})
    pattern(input.example2, /^(?=.*[A-Za-z])(?=.*\d).{8,}$/, { message: 'input.pattern'})
  })

  // Showcase 4

  public valueEx4: string = 'Disabled';

  private inputPasswordModelEx4 = signal({
    example4: 'Disabled'
  })
  public formInputPasswordEx4 = form(this.inputPasswordModelEx4, (input) => {
    disabled(input.example4)
  })

  // Showcase 5

  public valueEx5: string = 'Read only';
    
  private inputPasswordModelEx5 = signal({
    example5: 'Read only'
  })
  public formInputPasswordEx5 = form(this.inputPasswordModelEx5, (input) => {
    readonly(input.example5)
  })

  // Showcase 9

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
