import { Component } from '@angular/core';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { NestedPropertyShowcase1Component } from './showcases/nested-property-showcase-1/nested-property-showcase-1.component';
import { NestedPropertyShowcase2Component } from './showcases/nested-property-showcase-2/nested-property-showcase-2.component';
import { NestedPropertyShowcase3Component } from './showcases/nested-property-showcase-3/nested-property-showcase-3.component';
import { NestedPropertyShowcase4Component } from './showcases/nested-property-showcase-4/nested-property-showcase-4.component';
import { NestedPropertyShowcase5Component } from './showcases/nested-property-showcase-5/nested-property-showcase-5.component';
import { NestedPropertyShowcase6Component } from './showcases/nested-property-showcase-6/nested-property-showcase-6.component';
import { NestedPropertyShowcase7Component } from './showcases/nested-property-showcase-7/nested-property-showcase-7.component';
import { Documentation } from '../base-showcase/bean/documentation';

@Component({
  selector: 'nested-property-showcase',
  templateUrl: './nested-property-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    NestedPropertyShowcase1Component,
    NestedPropertyShowcase2Component,
    NestedPropertyShowcase3Component,
    NestedPropertyShowcase4Component,
    NestedPropertyShowcase5Component,
    NestedPropertyShowcase6Component,
    NestedPropertyShowcase7Component,
    DdrTranslatePipe
  ]
})
export class NestedPropertyShowcaseComponent {

  public documentation: Documentation = {
    examples: [
      {
        htmlCode: `<div>{{object | ddrNestedProperty: 'value'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: 'value'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: 'value.valueNested'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: '1'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
import { DdrNestedPropertyPipe } from 'ddr-ng/pipes/nested-property';

@Component({
  selector: 'nested-property-showcase-4',
  templateUrl: './nested-property-showcase-4.component.html',
  imports: [
    DdrNestedPropertyPipe
  ]
})
export class NestedPropertyShowcase4Component {

  public object: any = ['example1', 'example4'];

}
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: '1.valueNested'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: 'value.2'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      },
      {
        htmlCode: `<div>{{object | ddrNestedProperty: 'value.1.valueNested'}}</div>`,
        tsCode: `import { Component } from '@angular/core';
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
`
      }
    ],
    params: [
      {
        item: {
          name: 'object',
          description: 'nested.property.param.object',
          required: true,
          type: 'any'
        }
      },
      {
        item: {
          name: 'path',
          description: 'nested.property.param.path',
          required: true,
          type: 'string'
        }
      }
    ]
  }

}
