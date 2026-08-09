import {
  Component,
  inject,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrInputGroupComponent } from 'ddr-ng/components/input-group';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'input-group-showcase-4',
  templateUrl: './input-group-showcase-4.component.html',
  imports: [
    DdrInputGroupComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class InputGroupShowcase4Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public value: WritableSignal<string> = signal<string>('disabled');

  clickButton(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('input.group.click'),
    );
  }
}
