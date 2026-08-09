import { Component } from '@angular/core';
import { DdrSafePipe } from 'ddr-ng/pipes/safe';

@Component({
  selector: 'safe-showcase-4',
  templateUrl: './safe-showcase-4.component.html',
  imports: [
    DdrSafePipe
  ]
})
export class SafeShowcase4Component {

  public resourceUrl: string = 'https://www.youtube.com/embed/J0aXUDqGlnU';

}
