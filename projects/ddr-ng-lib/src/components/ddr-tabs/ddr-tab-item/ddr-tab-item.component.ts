import { Component, TemplateRef, ViewEncapsulation, input, contentChild, InputSignal, signal, WritableSignal, Signal } from '@angular/core';

@Component({
  selector: 'ddr-tab-item',
  template: '',
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class DdrTabItemComponent {

  readonly titleTab: InputSignal<string> = input.required<string>();
  readonly icon: InputSignal<string | undefined> = input<string | undefined>();
  public open: WritableSignal<boolean> = signal<boolean>(false);

  readonly tabContentTemplate: Signal<TemplateRef<any> | null | undefined> = contentChild<TemplateRef<any> | null>('tabContent');

}
