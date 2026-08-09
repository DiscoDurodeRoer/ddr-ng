import {
  Component,
  inject,
  Signal,
  signal
} from '@angular/core';
import {
  DdrTreeComponent,
  DdrTreeNode
} from 'ddr-ng/components/tree';
import { DdrAction } from 'ddr-ng/models';
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { TreeData } from './bean/tree-data';

@Component({
  selector: 'tree-showcase-5',
  templateUrl: './tree-showcase-5.component.html',
  imports: [
    DdrTreeComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TreeShowcase5Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

  public nodes: Signal<DdrTreeNode<TreeData>[]> = signal<DdrTreeNode<TreeData>[]>([
    {
      name: 'E1',
      data: {
        value: 'E1',
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1',
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2',
        },
      ],
      children: [
        {
          name: 'E1.1',
          data: {
            value: 'E1.1',
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1',
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2',
            },
          ],
          children: [
            {
              name: 'E1.1.1',
              data: {
                value: 'E1.1.1',
              },
              actions: [
                {
                  label: 'tree.action.update',
                  icon: 'bi bi-pencil',
                  value: 'ACTION_1',
                },
                {
                  label: 'tree.action.delete',
                  icon: 'bi bi-trash3',
                  value: 'ACTION_2',
                },
              ],
            },
          ],
        },
        {
          name: 'E1.2',
          data: {
            value: 'E1.2',
          },
          actions: [
            {
              label: 'tree.action.update',
              icon: 'bi bi-pencil',
              value: 'ACTION_1',
            },
            {
              label: 'tree.action.delete',
              icon: 'bi bi-trash3',
              value: 'ACTION_2',
            },
          ],
        },
      ],
    },
    {
      name: 'E2',
      data: {
        value: 'E2',
      },
      actions: [
        {
          label: 'tree.action.update',
          icon: 'bi bi-pencil',
          value: 'ACTION_1',
        },
        {
          label: 'tree.action.delete',
          icon: 'bi bi-trash3',
          value: 'ACTION_2',
        },
      ],
      children: [],
    },
  ]);

  selectAction(action: DdrAction<TreeData>) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(action),
    );
  }
}
