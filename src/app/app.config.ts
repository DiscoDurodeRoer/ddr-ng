import { ApplicationConfig, inject, provideAppInitializer } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { DdrTranslateService } from 'ddr-ng';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top', // fuerza scroll al inicio al navegar
      anchorScrolling: 'enabled',       // permite scroll a anclas #id
      
    })),
    provideHttpClient(),
    provideAnimations(),
    provideAppInitializer(() => {
      const translateService = inject(DdrTranslateService);
      return translateService.getData(`${environment.urlData}/i18n/`, 'en');
    }),
  ]
}; 
