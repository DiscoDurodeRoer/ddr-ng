import { Component } from '@angular/core';
import { DdrCheckboxComponent, DdrSelectItem } from '@ddr-ng';
import { Example } from '../dropdown-showcase/example';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-checkbox-showcase',
    templateUrl: './checkbox-showcase.component.html',
    styleUrls: ['./checkbox-showcase.component.scss'],
    imports: [
        BaseShowcaseComponent,
        DdrCheckboxComponent,
        JsonPipe,
        FormsModule
    ]
})
export class CheckboxShowcaseComponent {

  options1: DdrSelectItem<string>[] = [
    {label: 'Java', value: 'java'},
    {label: 'Angular', value: 'angular'},
    {label: 'NestJS', value: 'nestjs'},
    {label: 'Javascript', value: 'javascript'},
    {label: 'C', value: 'c'},
    {label: 'C++', value: 'cpp'}
  ];
  options2: DdrSelectItem<string>[] = [
    {label: 'Java', value: 'java'},
    {label: 'Angular', value: 'angular'},
    {label: 'NestJS', value: 'nestjs'},
    {label: 'Javascript', value: 'javascript'},
    {label: 'C', value: 'c'},
    {label: 'C++', value: 'cpp'}
  ];
  options3: DdrSelectItem<Example>[] = [
    {label: 'Java', value: {property1: 'p1', property2: 'p2'}},
    {label: 'Angular', value: {property1: 'p3', property2: 'p4'}},
    {label: 'NestJS', value: {property1: 'p5', property2: 'p6'}},
    {label: 'Javascript', value: {property1: 'p7', property2: 'p8'}},
    {label: 'C', value: {property1: 'p9', property2: 'p10'}},
    {label: 'C++', value: {property1: 'p11', property2: 'p12'}}
  ];
  options4: DdrSelectItem<Example>[] = [
    {label: 'Java', value: {property1: 'p1', property2: 'p2'}},
    {label: 'Angular', value: {property1: 'p3', property2: 'p4'}},
    {label: 'NestJS', value: {property1: 'p5', property2: 'p6'}},
    {label: 'Javascript', value: {property1: 'p7', property2: 'p8'}},
    {label: 'C', value: {property1: 'p9', property2: 'p10'}},
    {label: 'C++', value: {property1: 'p11', property2: 'p12'}}
  ];
  options6: DdrSelectItem<Example>[] = [
    {label: 'Java', value: {property1: 'p1', property2: 'p2'}},
    {label: 'Angular', value: {property1: 'p3', property2: 'p4'}},
    {label: 'NestJS', value: {property1: 'p5', property2: 'p6'}},
    {label: 'Javascript', value: {property1: 'p7', property2: 'p8'}},
    {label: 'C', value: {property1: 'p9', property2: 'p10'}},
    {label: 'C++', value: {property1: 'p11', property2: 'p12'}}
  ];

  value1: string[] = [];
  value2: string[] = ['java', 'c'];
  value3: Example[] = [];
  value4: Example[] = [
    {
      property1: 'p1', 
      property2: 'p2'
    }, 
    {
      property1: 'p9', 
      property2: 'p10'
    }
  ];
  value5: boolean = true;
  value6: Example[] = [];

}
