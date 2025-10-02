import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DdrAction, DdrBadgePillComponent, DdrButtonComponent, DdrCardComponent, DdrDetailComponent, DdrDetailService, DdrDropdownComponent, DdrInputComponent, DdrModalComponent, DdrModalService, DdrNoDataComponent, DdrSelectItem, DdrButtonSplitComponent, DdrTheme, DdrThemeService, DdrTranslatePipe, DdrTranslateService } from 'ddr-ng';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';
import { MenuComponent } from '../menu/menu.component';
import { ItemSearch } from './bean/item-search';
import { DataService } from '../../services/data.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    DdrDropdownComponent,
    DdrButtonComponent,
    DdrDetailComponent,
    DdrBadgePillComponent,
    DdrButtonSplitComponent,
    DdrModalComponent,
    DdrInputComponent,
    DdrCardComponent,
    DdrNoDataComponent,
    DdrTranslatePipe,
    FormsModule,
    MenuComponent
  ],
  providers: [
    DdrThemeService,
    DdrDetailService,
    DdrModalService
  ],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  private router: Router = inject(Router);
  private themeService: DdrThemeService = inject(DdrThemeService);
  private ddrDetailService: DdrDetailService = inject(DdrDetailService);
  private ddrModalService: DdrModalService = inject(DdrModalService);
  private ddrTranslateService: DdrTranslateService = inject(DdrTranslateService);
  private dataService: DataService = inject(DataService);

  public themes: DdrAction<DdrTheme>[] = [
    {
      label: 'Blue',
      item: 'ddr-blue'
    },
    {
      label: 'Dark',
      item: 'ddr-dark'
    },
    {
      label: 'Purple',
      item: 'ddr-purple'
    }
  ];
  public themeActual: DdrTheme = 'ddr-blue';

  public version: string = '18.0.1';
  public versions: DdrSelectItem<string>[] = [];
  public components: DdrSelectItem<ItemSearch>[] = []
  public search: string = '';
  public searchFocus: boolean = false;

  public languages: DdrAction<string>[] = [];

  public buttons: DdrAction<string>[] = [
    {
      label: 'header.get.started',
      icon: 'bi bi-rocket-takeoff',
      value: 'get-started'
    },
    {
      label: 'header.github',
      icon: 'bi bi-github',
      value: 'github'
    },
    {
      label: 'header.discord',
      icon: 'bi bi-discord',
      value: 'discord'
    },
    {
      label: 'header.themes',
      icon: 'bi bi-palette',
      value: 'themes'
    },
    {
      label: 'header.translate',
      icon: 'bi bi-translate',
      value: 'translate'
    },
    {
      label: 'header.changelog',
      icon: 'bi bi-filetype-md',
      value: 'changelog'
    }
  ]

  public MENU_DETAIL: string = 'menu-detail'
  public MODAL_SEARCH: string = 'modal-search'

  async ngOnInit() {
    this.versions = await this.dataService.getVersions() as DdrSelectItem<string>[];
    this.languages = await this.dataService.getLanguages() as DdrAction<string>[];
  }

  changeTheme(theme: DdrAction<DdrTheme>) {
    this.themeService.setTheme(theme.item!)
    this.themes = this.themes.filter(t => t.item != theme.item);
    this.themes.unshift(theme)
  }

  changeVersion(version: DdrAction<string>) {
    if (this.versions[0].value === version.value) {
      window.open(environment.url, '_blank');
    } else {
      window.open(`${environment.url}/docs/${version.value}`, '_blank');
    }

  }

  goToComponent(component: DdrSelectItem<ItemSearch>) {
    this.router.navigateByUrl(component.value.route!)
    this.ddrModalService.close(this.MODAL_SEARCH)
  }

  changeLanguage(language: DdrAction<string>) {
    this.ddrTranslateService.getData(`${environment.urlData}/i18n/`, language.value!)
    this.languages = this.languages.filter(lang => lang.value != language.value);
    this.languages.unshift(language)
  }

  openMenuMobile() {
    this.ddrDetailService.open(this.MENU_DETAIL)
  }

  closeMenuMobile() {
    this.ddrDetailService.close(this.MENU_DETAIL)
  }

  openModalSearch() {
    this.components = []
    this.search = ''
    this.ddrModalService.open(this.MODAL_SEARCH)
    this.searchFocus = true;
  }

  closeModalSearch() {
    this.searchFocus = false;
  }

  selectAction(action: DdrAction<string>) {
    switch (action.value) {
      case 'github':
        window.open('https://github.com/DiscoDurodeRoer/ddr-ng', '_blank');
        break;
      case 'discord':
        window.open('https://discord.gg/Drgv4JRqxu', '_blank');
        break;
      default:
        this.router.navigate(['/', action.value])
        break;
    }
  }

  searchComponents() {
    if (this.search) {
      this.components = routes
        .filter(route => route.path?.startsWith('ddr-') && route.path?.includes(this.search.toLowerCase()))
        .sort((a, b) => a.path!.localeCompare(b.path!))
        .map(route => ({
          label: route.path!,
          value: {
            route: route.path!,
            type: route.data ? route.data['type'] : ''
          }
        }))
    } else {
      this.components = []
    }

  }

}
