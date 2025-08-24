import { AfterViewInit, Component } from '@angular/core';
import { DdrCardComponent, DdrTranslatePipe } from 'ddr-ng';
declare var Prism: any;

@Component({
  selector: 'themes',
  templateUrl: './themes.component.html',
  styleUrl: './themes.component.scss',
  imports: [
    DdrCardComponent,
    DdrTranslatePipe
  ]
})
export class ThemesComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => { Prism.highlightAll(); });
  }

}
