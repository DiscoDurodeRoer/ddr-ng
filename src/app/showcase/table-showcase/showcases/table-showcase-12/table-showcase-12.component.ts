import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem,
} from 'ddr-ng/components/table';
import { DdrTranslateService } from 'ddr-ng/translate';
import { Person } from './bean/person';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'table-showcase-12',
  templateUrl: './table-showcase-12.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase12Component implements OnInit {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
      modeSort: 'ASC'
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
  ]);

  public itemsOri: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      }
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      }
    },

  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  ngOnInit(): void {
    this.sortItems([this.cols()[0]]);
  }

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      const valueA = String(a.item[cols[0].property as keyof Person]);
      const valueB = String(b.item[cols[0].property as keyof Person]);

      const result = valueA.localeCompare(valueB);

      return cols[0].modeSort === 'DESC' ? -result : result;
    });

    this.items.set(items);
  }
  
}
