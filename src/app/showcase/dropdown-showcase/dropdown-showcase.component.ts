import { Component, inject } from '@angular/core';
import {
  DdrSelectItem,
  DdrToastService,
  DdrDropdownComponent,
  DdrButtonComponent,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrButtonMultipleComponent,
  DdrButton,
  DdrOrientationDropdown
} from 'ddr-ng';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { ProgrammingLanguage } from './bean/programming-language';

@Component({
  selector: 'dropdown-showcase',
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrButtonComponent,
    DdrDropdownComponent,
    DdrButtonMultipleComponent,
    DdrTranslatePipe,
    FormsModule,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public compareFn: Function = (a: ProgrammingLanguage, b: ProgrammingLanguage) => a.name === b.name

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

  public optionsEx16: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public optionsEx17: DdrSelectItem<ProgrammingLanguage>[] = [
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

  public value1: string = '';
  public value2: string = 'angular';
  public value3: ProgrammingLanguage | null = null;
  public value4: ProgrammingLanguage = {
    name: 'angular'
  };
  public value5: ProgrammingLanguage | null = null;
  public value6: ProgrammingLanguage | null = null;
  public value7: ProgrammingLanguage | null = null;
  public value8: ProgrammingLanguage | null = null;
  public value9: ProgrammingLanguage | null = null;
  public value10: ProgrammingLanguage | null = {
    name: 'angular'
  };
  public value11: ProgrammingLanguage = {
    name: 'angular'
  };
  public value12: ProgrammingLanguage | null = {
    name: 'angular'
  };
  public value13: ProgrammingLanguage | null = null;
  public value14: ProgrammingLanguage | null = null;
  public value15: ProgrammingLanguage | null = null;
  public value16: ProgrammingLanguage | null = null;
  public value17: ProgrammingLanguage | null = null;

  selectItem(item: DdrSelectItem<string>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item)
    )
  }

  selectItemObject(item: DdrSelectItem<ProgrammingLanguage>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(item)
    )
  }

  resetOptionsEx10() {
    this.optionsEx10 = [];
  }

  resetValueEx10() {
    this.value10 = null;
  }

}
