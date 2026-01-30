import { AfterViewInit, Component, TemplateRef, ViewEncapsulation, output, contentChildren, Signal, signal, WritableSignal, OutputEmitterRef } from '@angular/core';
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

  readonly tabsItems: Signal<readonly DdrTabItemComponent[]> = contentChildren(DdrTabItemComponent);
  public contentTemplate: WritableSignal<TemplateRef<any> | null | undefined> = signal<null>(null);

  readonly changeTab: OutputEmitterRef<number> = output<number>();

  ngAfterViewInit(): void {
    if (this.tabsItems().length > 0) {
      this.open(this.tabsItems()[0]);
    }
  }

  open(tab: DdrTabItemComponent) {
    this.tabsItems().forEach(t => t.open.set(false));
    let index = this.tabsItems().findIndex(t => t == tab);
    this.changeTab.emit(index);
    this.contentTemplate.set(tab.tabContentTemplate());
    tab.open.set(true);
  }

  openByIndex(index: number) {
    this.open(this.tabsItems()[index]);
  }

}
