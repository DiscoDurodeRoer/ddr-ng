import {
    EnvironmentProviders,
    inject,
    makeEnvironmentProviders,
    provideAppInitializer,
} from '@angular/core';

import { DdrThemeConfig } from './ddr-theme.config';
import { DdrThemeService } from './ddr-theme.service';

export function provideDdrTheme(config?: DdrThemeConfig): EnvironmentProviders {
    return makeEnvironmentProviders([
        provideAppInitializer(() => {
            const service: DdrThemeService = inject(DdrThemeService);
            service.setTheme(config?.name || 'ddr-blue');
        }),
    ]);
}