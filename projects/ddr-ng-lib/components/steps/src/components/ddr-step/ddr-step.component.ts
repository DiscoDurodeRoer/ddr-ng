import {
  Component,
  TemplateRef,
  input,
  contentChild,
  InputSignal,
  WritableSignal,
  signal,
  Signal,
} from '@angular/core';

@Component({
  selector: 'ddr-step',
  template: '',
})
export class DdrStepComponent {
  readonly titleStep: InputSignal<string> = input.required<string>();
  readonly canGoNext: InputSignal<boolean> = input<boolean>(false);

  public step: WritableSignal<number> = signal<number>(1);
  public open: WritableSignal<boolean> = signal<boolean>(false);
  public firstStep: WritableSignal<boolean> = signal<boolean>(false);
  public lastStep: WritableSignal<boolean> = signal<boolean>(false);

  readonly stepContentTemplate: Signal<TemplateRef<any> | null> =
    contentChild.required<TemplateRef<any> | null>('stepContent');
}
