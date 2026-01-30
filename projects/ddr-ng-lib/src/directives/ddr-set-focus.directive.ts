import { Directive, ElementRef, HostListener, inject, OnChanges, Renderer2, SimpleChanges, input, output } from '@angular/core';

@Directive({
  selector: '[ddrSetFocus]'
})
export class DdrSetFocusDirective implements OnChanges {

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  readonly focus = input.required<boolean>();
  readonly focusLost = output<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['focus'] && this.focus()) {
      setTimeout(() => { this.renderer.selectRootElement(this.el.nativeElement).focus(); }, 100);
    }
  }

  @HostListener('blur')
  onBlur() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.focusLost.emit();
  }


}
