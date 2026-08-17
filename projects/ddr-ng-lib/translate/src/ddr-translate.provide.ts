import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { DdrTranslateConfig } from "./ddr-translate.config";
import { DdrTranslateService } from "./ddr-translate.service";
import { DDR_TRANSLATE_CONFIG } from "./ddr-translate.constants";

export function provideDdrTranslate(config: DdrTranslateConfig): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: DDR_TRANSLATE_CONFIG,
            useValue: config
        },
        provideAppInitializer(() => {
            const service: DdrTranslateService = inject(DdrTranslateService);
            return service.getData(config.path, config.language);
        }),
    ]);
}