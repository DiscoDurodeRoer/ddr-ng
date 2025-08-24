import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MENU_ITEMS } from './bean/menu-items';
import { Router } from '@angular/router';
import { DdrCardComponent, DdrTreeComponent } from 'ddr-ng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [
    DdrTreeComponent,
    DdrCardComponent
  ]
})
export class MenuComponent implements OnInit {

  private router: Router = inject(Router);

  @Input() transparent: boolean = false;

  @Output() clickItem: EventEmitter<void> = new EventEmitter<void>()

  public menuItems = MENU_ITEMS

  ngOnInit(): void {
    for (const menuItem of this.menuItems) {
      menuItem.children = menuItem.children?.sort((a, b) => a.name.localeCompare(b.name));
      if (menuItem.children) {
        for (const submenuItem of menuItem.children) {
          if (submenuItem.children && submenuItem.children.length > 0) {
            submenuItem.children = submenuItem.children?.sort((a, b) => a.name.localeCompare(b.name));
          }
        }
      }

    }
  }

  goTo(data: any) {
    if (data) {
      this.router.navigate([data.route])
      this.clickItem.emit();
    }
  }

}
