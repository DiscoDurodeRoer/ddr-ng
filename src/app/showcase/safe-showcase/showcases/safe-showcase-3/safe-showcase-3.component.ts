import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-3',
  templateUrl: './safe-showcase-3.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase3Component {

  public url: string =
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U';

}
