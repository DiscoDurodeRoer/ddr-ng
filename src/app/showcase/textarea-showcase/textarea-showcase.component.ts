import { Component, inject, signal } from '@angular/core';
import {
  DdrTextareaComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { Field, form, maxLength, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'textarea-showcase',
  templateUrl: './textarea-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrTextareaComponent,
    DdrTranslatePipe,
    Field
  ],
  providers: [
    DdrToastService
  ]
})
export class TextareaShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1

  value1: string = '';
  
  private textareaModelEx1 = signal({
    example1: ''
  })
  public formTextareaEx1 = form(this.textareaModelEx1)

  // Showcase 2

  value2: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  private textareaModelEx2 = signal({
    example2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  })
  public formTextareaEx2 = form(this.textareaModelEx2)

  // Showcase 3

  private textareaModelEx3 = signal({
    example3: ''
  })
  public formTextareaEx3 = form(this.textareaModelEx3, (textarea) => {
    required(textarea.example3, { message: 'textarea.value.required' })
    minLength(textarea.example3, 3, { message: 'textarea.minlength.required' })
    maxLength(textarea.example3, 10, { message: 'textarea.maxlength.required' })
  })

  // Showcase 8

  clickTextarea($event: MouseEvent) {
    console.log($event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.click')
    )
  }

  keyPressed(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('textarea.keypressed'),
      value
    )
  }

  blur() {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('textarea.event.blur')
    )
  }

}
