import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrNestedPropertyPipe, DdrTranslatePipe } from 'ddr-ng';

@Component({
  selector: 'nested-property-showcase',
  templateUrl: './nested-property-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrNestedPropertyPipe,
    DdrTranslatePipe
  ]
})
export class NestedPropertyShowcaseComponent {

  public objEx1: any = {
    value: 'example1'
  }

  public objEx2: any = {}

  public objEx3: any = {
    value: {
      valueNested: 'example3'
    }
  }

  public objEx4: any = [
    'example1',
    'example4'
  ]

  public objEx5: any = [
    {
      valueNested: 'example1'
    },
    {
      valueNested: 'example5'
    }
  ]


  public objEx6: any = {
    value: [
      'example1',
      'example2',
      'example6',
    ]
  }

  public objEx7: any = {
    value: [
      {
        valueNested: 'example1'
      },
      {
        valueNested: 'example7'
      }
    ]
  }

}
