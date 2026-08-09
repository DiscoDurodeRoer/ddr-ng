import { Directive, ViewContainerRef, ComponentRef, OnChanges, SimpleChanges, inject, Renderer2, ElementRef, input, InputSignal } from '@angular/core';
import { DdrSpinnerComponent } from '../ddr-spinner.component';

@Directive({
  selector: '[ddrSpinnerBlock]'
})
export class DdrSpinnerBlockDirective implements OnChanges {

  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  private renderer: Renderer2 = inject(Renderer2);
  private el: ElementRef = inject(ElementRef);

  readonly spinnerShow: InputSignal<boolean> = input(false);
  readonly spinnerPathImg: InputSignal<string> = input<string>('');

  private spinnerRef?: ComponentRef<DdrSpinnerComponent>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['spinnerShow']) {
      if (this.spinnerShow()) {
        this.createSpinner();
      } else {
        this.removeSpinner();
      }
    }
  }

  private createSpinner(): void {
    if (!this.spinnerRef) {
      this.spinnerRef = this.viewContainerRef.createComponent(DdrSpinnerComponent);
      this.spinnerRef.instance.pathImg.set(this.spinnerPathImg());
      this.spinnerRef.instance.embedded.set(true);
      this.renderer.appendChild(this.el.nativeElement, this.spinnerRef.location.nativeElement);
    }
  }

  private removeSpinner(): void {
    if (this.spinnerRef) {
      this.spinnerRef.instance.show.set(false);
      this.spinnerRef.destroy();
      this.spinnerRef = undefined;
    }
  }
}
