import { Component } from '@angular/core';
import { DdrRadioComponent, DdrSelectItem } from '@ddr-ng';
import { Example } from './example';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-radio-showcase',
    templateUrl: './radio-showcase.component.html',
    styleUrls: ['./radio-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrRadioComponent,
        FormsModule,
        JsonPipe
    ]
})
export class RadioShowcaseComponent {

  public options1: DdrSelectItem<string>[] = [
    {
      label: 'Java',
      value: 'java'
    },
    {
      label: 'Angular',
      value: 'angular'
    },
    {
      label: 'NestJS',
      value: 'nestjs'
    },
    {
      label: 'Javascript',
      value: 'javascript'
    },
    {
      label: 'C',
      value: 'c'
    },
    {
      label: 'C++',
      value: 'cpp'
    }
  ];
  public options2: DdrSelectItem<string>[] = [
    { 
      label: 'Java', 
      value: 'java' 
    },
    { 
      label: 'Angular', 
      value: 'angular' 
    },
    { 
      label: 'NestJS', 
      value: 'nestjs' 
    },
    { 
      label: 'Javascript', 
      value: 'javascript' 
    },
    { 
      label: 'C', 
      value: 'c' 
    },
    { 
      label: 'C++', 
      value: 'cpp' 
    }
  ];
  public options3: DdrSelectItem<Example>[] = [
    { 
      label: 'Java', 
      value: { 
        property1: 'p1', 
        property2: 'p2' 
      } 
    },
    { 
      label: 'Angular', 
      value: { 
        property1: 'p3', 
        property2: 'p4' 
      } 
    },
    { 
      label: 'NestJS', 
      value: { 
        property1: 'p5', 
        property2: 'p6' 
      } 
    },
    { 
      label: 'Javascript', 
      value: { 
        property1: 'p7', 
        property2: 'p8' 
      } 
    },
    {
      label: 'C', 
      value: { 
        property1: 'p9', 
        property2: 'p10' 
      } 
    },
    { 
      label: 'C++', 
      value: { 
        property1: 'p11',
        property2: 'p12' 
      } 
    }
  ];
  public options4: DdrSelectItem<Example>[] = [
    { 
      label: 'Java', 
      value: { 
        property1: 'p1', 
        property2: 'p2' 
      } 
    },
    { 
      label: 'Angular', 
      value: { 
        property1: 'p3', 
        property2: 'p4' 
      } 
    },
    { 
      label: 'NestJS', 
      value: { 
        property1: 'p5', 
        property2: 'p6' 
      } 
    },
    { 
      label: 'Javascript', 
      value: { 
        property1: 'p7', 
        property2: 'p8' 
      } 
    },
    {
      label: 'C', 
      value: { 
        property1: 'p9', 
        property2: 'p10' 
      } 
    },
    { 
      label: 'C++', 
      value: { 
        property1: 'p11',
        property2: 'p12' 
      } 
    }
  ];
  public options5: DdrSelectItem<Example>[] = [
    { 
      label: 'Java', 
      value: { 
        property1: 'p1', 
        property2: 'p2' 
      } 
    },
    { 
      label: 'Angular', 
      value: { 
        property1: 'p3', 
        property2: 'p4' 
      } 
    },
    { 
      label: 'NestJS', 
      value: { 
        property1: 'p5', 
        property2: 'p6' 
      } 
    },
    { 
      label: 'Javascript', 
      value: { 
        property1: 'p7', 
        property2: 'p8' 
      } 
    },
    {
      label: 'C', 
      value: { 
        property1: 'p9', 
        property2: 'p10' 
      } 
    },
    { 
      label: 'C++', 
      value: { 
        property1: 'p11',
        property2: 'p12' 
      } 
    }
  ];

  public value1: string = '';
  public value2: string = 'angular';;
  public value3: Example | null = null;
  public value4: Example = { 
    property1: 'p1', 
    property2: 'p2' 
  };
  public value5: Example | null = null;;

}
