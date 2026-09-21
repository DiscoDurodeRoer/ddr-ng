import { Directive, ElementRef, HostListener, inject, Renderer2, input, output, effect } from '@angular/core';

@Directive({
  selector: '[ddrSetFocus]'
})
export class DdrSetFocusDirective {

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  readonly focus = input.required<boolean>();
  readonly focusLost = output<void>();

  constructor() {
    effect(() => {
      if (this.focus()) {
        setTimeout(() => { this.renderer.selectRootElement(this.el.nativeElement).focus(); }, 100);
      }
    })
  }

  @HostListener('blur')
  onBlur() {
    this.focusLost.emit();
  }


}
