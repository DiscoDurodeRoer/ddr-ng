import { Component, inject } from '@angular/core';
import { DdrCheckboxComponent, DdrSelectItem, DdrToastService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'checkbox-showcase',
  templateUrl: './checkbox-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrCheckboxComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class CheckboxShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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
  public options3: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options4: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options5: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options6: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public options7: DdrSelectItem<ProgrammingLanguage>[] = [
    {
      label: 'Java',
      value: {
        name: 'java'
      }
    },
    {
      label: 'Angular',
      value: {
        name: 'angular'
      }
    },
    {
      label: 'NestJS',
      value: {
        name: 'nestjs'
      }
    },
    {
      label: 'Javascript',
      value: {
        name: 'javascript'
      }
    },
    {
      label: 'C',
      value: {
        name: 'c'
      }
    },
    {
      label: 'C++',
      value: {
        name: 'cpp'
      }
    }
  ];

  public value1: string[] = [];
  public value2: string[] = ['java', 'c'];
  public value3: ProgrammingLanguage[] = [];
  public value4: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'nestjs'
    }
  ];
  public value5: ProgrammingLanguage[] = [];
  public value6: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    }
  ];

  clickCheck(value: ProgrammingLanguage[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(value)
    )
  }


}
