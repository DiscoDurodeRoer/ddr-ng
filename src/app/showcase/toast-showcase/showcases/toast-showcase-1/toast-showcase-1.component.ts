import {
  Component,
  inject
} from '@angular/core';
import { DdrButtonComponent } from 'ddr-ng/components/button';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';

@Component({
  selector: 'toast-showcase-1',
  templateUrl: './toast-showcase-1.component.html',
  imports: [
    DdrButtonComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class ToastShowcase1Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  showToast() {
    this.ddrToastService.addInfoMessage(
      this.ddrTranslateService.getTranslate('toast.title'),
      this.ddrTranslateService.getTranslate('toast.content'),
    );
  }
}
