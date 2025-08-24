import { inject, Injectable, Renderer2 } from '@angular/core';
import { DdrTheme } from '../types/types';
import { THEMES } from '../constants/constants-ddr';

@Injectable({
  providedIn: 'root'
})
export class DdrThemeService {

  private renderer: Renderer2 = inject(Renderer2);

  private theme!: DdrTheme;

  constructor() {
    const bodyClasses = Array.from(document.body.classList);
    const theme = bodyClasses.find(cls => THEMES.includes(cls as DdrTheme)) ?? null;
    if (theme) {
      this.theme = theme as DdrTheme;
    }
  }

  setTheme(theme: DdrTheme): void {
    const body = document.body;

    THEMES.forEach(theme => this.renderer.removeClass(body, theme));

    this.renderer.addClass(body, theme);

    this.theme = theme;
  }

  getTheme() {
    return this.theme;
  }
}
