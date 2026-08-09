import {
  Directive,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
  Renderer2,
  input,
  InputSignal
} from '@angular/core';

@Directive({
  selector: '[ddrClipboard]'
})
export class DdrClipboardDirective implements OnInit, OnDestroy {

  readonly textToCopy: InputSignal<string> = input.required<string>({ alias: "clipboard" });
  readonly clipboardTrigger: InputSignal<string | undefined> = input<string>();

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  private removeClickListener?: () => void;

  ngOnInit() {
    const clipboardTrigger = this.clipboardTrigger();
    const target = clipboardTrigger
      ? this.el.nativeElement.querySelector(clipboardTrigger)
      : this.el.nativeElement;

    if (target) {
      this.removeClickListener = this.renderer.listen(target, 'click', () => {
        navigator.clipboard.writeText(this.textToCopy());
      });
    }
  }

  ngOnDestroy() {
    if (this.removeClickListener) {
      this.removeClickListener();
    }
  }
}
