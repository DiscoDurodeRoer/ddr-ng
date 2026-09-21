import {
  Component,
  inject,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';

import { DdrTableCol, DdrTableComponent, DdrTableItem } from 'ddr-ng/components/table';
import { Person } from './bean/person';
import { DdrTranslateService } from 'ddr-ng/translate';
import { DdrToastService } from 'ddr-ng/toast';

@Component({
  selector: 'table-showcase-14',
  templateUrl: './table-showcase-14.component.html',
  imports: [
    DdrTableComponent
  ]
})
export class TableShowcase14Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
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
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 35,
        weight: 80,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'López',
        age: 28,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 30,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 35,
        weight: 72,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'García',
        age: 28,
        weight: 65,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 35,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Pérez',
        age: 30,
        weight: 80,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'López',
        age: 32,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 82,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 75,
      },
    },
    {
      item: {
        name: 'Ana',
        surname: 'García',
        age: 28,
        weight: 60,
      },
    },
    {
      item: {
        name: 'Fernando',
        surname: 'García',
        age: 30,
        weight: 78,
      },
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Pérez',
        age: 35,
        weight: 80,
      },
    },
  ]);

  public items: WritableSignal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([...this.itemsOri()]);

  sortItems(cols: DdrTableCol[]) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.sort'),
      JSON.stringify(cols),
    );

    const items = [...this.itemsOri()];

    items.sort((a, b) => {
      for (const col of cols) {
        const valueA = String(a.item[col.property as keyof Person]);
        const valueB = String(b.item[col.property as keyof Person]);

        const result = valueA.localeCompare(valueB);

        if (result !== 0) {
          return col.modeSort === 'DESC' ? -result : result;
        }
      }

      return 0;
    });

    this.items.set(items);
  }

}
