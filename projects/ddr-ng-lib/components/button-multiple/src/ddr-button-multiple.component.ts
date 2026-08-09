import {
  Component,
  ModelSignal,
  OnInit,
  ViewEncapsulation,
  inject,
  input,
  model,
  output,
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { FormValueControl } from '@angular/forms/signals';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrConstantsService } from 'ddr-ng/constants';
import { DdrSize } from 'ddr-ng/types';
import { DdrButton } from 'ddr-ng/models';

@Component({
  selector: 'ddr-button-multiple',
  templateUrl: './ddr-button-multiple.component.html',
  styleUrl: './ddr-button-multiple.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [DdrButtonComponent, DdrTranslatePipe],
})
export class DdrButtonMultipleComponent implements OnInit, FormValueControl<string> {
  
  private constants: DdrConstantsService = inject(DdrConstantsService);

  readonly buttons = input<DdrButton[]>([]);
  readonly showSelectedButton = input<boolean>(false);
  readonly size = input<DdrSize>(this.constants.SIZE.MEDIUM);
  readonly transparent = input<boolean>(false);

  readonly action = output<DdrButton>();

  public value: ModelSignal<string> = model<string>('');

  ngOnInit(): void {
    if (
      this.showSelectedButton() &&
      this.buttons().length > 0 &&
      this.value() == ''
    ) {
      this.value.set(this.buttons()[0].value);
    }
  }

  clickButton(button: DdrButton) {
    this.value.set(button.value);
    this.action.emit(button);
  }
}
