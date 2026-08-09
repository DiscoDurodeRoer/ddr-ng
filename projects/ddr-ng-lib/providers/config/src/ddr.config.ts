import { DdrThemeConfig } from "ddr-ng/services/theme";
import { DdrTranslateConfig } from "ddr-ng/translate";

export interface DdrConfig {
  translate?: DdrTranslateConfig;
  theme?: DdrThemeConfig;
}