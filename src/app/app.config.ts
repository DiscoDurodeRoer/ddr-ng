import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { DdrTranslateService } from 'ddr-ng';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

export function initTranslationsFactory(translateService: DdrTranslateService) {
  return () => {
    return translateService.getData(`${environment.urlData}/i18n/`, 'en');
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initTranslationsFactory,
      deps: [DdrTranslateService],
      multi: true
    }
  ]
}; 
