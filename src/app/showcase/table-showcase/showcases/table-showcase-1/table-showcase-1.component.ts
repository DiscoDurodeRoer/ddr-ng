import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTableCol,
  DdrTableComponent,
  DdrTableItem
} from 'ddr-ng/components/table';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTranslatePipe,
  DdrTranslateService
} from 'ddr-ng/translate';
import { Person } from './bean/person';

@Component({
  selector: 'table-showcase-1',
  templateUrl: './table-showcase-1.component.html',
  imports: [
    DdrTableComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase1Component {

  private readonly ddrToastService: DdrToastService = inject(DdrToastService);
  private readonly ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public cols: Signal<DdrTableCol[]> = signal<DdrTableCol[]>([
    {
      label: 'table.name',
      property: 'name',
      tooltip: 'table.name.tooltip',
    },
    {
      label: 'table.surname',
      property: 'surname',
      tooltip: 'table.surname.tooltip',
    },
    {
      label: 'table.age',
      property: 'age',
      tooltip: 'table.age.tooltip',
    },
    {
      label: 'table.weight',
      property: 'weight',
      tooltip: 'table.weight.tooltip',
    },
  ]);

  public items: Signal<DdrTableItem<Person>[]> = signal<DdrTableItem<Person>[]>([
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
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
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
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
    },
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
  ]);

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

}
