import { Directive, ElementRef, inject, Renderer2, ViewContainerRef, input, WritableSignal, signal, effect } from '@angular/core';
import { DdrBadgeNotificationComponent } from './ddr-badge-notification.component';

@Directive({
  selector: '[ddrNotification]'
})
export class DdrBadgeNotificationDirective {

  private readonly vc: ViewContainerRef = inject(ViewContainerRef)
  private readonly elementRef = inject(ElementRef)
  private readonly renderer: Renderer2 = inject(Renderer2)

  readonly showNotifications = input<boolean>(true);
  readonly numberNotifications = input<number>(0);
  readonly limitNotifications = input<number>(9);
  readonly elementToInsert = input<string>('');
  readonly positionTop = input<string>('');
  readonly positionRight = input<string>('');

  public textNotification: WritableSignal<string> = signal<string>('');

  constructor() {
    effect(() => {
      this.checkNumbersNotification();
      this.putNotification();
    })
  }

  checkNumbersNotification() {
    if (this.numberNotifications() > this.limitNotifications()) {
      this.textNotification.set(`+${this.limitNotifications()}`);
    } else {
      this.textNotification.set(this.numberNotifications().toString())
    }
  }

  putNotification() {

    this.vc.clear();

    const compRef = this.vc.createComponent(DdrBadgeNotificationComponent)
    compRef.instance.numberNotifications.set(this.numberNotifications());
    compRef.instance.limitNotifications.set(this.limitNotifications());
    compRef.instance.textNotification.set(this.textNotification());
    compRef.instance.showNotifications.set(this.showNotifications());

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
