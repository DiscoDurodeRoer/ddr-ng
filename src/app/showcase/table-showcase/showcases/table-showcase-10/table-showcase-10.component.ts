import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import { DdrAction } from 'ddr-ng/models';
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
  selector: 'table-showcase-10',
  templateUrl: './table-showcase-10.component.html',
  imports: [
    DdrTableComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase10Component {

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

  public actions: Signal<DdrAction<Person>[]> = signal<DdrAction<Person>[]>([
    {
      label: 'table.action.save',
      value: 'SAVE',
      icon: 'bi bi-floppy',
    },
    {
      label: 'table.action.update',
      value: 'UPDATE',
      icon: 'bi bi-arrow-clockwise',
    },
    {
      label: 'table.action.delete',
      value: 'DELETE',
      icon: 'bi bi-trash',
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
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Manuel',
        surname: 'Gómez',
        age: 30,
        weight: 72,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
    },
    {
      item: {
        name: 'Fernando',
        surname: 'Ureña',
        age: 35,
        weight: 78,
      },
      actions: this.actions(),
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

  selectItem(item: DdrTableItem<Person>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('table.select.item'),
      JSON.stringify(item),
    );
  }

  onChangePage(page: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.page') +
      ' :' +
      page.toString(),
    );
  }

  onChangeTotalItemsPerPage(rows: number) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      this.ddrTranslateService.getTranslate('table.change.rows') +
      ' :' +
      rows.toString(),
    );
  }
}
