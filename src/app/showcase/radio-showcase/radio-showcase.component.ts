import { Component, inject, signal } from '@angular/core';
import {
  DdrRadioComponent,
  DdrSelectItem,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { JsonPipe } from '@angular/common';
import { ProgrammingLanguage } from './bean/programming-language';
import { Field, form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'radio-showcase',
  templateUrl: './radio-showcase.component.html',
  imports: [
    BaseShowcaseComponent,
    DdrRadioComponent,
    DdrTranslatePipe,
    JsonPipe,
    FormField
  ],
  providers: [
    DdrToastService
  ]
})
export class RadioShowcaseComponent {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  // Showcase 1

  public value1: string = '';

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

  public options1FormSignals: DdrSelectItem<string>[] = [
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

  private radioModelEx1 = signal({
    example1: ''
  })
  public formRadioEx1 = form(this.radioModelEx1)

  // Showcase 2

  public value2: string = 'angular';

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

  // Showcase 3

  public value3: ProgrammingLanguage | null = null;

  public compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name;

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
      },
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

  // Showcase 4

  public value4: ProgrammingLanguage = { name: 'cpp' };

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
      },
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

  // Showcase 5

  public value5: ProgrammingLanguage | null = null;

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
      },
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

  public clickRadio(value: string) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      value
    )
  }

  public clickRadioObject(value: ProgrammingLanguage) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(value)
    )
  }

}
