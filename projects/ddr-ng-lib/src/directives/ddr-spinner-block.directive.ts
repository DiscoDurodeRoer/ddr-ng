import { Directive, Input, ViewContainerRef, ComponentRef, OnChanges, SimpleChanges, inject, Renderer2, ElementRef } from '@angular/core';
import { DdrSpinnerComponent } from '../components/ddr-spinner/ddr-spinner.component';

@Directive({
  selector: '[ddrSpinnerBlock]'
})
export class DdrSpinnerBlockDirective implements OnChanges {

  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  private renderer: Renderer2 = inject(Renderer2);
  private el: ElementRef = inject(ElementRef);

  @Input() spinnerShow = false;
  @Input() spinnerPathImg: string = '';

  private spinnerRef?: ComponentRef<DdrSpinnerComponent>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['spinnerShow']) {
      if (this.spinnerShow) {
        this.createSpinner();
      } else {
        this.removeSpinner();
      }
    }
  }

  private createSpinner(): void {
    if (!this.spinnerRef) {
      this.spinnerRef = this.viewContainerRef.createComponent(DdrSpinnerComponent);
      this.spinnerRef.instance.pathImg = this.spinnerPathImg;
      this.spinnerRef.instance.embedded = true;
      this.renderer.appendChild(this.el.nativeElement, this.spinnerRef.location.nativeElement);
    }
  }

  private removeSpinner(): void {
    if (this.spinnerRef) {
      this.spinnerRef.instance.show = false;
      this.spinnerRef.destroy();
      this.spinnerRef = undefined;
    }
  }
}
