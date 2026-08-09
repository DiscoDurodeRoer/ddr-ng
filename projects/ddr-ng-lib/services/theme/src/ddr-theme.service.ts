import { inject, PLATFORM_ID, Renderer2, RendererFactory2, Service } from '@angular/core';
import { DdrTheme } from 'ddr-ng/types';
import { DdrConstantsService } from 'ddr-ng/constants';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Service()
export class DdrThemeService {

  private readonly rendererFactory = inject(RendererFactory2);
  private readonly renderer: Renderer2 = this.rendererFactory.createRenderer(null, null);
  private readonly constants: DdrConstantsService = inject(DdrConstantsService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private theme!: DdrTheme;
  private themes: DdrTheme[] = [];
  private isBrowser: boolean;

  constructor() {
    this.themes = this.constants.THEMES;
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const bodyClasses = Array.from(this.document.body.classList);
      const theme = bodyClasses.find(cls => this.themes.includes(cls as DdrTheme)) ?? null;
      if (theme) {
        this.theme = theme as DdrTheme;
      }
    }
  }

  setTheme(theme: DdrTheme): void {
    if (this.isBrowser) {
      const body = this.document.body;
      this.themes.forEach(theme => this.renderer.removeClass(body, theme));
      this.renderer.addClass(body, theme);
      this.theme = theme;
    }
  }

  getTheme() {
    return this.theme;
  }
}
