import { Component, inject, signal } from '@angular/core';
import {
  DdrButtonComponent,
  DdrInputComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { disabled, email, form, FormField, max, maxLength, min, minLength, pattern, readonly, required } from '@angular/forms/signals';

@Component({
  selector: 'input-showcase',
  templateUrl: './input-showcase.component.html',
  styleUrl: './input-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    DdrInputComponent,
    DdrTranslatePipe,
    DdrButtonComponent,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class InputShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1
  public valueEx1: string = '';

  private inputModelEx1 = signal({
    example1: ''
  })
  public formInputEx1 = form(this.inputModelEx1)

  // Showcase 3

  private inputModelEx3 = signal({
    example3: ''
  })
  public formInputEx3 = form(this.inputModelEx3, (input) => {
    required(input.example3)
  })

  // Showcase 5

  private inputModelEx5 = signal({
    example5: ''
  })
  public formInputEx5 = form(this.inputModelEx5, (input) => {
    required(input.example5, { message: 'input.value.required' }),
    minLength(input.example5, 8, { message: 'input.minlength.required'})
    maxLength(input.example5, 9, { message: 'input.maxlength.required'})
    pattern(input.example5, /^\d{8}[A-Z]$/, { message: 'input.pattern'})
  })

  // Showcase 6

  private inputModelEx6 = signal({
    example6: ''
  })
  public formInputEx6 = form(this.inputModelEx6, (input) => {
    required(input.example6, { message: 'input.value.required' }),
    minLength(input.example6, 5, { message: 'input.minlength.required'})
  })

  // Showcase 7
  
  public valueEx7: string = 'Disabled';

  private inputModelEx7 = signal({
    example7: 'Disabled'
  })
  public formInputEx7 = form(this.inputModelEx7, (input) => {
    disabled(input.example7)
  })

  // Showcase 8

  public valueEx8: string = 'Read only';

  private inputModelEx8 = signal({
    example8: 'Read only'
  })
  public formInputEx8 = form(this.inputModelEx8, (input) => {
    readonly(input.example8)
  })

  // Showcase 9

  public valueEx9: number = 5;

  private inputModelEx9 = signal({
    example9: 5
  })
  public formInputEx9 = form(this.inputModelEx9, (input) => {
    min(input.example9, 5, { message: 'input.min.value' }),
    max(input.example9, 10, { message: 'input.max.value' })
  })

  // Showcase 12

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

  // Showcase 14

  public focusEx14: boolean = false;

  focusInput() {
    this.focusEx14 = true;
  }

  onFocusLost() {
    this.focusEx14 = false;
  }

  // Showcase 16

  private inputModelEx16 = signal({
    example16: ''
  })
  public formInputEx16 = form(this.inputModelEx16, (input) => {
    email(input.example16, { message: 'input.email.error' })
  })

}
