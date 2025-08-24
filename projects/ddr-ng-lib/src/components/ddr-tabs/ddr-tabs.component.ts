import { AfterViewInit, Component, ContentChildren, Output, QueryList, TemplateRef, EventEmitter, ViewEncapsulation, ChangeDetectorRef, inject } from '@angular/core';
import { DdrTabItemComponent } from './ddr-tab-item/ddr-tab-item.component';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-tabs',
  templateUrl: './ddr-tabs.component.html',
  styleUrls: ['./ddr-tabs.component.scss'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    DdrTabItemComponent,
    NgClass,
    NgTemplateOutlet
  ]
})
export class DdrTabsComponent implements AfterViewInit {

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  @ContentChildren(DdrTabItemComponent) tabsItems!: QueryList<DdrTabItemComponent>;
  public contentTemplate: TemplateRef<any> | null = null;

  @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();

  ngAfterViewInit(): void {
    if (this.tabsItems.toArray().length > 0) {
      this.open(this.tabsItems.toArray()[0]);
    }
  }

  open(tab: DdrTabItemComponent) {
    this.tabsItems.toArray().forEach(t => t.open = false);
    let index = this.tabsItems.toArray().findIndex(t => t == tab);
    this.changeTab.emit(index);
    this.contentTemplate = tab.tabContentTemplate;
    tab.open = true;
    this.changeDetectorRef.detectChanges();
  }

  openByIndex(index: number) {
    this.open(this.tabsItems.toArray()[index]);
  }

}
