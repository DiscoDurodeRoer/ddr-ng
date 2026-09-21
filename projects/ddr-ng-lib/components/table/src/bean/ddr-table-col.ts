import { DdrTableModeSort } from "ddr-ng/types";

export interface DdrTableCol {
    property: string
    label: string
    tooltip?: string
    modeSort?: DdrTableModeSort
    sortable?: boolean
}
