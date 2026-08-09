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
  selector: 'tree-showcase-10',
  templateUrl: './tree-showcase-10.component.html',
  styleUrl: './tree-showcase-10.component.scss',
  imports: [
    DdrTreeComponent
  ]
})
export class TreeShowcase10Component {

  public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
    {
      name: 'E1',
      data: {
        value: 'E1',
      },
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1',
          },
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1',
              },
            },
          ],
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2',
          },
        },
      ],
    },
    {
      name: 'E2',
      data: {
        value: 'E2',
      },
      children: [],
    },
  ]);
}
