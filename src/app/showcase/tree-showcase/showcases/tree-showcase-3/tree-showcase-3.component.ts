import {
  Component,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTreeComponent,
  DdrTreeNode
} from 'ddr-ng/components/tree';
import { TreeData } from './bean/tree-data';

@Component({
  selector: 'tree-showcase-3',
  templateUrl: './tree-showcase-3.component.html',
  imports: [
    DdrTreeComponent
  ]
})
export class TreeShowcase3Component {

  public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
    {
      name: 'E1',
      icon: 'bi bi-bell',
      data: {
        value: 'E1',
      },
      children: [
        {
          name: 'E1.1',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.1',
          },
          children: [
            {
              name: 'E1.1.1',
              icon: 'bi bi-bell',
              data: {
                value: 'E1.1.1',
              },
            },
          ],
        },
        {
          name: 'E1.2',
          icon: 'bi bi-bell',
          data: {
            value: 'E1.2',
          },
        },
      ],
    },
    {
      name: 'E2',
      icon: 'bi bi-bell',
      data: {
        value: 'E2',
      },
      children: [],
    },
  ]);
}
