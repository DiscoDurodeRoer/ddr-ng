import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DdrButtonComponent, DdrDropdownComponent, DdrSelectItem, DdrTheme } from '@ddr-ng';
import packageJson from '../../../../projects/ddr-ng-lib/package.json';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-header',
    imports: [
        DdrDropdownComponent,
        DdrButtonComponent,
        FormsModule,
        RouterLink
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public themesOptions: DdrSelectItem<DdrTheme>[] = [
    {
      label: 'Blue',
      value: 'ddr-blue'
    },
    {
      label: 'Dark',
      value: 'ddr-dark'
    },
    {
      label: 'Purple',
      value: 'ddr-purple'
    }
  ];
  public themeActual: DdrTheme = 'ddr-blue';
  public version: string = packageJson.version

  changeTheme(theme: string){

  }
}
