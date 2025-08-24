import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { DdrTreeNode } from './bean/ddr-tree-node';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrButtonSplitComponent } from '../ddr-button-split/ddr-button-split.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-tree',
  templateUrl: './ddr-tree.component.html',
  styleUrls: ['./ddr-tree.component.scss'],
  standalone: true,
  imports: [
    DdrButtonSplitComponent,
    DdrTranslatePipe,
    NgClass,
    NgTemplateOutlet
  ]
})
export class DdrTreeComponent<T> implements OnChanges {

  @Input() border: boolean = false;
  @Input() open: boolean = false;
  @Input() canClick: boolean = true;
  @Input() actionsOnlyLeafs: boolean = false;
  @Input() nodes: DdrTreeNode<T>[] = [];
  @Input() transparent: boolean = false;

  @ContentChild("templateNode", { static: false }) templateNodeOutside!: TemplateRef<any> | null;

  // Translations
  @Input() labelNoData?: string;

  @Output() selectAction: EventEmitter<DdrAction<T>> = new EventEmitter<DdrAction<T>>();
  @Output() clickNode: EventEmitter<T> = new EventEmitter<T>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['nodes']) {
        this.nodes = [...this.nodes]
      }
      if (changes['open']) {
        this.setOpenRecursive(this.nodes, this.open)
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
    if (this.canClick) {
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
