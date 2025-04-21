import { Component, inject } from '@angular/core';
import { DdrSelectItem, DdrToastService, DdrDropdownComponent, DdrButtonComponent } from '@ddr-ng';
import { Example } from './example';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'app-dropdown-showcase',
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    FormsModule,
    JsonPipe,
    DdrButtonComponent,
    DdrDropdownComponent
  ]
})
export class DropdownShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);

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
  optionsEx11: DdrSelectItem<Example>[] = [
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
  optionsEx12: DdrSelectItem<Example>[] = [
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
  optionsEx13: DdrSelectItem<Example>[] =[
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
  optionsEx14: DdrSelectItem<Example>[] = [
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
  value11: Example[] = [
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
  value12: Example[] = [];
  value13: Example[] = [];
  value14: Example[] = [
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

  selectItemEx1($event: string){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 1', JSON.stringify($event))
  }

  selectItemEx2($event: string){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 2', JSON.stringify($event))
  }

  selectItemEx3($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 3', JSON.stringify($event))
  }

  selectItemEx4($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 4', JSON.stringify($event))
  }

  selectItemEx5($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 5', JSON.stringify($event))
  }

  selectItemEx6($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 6', JSON.stringify($event))
  }

  selectItemEx7($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 7', JSON.stringify($event))
  }

  selectItemEx8($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 8', JSON.stringify($event))
  }

  selectItemEx9($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 9', JSON.stringify($event))
  }

  selectItemEx10($event: Example){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 10', JSON.stringify($event))
  }

  selectItemEx11($event: Example[]){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 11', JSON.stringify($event))
  }

  selectItemEx12($event: Example[]){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 12', JSON.stringify($event))
  }

  selectItemEx13($event: Example[]){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 13', JSON.stringify($event))
  }

  selectItemEx14($event: Example[]){
    console.log($event);
    this.ddrToastService.addSuccessMessage('Item seleccionado ejemplo 13', JSON.stringify($event))
  }

  resetOptionsEx10() {
    this.optionsEx10 = [];
  }

  resetValueEx10(){
    this.value10 = null;
  }

  resetValuesEx14(){
    this.value14 = [];
  }

}
