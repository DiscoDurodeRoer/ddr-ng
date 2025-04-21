import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { DdrTreeNode } from './bean/ddr-tree-node';
import { cloneDeep } from 'lodash-es';
import { DdrAction } from '../../common/ddr-action.model';
import { DdrSplitButtonComponent } from '../ddr-split-button/ddr-split-button.component';
import { DdrTranslatePipe } from '../../pipes/ddr-translate.pipe';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-treeview',
  templateUrl: './ddr-treeview.component.html',
  styleUrls: ['./ddr-treeview.component.scss'],
  standalone: true,
  imports: [
    DdrSplitButtonComponent,
    DdrTranslatePipe,
    NgClass,
    NgTemplateOutlet
  ]
})
export class DdrTreeviewComponent<T> implements OnInit, OnChanges {

  @Input() border: boolean = false;
  @Input() open: boolean = false;
  @Input() canClick: boolean = true;
  @Input() actionsOnlyLeafs: boolean = false;
  @Input() nodes: DdrTreeNode<T>[] = [];
  @Input() templateNodeInput!: TemplateRef<any> | null;

  @ContentChild("templateNode", { static: false }) templateNode!: TemplateRef<any> | null;

  // Translations
  @Input() labelNoData?: string;

  @Output() selectAction: EventEmitter<DdrAction<T>> = new EventEmitter<DdrAction<T>>();
  
  @Output() clickNode: EventEmitter<T> = new EventEmitter<T>();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes){
      if(changes['nodes']){
        this.nodes = cloneDeep(this.nodes);
      }
      if(changes['open']){
        for (const node of this.nodes) {
          node.open = this.open
        }
      }
    }
  }

  ngOnInit() {
    this.nodes = cloneDeep(this.nodes);
  }

  openNode(node: DdrTreeNode<T>) {
    node.open = !node.open;
  }

  onSelectAction(action: DdrAction<T>, node: DdrTreeNode<T>) {
    action.item = node.data;
    this.selectAction.emit(action);
  }

  onClickNode(node: DdrTreeNode<T>){
    this.clickNode.emit(node.data);
  }

}
