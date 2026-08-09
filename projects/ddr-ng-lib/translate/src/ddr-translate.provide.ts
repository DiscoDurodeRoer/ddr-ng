import { EnvironmentProviders, inject, makeEnvironmentProviders, provideAppInitializer } from "@angular/core";
import { DdrTranslateConfig } from "./ddr-translate.config";
import { DdrTranslateService } from "./ddr-translate.service";

export function provideDdrTranslate(config: DdrTranslateConfig): EnvironmentProviders {
    return makeEnvironmentProviders([
        DdrTranslateService,
        provideAppInitializer(() => {
            const service: DdrTranslateService = inject(DdrTranslateService);
            return service.getData(config.path, config.language);
        }),
    ]);
}