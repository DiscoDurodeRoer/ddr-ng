import { Component, TemplateRef, ViewEncapsulation, inject, input, output, contentChild, InputSignal, OutputEmitterRef, computed, Signal, effect, WritableSignal, signal, ModelSignal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrConstantsService } from '../../services/ddr-constants.service';
import { DdrInputGroupComponent } from '../ddr-input-group/ddr-input-group.component';
import { DdrInputError, DdrOrientatioTooltip, DdrTypeInput } from '../../types/types';
import { NgTemplateOutlet } from '@angular/common';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'ddr-input-password',
  templateUrl: './ddr-input-password.component.html',
  styleUrls: ['./ddr-input-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrInputGroupComponent,
    FormsModule,
    NgTemplateOutlet
  ]
})
export class DdrInputPasswordComponent implements FormValueControl<string> {

  public readonly constants: DdrConstantsService = inject(DdrConstantsService)

  readonly label: InputSignal<string> = input<string>('');
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly pattern: InputSignal<readonly RegExp[]> | undefined = input<readonly RegExp[]>([]);
  readonly name: InputSignal<string> = input<string>('');
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientatioTooltip> = input<DdrOrientatioTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly showPassword: InputSignal<boolean> = input<boolean>(false);

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();

  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public show: WritableSignal<boolean> = signal<boolean>(false);
  public typePassword: Signal<DdrTypeInput> = computed<DdrTypeInput>(() => this.show() ? this.constants.TYPE_INPUT.TEXT : this.constants.TYPE_INPUT.PASSWORD);
  public iconPassword: Signal<string> = computed<string>(() => this.show() ? 'bi bi-eye' : 'bi bi-eye-slash');
  
  value: ModelSignal<string> = model<string>('');

  constructor() {
    effect(() => this.show.set(this.showPassword()))
  }

  togglePassword() {
    this.show.update((value: boolean) => !value);
  }

  onHasErrors($event: DdrInputError) {
    this.hasErrors.emit($event);
  }

  onKeyup($event: string) {
    this.keyPressed.emit($event);
  }

  onclickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }

}
