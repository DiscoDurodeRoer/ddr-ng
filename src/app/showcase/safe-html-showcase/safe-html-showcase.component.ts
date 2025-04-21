import { Component, inject } from '@angular/core';
import { DdrSafeHtmlPipe, DdrToastService } from '@ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-safe-html-showcase',
  templateUrl: './safe-html-showcase.component.html',
  styleUrls: ['./safe-html-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrSafeHtmlPipe
  ]
})
export class SafeHtmlShowcaseComponent {

  public readonly toastService: DdrToastService = inject(DdrToastService);

  public html: string = '<p>Ejemplo de <b>HTML</b> via <u>codigo</u></p>';

}
