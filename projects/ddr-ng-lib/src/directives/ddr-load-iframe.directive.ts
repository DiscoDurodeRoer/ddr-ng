import { Directive, EventEmitter, Output, HostListener, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[ddrLoadIframe]'
})
export class DdrLoadIframeDirective {

  @Output() loadIframe: EventEmitter<void> = new EventEmitter<void>();

  private el: ElementRef = inject(ElementRef);

  @HostListener('load')
  public onLoad() {

    const iframe = this.el.nativeElement;

    if (iframe.tagName === 'IFRAME') {
      const doc = (iframe as HTMLIFrameElement).contentDocument;

      if (!doc || doc.body.children.length > 0) {
        this.loadIframe.emit();
      }
    }


  }

}