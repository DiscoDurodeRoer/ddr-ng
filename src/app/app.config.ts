import { ApplicationConfig, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DdrTranslateService } from 'ddr-ng';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Funtions
export function translateFactory(provider: DdrTranslateService) {
  return () => provider.getData('/assets/i18n/', 'es');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
    provideAppInitializer(() => {
        const initializerFn = (translateFactory)(inject(DdrTranslateService));
        return initializerFn();
      })
  ]
};
