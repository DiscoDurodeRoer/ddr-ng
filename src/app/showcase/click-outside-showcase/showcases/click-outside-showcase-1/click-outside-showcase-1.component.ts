import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { DdrButtonMultipleComponent } from 'ddr-ng/components/button-multiple';
import { DdrClickOutsideDirective } from 'ddr-ng/directives/click-outside';
import { DdrButton } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  templateUrl: './click-outside-showcase-1.component.html',
  styleUrl: './click-outside-showcase-1.component.scss',
  selector: 'click-outside-showcase-1',
  imports: [
    DdrButtonMultipleComponent,
    DdrClickOutsideDirective,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ClickOutsideShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService =
    inject(DdrTranslateService);

  public buttonsModes: Signal<DdrButton[]> = signal<DdrButton[]>([
    {
      text: 'clickoutside.standard',
      value: 'standard',
    },
    {
      text: 'clickoutside.delay',
      value: 'delay',
    },
    {
      text: 'clickoutside.disactivated',
      value: 'disactivated',
    },
  ]);

  public modeClickoutside: WritableSignal<string> = signal<string>('standard');

  clickOutside(event: MouseEvent) {
    console.log(event);
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('clickoutside.event.click'),
    );
  }
}
