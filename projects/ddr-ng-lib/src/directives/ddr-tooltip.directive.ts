import { Directive, ElementRef, HostListener, inject, OnInit, Renderer2, TemplateRef, ViewContainerRef, input } from '@angular/core';
import { DdrConstantsService } from '../services/ddr-constants.service';
import { DdrOrientatioTooltip } from '../types/types';

@Directive({
  selector: '[ddrTooltip]'
})
export class DdrTooltipDirective implements OnInit {

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  private containerRef: ViewContainerRef = inject(ViewContainerRef)
  private constants: DdrConstantsService = inject(DdrConstantsService);

  readonly tooltipText = input<string>();
  readonly tooltipWidth = input<string>();
  readonly tooltipTemplate = input<TemplateRef<any>>();
  readonly tooltipTemplateData = input<any>();
  readonly tooltipUnderline = input<boolean>(false);
  readonly tooltipOrientation = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.TOP);

  private tooltipElement!: HTMLElement;

  ngOnInit(): void {
    if (this.tooltipUnderline()) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration-line', 'underline');
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration-style', 'dotted');
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration-thickness', '2px');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {

    const tooltipText = this.tooltipText();
    const tooltipTemplate = this.tooltipTemplate();
    if (tooltipText || tooltipTemplate) {
      if (tooltipTemplate) {
        const embeddedViewRef = this.containerRef.createEmbeddedView(tooltipTemplate, this.tooltipTemplateData());
        embeddedViewRef.detectChanges();
        this.tooltipElement = embeddedViewRef.rootNodes[0];
      } else {
        this.tooltipElement = document.createElement('span');
        this.tooltipElement.innerText = tooltipText || '';
      }
      this.tooltipElement.className = 'ddr-tooltip user-select-none';
      const tooltipWidth = this.tooltipWidth();
      if (tooltipWidth) {
        this.tooltipElement.style.width = tooltipWidth;
      }
      switch (this.tooltipOrientation()) {
        case this.constants.ORIENTATION.TOP:
          this.tooltipElement.className += ' ddr-tooltip--top';
          break;
        case this.constants.ORIENTATION.BOTTOM:
          this.tooltipElement.className += ' ddr-tooltip--bottom';
          break;
        case this.constants.ORIENTATION.LEFT:
          this.tooltipElement.className += ' ddr-tooltip--left';
          break;
        case this.constants.ORIENTATION.RIGHT:
          this.tooltipElement.className += ' ddr-tooltip--right';
          break;
      }
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
      this.el.nativeElement.appendChild(this.tooltipElement);
    }

  }

  hideTooltip() {
    if (this.tooltipElement) {
      this.el.nativeElement.removeChild(this.tooltipElement);
    }
  }


}
