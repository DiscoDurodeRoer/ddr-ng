import { Directive, HostListener, ElementRef, inject, input, output } from '@angular/core';

@Directive({
  selector: '[ddrClickOutside]'
})
export class DdrClickOutsideDirective {

  readonly clickOutsideEnabled = input<boolean>(true);
  readonly clickOutsideDelay = input<number>();

  readonly clickOutside = output<MouseEvent>();

  private elementRef: ElementRef = inject(ElementRef);

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {

    if (this.clickOutsideEnabled()) {

      const target = event.target as HTMLElement;

      if (target && !this.elementRef.nativeElement.contains(target)) {

        const clickOutsideDelay = this.clickOutsideDelay();
        if (clickOutsideDelay) {
          setTimeout(() => {
            this.clickOutside.emit(event);
          }, clickOutsideDelay);
        } else {
          this.clickOutside.emit(event);
        }
      }
    }
  }

}