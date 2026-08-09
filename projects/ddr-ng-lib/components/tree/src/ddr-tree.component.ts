import {
  Component,
  TemplateRef,
  input,
  output,
  contentChild,
  InputSignal,
  Signal,
  OutputEmitterRef,
  effect,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DdrTranslatePipe } from 'ddr-ng/translate';
import { DdrTreeNode } from './bean/ddr-tree-node';
import { DdrButtonSplitComponent } from 'ddr-ng/components/button-split';
import { DdrAction } from 'ddr-ng/models';

@Component({
  selector: 'ddr-tree',
  templateUrl: './ddr-tree.component.html',
  styleUrl: './ddr-tree.component.scss',
  imports: [DdrButtonSplitComponent, DdrTranslatePipe, NgTemplateOutlet],
})
export class DdrTreeComponent<T> {

  readonly border: InputSignal<boolean> = input<boolean>(false);
  readonly open: InputSignal<boolean> = input<boolean>(false);
  readonly canClick: InputSignal<boolean> = input<boolean>(true);
  readonly showIconArrow: InputSignal<boolean> = input<boolean>(true);
  readonly actionsOnlyLeafs: InputSignal<boolean> = input<boolean>(false);
  readonly nodes: InputSignal<DdrTreeNode<T>[]> = input<DdrTreeNode<T>[]>([]);
  readonly transparent: InputSignal<boolean> = input<boolean>(false);

  readonly templateNodeOutside: Signal<TemplateRef<any> | null | undefined> = contentChild<TemplateRef<any> | null | undefined>('templateNode');

  // Translations
  readonly labelNoData: InputSignal<string | undefined> = input<string | undefined>();

  readonly selectAction: OutputEmitterRef<DdrAction<T>> = output<DdrAction<T>>();
  readonly clickNode: OutputEmitterRef<T> = output<T>();

  constructor() {
    effect(() => {
      this.setOpenRecursive(this.nodes(), this.open());
    });
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
      this.clickNode.emit(node.data!);
      if (node.children && node.children.length > 0) {
        this.openNode(node);
      }
    }
  }

  onSendData(nodeData: T) {
    this.clickNode.emit(nodeData);
  }
}
