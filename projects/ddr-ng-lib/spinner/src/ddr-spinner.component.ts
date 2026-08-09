import {
  Component,
  ViewEncapsulation,
  WritableSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrl: './ddr-spinner.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class DdrSpinnerComponent {
  public pathImg: WritableSignal<string> = signal<string>('');
  public show: WritableSignal<boolean> = signal<boolean>(false);
  public embedded: WritableSignal<boolean> = signal<boolean>(false);
}
