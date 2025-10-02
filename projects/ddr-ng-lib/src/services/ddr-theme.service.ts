import { inject, Injectable, PLATFORM_ID, Renderer2 } from '@angular/core';
import { DdrTheme } from '../types/types';
import { THEMES } from '../constants/constants-ddr';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DdrThemeService {

  private readonly renderer: Renderer2 = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);

  private theme!: DdrTheme;
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const bodyClasses = Array.from(this.document.body.classList);
      const theme = bodyClasses.find(cls => THEMES.includes(cls as DdrTheme)) ?? null;
      if (theme) {
        this.theme = theme as DdrTheme;
      }
    }
  }

  setTheme(theme: DdrTheme): void {
    if (this.isBrowser) {
      const body = this.document.body;
      THEMES.forEach(theme => this.renderer.removeClass(body, theme));
      this.renderer.addClass(body, theme);
      this.theme = theme;
    }
  }

  getTheme() {
    return this.theme;
  }
}
