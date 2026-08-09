import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-3',
  templateUrl: './nested-property-showcase-3.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase3Component {

  public object: any = {
    value: {
      valueNested: 'example3',
    },
  };

}
