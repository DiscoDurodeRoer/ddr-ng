import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { provideDdrTranslate } from "ddr-ng/translate";
import { DdrConfig } from "./ddr.config";
import { provideDdrTheme } from "ddr-ng/services/theme";

export function provideDdr(config?: DdrConfig): EnvironmentProviders {
    return makeEnvironmentProviders([
        ...(config?.translate ? [provideDdrTranslate(config?.translate)] : []),
        ...[provideDdrTheme(config?.theme)],
    ]);
}