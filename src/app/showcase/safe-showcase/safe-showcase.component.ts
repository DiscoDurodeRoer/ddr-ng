import { Component } from '@angular/core';
import { DdrSafePipe, DdrTranslatePipe } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'safe-showcase',
  templateUrl: './safe-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrSafePipe,
    DdrTranslatePipe
  ]
})
export class SafeShowcaseComponent {

  public html: string = '<p>Example <b>HTML</b> via <u>code</u></p>';
  public css: string = 'background: linear-gradient(to right, red, yellow)';
  public url: string = 'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
  public resourceUrl: string = 'https://www.youtube.com/embed/J0aXUDqGlnU';

}
