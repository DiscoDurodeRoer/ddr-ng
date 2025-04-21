import { Directive, ElementRef, inject, Input, OnChanges, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DdrBadgeNotificationComponent } from './ddr-badge-notification.component';

@Directive({
  selector: '[ddrNotification]',
  standalone: true
})
export class DdrBadgeNotificationDirective implements OnChanges {

  private readonly vc: ViewContainerRef = inject(ViewContainerRef)
  private readonly elementRef = inject(ElementRef)
  private readonly renderer: Renderer2 = inject(Renderer2)

  @Input() showNotifications: boolean = true;
  @Input() numberNotifications: number = 0;
  @Input() limitNotifications: number = 9;
  @Input() elementToInsert: string = '';
  @Input() positionTop: string = '';
  @Input() positionRight: string = '';

  public textNotification: string = '';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['numberNotifications'] || changes['limitNotifications']) {
        this.checkNumbersNotification();
        this.putNotification();
      }
    }
  }

  checkNumbersNotification() {
    if (this.numberNotifications > this.limitNotifications) {
      this.textNotification = '+' + this.limitNotifications;
    } else {
      this.textNotification = this.numberNotifications.toString();
    }
  }

  putNotification() {

    this.vc.clear();

    if (this.showNotifications) {
      const compRef = this.vc.createComponent(DdrBadgeNotificationComponent)
      compRef.instance.numberNotifications = this.numberNotifications;
      compRef.instance.limitNotifications = this.limitNotifications;
      compRef.instance.textNotification = this.textNotification;

      this.renderer.setStyle(compRef.location.nativeElement, 'position', 'absolute');
      if (this.positionTop) {
        this.renderer.setStyle(compRef.location.nativeElement, 'top', this.positionTop);
      } else {
        this.renderer.setStyle(compRef.location.nativeElement, 'top', 'calc(0% - 10px)');
      }
      if (this.positionRight) {
        this.renderer.setStyle(compRef.location.nativeElement, 'right', this.positionRight);
      } else {
        this.renderer.setStyle(compRef.location.nativeElement, 'right', 'calc(0% - 10px)');
      }

      let el = null;
      if (this.elementToInsert) {
        el = this.elementRef.nativeElement.querySelector(this.elementToInsert)
      } else {
        el = this.elementRef.nativeElement;
      }


      if (el) {
        el.appendChild(compRef.location.nativeElement);
        this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
      }

    }

  }

}
