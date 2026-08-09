import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-6',
  templateUrl: './nested-property-showcase-6.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase6Component {

  public object: any = {
    value: ['example1', 'example2', 'example6'],
  };

}
