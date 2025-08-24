import { Directive, ElementRef, Renderer2, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[ddrSkeleton]',
  standalone: true
})
export class DdrSkeletonDirective implements OnInit {

  private element: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  @Input() skeletonWidth: string = '100%';
  @Input() skeletonHeight: string = '1rem';
  @Input() skeletonBorderRadius: string = '0.5rem';

  private cssClass = 'skeleton';

  ngOnInit(): void {
    const el = this.element.nativeElement;
    this.renderer.setStyle(el, 'width', this.skeletonWidth);
    this.renderer.setStyle(el, 'height', this.skeletonHeight);
    this.renderer.setStyle(el, 'border-radius', this.skeletonBorderRadius);
    this.renderer.setStyle(el, 'display', 'inline-block');
    this.renderer.setStyle(el, 'margin-left', '5px');
    this.renderer.addClass(el, this.cssClass);
  }
}