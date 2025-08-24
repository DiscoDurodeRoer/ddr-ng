import { Directive, ElementRef, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ddrClipboard]',
  standalone: true
})
export class DdrClipboardDirective implements OnInit, OnDestroy  {

  @Input({ alias: 'clipboard', required: true }) textToCopy!: string;
  @Input() clipboardTrigger?: string;

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  private removeClickListener?: () => void;

  ngOnInit() {
    const target = this.clipboardTrigger
      ? this.el.nativeElement.querySelector(this.clipboardTrigger)
      : this.el.nativeElement;

    if (target) {
      this.removeClickListener = this.renderer.listen(target, 'click', () => {
        navigator.clipboard.writeText(this.textToCopy);
      });
    }
  }

  ngOnDestroy() {
    if (this.removeClickListener) {
      this.removeClickListener();
    }
  }
}
