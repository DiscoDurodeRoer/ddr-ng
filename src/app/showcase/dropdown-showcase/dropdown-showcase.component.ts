import { Component, inject } from '@angular/core';
import { DdrSelectItem, DdrToastService, DdrDropdownComponent, DdrButtonComponent } from 'ddr-ng';
import { Example } from './example';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-dropdown-showcase',
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
  imports: [
    BaseShowcaseComponent,
    FormsModule,
    JsonPipe,
    DdrButtonComponent,
    DdrDropdownComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  compareFn = (a: Example, b: Example) => a.property1 == b.property1

  optionsEx1: DdrSelectItem<string>[] = [
    {
      label: 'Label1',
      value: 'Value1'
    },
    {
      label: 'Label2',
      value: 'Value2'
    },
    {
      label: 'Label3',
      value: 'Value3'
    },
    {
      label: 'Label4',
      value: 'Value4'
    }
  ];

  optionsEx2: DdrSelectItem<string>[] = [
    {
      label: 'Label1',
      value: 'Value1'
    },
    {
      label: 'Label2',
      value: 'Value2'
    },
    {
      label: 'Label3',
      value: 'Value3'
    },
    {
      label: 'Label4',
      value: 'Value4'
    }
  ];

  optionsEx3: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx4: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx5: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx6: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx7: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx8: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx9: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  optionsEx10: DdrSelectItem<Example>[] = [
    {
      label: 'Label1',
      value: {
        property1: 'Hola 1',
        property2: 'Mundo 1'
      }
    },
    {
      label: 'Label2',
      value: {
        property1: 'Hola 2',
        property2: 'Mundo 2'
      }
    },
    {
      label: 'Label3',
      value: {
        property1: 'Hola 3',
        property2: 'Mundo 3'
      }
    },
    {
      label: 'Label4',
      value: {
        property1: 'Hola 4',
        property2: 'Mundo 4'
      }
    }
  ];
  
  value1: string = '';
  value2: string = 'Value3';
  value3: Example | null = null;
  value4: Example = {
    property1: 'Hola 3',
    property2: 'Mundo 3'
  };
  value5: Example | null = null;
  value6: Example | null = null;
  value7: Example | null = null;
  value8: Example | null = null;
  value9: Example | null = null;
  value10: Example | null = null;
  

  selectItemEx1($event: DdrSelectItem<string>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 1', JSON.stringify($event))
  }

  selectItemEx2($event: DdrSelectItem<string>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 2', JSON.stringify($event))
  }

  selectItemEx3($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 3', JSON.stringify($event))
  }

  selectItemEx4($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 4', JSON.stringify($event))
  }

  selectItemEx5($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 5', JSON.stringify($event))
  }

  selectItemEx6($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 6', JSON.stringify($event))
  }

  selectItemEx7($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 7', JSON.stringify($event))
  }

  selectItemEx8($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 8', JSON.stringify($event))
  }

  selectItemEx9($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 9', JSON.stringify($event))
  }

  selectItemEx10($event: DdrSelectItem<Example>) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 10', JSON.stringify($event))
  }


  resetOptionsEx10() {
    this.optionsEx10 = [];
  }

  resetValueEx10() {
    this.value10 = null;
  }


}
