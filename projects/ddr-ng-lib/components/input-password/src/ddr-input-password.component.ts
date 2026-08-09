import {
  Component,
  TemplateRef,
  ViewEncapsulation,
  inject,
  input,
  output,
  contentChild,
  InputSignal,
  OutputEmitterRef,
  computed,
  Signal,
  effect,
  WritableSignal,
  signal,
  ModelSignal,
  model,
  viewChild,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  FormValueControl,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrInputError, DdrOrientationTooltip } from 'ddr-ng/types';

@Component({
  selector: 'ddr-input-password',
  templateUrl: './ddr-input-password.component.html',
  styleUrl: './ddr-input-password.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrInputGroupComponent, NgTemplateOutlet],
})
export class DdrInputPasswordComponent implements FormValueControl<string> {
  public readonly constants: DdrConstantsService = inject(DdrConstantsService);

  readonly label: InputSignal<string> = input<string>('');
  readonly placeholder: InputSignal<string> = input<string>('');
  readonly required: InputSignal<boolean> = input<boolean>(false);
  readonly validate: InputSignal<boolean> = input<boolean>(false);
  readonly inline: InputSignal<boolean> = input<boolean>(false);
  readonly pattern: InputSignal<readonly RegExp[]> = input<readonly RegExp[]>([]);
  readonly name: InputSignal<string> = input<string>('');
  readonly readonly: InputSignal<boolean> = input<boolean>(false);
  readonly disabled: InputSignal<boolean> = input<boolean>(false);
  readonly tooltipOrientation: InputSignal<DdrOrientationTooltip> = input<DdrOrientationTooltip>(this.constants.ORIENTATION.BOTTOM);
  readonly tooltipText: InputSignal<string | undefined> = input<string | undefined>();
  readonly minLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly maxLength: InputSignal<number | undefined> = input<number | undefined>(undefined);
  readonly labelBold: InputSignal<boolean> = input<boolean>(false);
  readonly showPassword: InputSignal<boolean> = input<boolean>(false);
  readonly errors: InputSignal<readonly WithOptionalFieldTree<ValidationError>[]> = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);

  public value: ModelSignal<string> = model<string>('');

  readonly hasErrors: OutputEmitterRef<DdrInputError> = output<DdrInputError>();
  readonly clickInput: OutputEmitterRef<MouseEvent> = output<MouseEvent>();
  readonly keyPressed: OutputEmitterRef<string> = output<string>();

  readonly ddrInputGroup = viewChild.required(DdrInputGroupComponent, { read: DdrInputGroupComponent });
  readonly templateValidOutside = contentChild<TemplateRef<any> | null>('templateValid');
  readonly templateErrorsOutside = contentChild<TemplateRef<any> | null>('templateErrors');

  public show: WritableSignal<boolean> = signal<boolean>(false);
  public iconPassword: Signal<string> = computed<string>(() => this.show() ? 'bi bi-eye' : 'bi bi-eye-slash');

  constructor() {
    effect(() => this.show.set(this.showPassword()));
    effect(() =>
      this.ddrInputGroup()!.input()!.input().nativeElement.type = this.show() ? this.constants.TYPE_INPUT.TEXT : this.constants.TYPE_INPUT.PASSWORD
    )
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

  onClickInput($event: MouseEvent) {
    this.clickInput.emit($event);
  }
}
