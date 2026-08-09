import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-1',
  templateUrl: './nested-property-showcase-1.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase1Component {

  public object: any = {
    value: 'example1',
  };
  
}
