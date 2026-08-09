import { DdrAction } from "ddr-ng/models";

export interface DdrTableItem<T> {
    item: T;
    actions?: DdrAction<T>[];
    index?: number;
    selected?: boolean;
}
