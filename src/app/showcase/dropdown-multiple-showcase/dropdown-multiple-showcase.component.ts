import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DdrButton,
  DdrButtonComponent,
  DdrDropdownMultipleComponent,
  DdrButtonMultipleComponent,
  DdrOrientationDropdown,
  DdrSelectItem,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-multiple-showcase',
  templateUrl: './dropdown-multiple-showcase.component.html',
  styleUrl: './dropdown-multiple-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    DdrDropdownMultipleComponent,
    DdrButtonComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  compareFn = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name == b.name

  public optionsEx1: DdrSelectItem<string>[] = [
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
  public optionsEx2: DdrSelectItem<string>[] = [
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
  public optionsEx3: DdrSelectItem<ProgrammingLanguage>[] = [
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
  public optionsEx4: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx5: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx6: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx7: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx8: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx9: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx10: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx11: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx12: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx13: DdrSelectItem<ProgrammingLanguage>[] = [
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
    }
  ];

  public optionsEx14: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx15: DdrSelectItem<ProgrammingLanguage>[] = [
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
  public value2: string[] = ['java', 'angular'];
  public value3: ProgrammingLanguage[] = [];
  public value4: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    },
    {
      name: 'cpp'
    }
  ];

  public value5: ProgrammingLanguage[] = [
    {
      name: 'java'
    },
    {
      name: 'angular'
    },
    {
      name: 'cpp'
    }
  ];

  public value6: ProgrammingLanguage[] = [];
  public value7: ProgrammingLanguage[] = [];
  public value8: ProgrammingLanguage[] = [];
  public value9: ProgrammingLanguage[] = [];
  public value10: ProgrammingLanguage[] = [];
  public value11: ProgrammingLanguage[] = [];
  public value12: ProgrammingLanguage[] = [];
  public value13: ProgrammingLanguage[] = [];
  public value14: ProgrammingLanguage[] = [
    {
      name: 'java'
    }
  ];
  public value15: ProgrammingLanguage[] = [];

  public buttonsOrientation: DdrButton[] = [
    {
      text: 'bottom',
      value: 'bottom'
    },
    {
      text: 'top',
      value: 'top'
    }
  ];

  public orientationDropdown: DdrOrientationDropdown = 'bottom'

  selectItems(items: DdrSelectItem<string>[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(items)
    )
  }

  selectItemsObject(items: DdrSelectItem<ProgrammingLanguage>[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(items)
    )
  }

  resetValuesEx5() {
    this.value5 = [];
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('dropdown.multiple.reset.confirm')
    )
  }

  changeOptionsEx13() {
    if (this.optionsEx13[0].label == 'Javascript') {
      this.optionsEx13 = [
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
        }
      ]
    } else {
      this.optionsEx13 = [
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
      ]
    }
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('dropdown.multiple.change.options.confirm'),
      JSON.stringify(this.optionsEx13)
    )

  }

}
