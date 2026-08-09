import { Component } from '@angular/core';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'translate-pipe-showcase-2',
  templateUrl: './translate-pipe-showcase-2.component.html',
  imports: [
    DdrTranslatePipe
  ]
})
export class TranslatePipeShowcase2Component { 

  public params: any = {
    param1: 'Test',
    param2: 10,
    param3: true
  }
}
