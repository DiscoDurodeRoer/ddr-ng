import { Component, inject } from '@angular/core';
import { menuItems } from '../../menu-items/menu-items';
import { Router, RouterLink } from '@angular/router';
import { DdrTreeComponent } from 'ddr-ng';

@Component({
    selector: 'app-menu',
    imports: [
        DdrTreeComponent
    ],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {

  private router: Router = inject(Router);

  public menuItems = menuItems

  goTo(data: any){
    if(data){
      this.router.navigate([data.route])
    }
  }

}
