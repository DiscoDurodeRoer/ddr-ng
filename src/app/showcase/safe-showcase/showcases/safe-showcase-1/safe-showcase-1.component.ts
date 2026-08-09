import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-1',
  templateUrl: './safe-showcase-1.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase1Component {

  public html: string = '<p>Example <b>HTML</b> via <u>code</u></p>';

}
