import { Directive, ElementRef, inject, OnChanges, Renderer2, SimpleChanges, ViewContainerRef, input } from '@angular/core';
import { DdrBadgeNotificationComponent } from './ddr-badge-notification.component';

@Directive({
  selector: '[ddrNotification]',
  standalone: true
})
export class DdrBadgeNotificationDirective implements OnChanges {

  private readonly vc: ViewContainerRef = inject(ViewContainerRef)
  private readonly elementRef = inject(ElementRef)
  private readonly renderer: Renderer2 = inject(Renderer2)

  readonly showNotifications = input<boolean>(true);
  readonly numberNotifications = input<number>(0);
  readonly limitNotifications = input<number>(9);
  readonly elementToInsert = input<string>('');
  readonly positionTop = input<string>('');
  readonly positionRight = input<string>('');

  public textNotification: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['numberNotifications'] ||
      changes['limitNotifications'] ||
      changes['showNotifications']
    ) {
      this.checkNumbersNotification();
      this.putNotification();
    }
  }

  checkNumbersNotification() {
    if (this.numberNotifications() > this.limitNotifications()) {
      this.textNotification = '+' + this.limitNotifications();
    } else {
      this.textNotification = this.numberNotifications().toString();
    }
  }

  putNotification() {

    this.vc.clear();

    const compRef = this.vc.createComponent(DdrBadgeNotificationComponent)
    compRef.instance.numberNotifications = this.numberNotifications();
    compRef.instance.limitNotifications = this.limitNotifications();
    compRef.instance.textNotification = this.textNotification;
    compRef.instance.showNotifications = this.showNotifications();

    this.renderer.setStyle(compRef.location.nativeElement, 'position', 'absolute');
    const positionTop = this.positionTop();
    if (positionTop) {
      this.renderer.setStyle(compRef.location.nativeElement, 'top', positionTop);
    } else {
      this.renderer.setStyle(compRef.location.nativeElement, 'top', 'calc(0% - 10px)');
    }
    const positionRight = this.positionRight();
    if (positionRight) {
      this.renderer.setStyle(compRef.location.nativeElement, 'right', positionRight);
    } else {
      this.renderer.setStyle(compRef.location.nativeElement, 'right', 'calc(0% - 10px)');
    }

    let el = null;
    const elementToInsert = this.elementToInsert();
    if (elementToInsert) {
      el = this.elementRef.nativeElement.querySelector(elementToInsert)
    } else {
      el = this.elementRef.nativeElement;
    }

    if (el) {
      el.appendChild(compRef.location.nativeElement);
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', 'relative');
    }

  }

}
