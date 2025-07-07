import { Directive, ElementRef, HostListener, inject, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { DdrConstantsService } from '../services/ddr-constants.service';
import { DdrOrientation } from '../types/types';

@Directive({
  selector: '[ddrTooltip]',
  standalone: true
})
export class DdrTooltipDirective implements OnInit {

  private el: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  private containerRef: ViewContainerRef = inject(ViewContainerRef)
  private constants: DdrConstantsService = inject(DdrConstantsService);

  @Input() tooltipText?: string;
  @Input() tooltipWidth?: string;
  @Input() tooltipTemplate?: TemplateRef<any>;
  @Input() tooltipTemplateData: any;
  @Input() underlineTooltip: boolean = false;
  @Input() orientationTooltip: DdrOrientation = this.constants.ORIENTATION.TOP;

  private tooltipElement!: HTMLElement;
  
  ngOnInit(): void {
    if (this.underlineTooltip) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline dotted 2px');
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  showTooltip() {

    if (this.tooltipText || this.tooltipTemplate) {
      if(this.tooltipTemplate){
        const embeddedViewRef = this.containerRef.createEmbeddedView(this.tooltipTemplate, this.tooltipTemplateData);
        embeddedViewRef.detectChanges();
        this.tooltipElement = embeddedViewRef.rootNodes[0];
      }else{
        this.tooltipElement = document.createElement('span');
        this.tooltipElement.innerText = this.tooltipText || '';
      }
      this.tooltipElement.className = 'ddr-tooltip user-select-none';
      if(this.tooltipWidth){
        this.tooltipElement.style.width = this.tooltipWidth; 
      }
      switch (this.orientationTooltip) {
        case this.constants.ORIENTATION.TOP:
          this.tooltipElement.className += ' ddr-tooltip--top';
          break;
        case this.constants.ORIENTATION.TOP_LEFT:
          this.tooltipElement.className += ' ddr-tooltip--top ddr-tooltip--top-left';
          break;
        case this.constants.ORIENTATION.TOP_RIGHT:
          this.tooltipElement.className += ' ddr-tooltip--top ddr-tooltip--top-right';
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
      // this.tooltipElement = null;
    }
  }


}
