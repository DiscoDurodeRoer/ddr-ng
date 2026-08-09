import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-2',
  templateUrl: './safe-showcase-2.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase2Component {

  public css: string = 'background: linear-gradient(to right, red, yellow)';

}
