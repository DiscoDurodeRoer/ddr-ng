import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DdrButtonComponent, DdrDropdownMultipleComponent, DdrSelectItem, DdrToastService } from 'ddr-ng';
import { Example } from './example';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-dropdown-multiple-showcase',
  templateUrl: './dropdown-multiple-showcase.component.html',
  styleUrl: './dropdown-multiple-showcase.component.scss',
  imports: [
    BaseShowcaseComponent,
    DdrDropdownMultipleComponent,
    FormsModule,
    DdrButtonComponent,
    JsonPipe
  ],
  providers: [
    DdrToastService
  ]
})
export class DropdownMultipleShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

  compareFn = (a: Example, b: Example) => a.property1 == b.property1

  optionsEx1: DdrSelectItem<Example>[] = [
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
  optionsEx2: DdrSelectItem<Example>[] = [
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

  value1: Example[] = [];
  value2: Example[] = [
    {
      property1: 'Hola 2',
      property2: 'Mundo 2'
    },
    {
      property1: 'Hola 4',
      property2: 'Mundo 4'
    }
  ];
  value3: Example[] = [];
  value4: Example[] = [
    {
      property1: 'Hola 2',
      property2: 'Mundo 2'
    },
    {
      property1: 'Hola 3',
      property2: 'Mundo 3'
    },
    {
      property1: 'Hola 4',
      property2: 'Mundo 4'
    }
  ];

  value5: Example[] = [];

  selectItemEx1($event: DdrSelectItem<Example>[]) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 1', JSON.stringify($event))
  }

  selectItemEx2($event: DdrSelectItem<Example>[]) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 2', JSON.stringify($event))
  }

  selectItemEx3($event: DdrSelectItem<Example>[]) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 3', JSON.stringify($event))
  }

  selectItemEx4($event: DdrSelectItem<Example>[]) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 4', JSON.stringify($event))
  }


  selectItemEx5($event: DdrSelectItem<Example>[]) {
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 5', JSON.stringify($event))
  }

  resetValuesEx4() {
    this.value4 = [];
    this.ddrToastService.addSuccessMessage('Valores reseteados', JSON.stringify(this.value4))
  }

  changeOptionsEx5() {
    if (this.optionsEx5[0].label == 'Label1') {
      this.optionsEx5 = [
        {
          label: 'Label5',
          value: {
            property1: 'Hola 5',
            property2: 'Mundo 5'
          }
        },
        {
          label: 'Label6',
          value: {
            property1: 'Hola 6',
            property2: 'Mundo 6'
          }
        },
        {
          label: 'Label7',
          value: {
            property1: 'Hola 7',
            property2: 'Mundo 7'
          }
        },
        {
          label: 'Label8',
          value: {
            property1: 'Hola 8',
            property2: 'Mundo 8'
          }
        }
      ]
    } else {
      this.optionsEx5 = [
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
      ]
    }

  }

}
