import { AfterViewInit, Component, TemplateRef, ViewEncapsulation, ChangeDetectorRef, inject, output, contentChildren } from '@angular/core';
import { DdrTabItemComponent } from './ddr-tab-item/ddr-tab-item.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'ddr-tabs',
  templateUrl: './ddr-tabs.component.html',
  styleUrls: ['./ddr-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgTemplateOutlet
]
})
export class DdrTabsComponent implements AfterViewInit {

  private changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  readonly tabsItems = contentChildren(DdrTabItemComponent);
  public contentTemplate: TemplateRef<any> | null = null;

  readonly changeTab = output<number>();

  ngAfterViewInit(): void {
    if (this.tabsItems.length > 0) {
      this.open(this.tabsItems[0]);
    }
  }

  open(tab: DdrTabItemComponent) {
    this.tabsItems.forEach(t => t.open = false);
    let index = this.tabsItems.findIndex(t => t == tab);
    this.changeTab.emit(index);
    this.contentTemplate = tab.tabContentTemplate();
    tab.open = true;
    this.changeDetectorRef.detectChanges();
  }

  openByIndex(index: number) {
    this.open(this.tabsItems[index]);
  }

}
