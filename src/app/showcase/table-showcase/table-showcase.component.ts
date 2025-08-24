import { Component, inject } from '@angular/core';
import {
  DdrTableCol,
  DdrAction,
  DdrTableItem,
  DdrTableComponent,
  DdrToastService,
  DdrTranslatePipe,
  DdrTranslateService,
  DdrNestedPropertyPipe
} from 'ddr-ng';
import { Person } from './bean/person';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'table-showcase',
  templateUrl: './table-showcase.component.html',
  standalone: true,
  imports: [
    BaseShowcaseComponent,
    DdrTableComponent,
    DdrTranslatePipe,
    DdrNestedPropertyPipe,
    FormsModule
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcaseComponent {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    }
  ];

  public colsNested: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip'
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip'
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip'
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip'
    },
    {
      label: 'table.documentation',
      property: 'documentation.nif',
      tooltip: 'table.documentation.nif'
    }
  ];

  public colsSort: DdrTableCol[] = [
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
      canSort: true
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
      canSort: true
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
      canSort: true
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
      canSort: true
    }
  ];

  public actions: DdrAction<Person>[] = [
    {
      label: 'table.action.save',
      value: 'SAVE',
      icon: 'bi bi-floppy'
    },
    {
      label: 'table.action.update',
      value: 'UPDATE',
      icon: 'bi bi-arrow-clockwise'
    },
    {
      label: 'table.action.delete',
      value: 'DELETE',
      icon: 'bi bi-trash'
    }
  ];

  public items: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      }
    }
  ];

  public itemsNested: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
        documentation: {
          nif: '123456789A'
        }
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
        documentation: {
          nif: '987654321B'
        }
      }
    }
  ];

  public itemsWithActions: DdrTableItem<Person>[] = [
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78
      },
      actions: this.actions
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72
      },
      actions: this.actions
    }
  ];

  selectMultipleItem(items: Person[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.multiple.select.item'),
      JSON.stringify(items)
    );
  }

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item)
    );
  }

  sortItems(col: DdrTableCol) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(col)
    );
  }

  selectAction(action: DdrAction<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.action'),
      JSON.stringify(action)
    );
  }

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.page') + " :" + page.toString()
    );
  }

  onChangeTotalItemsPerPage(rows: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.rows') + " :" + rows.toString()
    );
  }
}
