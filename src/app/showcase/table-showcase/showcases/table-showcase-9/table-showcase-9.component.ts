import {
  Component,
  Signal,
  signal
} from '@angular/core';
import { DdrToastService } from 'ddr-ng/toast';
import {
  DdrTableCol,
  DdrTableComponent
} from 'ddr-ng/components/table';
import { DdrTranslatePipe } from 'ddr-ng/translate';

@Component({
  selector: 'table-showcase-9',
  templateUrl: './table-showcase-9.component.html',
  imports: [
    DdrTableComponent,
    DdrTranslatePipe
  ],
  providers: [
    DdrToastService
  ]
})
export class TableShowcase9Component {

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
}
