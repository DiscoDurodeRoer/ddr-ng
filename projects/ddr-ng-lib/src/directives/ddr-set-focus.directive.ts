import { Directive, ElementRef, EventEmitter, HostListener, inject, Input, OnChanges, Output, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ddrSetFocus]',
  standalone: true
})
export class DdrSetFocusDirective implements OnChanges {

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  @Input({ required: true }) focus = false;
  @Output() focusLost: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['focus'] && this.focus) {
      setTimeout(() => { this.renderer.selectRootElement(this.el.nativeElement).focus(); }, 100);
    }
  }

  @HostListener('blur')
  onBlur() {
    this.focusLost.emit();
  }


}
