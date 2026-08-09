import {
  AfterViewInit,
  Component,
} from '@angular/core';
import { DdrCardComponent } from 'ddr-ng/components/card';
import { DdrTranslatePipe } from 'ddr-ng/translate';
declare var Prism: any;

@Component({
  selector: 'themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  imports: [
    DdrCardComponent,
    DdrTranslatePipe
  ],
})
export class ThemesComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      Prism.highlightAll();
    });
  }
}
