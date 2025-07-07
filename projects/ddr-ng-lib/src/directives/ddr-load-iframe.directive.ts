import { Directive, EventEmitter, Output, HostListener, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[DdrLoadIframe]',
  standalone: true
})
export class DdrLoadIframeDirective {

  @Output() loadIframe: EventEmitter<boolean> = new EventEmitter<boolean>();;

  private el: ElementRef = inject(ElementRef);

  @HostListener('load')
  public onLoad(){

    if(!this.el.nativeElement.contentDocument || 
      this.el.nativeElement.contentDocument.body.children.length > 0){
      this.loadIframe.emit(true);
    }

  }

}