import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-5',
  templateUrl: './nested-property-showcase-5.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase5Component {

  public object: any = [
    {
      valueNested: 'example1',
    },
    {
      valueNested: 'example5',
    },
  ];
  
}
