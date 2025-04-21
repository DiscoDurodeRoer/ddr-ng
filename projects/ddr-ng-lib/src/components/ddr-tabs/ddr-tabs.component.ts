import { AfterViewInit, Component, ContentChildren, Output, QueryList, TemplateRef, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DdrTabItemComponent } from './ddr-tab-item/ddr-tab-item.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'ddr-tabs',
    templateUrl: './ddr-tabs.component.html',
    styleUrls: ['./ddr-tabs.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [
        DdrTabItemComponent,
        NgClass,
        NgTemplateOutlet
    ]
})
export class DdrTabsComponent implements AfterViewInit {

  @ContentChildren(DdrTabItemComponent) tabsItems!: QueryList<DdrTabItemComponent>;
  public contentTemplate?: TemplateRef<any>;
  
  @Output() tabIndex: EventEmitter<number> = new EventEmitter<number>();

  ngAfterViewInit(): void {
    if(this.tabsItems.toArray().length > 0){
      setTimeout(() => {
        this.open(this.tabsItems.toArray()[0]);
      }, 100);
    }
  }

  open(tab: DdrTabItemComponent){
    this.tabsItems.toArray().forEach(t => t.selected = false);
    let index = this.tabsItems.toArray().findIndex(t => t == tab);
    this.tabIndex.emit(index);
    setTimeout(() => {
      tab.selected = true;
      this.contentTemplate = tab.contentTemplate;
    }, 100);
  }

  openByIndex(index: number){
    this.open(this.tabsItems.toArray()[index]);
  }

}
