import { Component, OnChanges, SimpleChanges, TemplateRef, input, output, contentChild } from '@angular/core';
import { DdrTreeNode } from './bean/ddr-tree-node';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrButtonSplitComponent } from '../ddr-button-split/ddr-button-split.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-tree',
  templateUrl: './ddr-tree.component.html',
  styleUrls: ['./ddr-tree.component.scss'],
  imports: [
    DdrButtonSplitComponent,
    DdrTranslatePipe,
    NgTemplateOutlet
]
})
export class DdrTreeComponent<T> implements OnChanges {

  readonly border = input<boolean>(false);
  readonly open = input<boolean>(false);
  readonly canClick = input<boolean>(true);
  readonly showIconArrow = input<boolean>(true);
  readonly actionsOnlyLeafs = input<boolean>(false);
  readonly nodes = input<DdrTreeNode<T>[]>([]);
  readonly transparent = input<boolean>(false);

  readonly templateNodeOutside = contentChild.required<TemplateRef<any> | null>("templateNode");

  // Translations
  readonly labelNoData = input<string>();

  readonly selectAction = output<DdrAction<T>>();
  readonly clickNode = output<T>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      const nodes = this.nodes();
      const open = this.open();
      if (changes['nodes']) {
        this.nodes = [...this.nodes()]
        if (open) {
          this.setOpenRecursive(nodes, open)
        }
      }
      if (changes['open']) {
        this.setOpenRecursive(nodes, open)
      }
    }
  }

  private setOpenRecursive(nodes: DdrTreeNode<T>[], open: boolean): void {
    for (const node of nodes) {
      node.open = open;

      if (node.children && node.children.length > 0) {
        this.setOpenRecursive(node.children, open);
      }
    }
  }

  openNode(node: DdrTreeNode<T>, event?: MouseEvent) {
    event?.stopPropagation();
    node.open = !node.open;
  }

  onSelectAction(action: DdrAction<T>, node?: DdrTreeNode<T>) {
    if (node) {
      action.item = node.data;
    }
    this.selectAction.emit(action);
  }

  onClickNode(event: MouseEvent, node: DdrTreeNode<T>) {
    if (this.canClick()) {
      event?.stopPropagation();
      this.clickNode.emit(node.data);
      if (node.children && node.children.length > 0) {
        this.openNode(node);
      }
    }
  }

  onSendData(nodeData: T) {
    this.clickNode.emit(nodeData);
  }

}
