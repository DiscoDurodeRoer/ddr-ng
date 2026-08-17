import { computed, inject, PLATFORM_ID, Renderer2, RendererFactory2, Service, signal, Signal, WritableSignal } from '@angular/core';
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

  private theme: WritableSignal<DdrTheme | null> = signal<DdrTheme | null>(null);
  private themes: DdrTheme[] = this.constants.THEMES;
  private isBrowser: boolean = isPlatformBrowser(this.platformId);

  public currentTheme: Signal<DdrTheme | null> = computed(() => this.theme() != null ? this.theme() : this.getTheme())

  setTheme(theme: DdrTheme): void {
    if (!this.isBrowser) return;
    const body = this.document.body;
    this.themes.forEach(theme => this.renderer.removeClass(body, theme));
    this.renderer.addClass(body, theme);
    this.theme.set(theme);
  }

  private getTheme() {
    if (!this.isBrowser) return null;

    const body = this.document.body;

    return this.themes.find(theme =>
      body.classList.contains(theme)
    ) ?? null;
  }
}
