import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-2',
  templateUrl: './nested-property-showcase-2.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase2Component {

  public object: any = {};

}
