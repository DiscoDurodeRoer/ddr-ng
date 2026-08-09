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
import { DdrToastService } from 'ddr-ng/toast';
import { DdrTranslateService } from 'ddr-ng/translate';
import { TreeData } from './bean/tree-data';

@Component({
  selector: 'tree-showcase-7',
  templateUrl: './tree-showcase-7.component.html',
  imports: [
    DdrTreeComponent
  ],
  providers: [
    DdrToastService
  ]
})
export class TreeShowcase7Component {

  private ddrToastService: DdrToastService = inject(DdrToastService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);

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

  clickNode(nodeData: TreeData) {
    this.ddrToastService.addSuccessMessage(
      this.ddrTranslateService.getTranslate('success'),
      JSON.stringify(nodeData),
    );
  }
}
