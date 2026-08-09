import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideDdr } from 'ddr-ng/providers/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })),
    provideAnimations(),
    provideDdr({
      theme: {
        name: 'ddr-blue'
      },
      translate: {
        path: `${environment.urlData}/i18n/`,
        language: 'en'
      }
    })
  ]
}; 
