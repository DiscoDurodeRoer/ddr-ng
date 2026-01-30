import { Directive, HostListener, ElementRef, inject, output } from '@angular/core';

@Directive({
  selector: '[ddrLoadIframe]'
})
export class DdrLoadIframeDirective {

  readonly loadIframe = output<void>();

  private el: ElementRef = inject(ElementRef);

  @HostListener('load')
  public onLoad() {

    const iframe = this.el.nativeElement;

    if (iframe.tagName === 'IFRAME') {
      const doc = (iframe as HTMLIFrameElement).contentDocument;

      if (!doc || doc.body.children.length > 0) {
        // TODO: The 'emit' function requires a mandatory void argument
        this.loadIframe.emit();
      }
    }


  }

}