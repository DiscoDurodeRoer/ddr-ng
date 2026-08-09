import {
  Component,
  inject,
  OnInit,
  input,
  output,
} from '@angular/core';
import { MENU_ITEMS } from './bean/menu-items';
import { Router } from '@angular/router';
import { DdrTreeComponent } from 'ddr-ng/components/tree';
import { DdrCardComponent } from 'ddr-ng/components/card';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [
    DdrTreeComponent,
    DdrCardComponent
  ],
})
export class MenuComponent implements OnInit {
  private router: Router = inject(Router);

  readonly transparent = input<boolean>(false);

  readonly clickItem = output<void>();

  public menuItems = MENU_ITEMS;

  ngOnInit(): void {
    for (const menuItem of this.menuItems) {
      menuItem.children = menuItem.children?.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
      if (menuItem.children) {
        for (const submenuItem of menuItem.children) {
          if (submenuItem.children && submenuItem.children.length > 0) {
            submenuItem.children = submenuItem.children?.sort((a, b) =>
              a.name.localeCompare(b.name),
            );
          }
        }
      }
    }
  }

  goTo(data: any) {
    if (data) {
      this.router.navigate([data.route]);
      // TODO: The 'emit' function requires a mandatory void argument
      this.clickItem.emit();
    }
  }
}
