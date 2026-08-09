import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-7',
  templateUrl: './nested-property-showcase-7.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase7Component {

  public object: any = {
    value: [
      {
        valueNested: 'example1',
      },
      {
        valueNested: 'example7',
      },
    ],
  };

}
