import { DdrAction } from "../../../common/ddr-action.model";
export interface DdrTableItem<T> {
    item: T;
    actions?: DdrAction<T>[];
    index?: number;
    selected?: boolean;
}
